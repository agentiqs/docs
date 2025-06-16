---
sidebar_label: mcp
title: mcp_kit.targets.mcp
---
<!-- This file was auto-generated and should not be edited manually -->


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
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

### close

```python
async def close() -> None
```

