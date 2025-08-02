---
sidebar_label: interfaces
title: mcp_kit.prompts.interfaces
# This file was auto-generated and should not be edited manually
---

Interface definitions for prompt engines.

## PromptEngine

```python
class PromptEngine(ConfigurableMixin)
```

Interface for generating prompt responses for MCP get_prompt calls.

Prompt engines can resolve a request from an MCP client to instantiate a prompt with
specific arguments.

### generate

```python
@abstractmethod
async def generate(target_name: str,
                   prompt: Prompt,
                   arguments: dict[str, str] | None = None) -> GetPromptResult
```

Generate an MCP get_prompt response.

**Arguments**:

- `target_name`: Name of the target that would handle the prompt call
- `prompt`: The MCP prompt definition
- `arguments`: Arguments that would be passed to the prompt

**Returns**:

Generated prompt result response

