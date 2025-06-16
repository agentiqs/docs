---
sidebar_label: llm
title: mcp_kit.generators.llm
---

## Any

## Self

## Tool

## EmbeddedResource

## ImageContent

## TextContent

## DictConfig

## Agent

## Runner

## ResponseGenerator

## LlmResponseGenerator

```python
class LlmResponseGenerator(ResponseGenerator)
```

Generate mock responses using an LLM agent.

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create LLMResponseGenerator from configuration.

**Arguments**:

- `config`: Configuration data with optional &#x27;model&#x27; parameter

**Returns**:

LLMResponseGenerator instance

### generate

```python
async def generate(
    target_name: str,
    tool: Tool,
    arguments: dict[str, Any] | None = None
) -> list[TextContent | ImageContent | EmbeddedResource]
```

Generate mock response using the LLM agent.

