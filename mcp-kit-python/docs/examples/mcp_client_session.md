---
sidebar_position: 3
# This file was auto-generated and should not be edited manually
---

# MCP Client Session Example

This example demonstrates how to use the generic MCP Client Session adapter for connecting to MCP servers.

**📂 [View Source Code](https://github.com/agentiqs/mcp-kit-python/tree/c055a091e5b08a5731d5e0e27afb013cc2ad4b3b/examples/mcp_client_session)**

## Features

- **Framework**: Generic `ClientSessionAdapter` from mcp-kit
- **Connection**: Direct MCP server communication
- **Flexibility**: Works with any MCP server implementation
- **Async Support**: Full asynchronous operation

## Setup

1. Install dependencies:
```bash
uv sync
```

2. Set up your environment variables (create a `.env` file):
```bash
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

## Usage

```bash
uv run main.py
```

## Configuration

The `proxy_config.yaml` file defines a mocked Odoo MCP target that provides accounting tools like:
- `get_expenses` - Retrieve expense records
- `get_revenues` - Retrieve revenue records
- `get_account_balance` - Get account balances

The configuration uses LLM-generated responses for realistic accounting data simulation.