---
sidebar_label: openai
title: mcp_kit.adapters.openai
---
<!-- This file was auto-generated and should not be edited manually -->


## logging

## Any

## Tool

## CallToolResult

## TextContent

## Target

### logger

## OpenAIMCPServerAdapter

```python
class OpenAIMCPServerAdapter()
```

### connect

```python
async def connect()
```

Connect to the server. For example, this might mean spawning a subprocess or
opening a network connection. The server is expected to remain connected until
`cleanup()` is called.

### name

```python
@property
def name() -> str
```

A readable name for the server.

### cleanup

```python
async def cleanup()
```

Cleanup the server. For example, this might mean closing a subprocess or
closing a network connection.

### list\_tools

```python
async def list_tools() -> list[Tool]
```

List the tools available on the server.

### call\_tool

```python
async def call_tool(tool_name: str,
                    arguments: dict[str, Any] | None) -> CallToolResult
```

Invoke a tool on the server.

