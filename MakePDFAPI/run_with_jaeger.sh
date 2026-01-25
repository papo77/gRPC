# 1. Rebuild with updated config
docker build -t makepdf:latest .

# 2. Start Jaeger first
docker run -d --name jaeger \
  -p 16686:16686 \
  -p 14268:14268 \
  -p 4317:4317 \
  jaegertracing/all-in-one:latest

# 3. Run your app with network link
docker run -p 5002:5002 -p 5555:5555 \
  --link jaeger:jaeger \
  -e OpenTelemetry__Otlp__Endpoint=http://jaeger:4317 \
  makepdf:latest

# 4. Check logs for telemetry export
docker logs -f <makepdf_container_id>

# 5. Access Jaeger UI
open http://localhost:16686