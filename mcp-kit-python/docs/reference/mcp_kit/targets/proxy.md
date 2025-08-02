---
sidebar_label: proxy
title: mcp_kit.targets.proxy
# This file was auto-generated and should not be edited manually
---

Proxy target implementation for adding custom behavior before forwarding requests.

## CallToolHandler

### default\_call\_tool\_dispatch

```python
def default_call_tool_dispatch(
        name: str, arguments: dict[str, Any] | None,
        call_next: CallToolHandler) -> Awaitable[list[Content]]
```

Default call tool dispatch function.

It is just a passthrough, forwarding the call to the next handler in the chain.

**Arguments**:

- `name`: Name of the tool to call
- `arguments`: Arguments to pass to the tool
- `call_next`: The next handler to call in the chain

**Returns**:

Awaitable iterable of Content responses

## ProxyTarget

```python
class ProxyTarget(Target)
```

Target implementation for proxying call tool requests.

This target runs as a proxy target that can run custom code before forwarding requests to an underlying target.

### \_\_init\_\_

```python
def __init__(
        target: Target,
        call_tool_dispatch: CallToolDispatch = default_call_tool_dispatch
) -> None
```

Initialize the Proxy target.

**Arguments**:

- `target`: The underlying target to proxy requests to
- `call_tool_dispatch`: Optional custom dispatch function for tool calls

### name

```python
@property
def name() -> str
```

Get the target name.

**Returns**:

The target name

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create ProxyTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

ProxyTarget instance

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

Call a tool on the underlying target through our dispatch.

**Arguments**:

- `name`: Name of the tool to call
- `arguments`: Arguments to pass to the tool

**Returns**:

List of content responses from the tool

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

Get a specific prompt by name with optional arguments.

**Arguments**:

- `name`: Name of the prompt to get
- `arguments`: Arguments to pass to the prompt

**Returns**:

Prompt result with messages

### close

```python
async def close() -> None
```

Close the base target.

