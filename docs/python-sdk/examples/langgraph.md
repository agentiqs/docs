---
sidebar_position: 2
# This file was auto-generated and should not be edited manually
---

# LangGraph Accounting Agent Example

**📂 [View Source Code](https://github.com/mynimbus/mcp-kit-python/tree/50693ced947497044060390361c56cd014e990ab/examples/langgraph)**
This example demonstrates how to use LangGraph's ReAct agent with MCP tools for accounting queries.

## Features

- **Framework**: LangGraph with `create_react_agent`
- **Tools**: MCP tools converted to LangChain tools via `langchain-mcp-adapters`
- **Agent Type**: ReAct (Reasoning and Acting) pattern
- **Model**: ChatOpenAI (GPT-4.1-nano)

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
