---
sidebar_position: 2
# This file was auto-generated and should not be edited manually
---

# Installation

## Requirements

- Python 3.8 or higher
- pip or poetry for package management

## Install from PyPI

```bash
pip install mcp-kit
```

## Install from Source

```bash
git clone https://github.com/your-org/mcp-kit-python.git
cd mcp-kit-python
pip install -e .
```

## Verify Installation

```python
import mcp_kit
print(mcp_kit.__version__)
```

## Optional Dependencies

### Framework Adapters

For OpenAI integration:
```bash
pip install mcp-kit[openai]
```

For LangGraph integration:
```bash
pip install mcp-kit[langgraph] 
```

For all adapters:
```bash
pip install mcp-kit[all]
```

### Development Setup

For contributing to MCP Kit:

```bash
git clone https://github.com/your-org/mcp-kit-python.git
cd mcp-kit-python
poetry install --with dev,test,docs
```

## Environment Setup

### Configuration Directory

MCP Kit looks for configuration files in these locations:

1. Current working directory
2. `~/.mcp-kit/`
3. `/etc/mcp-kit/`

Create your configuration directory:

```bash
mkdir -p ~/.mcp-kit
```

### Environment Variables

Common environment variables:

```bash
export MCP_KIT_CONFIG_PATH="~/.mcp-kit"
export MCP_KIT_DEBUG=true
export MCP_KIT_LOG_LEVEL=INFO
```

## Next Steps

- [Configuration Guide](./configuration.md) - Set up your first proxy
- [Quick Start Examples](./examples.md) - Try it out
