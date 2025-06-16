---
sidebar_label: interfaces
title: mcp_kit.generators.interfaces
---

## abstractmethod

## Any

## Tool

## EmbeddedResource

## ImageContent

## TextContent

## ConfigurableMixin

## ResponseGenerator

```python
class ResponseGenerator(ConfigurableMixin)
```

Interface for generating response data for an MCP call_tool

### generate

```python
@abstractmethod
async def generate(
    target_name: str,
    tool: Tool,
    arguments: dict[str, Any] | None = None
) -> list[TextContent | ImageContent | EmbeddedResource]
```

Generate an MCP call tool response.

