---
type: Architecture
title: "Public API and build"
description: "Draft overview of public api and build."
status: draft
generated: { by: openai/codex, at: "2026-10-30T00:00:00Z" }
sources:
  - id: source-1
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/api-surface.md
  - id: source-2
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/build.md
  - id: source-3
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/dependencies.md
  - id: source-4
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/dependency-safety.md
  - id: source-5
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/deterministic-build.md
  - id: source-6
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/invariants/public-api-stability.md
  - id: source-7
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/runtime-maps/build-pipeline.md
  - id: source-8
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/runtime-maps/dependency-graph.md
  - id: source-9
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/runtime-maps/import-resolution.md
---

# Public API and build

The documented package boundary is an explicit public barrel and declared package exports, with React and Axios supplied as peers. Changes to public exports, generated declarations and build artifacts require compatibility checks. The documentation calls for a committed lockfile for reproducible installs, but the current repository ignores package-lock.json. Runtime maps and sample paths can drift and should be checked against package configuration and code.

## Packaging and compatibility

The public entry point exports state, hook, rendering and transport primitives. The package also declares common subpaths that resolve to its built artifacts; raw examples showing only a root source export are incomplete. The build config generates ES and UMD bundles and declarations while externalizing React, React DOM, JSX runtimes and Axios. The package declares React, React DOM and Axios as peers. Build reproducibility, lockfile policy and future support ranges require explicit project decisions rather than being inferred from historical documentation.
