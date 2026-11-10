# Change Proposal: audit-raw-knowledge

## Why

Astra's raw architecture and feature documents contain important contracts that are largely absent from its new knowledge bundle and requirements. A traceable draft baseline is needed to expose omissions and discrepancies without mistaking historical claims for verified implementation.

## What Changes

- **astra-contracts**: record a draft, source-linked baseline for state, rendering, transport and library boundaries.
- Add a source inventory, draft requirements and a reusable documentation audit skill.

## Scope and constraints

Inventory the 38 Markdown sources under raw architecture, features, feature-technical and external context. Exclude PR and report material and do not use prompt/template data as product requirements. Adapt useful audit techniques into a skill. No public API, runtime behavior or dependency contract is changed. This is a documentation and workflow change on the existing `develop` branch. Existing user changes are preserved.

## Knowledge References

- `knowledge/architecture/mvvm-boundaries.md` — ownership and flow.
- `knowledge/architecture/public-api-build.md` — package boundaries and build.
- `knowledge/concepts/async-state.md`, `state-rendering.md`, `transports.md` — runtime contracts.
- `docs/requirements/raw-inventory.md` — IDs, sources and open questions.

## Risks and open questions

The raw documents contain contradictions and obsolete details. The inventory distinguishes source coverage from claim-level verification. Concurrency, lockfile policy, callback exceptions and consumer obligations require decisions; do not silently resolve them here. Scenarios are specifications, not executed tests.
