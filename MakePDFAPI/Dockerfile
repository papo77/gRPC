FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 5002 5555

ENV ASPNETCORE_ENVIRONMENT=Docker

# Create cert directory and set permissions
USER root
RUN mkdir -p /app/cert
USER app
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["MakePDF.csproj", "./"]
RUN dotnet restore "MakePDF.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "MakePDF.csproj" -c $configuration -o /app/build

FROM build AS publish
ARG configuration=Release
RUN dotnet publish "MakePDF.csproj" -c $configuration -o /app/publish /p:UseAppHost=false /p:PublishAot=false

FROM base AS final
WORKDIR /app
# Copy certificates to container
COPY cert/ /app/cert/
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MakePDF.dll"]
