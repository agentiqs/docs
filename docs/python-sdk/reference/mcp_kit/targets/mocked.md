---
sidebar_label: mocked
title: mcp_kit.targets.mocked
---
<!-- This file was auto-generated and should not be edited manually -->


## logging

## dataclass

## Any

## Content

## Tool

## DictConfig

## OmegaConf

## Self

## create\_response\_generator\_from\_config

## create\_target\_from\_config

## LlmAuthenticationError

## ResponseGenerator

## Target

### logger

## MockConfig

```python
@dataclass
class MockConfig()
```

### response\_generator

## MockedTarget

```python
class MockedTarget(Target)
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

Create MockedTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

MockedTarget instance

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

