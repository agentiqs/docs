---
sidebar_label: patch_mcp
title: mcp_kit.patch_mcp
# This file was auto-generated and should not be edited manually
---

Utility functions for MCP client connections.

## AsyncExitStack

## Any

## ClientSession

## streamablehttp\_client

### http\_streamable\_session

```python
async def http_streamable_session(
        url: str, headers: dict[str, Any] | None
) -> tuple[ClientSession, AsyncExitStack]
```

Create an HTTP streamable MCP client session.

Establishes a connection to an MCP server over HTTP and returns both
the session and the exit stack for proper cleanup.

**Arguments**:

- `url`: URL of the MCP server
- `headers`: Optional HTTP headers to include in requests

**Returns**:

Tuple of (ClientSession, AsyncExitStack) for the connection

