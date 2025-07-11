---
sidebar_label: mocked
title: mcp_kit.targets.mocked
# This file was auto-generated and should not be edited manually
---

Mocked target implementation that generates fake responses.

## MockConfig

```python
@dataclass
class MockConfig()
```

Configuration for mocked target behavior.

**Arguments**:

- `tool_response_generator`: The generator to use for creating mock responses
- `prompt_engine`: The engine to use for creating mock prompt responses

## MockedTarget

```python
class MockedTarget(Target)
```

Target that wraps another target and generates mock responses.

This target implementation intercepts tool calls and generates synthetic
responses instead of calling the actual target. Useful for testing and
development scenarios.

### \_\_init\_\_

```python
def __init__(target: Target, mock_config: MockConfig) -> None
```

Initialize the mocked target.

**Arguments**:

- `target`: The base target to wrap
- `mock_config`: Configuration for mock behavior

### name

```python
@property
def name() -> str
```

Get the target name with &#x27;_mocked&#x27; suffix.

**Returns**:

The target name with mocked indicator

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

Initialize the base target.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List tools from the base target.

**Returns**:

List of available tools from the base target

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

Generate a mock response for the specified tool.

If a tool_response_generator is configured, generates a synthetic response.
Otherwise, delegates to the base target.

**Arguments**:

- `name`: Name of the tool to mock
- `arguments`: Arguments that would be passed to the tool

**Raises**:

- `ValueError`: If the specified tool is not found
- `LlmAuthenticationError`: If LLM authentication fails (exits program)

**Returns**:

Generated mock content response or response from base target

### close

```python
async def close() -> None
```

Close the base target.

### list\_prompts

```python
async def list_prompts() -> list[Prompt]
```

List prompts from the base target.

**Returns**:

List of available prompts from the base target

### get\_prompt

```python
async def get_prompt(name: str,
                     arguments: dict[str, str] | None = None
                     ) -> GetPromptResult
```

Generate a mock response for the specified prompt.

If a prompt_engine is configured, generates a synthetic response.
Otherwise, delegates to the base target.

**Arguments**:

- `name`: Name of the prompt to get
- `arguments`: Arguments to pass to the prompt

**Returns**:

Prompt result (generated or from base target)

