# Configuration

MCP Kit uses YAML or JSON configuration files to define proxy behavior, targets, and routing rules.

## Basic Configuration

### Minimal Configuration

```yaml
# config.yaml
targets:
  - id: "my-mcp-server"
    type: "mcp"
    config:
      command: "python"
      args: ["my_server.py"]
```

### Complete Configuration

```yaml
# Full configuration example
version: "1.0"
name: "my-mcp-proxy"

# Global settings
settings:
  timeout: 30
  retries: 3
  log_level: "INFO"

# Target definitions
targets:
  - id: "primary-mcp"
    type: "mcp"
    config:
      command: "python"
      args: ["server.py"]
      
  - id: "backup-api"
    type: "oas"
    config:
      base_url: "https://api.example.com"
      spec_url: "https://api.example.com/openapi.json"
      
  - id: "mock-responses"
    type: "mocked"
    config:
      generator: "random"

# Routing rules
routing:
  - tools: ["get_weather", "get_forecast"]
    target: "primary-mcp"
    
  - tools: ["*"] # fallback
    target: "backup-api"
    
# Response generation
generators:
  - id: "smart-llm"
    type: "llm"
    config:
      model: "gpt-4"
      temperature: 0.7
```

## Configuration Sections

### Targets

Define where requests should be routed:

#### MCP Target
```yaml
targets:
  - id: "my-server"
    type: "mcp"
    config:
      command: "python"
      args: ["path/to/server.py"]
      env:
        API_KEY: "${API_KEY}"
      cwd: "/path/to/server"
```

#### OpenAPI Target
```yaml
targets:
  - id: "rest-api"
    type: "oas"
    config:
      base_url: "https://api.example.com"
      spec_url: "https://api.example.com/openapi.json"
      headers:
        Authorization: "Bearer ${API_TOKEN}"
```

#### Mocked Target
```yaml
targets:
  - id: "testing"
    type: "mocked"
    config:
      generator: "random"
      responses:
        get_user:
          name: "John Doe"
          email: "john@example.com"
```

#### Multiplex Target
```yaml
targets:
  - id: "load-balanced"
    type: "multiplex"
    config:
      strategy: "round_robin" # or "random", "weighted"
      targets: ["server1", "server2", "server3"]
      health_check: true
```

### Routing

Define how tools/methods are routed:

```yaml
routing:
  # Route specific tools
  - tools: ["get_weather", "get_forecast"]
    target: "weather-service"
    
  # Route by pattern
  - tools: ["user_*"]
    target: "user-service"
    
  # Route with conditions
  - tools: ["*"]
    target: "primary"
    conditions:
      - env: "production"
    
  # Fallback
  - tools: ["*"]
    target: "mock"
```

### Generators

Configure response generation:

```yaml
generators:
  - id: "smart-responses"
    type: "llm"
    config:
      provider: "openai"
      model: "gpt-4"
      temperature: 0.7
      max_tokens: 1000
      
  - id: "test-data"
    type: "random"
    config:
      seed: 42
      schemas:
        user:
          name: "faker.name"
          email: "faker.email"
```

## Environment Variables

Use environment variables in configurations:

```yaml
targets:
  - id: "secure-api"
    type: "oas"
    config:
      base_url: "${API_BASE_URL}"
      headers:
        Authorization: "Bearer ${API_TOKEN}"
```

Set variables:
```bash
export API_BASE_URL="https://api.prod.example.com"
export API_TOKEN="your-secret-token"
```

## Configuration Validation

MCP Kit validates configurations on startup:

```python
from mcp_kit import validate_config

# Validate before using
is_valid, errors = validate_config("config.yaml")
if not is_valid:
    print("Configuration errors:", errors)
```

## Examples

See the [examples directory](https://github.com/your-org/mcp-kit-python/tree/main/examples) for real-world configuration examples:

- [Basic MCP Proxy](https://github.com/your-org/mcp-kit-python/blob/main/examples/proxy_configs/mcp_target.yaml)
- [OpenAPI Integration](https://github.com/your-org/mcp-kit-python/blob/main/examples/proxy_configs/oas_target.yaml)  
- [Multi-target Setup](https://github.com/your-org/mcp-kit-python/blob/main/examples/proxy_configs/multiplex_target.yaml)
- [Testing with Mocks](https://github.com/your-org/mcp-kit-python/blob/main/examples/proxy_configs/mocked_random_target.yaml)

## Next Steps

- [Adapters Guide](./adapters.md) - Framework integrations
- [Examples](./examples.md) - Try complete examples
