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

- `response_generator`: The generator to use for creating mock responses

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

Instead of calling the actual tool, this method generates a synthetic
response using the configured response generator.

**Arguments**:

- `name`: Name of the tool to mock
- `arguments`: Arguments that would be passed to the tool

**Raises**:

- `ValueError`: If the specified tool is not found
- `LlmAuthenticationError`: If LLM authentication fails (exits program)

**Returns**:

Generated mock content response

### close

```python
async def close() -> None
```

Close the base target.

