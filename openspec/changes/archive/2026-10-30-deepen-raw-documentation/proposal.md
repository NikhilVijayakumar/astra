# Change Proposal: deepen-raw-documentation

## Why

The initial documentation inventory maps source files to topics but leaves many source sections and behavioral details unexamined. Expand the draft knowledge, requirements and specifications, expose inconsistencies and make remaining review work visible.

## What Changes

- **astra-contracts**: add traceable draft scenarios for selected documented details confirmed by source inspection.
- Add a section review queue and expand the requirements inventory with discrepancies and open questions.
- Document optional Graphify discovery and keep its generated output local.

## Scope

The four raw architecture, external-context, feature and feature-technical trees are the review scope. PRs, reports, and prompt/template data are excluded as requirements sources. This is a documentation and tooling setup change; it does not change public APIs or runtime behavior. The existing branch is `develop`.

## Knowledge References

`knowledge/concepts/async-state.md`, `state-rendering.md`, `transports.md`, `knowledge/architecture/mvvm-boundaries.md` and `public-api-build.md` capture relevant draft concepts. The requirement IDs and unresolved decisions are in `docs/requirements/raw-inventory.md`; the section review queue explicitly identifies remaining work.

## Risks

Raw material is historical and inconsistent. Source inspection and test execution do not establish that every claim is correct, and external ownership claims remain unverified. The 517 section pointers do not mean every claim has been reviewed. Preserve disputed behaviors as open questions instead of inventing decisions.
