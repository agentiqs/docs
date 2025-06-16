---
sidebar_label: client_session
title: mcp_kit.adapters.client_session
---

## logging

## Any

## CallToolResult

## ListToolsResult

## TextContent

## Target

### logger

## ClientSessionAdapter

```python
class ClientSessionAdapter()
```

Adapter class to convert the target MCP server to a ClientSession.

### list\_tools

```python
async def list_tools() -> ListToolsResult
```

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> CallToolResult
```

