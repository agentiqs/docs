---
sidebar_label: interfaces
title: mcp_kit.targets.interfaces
---

## abstractmethod

## Any

## Tool

## EmbeddedResource

## ImageContent

## TextContent

## ConfigurableMixin

## Target

```python
class Target(ConfigurableMixin)
```

### name

```python
@property
@abstractmethod
def name() -> str
```

### initialize

```python
@abstractmethod
async def initialize() -> None
```

### list\_tools

```python
@abstractmethod
async def list_tools() -> list[Tool]
```

### call\_tool

```python
@abstractmethod
async def call_tool(
    name: str,
    arguments: dict[str, Any] | None = None
) -> list[TextContent | ImageContent | EmbeddedResource]
```

### close

```python
@abstractmethod
async def close() -> None
```

