---
sidebar_position: 3
# This file was auto-generated and should not be edited manually
---

# MCP Client Session Example

**📂 [View Source Code](https://github.com/mynimbus/mcp-kit-python/tree/3a205ee7669b8dfcad395c00ab622fb8bdaa5839/examples/mcp_client_session)**
This example demonstrates how to use the generic MCP Client Session adapter for connecting to MCP servers.

## Features

- **Framework**: Generic `ClientSessionAdapter` from mcp-kit
- **Connection**: Direct MCP server communication
- **Flexibility**: Works with any MCP server implementation
- **Async Support**: Full asynchronous operation

## Setup

1. Install dependencies:
```bash
poetry install
```

2. Set up your environment variables (create a `.env` file):
```bash
# No API keys needed for this example - uses mocked data
```

## Usage

```bash
poetry run python main.py
```

## Configuration

The `proxy_config.yaml` file defines a mocked Odoo MCP target that provides accounting tools like:
- `get_expenses` - Retrieve expense records
- `get_revenues` - Retrieve revenue records  
- `get_account_balance` - Get account balances

This example showcases the raw MCP protocol interaction through the client session adapter.