using System.Diagnostics;
using System.Diagnostics.Metrics;
using System.Threading.Channels;
using Google.Protobuf;
using Grpc.Core;

namespace MakePDF.Services;

public class MakePDFService(ILogger<MakePDFService> logger) : MakePDF.MakePDFBase
{
    private static readonly ActivitySource ActivitySource = new("MakePDF");
    private static readonly Meter Meter = new("MakePDF");
    private static readonly Counter<int> PdfGenerationCounter = Meter.CreateCounter<int>("makepdf.pdf_generation.count", "count", "Number of PDF generation requests");
    private static readonly Histogram<double> PdfGenerationDuration = Meter.CreateHistogram<double>("makepdf.pdf_generation.duration", "ms", "Duration of PDF generation requests");
    public override async Task<GeneratePDFReply> GeneratePDF(GeneratePDFRequest request, ServerCallContext context)
    {
        using var activity = ActivitySource.StartActivity("GeneratePDF");
        activity?.SetTag("user.firstName", request.FirstName);
        activity?.SetTag("user.lastName", request.LastName);
        
        using var scope = logger.BeginScope("GeneratePDF for {FirstName} {LastName}", request.FirstName, request.LastName);
        var stopwatch = Stopwatch.StartNew();
    
        byte[]? pdfBytes = null;
        var success = false;
        
        try
        {
            pdfBytes = await Task.Run(() => PDFGenerator.GeneratePDF($"Hello {request.FirstName} {request.LastName}"));
            success = true;
            logger.LogInformation("PDF generation completed in {ElapsedMs}ms", stopwatch.ElapsedMilliseconds);    
        }
        catch (System.Exception ex)
        {            
            activity?.SetStatus(ActivityStatusCode.Error, ex.Message);
            logger.LogError(ex, "PDF generation failed after {ElapsedMs}ms", stopwatch.ElapsedMilliseconds);
        }
        finally
        {
            stopwatch.Stop();
            
            // Record metrics
            PdfGenerationCounter.Add(1, new KeyValuePair<string, object?>("success", success));
            PdfGenerationDuration.Record(stopwatch.ElapsedMilliseconds, 
                new KeyValuePair<string, object?>("success", success));
        }
        
        return new GeneratePDFReply
        {
            //Message = $"Hello {request.FirstName} {request.LastName}"
            Pdf = pdfBytes!=null ? ByteString.CopyFrom(pdfBytes) : null
        };
    }

     // Enhanced bi-directional streaming implementation with channels for better concurrency
    public override async Task StreamPDFs(
        IAsyncStreamReader<GeneratePDFRequest> requestStream,
        IServerStreamWriter<GeneratePDFReply> responseStream,
        ServerCallContext context)
    {
        using var activity = ActivitySource.StartActivity("StreamPDFs");
        
        // Create bounded channel for request processing with backpressure
        var requestChannel = Channel.CreateBounded<GeneratePDFRequest>(new BoundedChannelOptions(100)
        {
            FullMode = BoundedChannelFullMode.Wait,
            SingleReader = false,
            SingleWriter = true
        });

        // Create unbounded channel for responses
        var responseChannel = Channel.CreateUnbounded<GeneratePDFReply>();

        var cts = CancellationTokenSource.CreateLinkedTokenSource(context.CancellationToken);
        var cancellationToken = cts.Token;

        try
        {
            // Task 1: Read requests from stream and write to channel
            var requestReaderTask = Task.Run(async () =>
            {
                try
                {
                    await foreach (var request in requestStream.ReadAllAsync(cancellationToken))
                    {
                        logger.LogInformation("Received streaming request for {FirstName} {LastName}", 
                            request.FirstName, request.LastName);
                        
                        await requestChannel.Writer.WriteAsync(request, cancellationToken);
                    }
                }
                catch (OperationCanceledException)
                {
                    logger.LogInformation("Request reading was cancelled");
                }
                catch (Exception ex)
                {
                    logger.LogError(ex, "Error reading requests from stream");
                }
                finally
                {
                    requestChannel.Writer.Complete();
                    logger.LogInformation("Request channel writer completed");
                }
            });

            // Task 2: Process requests concurrently and write responses to channel
            var processingTask = Task.Run(async () =>
            {
                var parallelOptions = new ParallelOptions
                {
                    MaxDegreeOfParallelism = Environment.ProcessorCount,
                    CancellationToken = cancellationToken
                };

                try
                {
                    await Parallel.ForEachAsync(
                        requestChannel.Reader.ReadAllAsync(cancellationToken), 
                        parallelOptions,
                        async (request, token) =>
                        {
                            await ProcessSingleRequest(request, responseChannel.Writer, token);
                        });
                }
                catch (OperationCanceledException)
                {
                    logger.LogInformation("Request processing was cancelled");
                }
                catch (Exception ex)
                {
                    logger.LogError(ex, "Error processing requests");
                }
                finally
                {
                    responseChannel.Writer.Complete();
                    logger.LogInformation("Response channel writer completed");
                }
            });

            // Task 3: Read responses from channel and write to stream
            var responseWriterTask = Task.Run(async () =>
            {
                try
                {
                    await foreach (var response in responseChannel.Reader.ReadAllAsync(cancellationToken))
                    {
                        await responseStream.WriteAsync(response, cancellationToken);
                        logger.LogDebug("Sent response with {ByteCount} bytes", response.Pdf?.Length ?? 0);
                    }
                }
                catch (OperationCanceledException)
                {
                    logger.LogInformation("Response writing was cancelled");
                }
                catch (Exception ex)
                {
                    logger.LogError(ex, "Error writing responses to stream");
                }
                finally
                {
                    logger.LogInformation("Response writing completed");
                }
            });

            // Wait for all tasks to complete
            await Task.WhenAll(requestReaderTask, processingTask, responseWriterTask);
            
            logger.LogInformation("Streaming operation completed successfully");
        }
        catch (Exception ex)
        {
            activity?.SetStatus(ActivityStatusCode.Error, ex.Message);
            logger.LogError(ex, "Error in streaming operation");
            throw;
        }
    }

    private async Task ProcessSingleRequest(GeneratePDFRequest request, ChannelWriter<GeneratePDFReply> responseWriter, CancellationToken cancellationToken)
    {
        using var activity = ActivitySource.StartActivity("ProcessSingleRequest");
        activity?.SetTag("user.firstName", request.FirstName);
        activity?.SetTag("user.lastName", request.LastName);
        
        var stopwatch = Stopwatch.StartNew();
        var success = false;

        try
        {
            logger.LogDebug("Processing PDF for {FirstName} {LastName}", request.FirstName, request.LastName);
            
            var pdfBytes = await Task.Run(() => PDFGenerator.GeneratePDF($"Hello {request.FirstName} {request.LastName}"), cancellationToken);
            
            var reply = new GeneratePDFReply
            {
                Pdf = pdfBytes != null ? ByteString.CopyFrom(pdfBytes) : null
            };

            await responseWriter.WriteAsync(reply, cancellationToken);
            success = true;
            
            logger.LogDebug("Successfully processed PDF for {FirstName} {LastName} in {ElapsedMs}ms", 
                request.FirstName, request.LastName, stopwatch.ElapsedMilliseconds);
        }
        catch (OperationCanceledException)
        {
            logger.LogInformation("PDF processing cancelled for {FirstName} {LastName}", request.FirstName, request.LastName);
            throw;
        }
        catch (Exception ex)
        {
            activity?.SetStatus(ActivityStatusCode.Error, ex.Message);
            logger.LogError(ex, "Error generating PDF for {FirstName} {LastName}", request.FirstName, request.LastName);
            
            // Optionally send an error response instead of throwing
            // var errorReply = new GeneratePDFReply { Pdf = null };
            // await responseWriter.WriteAsync(errorReply, cancellationToken);
        }
        finally
        {
            stopwatch.Stop();
            
            // Record metrics
            PdfGenerationCounter.Add(1, new KeyValuePair<string, object?>("success", success));
            PdfGenerationDuration.Record(stopwatch.ElapsedMilliseconds, 
                new KeyValuePair<string, object?>("success", success));
        }
    }
}
