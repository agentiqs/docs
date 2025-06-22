---
sidebar_label: factory
title: mcp_kit.factory
# This file was auto-generated and should not be edited manually
---

Factory for creating instances from configuration using reflection.
This module provides a central registry to avoid circular imports and supports
both Target and ResponseGenerator creation.

## Target

### create\_object\_from\_config

```python
def create_object_from_config(config: DictConfig,
                              get_class_name: Callable[[str], str],
                              get_module_name: Callable[[str], str],
                              object_type_name: str = "object") -> Any
```

Generic factory function to create any object instance from configuration using reflection.

**Arguments**:

- `config`: Configuration from OmegaConf with a &#x27;type&#x27; field
- `get_class_name`: Function that converts type string to class name
- `get_module_name`: Function that converts type string to module name
- `object_type_name`: Name of object type for error messages (e.g., &quot;target&quot;, &quot;generator&quot;)

**Raises**:

- `ValueError`: If type is unknown or cannot be instantiated

**Returns**:

Object instance

### create\_target\_from\_config

```python
def create_target_from_config(config: DictConfig) -> Target
```

Factory function to create any Target instance from configuration using reflection.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Raises**:

- `ValueError`: If target type is unknown or cannot be instantiated

**Returns**:

Target instance

### create\_response\_generator\_from\_config

```python
def create_response_generator_from_config(
        config: DictConfig) -> ResponseGenerator
```

Factory function to create any ResponseGenerator instance from configuration using reflection.

**Arguments**:

- `config`: ResponseGenerator configuration from OmegaConf

**Raises**:

- `ValueError`: If generator type is unknown or cannot be instantiated

**Returns**:

ResponseGenerator instance

### create\_tools\_from\_config

```python
def create_tools_from_config(config: DictConfig) -> list[Tool] | None
```

Factory function to create any Tool instance from configuration using reflection.

**Arguments**:

- `config`: Tool configuration from OmegaConf

**Returns**:

List of Tool instances or None if no tools are defined

