using Google.Protobuf.WellKnownTypes;

var builder = DistributedApplication.CreateBuilder(args);

// Add observability infrastructure (optional)
// var jaeger = builder.AddContainer("jaeger", "jaegertracing/all-in-one")
//     .WithHttpEndpoint(port: 16686, targetPort: 16686, name: "jaeger-ui")
//     .WithEndpoint(port: 14268, targetPort: 14268, name: "jaeger-otlp-http");

var apiService = builder.AddProject<Projects.MakePDF>("MakePDF-API", launchProfileName:"http")
                    .WithEndpoint("https", endpoint => endpoint.IsProxied = false)
                    .WithEndpoint("http", endpoint => endpoint.IsProxied = false);

// Uncomment to connect to Jaeger
// .WithEnvironment("OTEL_EXPORTER_OTLP_ENDPOINT", jaeger.GetEndpoint("jaeger-otlp-http"));

builder.Build().Run();
