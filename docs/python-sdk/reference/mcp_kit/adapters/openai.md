---
sidebar_label: openai
title: mcp_kit.adapters.openai
# This file was auto-generated and should not be edited manually
---

OpenAI Agents SDK adapter for MCP targets.

### logger

## OpenAIMCPServerAdapter

```python
class OpenAIMCPServerAdapter()
```

Adapter class to convert MCP targets to OpenAI Agents SDK compatible interface.

This adapter provides compatibility with OpenAI&#x27;s Agents SDK by implementing
the expected interface for MCP server connections.

### connect

```python
async def connect()
```

Connect to the server.

This might involve spawning a subprocess or opening a network connection.
The server is expected to remain connected until `cleanup()` is called.

### name

```python
@property
def name() -> str
```

Get a readable name for the server.

**Returns**:

The server name

### cleanup

```python
async def cleanup()
```

Cleanup the server.

This might involve closing a subprocess or closing a network connection.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List the tools available on the server.

**Returns**:

List of available MCP tools

### call\_tool

```python
async def call_tool(tool_name: str,
                    arguments: dict[str, Any] | None) -> CallToolResult
```

Invoke a tool on the server.

**Arguments**:

- `tool_name`: Name of the tool to invoke
- `arguments`: Arguments to pass to the tool

**Returns**:

Result of the tool call with error handling

