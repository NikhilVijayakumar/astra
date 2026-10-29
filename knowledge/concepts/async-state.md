---
type: Concept
title: "Async state and execution"
description: "Draft overview of async state and execution."
status: draft
generated: { by: openai/codex, at: "2026-10-30T00:00:00Z" }
sources:
  - id: source-1
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/hooks.md
  - id: source-2
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/state-management.md
  - id: source-3
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/runtime-maps/state-flow.md
  - id: source-4
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature/state-management.md
  - id: source-5
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature/use-data-state.md
  - id: source-6
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature-technical/state-management.md
  - id: source-7
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature-technical/use-data-state.md
---

# Async state and execution

AppState represents INIT, LOADING and COMPLETED plus result flags, status, message and data. useDataState merges initial overrides, exposes state, execute and a setter, and preserves existing fields when loading. A resolved response populates completion fields; a thrown operation yields status 500 and an optional caller-provided message. Concurrent operations can overwrite one another in completion order; no cancellation or latest-request guard is implemented. The documentation contains conflicting ordering claims.

## Initialization and updates

By default the state starts at INIT, both result flags false, status 1000, an empty message and null data. Partial initial values override those defaults. Loading changes only the phase, so previous flags, status, message and data remain until completion. The direct setter is consumer controlled. Completion after unmount is guarded, but there is no abort or request ordering mechanism; a development Strict Mode effect replay also deserves verification because the mount flag is not reset in effect setup.

`StateCode.IDLE` is 1000. The deprecated `HttpStatusCode.IDLE` alias remains in the current enum, despite raw documentation claiming it was removed. TypeScript expects a ServerResponse; the implementation does not perform an instance check on resolved values.
