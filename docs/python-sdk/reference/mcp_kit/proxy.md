---
sidebar_label: proxy
title: mcp_kit.proxy
---

## logging

## AsyncIterator

## Iterable

## asynccontextmanager

## Path

## Any

## Tool

## Server

## Content

## OmegaConf

## Self

## ClientSessionAdapter

## LangGraphMultiServerMCPClient

## OpenAIMCPServerAdapter

## create\_target\_from\_config

## Target

### logger

## ProxyMCP

```python
class ProxyMCP()
```

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

### as\_client\_session\_adapter

```python
@asynccontextmanager
async def as_client_session_adapter() -> AsyncIterator
```

### as\_openai\_agents\_mcp\_server

```python
@asynccontextmanager
async def as_openai_agents_mcp_server() -> AsyncIterator
```

Convert the target to an OpenAI Agents MCP server.

### as\_official\_mcp\_server

```python
@asynccontextmanager
async def as_official_mcp_server() -> AsyncIterator[Server]
```

### as\_langgraph\_multi\_server\_mcp\_client

```python
def as_langgraph_multi_server_mcp_client()
```

Convert the target to a LangGraph-compatible multi-server MCP client.
This provides an interface similar to MultiServerMCPClient from langchain-mcp-adapters.

