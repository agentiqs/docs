---
sidebar_label: oas
title: mcp_kit.targets.oas
# This file was auto-generated and should not be edited manually
---

OpenAPI Specification (OAS) target implementation.

## OasTarget

```python
class OasTarget(Target)
```

Target implementation for OpenAPI Specification (OAS) endpoints.

This target creates MCP tools from OpenAPI specifications, allowing
interaction with REST APIs through the MCP protocol.

### \_\_init\_\_

```python
def __init__(name: str, spec_url: str) -> None
```

Initialize the OAS target.

**Arguments**:

- `name`: Name of the target
- `spec_url`: URL of the OpenAPI specification

### name

```python
@property
def name() -> str
```

Get the target name.

**Returns**:

The target name

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create OasTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

OasTarget instance

### initialize

```python
async def initialize() -> None
```

Initialize the target by creating MCP server from OpenAPI spec.

Downloads and parses the OpenAPI specification to create the underlying
FastMCP server with tools for each API endpoint.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List all tools generated from the OpenAPI specification.

**Raises**:

- `ValueError`: If the target is not initialized

**Returns**:

List of tools corresponding to API endpoints

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

Call an API endpoint through the corresponding MCP tool.

**Arguments**:

- `name`: Name of the tool/endpoint to call
- `arguments`: Arguments to pass to the API endpoint

**Raises**:

- `ValueError`: If the target is not initialized

**Returns**:

List of content responses from the API call

### close

```python
async def close() -> None
```

Clean up the target by releasing the FastMCP server.

### run\_async

```python
async def run_async(oas_name: str, spec_url: str, port: int) -> None
```

Run the OAS target as a standalone HTTP server.

**Arguments**:

- `oas_name`: Name for the OAS instance
- `spec_url`: URL of the OpenAPI specification
- `port`: Port to run the server on

**Raises**:

- `ValueError`: If the target fails to initialize

### run\_sync

```python
@click.command()
@click.option(
    "--oas-name",
    default="oas",
    help="Name of the OAS instance (default: oas)",
)
@click.option("--spec-url", required=True, help="OpenAPI spec URL")
@click.option(
    "--port",
    default=9000,
    show_default=True,
    help="Port to run the server on",
)
def run_sync(oas_name: str, spec_url: str, port: int) -> None
```

Synchronous wrapper for running the OAS target server.

**Arguments**:

- `oas_name`: Name for the OAS instance
- `spec_url`: URL of the OpenAPI specification
- `port`: Port to run the server on

