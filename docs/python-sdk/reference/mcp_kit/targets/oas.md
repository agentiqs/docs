---
sidebar_label: oas
title: mcp_kit.targets.oas
# This file was auto-generated and should not be edited manually
---

## asyncio

## Any

## click

## uvicorn

## Tool

## FastMCP

## Context

## ServerSessionT

## LifespanContextT

## Content

## DictConfig

## create\_mcp\_server

## Self

## Target

## OasTarget

```python
class OasTarget(Target)
```

### name

```python
@property
def name() -> str
```

### from\_config

```python
@classmethod
def from_config(cls, config: DictConfig) -> Self
```

Create OasTarget from configuration.

**Arguments**:

- `config`: Target configuration from OmegaConf

**Returns**:

OasTarget instance

### initialize

```python
async def initialize() -> None
```

### list\_tools

```python
async def list_tools() -> list[Tool]
```

### call\_tool

```python
async def call_tool(name: str,
                    arguments: dict[str, Any] | None = None) -> list[Content]
```

### close

```python
async def close() -> None
```

### run\_async

```python
async def run_async(oas_name: str, spec_url: str, port: int) -> None
```

### run\_sync

```python
@click.command()
@click.option(
    "--oas-name",
    default="oas",
    help="Name of the OAS instance (default: oas)",
)
@click.option("--spec-url", required=True, help="OpenAPI spec URL")
@click.option(
    "--port",
    default=9000,
    show_default=True,
    help="Port to run the server on",
)
def run_sync(oas_name: str, spec_url: str, port: int) -> None
```

