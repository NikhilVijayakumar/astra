---
type: Concept
title: "State rendering"
description: "Draft overview of state rendering."
status: draft
generated: { by: openai/codex, at: "2026-10-30T00:00:00Z" }
sources:
  - id: source-1
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature/app-state-handler.md
  - id: source-2
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature-technical/app-state-handler.md
---

# State rendering

AppStateHandler routes loading before error, then successful non-null data, then an empty fallback. Consumer-provided slots override context components. Empty checks run on successful non-null data; success children precede the SuccessComponent when truthy. The consumer supplies the UI and retry behavior.

## Selection details

The error branch is selected by the error flag or status 0. The error context receives the explicit errorMessage prop; a supplied error slot bypasses that context component. Empty predicates are evaluated only for successful non-null data. Slots are selected when they are not undefined, so even a null slot suppresses a context fallback. When successful data is present, truthy children are preferred over SuccessComponent; otherwise the empty fallback applies. No configured fallback means null. The handler does not fetch or initiate retry.
