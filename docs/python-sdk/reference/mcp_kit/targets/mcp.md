---
sidebar_label: mcp
title: mcp_kit.targets.mcp
---

## AsyncExitStack

## Any

## Self

## Tool

## EmbeddedResource

## ImageContent

## TextContent

## DictConfig

## http\_streamable\_session

## create\_tools\_from\_config

## Target

## McpTarget

```python
class McpTarget(Target)
```

### name

```python
@property
def name() -> str
```

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

### list\_tools

```python
async def list_tools() -> list[Tool]
```

### call\_tool

```python
async def call_tool(
    name: str,
    arguments: dict[str, Any] | None = None
) -> list[TextContent | ImageContent | EmbeddedResource]
```

### close

```python
async def close() -> None
```

