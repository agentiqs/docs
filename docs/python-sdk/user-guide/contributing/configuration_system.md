---
sidebar_position: 2
# This file was auto-generated and should not be edited manually
---

# ProxyMCP Configuration System

This document describes how to use the `ProxyMCP.from_config()` factory method to create ProxyMCP instances from configuration files.

## Overview

The configuration system uses a clean, modular architecture where each target type is responsible for creating itself from configuration. The factory method supports creating ProxyMCP instances with any type of target currently supported in `src/mcp_kit/targets`:

- **MCP Target**: Connect to existing MCP servers
- **OAS Target**: Create MCP interfaces for OpenAPI specifications
- **Mocked Target**: Wrap any target with mock response generation
- **Multiplex Target**: Combine multiple targets into one

## Architecture

The system uses a two-layer factory pattern:

1. **ProxyMCP.from_config()** - High-level factory for creating ProxyMCP instances
2. **Target.from_config()** - Each target type implements its own factory method

This design follows the single responsibility principle, where each target is responsible for understanding its own configuration format.

## Configuration Format

Configuration files can be in YAML or JSON format. The basic structure is:

```yaml
target:
  type: <target_type>
  name: <target_name>
  # ... type-specific configuration
```

## Target Types

### MCP Target

Connect to an existing MCP server over HTTP.

```yaml
target:
  type: mcp
  name: my-mcp-server
  url: http://localhost:8080/mcp  # Optional
  headers:  # Optional
    Authorization: Bearer your-token
    Content-Type: application/json
  tools: []  # Optional - if provided, uses static tools instead of server tools
```

### OAS Target

Create an MCP interface for an OpenAPI specification.

```yaml
target:
  type: oas
  name: petstore-api
  spec_url: https://petstore3.swagger.io/api/v3/openapi.json
```

### Mocked Target

Wrap any other target with mock response generation.

```yaml
target:
  type: mocked
  base_target:
    type: mcp  # Can be any target type
    name: base-server
    url: http://localhost:8080/mcp
  response_generator:  # Optional - defaults to random
    type: random  # or "llm"
    model: openai/gpt-4.1-nano  # Only for LLM generator
```

**Response Generator Types:**
- `random`: Generates random text responses for testing
- `llm`: Uses an LLM to generate realistic mock responses

### Multiplex Target

Combine multiple targets into a single interface.

```yaml
target:
  type: multiplex
  name: combined-servers
  targets:
    - type: mcp
      name: mcp-server-1
      url: http://localhost:8080/mcp
    - type: oas
      name: petstore-api
      spec_url: https://petstore3.swagger.io/api/v3/openapi.json
    - type: mocked
      base_target:
        type: mcp
        name: test-server
        url: http://localhost:9000/mcp
      response_generator:
        type: llm
        model: gpt-4
```

### Using Target Factory Methods Directly

You can also create targets directly using their individual factory methods:

```python
from omegaconf import OmegaConf
from src.mcp_kit.targets.mcp_target import MCPTarget
from src.mcp_kit.targets.oas_target import OAS
from src.mcp_kit.targets.mocked_target import MockedTarget
from src.mcp_kit.targets.multiplex_target import MultiplexTarget

# Create targets directly
config = OmegaConf.load("config.yaml")

# Direct target creation
mcp_target = MCPTarget.from_config(config.target)
oas_target = OAS.from_config(config.target)
mocked_target = MockedTarget.from_config(config.target)
multiplex_target = MultiplexTarget.from_config(config.target)

# Then wrap in ProxyMCP
proxy = ProxyMCP(mcp_target)
```

### Central Factory Function

For dynamic target creation, use the central factory:

```python
from src.mcp_kit.factory import create_target_from_config

# Dynamic target creation based on config type
target = create_target_from_config(config.target)
proxy = ProxyMCP(target)
```

## Usage Examples

### Basic Usage

```python
from src.mcp_kit.proxy import ProxyMCP

# Create from YAML file
proxy = ProxyMCP.from_config("config.yaml")

# Create from JSON file
proxy = ProxyMCP.from_config("config.json")

# Create from pathlib.Path
from pathlib import Path
proxy = ProxyMCP.from_config(Path("config.yaml"))
```

### Using with Context Managers

```python
import asyncio
from src.mcp_kit.proxy import ProxyMCP

async def main():
    proxy = ProxyMCP.from_config("config.yaml")

    # Use as OpenAI Agents MCP server
    async with proxy.as_openai_agents_mcp_server() as server:
        tools = await server.list_tools()
        print(f"Available tools: {[tool.name for tool in tools]}")

    # Use as client session adapter
    async with proxy.as_client_session_adapter() as client:
        result = await client.list_tools()
        print(f"Tools: {result.tools}")

    # Use as official MCP server
    async with proxy.as_official_server() as server:
        # Use the server...
        pass

asyncio.run(main())
```

## Example Configuration Files

Example configuration files are available in `examples/proxy_configs/`:

- `mcp_target.yaml` - Simple MCP target
- `oas_target.yaml` - OpenAPI specification target
- `mocked_random_target.yaml` - Mocked target with random responses
- `mocked_llm_target.yaml` - Mocked target with LLM responses
- `multiplex_target.yaml` - Multiplex target combining multiple servers
- `mcp_target.json` - JSON format example

## Error Handling

The factory method will raise `ValueError` for:
- Unknown target types
- Unknown response generator types
- Missing required configuration fields

## Testing

Unit tests are available for both the high-level ProxyMCP factory and individual target factories:

**ProxyMCP factory tests:**
```bash
pytest tests/test_proxy_config.py::TestProxyMCPFromConfig -v
```

**Individual target factory tests:**
```bash
pytest tests/test_target_from_config.py::TestTargetFromConfig -v
```

**Run all configuration tests:**
```bash
pytest tests/test_proxy_config.py tests/test_target_from_config.py -v
```

The test suite covers:
- All target types and their factory methods
- Error handling for invalid configurations
- Nested target configurations (e.g., mocked targets with mocked base targets)
- Both YAML and JSON configuration formats
- Edge cases like minimal configurations and default values

## Future Enhancements

The configuration system is designed to be easily extensible for future features like:
- Multiple proxy instances from a single configuration file
- Environment variable substitution
- Configuration validation schemas
- Dynamic configuration reloading
