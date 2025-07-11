---
sidebar_position: 4
# This file was auto-generated and should not be edited manually
---

# OpenAI Agents SDK Accounting Agent Example

This example demonstrates how to use the OpenAI Agents SDK with MCP tools for accounting queries.

**📂 [View Source Code](https://github.com/agentiqs/mcp-kit-python/tree/c055a091e5b08a5731d5e0e27afb013cc2ad4b3b/examples/openai_agents_sdk)**

## Features

- **Framework**: OpenAI Agents SDK with `Agent` and `Runner`
- **Model**: GPT-4.1-nano
- **Tracing**: Built-in OpenAI trace monitoring
- **Workflow**: Linear execution through the Runner

## Setup

1. Install dependencies:
```bash
uv sync
```

2. Set up your environment variables (create a `.env` file):
```bash
OPENAI_API_KEY=your_openai_api_key_here
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

## Tracing

This example includes OpenAI tracing for monitoring the agent workflow. After running, you'll see a trace URL in the logs that you can use to monitor the execution on the OpenAI platform, including the LLM mock response generation steps.
