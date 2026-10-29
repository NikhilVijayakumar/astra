---
type: Architecture
title: "MVVM and runtime boundaries"
description: "Draft overview of mvvm and runtime boundaries."
status: draft
generated: { by: openai/codex, at: "2026-10-30T00:00:00Z" }
sources:
  - id: source-1
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/feature-structure.md
  - id: source-2
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/mvvm-pattern.md
  - id: source-3
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/platform-abstraction.md
  - id: source-4
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/boilerplate-ownership.md
  - id: source-5
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/mvvm-separation.md
  - id: source-6
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/repository-isolation.md
  - id: source-7
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/runtime-boundary.md
  - id: source-8
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/target-consistency.md
  - id: source-9
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/runtime-maps/data-flow.md
  - id: source-10
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/runtime-maps/platform-runtimes.md
  - id: source-11
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/integration-contracts/react.md
  - id: source-12
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/integration-contracts/electron.md
  - id: source-13
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/integration-contracts/getting-started.md
  - id: source-14
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature/mvvm-wiring.md
  - id: source-15
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature-technical/mvvm-wiring.md
  - id: source-16
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/external-context/prati.md
---

# MVVM and runtime boundaries

Astra documents a Repository ? ViewModel hook ? View pattern. Consumers own domain repositories, application state composition, design system, localization and persistence; Astra provides reusable async-state and transport primitives. WEB uses HTTP and Electron uses a preload bridge for IPC. These are guidance and ownership boundaries; they do not prove external products enforce this arrangement.

## Consumer integration

The documented approach places transport calls in repositories, asynchronous orchestration in ViewModel hooks and display decisions in views. These conventions describe consumer architecture; the library cannot enforce them. Each hook instance has local state unless the consumer lifts or shares it. Electron preload and main-process handlers are external responsibilities. Theme, language and presentation implementations are supplied by a consumer or another library. Assertions about external projects are contextual and should be checked in those projects.
