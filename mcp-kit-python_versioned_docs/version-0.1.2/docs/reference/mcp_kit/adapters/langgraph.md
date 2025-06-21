---
sidebar_label: langgraph
title: mcp_kit.adapters.langgraph
# This file was auto-generated and should not be edited manually
---

LangGraph adapter for MCP targets.

## LangGraphMultiServerMCPClient

```python
class LangGraphMultiServerMCPClient()
```

Adapter class for LangGraph compatibility with MCP targets.

This adapter provides an interface similar to MultiServerMCPClient from
langchain-mcp-adapters, allowing MCP targets to be used with LangGraph workflows.

### \_\_init\_\_

```python
def __init__(target: Target)
```

Initialize the LangGraph MCP client adapter.

**Arguments**:

- `target`: The MCP target to adapt for LangGraph use

**Raises**:

- `ImportError`: If langchain_mcp_adapters is not installed

### session

```python
@asynccontextmanager
async def session(server_name: str, *, auto_initialize: bool = True)
```

Create a new client session for the specified server.

**Arguments**:

- `server_name`: Name of the server to connect to
- `auto_initialize`: Whether to automatically initialize the target

**Raises**:

- `ValueError`: If the server name doesn&#x27;t match the target name

**Returns**:

ClientSessionAdapter for the target

### get\_tools

```python
async def get_tools(*, server_name: str | None = None) -> list
```

Get LangChain tools from the MCP server.

Converts MCP tools to LangChain-compatible tools using the langchain_mcp_adapters.

**Arguments**:

- `server_name`: Optional server name to validate against

**Raises**:

- `ValueError`: If the server name doesn&#x27;t match the target name

**Returns**:

List of LangChain tools

