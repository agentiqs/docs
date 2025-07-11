---
sidebar_label: proxy
title: mcp_kit.proxy
# This file was auto-generated and should not be edited manually
---

Main proxy class for MCP Kit providing multiple adapter interfaces.

## ProxyMCP

```python
class ProxyMCP()
```

Main proxy class for MCP Kit that provides multiple adapter interfaces.

This class serves as the central entry point for MCP Kit, allowing a single
MCP target to be exposed through various interfaces including client sessions,
OpenAI Agents SDK, official MCP servers, and LangGraph compatibility.

### \_\_init\_\_

```python
def __init__(target: Target) -> None
```

Initialize the ProxyMCP with a target MCP server.

**Arguments**:

- `target`: The target MCP server to proxy requests to

### from\_config

```python
@classmethod
def from_config(cls, config_file: str | Path) -> Self
```

Factory method to create ProxyMCP from a configuration file.

**Arguments**:

- `config_file`: Path to the configuration file (YAML or JSON)

**Returns**:

ProxyMCP instance

### client\_session\_adapter

```python
@asynccontextmanager
async def client_session_adapter() -> AsyncIterator[Any]
```

Create a client session adapter for the target.

Provides a context manager that yields a ClientSessionAdapter for
interacting with the target as a client session.

:yield: ClientSessionAdapter for the target

### openai\_agents\_mcp\_server

```python
@asynccontextmanager
async def openai_agents_mcp_server() -> AsyncIterator[Any]
```

Convert the target to an OpenAI Agents MCP server.

Provides a context manager that yields an OpenAI Agents SDK compatible
adapter for the target.

:yield: OpenAIMCPServerAdapter for the target

### official\_mcp\_server

```python
@asynccontextmanager
async def official_mcp_server() -> AsyncIterator[Server[Any]]
```

Convert the target to an official MCP server.

Creates a standard MCP Server instance that wraps the target,
allowing it to be used with official MCP tooling.

:yield: Official MCP Server instance wrapping the target

### langgraph\_multi\_server\_mcp\_client

```python
def langgraph_multi_server_mcp_client() -> Any
```

Convert the target to a LangGraph-compatible multi-server MCP client.

This provides an interface similar to MultiServerMCPClient from langchain-mcp-adapters
for use with LangGraph workflows.

**Returns**:

LangGraphMultiServerMCPClient adapter for the target

