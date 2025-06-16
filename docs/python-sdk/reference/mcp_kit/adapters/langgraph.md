---
sidebar_label: langgraph
title: mcp_kit.adapters.langgraph
---
<!-- This file was auto-generated and should not be edited manually -->


## asynccontextmanager

## ClientSessionAdapter

## Target

## LangGraphMultiServerMCPClient

```python
class LangGraphMultiServerMCPClient()
```

### session

```python
@asynccontextmanager
async def session(server_name: str, *, auto_initialize: bool = True)
```

Create a new client session for the specified server.

### get\_tools

```python
async def get_tools(*, server_name: str | None = None) -> list
```

Get LangChain tools from the MCP server.

