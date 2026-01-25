using Google.Protobuf;
using Grpc.Core;
using MakePDF;
namespace MakePDF.Services;

public class MakePDFService(ILogger<MakePDFService> logger) : MakePDF.MakePDFBase
{
    public override Task<GeneratePDFReply> GeneratePDF(GeneratePDFRequest request, ServerCallContext context)
    {
        logger.LogInformation("The message is received from {FirstName} {LastName}", request.FirstName, request.LastName);

        return Task.FromResult(new GeneratePDFReply
        {
            //Message = $"Hello {request.FirstName} {request.LastName}"
            Pdf = ByteString.CopyFrom(PDFGenerator.GeneratePDF($"Hello {request.FirstName} {request.LastName}"))
        });
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
                var pdfData = PDFGenerator.GeneratePDF($"Hello {request.FirstName} {request.LastName}");
                var reply = new GeneratePDFReply
                {
                    Pdf = ByteString.CopyFrom(pdfData)
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
