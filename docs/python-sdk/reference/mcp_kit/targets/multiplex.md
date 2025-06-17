---
sidebar_label: multiplex
title: mcp_kit.targets.multiplex
# This file was auto-generated and should not be edited manually
---

Multiplex target implementation for combining multiple MCP targets.

## asyncio

## Any

## ErrorData

## McpError

## Content

## Tool

## DictConfig

## Self

## create\_target\_from\_config

## Target

## MultiplexTarget

```python
class MultiplexTarget(Target)
```

Target that combines multiple targets into a single interface.

This target implementation allows multiple MCP targets to be accessed
through a single interface. Tools from different targets are namespaced
to avoid conflicts.

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

Create MultiplexTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

MultiplexTarget instance

### initialize

```python
async def initialize() -> None
```

Initialize all sub-targets concurrently.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List all tools from all targets with namespace prefixes.

Each tool name is prefixed with the target name to ensure uniqueness
across multiple targets.

**Returns**:

List of all namespaced tools from all targets

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

Call a tool on the appropriate target.

The tool name must be in the format &#x27;target_name.tool_name&#x27; to identify
which target should handle the call.

**Arguments**:

- `name`: Namespaced tool name (target_name.tool_name)
- `arguments`: Arguments to pass to the tool

**Raises**:

- `McpError`: If the tool name is invalid or target not found

**Returns**:

List of content responses from the tool

### close

```python
async def close() -> None
```

Close all sub-targets concurrently.

