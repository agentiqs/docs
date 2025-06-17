---
sidebar_position: 4
# This file was auto-generated and should not be edited manually
---

# OpenAI Agents SDK Accounting Agent Example

**📂 [View Source Code](https://github.com/mynimbus/mcp-kit-python/tree/c245d9c2bfcd2e24a2f3e0679e7f440328feb210/examples/openai_agents_sdk)**
This example demonstrates how to use the OpenAI Agents SDK with MCP tools for accounting queries.

## Features

- **Framework**: OpenAI Agents SDK with `Agent` and `Runner`
- **Model**: GPT-4.1-nano
- **Tracing**: Built-in OpenAI trace monitoring
- **Workflow**: Linear execution through the Runner

## Setup

1. Install dependencies:
```bash
poetry install
```

2. Set up your environment variables (create a `.env` file):
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

## Usage

```bash
poetry run python main.py
```

## Configuration

The `proxy_config.yaml` file defines the mocked Odoo MCP target that provides accounting tools like:
- `get_expenses`
- `get_revenues`

The configuration uses LLM-generated responses for realistic accounting data simulation.

## Tracing

This example includes OpenAI tracing for monitoring the agent workflow. After running, you'll see a trace URL in the logs that you can use to monitor the execution on the OpenAI platform.
