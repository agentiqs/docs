---
sidebar_label: mcp
title: mcp_kit.targets.mcp
# This file was auto-generated and should not be edited manually
---

MCP target implementation for connecting to MCP servers (hosted or with a spec).

## AsyncExitStack

## Any

## Tool

## Content

## DictConfig

## Self

## create\_tools\_from\_config

## http\_streamable\_session

## Target

## McpTarget

```python
class McpTarget(Target)
```

Target implementation for connecting to MCP servers (hosted or with a spec).

This target can connect to remote MCP servers or use predefined tools.
It supports HTTP connections with optional headers and authentication.

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

Create McpTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

McpTarget instance

### initialize

```python
async def initialize() -> None
```

Initialize the target by connecting to the MCP server if URL is provided.

Sets up the HTTP connection to the remote MCP server using the configured
URL and headers.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List all available tools.

Returns predefined tools if available, otherwise queries the remote MCP server.

**Raises**:

- `ValueError`: If no tools are available and MCP is not initialized

**Returns**:

List of available tools

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

Call a tool on the remote MCP server.

**Arguments**:

- `name`: Name of the tool to call
- `arguments`: Arguments to pass to the tool

**Raises**:

- `ValueError`: If MCP client is not initialized

**Returns**:

List of content responses from the tool

### close

```python
async def close() -> None
```

Close the connection to the MCP server.

Cleans up the HTTP connection and releases resources.

