---
sidebar_position: 1
# This file was auto-generated and should not be edited manually
---

# Introduction

Welcome to MCP Kit, a powerful Python SDK for building and integrating with Model Context Protocol (MCP) servers and clients.

## What is MCP Kit?

MCP Kit provides a comprehensive set of tools for:

- **Creating MCP Servers**: Build custom MCP servers with ease
- **Client Integration**: Connect to existing MCP servers from your applications  
- **Proxy Configurations**: Set up sophisticated routing and processing pipelines
- **Adapter Support**: Integrate with popular frameworks like OpenAI, LangGraph, and more

## Key Features

### 🔧 **Factory Pattern**
Create MCP components using a clean factory pattern with configuration files.

### 🎯 **Target System**
Flexible target system supporting:
- MCP servers
- OpenAPI/Swagger endpoints  
- Mocked responses for testing
- Multiplexed routing

### 🔌 **Framework Adapters**
Ready-to-use adapters for:
- OpenAI SDK
- LangGraph
- Generic client sessions

### 🎲 **Response Generators**
Built-in generators for:
- LLM-powered responses
- Random/mock data
- Custom generation logic

## Quick Start

```python
from mcp_kit import create_mcp_proxy

# Create a proxy with configuration
proxy = create_mcp_proxy("config.yaml")

# Use with OpenAI
import openai
client = openai.OpenAI()
client.mcp_proxy = proxy
```

## Architecture Overview

MCP Kit follows a modular architecture:

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Client    │───▶│  MCP Proxy   │───▶│   Target    │
│ (Your App)  │    │ (MCP Kit)    │    │ (MCP Server)│
└─────────────┘    └──────────────┘    └─────────────┘
```

## Next Steps

- [Installation Guide](./installation.md) - Get up and running
- [Configuration](./configuration.md) - Learn about proxy configs
- [Adapters](./adapters.md) - Framework integrations  
- [Examples](docs/python-sdk/examples) - Real-world usage examples
- [API Reference](/docs/python-sdk/reference/) - Complete API documentation
