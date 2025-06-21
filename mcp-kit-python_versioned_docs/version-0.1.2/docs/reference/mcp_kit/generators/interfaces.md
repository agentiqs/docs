---
sidebar_label: interfaces
title: mcp_kit.generators.interfaces
# This file was auto-generated and should not be edited manually
---

Interface definitions for response generators.

## ResponseGenerator

```python
class ResponseGenerator(ConfigurableMixin)
```

Interface for generating response data for an MCP call_tool.

Response generators create synthetic responses for MCP tool calls,
which is useful for testing, mocking, or simulation scenarios.

### generate

```python
@abstractmethod
async def generate(target_name: str,
                   tool: Tool,
                   arguments: dict[str, Any] | None = None) -> list[Content]
```

Generate an MCP call tool response.

**Arguments**:

- `target_name`: Name of the target that would handle the tool call
- `tool`: The MCP tool definition
- `arguments`: Arguments that would be passed to the tool

**Returns**:

List of generated content responses

