---
sidebar_label: mixins
title: mcp_kit.mixins
# This file was auto-generated and should not be edited manually
---

Mixins for configurable classes in the mcp_kit package.

## ABC

## abstractmethod

## DictConfig

## Self

## ConfigurableMixin

```python
class ConfigurableMixin(ABC)
```

Mixin that provides a from_config class method for creating instances from configuration.

Classes that inherit from this mixin must implement from_config to handle their own
instantiation from configuration data.

### from\_config

```python
@classmethod
@abstractmethod
def from_config(cls, config: DictConfig) -> Self
```

Factory method to create an instance from configuration.

**Arguments**:

- `config`: Configuration data

**Returns**:

Instance of the class

