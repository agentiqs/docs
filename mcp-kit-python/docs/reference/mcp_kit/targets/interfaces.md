---
sidebar_label: interfaces
title: mcp_kit.targets.interfaces
# This file was auto-generated and should not be edited manually
---

Interface definitions for MCP targets.

## Target

```python
class Target(ConfigurableMixin)
```

Abstract base class for MCP targets.

A Target represents a destination for MCP tool calls. It defines the interface
that all concrete target implementations must follow.

### name

```python
@property
@abstractmethod
def name() -> str
```

Get the name of this target.

**Returns**:

The target name

### initialize

```python
@abstractmethod
async def initialize() -> None
```

Initialize the target for use.

This method should be called before any other operations.

### list\_tools

```python
@abstractmethod
async def list_tools() -> list[Tool]
```

List all available tools for this target.

**Returns**:

List of available MCP tools

### call\_tool

```python
@abstractmethod
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

Call a specific tool with given arguments.

**Arguments**:

- `name`: Name of the tool to call
- `arguments`: Arguments to pass to the tool

**Returns**:

List of content responses from the tool

### close

```python
@abstractmethod
async def close() -> None
```

Clean up and close the target.

This method should be called when the target is no longer needed.

