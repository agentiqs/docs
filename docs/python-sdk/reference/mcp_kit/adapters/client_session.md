---
sidebar_label: client_session
title: mcp_kit.adapters.client_session
# This file was auto-generated and should not be edited manually
---

Client session adapter for MCP targets.

## ClientSessionAdapter

```python
class ClientSessionAdapter()
```

Adapter class to convert the target MCP server to a ClientSession.

This adapter provides a client session interface for interacting with
MCP targets, wrapping tool calls and error handling.

### list\_tools

```python
async def list_tools() -> ListToolsResult
```

List all available tools from the target.

**Returns**:

Result containing the list of available tools

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> CallToolResult
```

Call a tool on the target with error handling.

**Arguments**:

- `name`: Name of the tool to call
- `arguments`: Arguments to pass to the tool

**Returns**:

Result containing the tool response or error information

