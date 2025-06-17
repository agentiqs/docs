---
sidebar_label: llm
title: mcp_kit.generators.llm
# This file was auto-generated and should not be edited manually
---

## logging

## Any

## litellm

## acompletion

## AuthenticationError

## Choices

## ModelResponse

## Tool

## Content

## TextContent

## DictConfig

## Self

## ResponseGenerator

## LlmAuthenticationError

```python
class LlmAuthenticationError(Exception)
```

Base class for LLM authentication errors.

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
async def generate(target_name: str,
                   tool: Tool,
                   arguments: dict[str, Any] | None = None) -> list[Content]
```

Generate mock response using the LLM agent.

