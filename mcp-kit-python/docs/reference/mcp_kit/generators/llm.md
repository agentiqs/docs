---
sidebar_label: llm
title: mcp_kit.generators.llm
# This file was auto-generated and should not be edited manually
---

LLM-based response generator for realistic mock responses.

## LlmAuthenticationError

```python
class LlmAuthenticationError(Exception)
```

Exception raised when LLM authentication fails.

This exception is raised when the LLM service rejects the authentication
credentials (API key, token, etc.).

## LlmResponseGenerator

```python
class LlmResponseGenerator(ResponseGenerator)
```

Generate mock responses using an LLM agent.

This generator uses a Large Language Model to create realistic mock responses
based on the tool context, making it suitable for testing scenarios that
require believable synthetic data.

### \_\_init\_\_

```python
def __init__(model: str)
```

Initialize the LLM response generator.

**Arguments**:

- `model`: The LLM model identifier to use for generation

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create LLMResponseGenerator from configuration.

**Arguments**:

- `config`: Configuration data with required &#x27;model&#x27; parameter

**Raises**:

- `ValueError`: If model parameter is missing from configuration

**Returns**:

LLMResponseGenerator instance

### generate

```python
async def generate(target_name: str,
                   tool: Tool,
                   arguments: dict[str, Any] | None = None) -> list[Content]
```

Generate mock response using the LLM agent.

Creates a contextual prompt based on the tool information and uses
the configured LLM to generate a realistic response.

**Arguments**:

- `target_name`: Name of the target server
- `tool`: The MCP tool definition
- `arguments`: Arguments passed to the tool

**Raises**:

- `LlmAuthenticationError`: If LLM authentication fails
- `ValueError`: If the LLM response is empty

**Returns**:

List containing generated text content

