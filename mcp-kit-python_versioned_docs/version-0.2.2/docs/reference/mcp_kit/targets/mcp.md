---
sidebar_label: mcp
title: mcp_kit.targets.mcp
# This file was auto-generated and should not be edited manually
---

MCP target implementation for connecting to MCP servers (hosted or with a spec).

## McpTarget

```python
class McpTarget(Target)
```

Target implementation for connecting to MCP servers (hosted or with a spec).

This target can connect to remote MCP servers or use predefined tools.
It supports HTTP connections with optional headers and authentication.

### \_\_init\_\_

```python
def __init__(name: str,
             url: str | None = None,
             headers: dict[str, str] | None = None,
             tools: list[Tool] | None = None,
             prompts: list[Prompt] | None = None) -> None
```

Initialize the MCP target.

**Arguments**:

- `name`: Name of the target
- `url`: Optional URL of the remote MCP server
- `headers`: Optional HTTP headers for server requests
- `tools`: Optional predefined tools to use instead of remote server tools
- `tools`: Optional predefined prompts to use instead of remote server prompts

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

Create McpTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

McpTarget instance

### initialize

```python
async def initialize() -> None
```

Initialize the target by connecting to the MCP server if URL is provided.

Sets up the HTTP connection to the remote MCP server using the configured
URL and headers.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List all available tools.

Returns predefined tools if available, otherwise queries the remote MCP server.

**Raises**:

- `ValueError`: If no tools are available and MCP is not initialized

**Returns**:

List of available tools

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

Call a tool on the remote MCP server.

**Arguments**:

- `name`: Name of the tool to call
- `arguments`: Arguments to pass to the tool

**Raises**:

- `ValueError`: If MCP client is not initialized

**Returns**:

List of content responses from the tool

### list\_prompts

```python
async def list_prompts() -> list[Prompt]
```

List all available prompts.

Returns predefined prompts if available, otherwise queries the remote MCP server.

**Raises**:

- `ValueError`: If no prompts are available and MCP is not initialized

**Returns**:

List of available prompts

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

**Raises**:

- `ValueError`: If MCP client is not initialized

**Returns**:

Prompt result with messages

### close

```python
async def close() -> None
```

Close the connection to the MCP server.

Cleans up the HTTP connection and releases resources.

