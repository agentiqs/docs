---
sidebar_label: random
title: mcp_kit.generators.random
# This file was auto-generated and should not be edited manually
---

Random response generator for testing purposes.

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

This generator creates synthetic responses containing random text,
useful for testing MCP integrations without needing real data sources.

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

Generate a random text response.

**Arguments**:

- `target_name`: Name of the target (unused in random generation)
- `tool`: The MCP tool definition (unused in random generation)
- `arguments`: Tool arguments (unused in random generation)

**Returns**:

List containing a single TextContent with random text

