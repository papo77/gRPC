using System.Diagnostics;
using Google.Protobuf;
using Grpc.Core;

namespace MakePDF.Services;

public class MakePDFService(ILogger<MakePDFService> logger) : MakePDF.MakePDFBase
{
    public override async Task<GeneratePDFReply> GeneratePDF(GeneratePDFRequest request, ServerCallContext context)
    {
        using var activity = logger.BeginScope("GeneratePDF for {FirstName} {LastName}", request.FirstName, request.LastName);
        var stopwatch = Stopwatch.StartNew();
    
        byte[]? pdfBytes = null;
        
        try
        {
            pdfBytes = await Task.Run(() => PDFGenerator.GeneratePDF($"Hello {request.FirstName} {request.LastName}"));
            logger.LogInformation("PDF generation completed in {ElapsedMs}ms", stopwatch.ElapsedMilliseconds);    
        }
        catch (System.Exception ex)
        {            
            logger.LogError(ex, "PDF generation failed after {ElapsedMs}ms", stopwatch.ElapsedMilliseconds);;
        }
        
        return new GeneratePDFReply
        {
            //Message = $"Hello {request.FirstName} {request.LastName}"
            Pdf = pdfBytes!=null ? ByteString.CopyFrom(pdfBytes) : null
        };
    }

     // Bi-directional streaming implementation
    public override async Task StreamPDFs(
        IAsyncStreamReader<GeneratePDFRequest> requestStream,
        IServerStreamWriter<GeneratePDFReply> responseStream,
        ServerCallContext context)
    {
        await foreach (var request in requestStream.ReadAllAsync()) 
        {
            logger.LogInformation("Streaming PDF generation for {FirstName} {LastName}", 
                request.FirstName, request.LastName);

            try
            {
                var pdfBytes = await Task.Run(() => PDFGenerator.GeneratePDF($"Hello {request.FirstName} {request.LastName}"));
                var reply = new GeneratePDFReply
                {
                    Pdf = pdfBytes!=null ? ByteString.CopyFrom(pdfBytes) : null
                };

                await responseStream.WriteAsync(reply);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error generating PDF for {FirstName} {LastName}", 
                    request.FirstName, request.LastName);
            }
        }
    }
}
