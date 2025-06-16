# Examples

This section provides complete, runnable examples demonstrating various MCP Kit use cases.

## Quick Start Examples

### Basic MCP Proxy

Create a simple proxy that connects to an MCP server:

```python
# basic_proxy.py
from mcp_kit import create_mcp_proxy

# Create proxy with inline configuration
proxy = create_mcp_proxy({
    "targets": [{
        "id": "my-server",
        "type": "mcp",
        "config": {
            "command": "python",
            "args": ["my_mcp_server.py"]
        }
    }]
})

# List available tools
tools = proxy.list_tools()
print(f"Available tools: {[tool.name for tool in tools]}")

# Call a tool
result = proxy.call_tool("get_time", {})
print(f"Current time: {result}")
```

### Using Configuration Files

```yaml
# config.yaml
targets:
  - id: "time-server"
    type: "mcp"
    config:
      command: "python"
      args: ["-m", "mcp_kit.examples.time_server"]
```

```python
# using_config.py
from mcp_kit import create_mcp_proxy

# Load from configuration file
proxy = create_mcp_proxy("config.yaml")

# Use the proxy
async def main():
    tools = await proxy.list_tools()
    result = await proxy.call_tool("get_time", {"timezone": "UTC"})
    print(result)

import asyncio
asyncio.run(main())
```

## Framework Integration Examples

### OpenAI SDK Integration

Complete example using OpenAI SDK with MCP tools:

```python
# openai_example.py
import openai
from mcp_kit.adapters.openai import MCPAdapter

# Set up OpenAI client
client = openai.OpenAI(api_key="your-key")

# Add MCP adapter
adapter = MCPAdapter({
    "targets": [{
        "id": "weather",
        "type": "mcp",
        "config": {
            "command": "python",
            "args": ["weather_server.py"]
        }
    }]
})

# Wrap the client
client = adapter.wrap_client(client)

# Now you can use MCP tools in OpenAI calls
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "What's the weather in Paris?"}
    ],
    tools=adapter.get_available_tools(),
    tool_choice="auto"
)

# Handle tool calls
if response.choices[0].message.tool_calls:
    for tool_call in response.choices[0].message.tool_calls:
        result = adapter.execute_tool_call(tool_call)
        print(f"Tool {tool_call.function.name} result: {result}")
```

### LangGraph Workflow

Build an agent workflow using MCP tools:

```python
# langgraph_agent.py
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor
from mcp_kit.adapters.langgraph import MCPToolNode
from typing import TypedDict, List

class AgentState(TypedDict):
    messages: List[dict]
    intermediate_steps: List[tuple]

# Create MCP tool node
mcp_tools = MCPToolNode({
    "targets": [{
        "id": "research-tools",
        "type": "mcp", 
        "config": {
            "command": "python",
            "args": ["research_server.py"]
        }
    }]
})

def agent_node(state):
    # Your agent logic here
    messages = state["messages"]
    # Process with LLM and determine if tools are needed
    return {"messages": messages + [new_message]}

def should_continue(state):
    last_message = state["messages"][-1]
    return "tools" if "tool_calls" in last_message else "end"

# Build the graph
workflow = StateGraph(AgentState)
workflow.add_node("agent", agent_node)
workflow.add_node("tools", mcp_tools)

workflow.set_entry_point("agent")
workflow.add_conditional_edges(
    "agent",
    should_continue,
    {
        "tools": "tools",
        "end": END
    }
)
workflow.add_edge("tools", "agent")

# Compile and run
app = workflow.compile()

# Execute workflow
result = app.invoke({
    "messages": [{"role": "user", "content": "Research the latest AI trends"}]
})
```

## Advanced Configuration Examples

### Multi-Target Routing

Route different tools to different backends:

```yaml
# multi_target_config.yaml
targets:
  - id: "weather-service"
    type: "mcp"
    config:
      command: "python"
      args: ["weather_server.py"]
      
  - id: "news-api"
    type: "oas"
    config:
      base_url: "https://newsapi.org/v2"
      spec_url: "https://newsapi.org/docs/openapi.json"
      headers:
        X-API-Key: "${NEWS_API_KEY}"
        
  - id: "fallback-mock"
    type: "mocked"
    config:
      generator: "random"

routing:
  - tools: ["get_weather", "get_forecast"]
    target: "weather-service"
    
  - tools: ["get_news", "search_articles"]
    target: "news-api"
    
  - tools: ["*"]  # fallback
    target: "fallback-mock"
```

### Load Balancing with Multiplex

Distribute load across multiple server instances:

```yaml
# load_balanced_config.yaml
targets:
  - id: "server-1"
    type: "mcp"
    config:
      command: "python"
      args: ["server.py"]
      env:
        SERVER_PORT: "8001"
        
  - id: "server-2" 
    type: "mcp"
    config:
      command: "python"
      args: ["server.py"]
      env:
        SERVER_PORT: "8002"
        
  - id: "load-balancer"
    type: "multiplex"
    config:
      strategy: "round_robin"
      targets: ["server-1", "server-2"]
      health_check: true
      health_check_interval: 30

routing:
  - tools: ["*"]
    target: "load-balancer"
```

### Smart Response Generation

Use LLM-powered response generation for fallbacks:

```yaml
# smart_responses_config.yaml
targets:
  - id: "primary-mcp"
    type: "mcp"
    config:
      command: "python"
      args: ["primary_server.py"]
      
  - id: "llm-fallback"
    type: "mocked"
    config:
      generator: "llm"

generators:
  - id: "smart-assistant"
    type: "llm"
    config:
      provider: "openai"
      model: "gpt-4"
      temperature: 0.7
      system_prompt: |
        You are a helpful assistant that provides responses when the 
        primary MCP server is unavailable. Be informative but acknowledge 
        when you don't have access to real-time data.

routing:
  - tools: ["*"]
    target: "primary-mcp"
    fallback: "llm-fallback"
```

## Testing Examples

### Unit Testing with Mocked Targets

```python
# test_with_mocks.py
import pytest
from mcp_kit import create_mcp_proxy

@pytest.fixture
def mock_proxy():
    return create_mcp_proxy({
        "targets": [{
            "id": "test-mock",
            "type": "mocked",
            "config": {
                "generator": "static",
                "responses": {
                    "get_user": {
                        "name": "Test User",
                        "email": "test@example.com",
                        "id": 123
                    },
                    "create_user": {
                        "success": True,
                        "user_id": 456
                    }
                }
            }
        }]
    })

async def test_user_operations(mock_proxy):
    # Test getting user
    user = await mock_proxy.call_tool("get_user", {"id": 123})
    assert user["name"] == "Test User"
    
    # Test creating user
    result = await mock_proxy.call_tool("create_user", {
        "name": "New User",
        "email": "new@example.com"
    })
    assert result["success"] is True
```

### Integration Testing

```python
# integration_test.py
import asyncio
from mcp_kit import create_mcp_proxy

async def test_real_server_integration():
    """Test against a real MCP server"""
    proxy = create_mcp_proxy("test_config.yaml")
    
    try:
        # Test server connectivity
        tools = await proxy.list_tools()
        assert len(tools) > 0
        
        # Test tool execution
        if "health_check" in [t.name for t in tools]:
            health = await proxy.call_tool("health_check", {})
            assert health["status"] == "healthy"
            
    finally:
        await proxy.close()

if __name__ == "__main__":
    asyncio.run(test_real_server_integration())
```

## Performance Examples

### Connection Pooling

```python
# connection_pooling.py
from mcp_kit import create_mcp_proxy
from mcp_kit.config import ProxyConfig
import asyncio

async def high_throughput_example():
    """Example of handling high throughput with connection pooling"""
    
    config = ProxyConfig({
        "targets": [{
            "id": "high-perf-server",
            "type": "mcp",
            "config": {
                "command": "python",
                "args": ["server.py"],
                "pool_size": 10,  # Multiple connections
                "max_concurrent_requests": 50
            }
        }],
        "settings": {
            "timeout": 30,
            "retries": 3,
            "connection_pool_size": 20
        }
    })
    
    proxy = create_mcp_proxy(config)
    
    # Execute many concurrent requests
    tasks = []
    for i in range(100):
        task = proxy.call_tool("process_item", {"item_id": i})
        tasks.append(task)
    
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    # Process results
    successful = [r for r in results if not isinstance(r, Exception)]
    failed = [r for r in results if isinstance(r, Exception)]
    
    print(f"Successful: {len(successful)}, Failed: {len(failed)}")
    
    await proxy.close()

asyncio.run(high_throughput_example())
```

## Real-World Use Cases

### AI Agent with Multiple Tools

```python
# ai_agent_example.py
import openai
from mcp_kit.adapters.openai import MCPAdapter

class AIAgent:
    def __init__(self):
        self.client = openai.OpenAI()
        
        # Set up MCP adapter with multiple tool sources
        self.adapter = MCPAdapter({
            "targets": [
                {
                    "id": "web-search",
                    "type": "mcp",
                    "config": {"command": "python", "args": ["web_search_server.py"]}
                },
                {
                    "id": "database",
                    "type": "mcp", 
                    "config": {"command": "python", "args": ["db_server.py"]}
                },
                {
                    "id": "calculator",
                    "type": "mcp",
                    "config": {"command": "python", "args": ["calc_server.py"]}
                }
            ]
        })
        
        self.client = self.adapter.wrap_client(self.client)
    
    async def process_query(self, query: str):
        """Process a user query using available tools"""
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful AI agent with access to web search, database queries, and calculation tools."},
                {"role": "user", "content": query}
            ],
            tools=self.adapter.get_available_tools(),
            tool_choice="auto"
        )
        
        # Handle tool calls
        if response.choices[0].message.tool_calls:
            tool_results = []
            for tool_call in response.choices[0].message.tool_calls:
                result = await self.adapter.execute_tool_call(tool_call)
                tool_results.append(result)
            
            # Get final response with tool results
            final_response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "Synthesize the tool results into a helpful response."},
                    {"role": "user", "content": query},
                    {"role": "assistant", "content": f"Tool results: {tool_results}"}
                ]
            )
            
            return final_response.choices[0].message.content
        
        return response.choices[0].message.content

# Usage
async def main():
    agent = AIAgent()
    
    queries = [
        "What's the current price of Bitcoin and calculate 10% of that",
        "Search for recent AI news and save interesting articles to database",
        "Find weather in Tokyo and convert temperature to Fahrenheit"
    ]
    
    for query in queries:
        print(f"Query: {query}")
        result = await agent.process_query(query)
        print(f"Result: {result}\n")

if __name__ == "__main__":
    asyncio.run(main())
```

## Running the Examples

All examples are available in the repository:

```bash
# Clone the repository
git clone https://github.com/your-org/mcp-kit-python.git
cd mcp-kit-python

# Install dependencies
pip install -e ".[all]"

# Run examples
cd examples/
python openai_agents_sdk/main.py
python langgraph/main.py
python mcp_client_session/main.py
```

## Next Steps

- Explore the [examples directory](https://github.com/your-org/mcp-kit-python/tree/main/examples) for complete, runnable code
- Check out [proxy configurations](https://github.com/your-org/mcp-kit-python/tree/main/examples/proxy_configs) for more config examples
- Read the [API Reference](../reference/) for detailed documentation
