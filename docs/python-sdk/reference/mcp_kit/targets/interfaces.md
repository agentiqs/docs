---
sidebar_label: interfaces
title: mcp_kit.targets.interfaces
---

## abstractmethod

## Any

## Tool

## Content

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
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

### close

```python
@abstractmethod
async def close() -> None
```

