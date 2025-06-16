---
sidebar_label: random
title: mcp_kit.generators.random
---

## random

## string

## Any

## Tool

## Content

## TextContent

## DictConfig

## Self

## ResponseGenerator

## RandomResponseGenerator

```python
class RandomResponseGenerator(ResponseGenerator)
```

Generate random text content for testing.

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create RandomResponseGenerator from configuration.

**Arguments**:

- `config`: Configuration data (no parameters needed for random generator)

**Returns**:

RandomResponseGenerator instance

### generate

```python
async def generate(target_name: str,
                   tool: Tool,
                   arguments: dict[str, Any] | None = None) -> list[Content]
```

Generate an MCP call tool response.

