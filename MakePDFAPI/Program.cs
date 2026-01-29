using MakePDF.Services;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace MakePDF;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.AddServiceDefaults();
        
        // Add services to the container.
        builder.Services.AddGrpc(options =>
        {
            options.EnableDetailedErrors = true;
        });

    // Configure Kestrel for better performance
        builder.Services.Configure<KestrelServerOptions>(options =>
        {
            options.Limits.MaxConcurrentConnections = 1000;
            options.Limits.MaxConcurrentUpgradedConnections = 1000;
            options.Limits.RequestHeadersTimeout = TimeSpan.FromSeconds(30);
        });

        var app = builder.Build();        
        app.MapDefaultEndpoints();
        
        // Configure the HTTP request pipeline.
        app.MapGrpcService<MakePDFService>();
        app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

        app.Run();
    }
}
