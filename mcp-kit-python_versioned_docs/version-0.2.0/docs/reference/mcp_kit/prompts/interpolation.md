---
sidebar_label: interpolation
title: mcp_kit.prompts.interpolation
# This file was auto-generated and should not be edited manually
---

Interpolation prompt engine for safe string substitution.

## InterpolationPrompt

```python
@dataclass
class InterpolationPrompt()
```

A prompt with interpolation text and optional default values.

**Arguments**:

- `text`: The prompt string with `{placeholder}` syntax
- `defaults`: Optional default values for placeholders

### \_\_post\_init\_\_

```python
def __post_init__() -> None
```

Initialize defaults as empty dict if None.

## InterpolationPromptEngine

```python
class InterpolationPromptEngine(PromptEngine)
```

Prompt engine that performs safe string interpolation using predefined prompts.

This engine uses a map of prompt names to InterpolationPrompt objects with `{placeholder}`
syntax for argument substitution. It performs safe string replacement without
executing arbitrary code like f-strings would.

### \_\_init\_\_

```python
def __init__(prompts: dict[str, InterpolationPrompt])
```

Initialize the interpolation prompt engine.

**Arguments**:

- `prompts`: Map of prompt names to InterpolationPrompt objects

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create InterpolationPromptEngine from configuration.

Expected config format:
```
{
    &quot;type&quot;: &quot;interpolation&quot;,
    &quot;prompts&quot;: {
        &quot;prompt_name&quot;: {
            &quot;text&quot;: &quot;Prompt string with {arg1} and {arg2}&quot;,
            &quot;defaults&quot;: {
                &quot;arg2&quot;: &quot;default_value&quot;
            }
        },
        &quot;another_prompt&quot;: {
            &quot;text&quot;: &quot;Hello {name}, welcome to {service}!&quot;,
            &quot;defaults&quot;: {
                &quot;service&quot;: &quot;our service&quot;
            }
        }
    }
}
```

**Arguments**:

- `config`: Configuration data with prompts

**Raises**:

- `ValueError`: If prompts are missing from config

**Returns**:

InterpolationPromptEngine instance

### generate

```python
async def generate(target_name: str,
                   prompt: Prompt,
                   arguments: dict[str, str] | None = None) -> GetPromptResult
```

Generate a prompt response using prompt interpolation.

Safely substitutes argument values into the prompt string using
simple string replacement without executing code. Uses default values
for missing arguments when available.

**Arguments**:

- `target_name`: Name of the target that would handle the prompt call
- `prompt`: The MCP prompt definition
- `arguments`: Arguments to substitute into the prompt

**Raises**:

- `ValueError`: If prompt is not found or substitution fails

**Returns**:

Generated prompt result with interpolated content

