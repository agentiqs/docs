---
sidebar_position: 3
# This file was auto-generated and should not be edited manually
---

# MCP Client Session Example

**📂 [View Source Code](https://github.com/agentiqs/mcp-kit-python/tree/076c4573759cf11d73789d530e3fc7057ee88ee1/examples/mcp_client_session)**
This example demonstrates how to use the generic MCP Client Session adapter for connecting to MCP servers.

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