using Google.Protobuf.WellKnownTypes;

var builder = DistributedApplication.CreateBuilder(args);
var apiService = builder.AddProject<Projects.MakePDF>("MakePDF-API", launchProfileName:"http")
                    .WithEndpoint("https", endpoint => endpoint.IsProxied = false)
                    .WithEndpoint("http", endpoint => endpoint.IsProxied = false);
builder.Build().Run();
