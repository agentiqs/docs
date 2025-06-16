---
sidebar_label: multiplex
title: mcp_kit.targets.multiplex
---

## asyncio

## Any

## Self

## ErrorData

## McpError

## EmbeddedResource

## ImageContent

## TextContent

## Tool

## DictConfig

## create\_target\_from\_config

## Target

## MultiplexTarget

```python
class MultiplexTarget(Target)
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

Create MultiplexTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

MultiplexTarget instance

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

