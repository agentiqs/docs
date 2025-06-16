# Framework Adapters

MCP Kit provides adapters for popular Python frameworks, making it easy to integrate MCP functionality into existing applications.

## OpenAI SDK Adapter

Integrate MCP Kit with OpenAI's Python SDK for seamless tool calling.

### Quick Start

```python
from mcp_kit.adapters.openai import MCPAdapter
import openai

# Create OpenAI client
client = openai.OpenAI()

# Add MCP adapter
adapter = MCPAdapter("config.yaml")
client = adapter.wrap_client(client)

# Now OpenAI calls can use MCP tools
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "What's the weather like?"}
    ],
    tools=adapter.get_available_tools()
)
```

### Advanced Usage

```python
from mcp_kit.adapters.openai import MCPAdapter
from mcp_kit import create_mcp_proxy

# Create proxy with custom configuration
proxy = create_mcp_proxy({
    "targets": [
        {
            "id": "weather",
            "type": "mcp", 
            "config": {"command": "python", "args": ["weather_server.py"]}
        }
    ]
})

# Create adapter with existing proxy
adapter = MCPAdapter(proxy=proxy)

# Configure tool filtering
adapter.configure_tools(
    include_patterns=["get_*", "weather_*"],
    exclude_patterns=["internal_*"]
)

# Use with streaming
for chunk in client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Get current weather"}],
    tools=adapter.get_available_tools(),
    stream=True
):
    print(chunk.choices[0].delta.content, end="")
```

## LangGraph Adapter

Use MCP Kit tools within LangGraph workflows.

### Basic Integration

```python
from mcp_kit.adapters.langgraph import MCPToolNode
from langgraph.graph import StateGraph
from typing import TypedDict

class AgentState(TypedDict):
    messages: list
    
# Create MCP tool node
mcp_tools = MCPToolNode("config.yaml")

# Build graph
workflow = StateGraph(AgentState)
workflow.add_node("mcp_tools", mcp_tools)

# Add edges and compile
graph = workflow.compile()
```

### Custom Tool Selection

```python
from mcp_kit.adapters.langgraph import MCPToolNode

# Create with specific tools
mcp_tools = MCPToolNode(
    config="config.yaml",
    tool_filter=lambda tool: tool.name.startswith("weather_")
)

# Or create from existing proxy
from mcp_kit import create_mcp_proxy

proxy = create_mcp_proxy("config.yaml")
mcp_tools = MCPToolNode(proxy=proxy)
```

## Generic Client Session Adapter

For custom integrations or frameworks not yet supported.

### Basic Usage

```python
from mcp_kit.adapters.client_session import ClientSession

# Create session
session = ClientSession("config.yaml")

# List available tools
tools = await session.list_tools()
print(f"Available tools: {[tool.name for tool in tools]}")

# Call a tool
result = await session.call_tool("get_weather", {"location": "San Francisco"})
print(f"Weather: {result}")

# Get resources
resources = await session.list_resources()
for resource in resources:
    content = await session.read_resource(resource.uri)
    print(f"{resource.name}: {content}")
```

### Session Management

```python
from mcp_kit.adapters.client_session import ClientSession

async def main():
    # Context manager ensures proper cleanup
    async with ClientSession("config.yaml") as session:
        # Session is automatically started
        tools = await session.list_tools()
        
        # Call multiple tools
        tasks = [
            session.call_tool("get_weather", {"location": "NYC"}),
            session.call_tool("get_news", {"topic": "tech"}),
        ]
        results = await asyncio.gather(*tasks)
        
    # Session is automatically closed

import asyncio
asyncio.run(main())
```

### Error Handling

```python
from mcp_kit.adapters.client_session import ClientSession, MCPError

async with ClientSession("config.yaml") as session:
    try:
        result = await session.call_tool("risky_operation", {})
    except MCPError as e:
        print(f"MCP Error: {e.code} - {e.message}")
    except Exception as e:
        print(f"Unexpected error: {e}")
```

## Creating Custom Adapters

You can create custom adapters for other frameworks:

```python
from mcp_kit.adapters.base import BaseAdapter
from mcp_kit import MCPProxy

class MyFrameworkAdapter(BaseAdapter):
    def __init__(self, config_or_proxy):
        super().__init__(config_or_proxy)
        
    def integrate_with_framework(self, framework_client):
        """Add MCP tools to your framework"""
        tools = self.proxy.list_tools()
        
        for tool in tools:
            # Register tool with your framework
            framework_client.add_tool(
                name=tool.name,
                description=tool.description,
                handler=lambda **kwargs: self.proxy.call_tool(tool.name, kwargs)
            )
            
        return framework_client

# Usage
adapter = MyFrameworkAdapter("config.yaml")
my_client = adapter.integrate_with_framework(MyFrameworkClient())
```

## Adapter Configuration

### Global Adapter Settings

```yaml
# config.yaml
adapters:
  openai:
    tool_choice: "auto"
    parallel_tool_calls: true
    max_retries: 3
    
  langgraph:
    error_handling: "continue"  # or "stop", "retry"
    tool_timeout: 30
    
  client_session:
    connection_timeout: 10
    max_message_size: 1048576
```

### Per-Adapter Configuration

```python
# OpenAI adapter with custom settings
adapter = MCPAdapter(
    config="config.yaml",
    tool_choice="required",
    parallel_tool_calls=False
)

# LangGraph adapter with error handling
mcp_tools = MCPToolNode(
    config="config.yaml", 
    error_handling="retry",
    max_retries=3
)
```

## Best Practices

### Tool Management
- Filter tools to only expose what your application needs
- Use descriptive tool names and documentation
- Handle tool errors gracefully

### Performance
- Reuse adapter instances when possible
- Use connection pooling for multiple sessions
- Consider caching tool lists for read-heavy workloads

### Security
- Validate tool inputs in your application
- Use environment variables for sensitive configuration
- Implement proper authentication for MCP servers

## Examples

Complete examples using each adapter:

- [OpenAI Integration Example](https://github.com/your-org/mcp-kit-python/tree/main/examples/openai_agents_sdk)
- [LangGraph Workflow Example](https://github.com/your-org/mcp-kit-python/tree/main/examples/langgraph)
- [Client Session Example](https://github.com/your-org/mcp-kit-python/tree/main/examples/mcp_client_session)

## Next Steps

- [Examples](./examples.md) - Try complete working examples
- [API Reference](/docs/python-sdk/reference/) - Detailed API documentation
