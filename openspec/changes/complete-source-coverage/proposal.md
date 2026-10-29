# Change Proposal: complete-source-coverage

## Why

The initial raw-document audit produced a topic inventory and selected draft contracts, but it did not review every source claim. Remaining review must be tracked explicitly so the current baseline is not mistaken for complete coverage.

## What Changes

- Review the remaining in-scope source claims and trace applicable findings to knowledge, requirements and specifications.
- Select an appropriate Graphify corpus and generate a graph as a derived discovery aid.

## Scope and constraints

Review `docs/raw/architecture`, `external-context`, `feature`, and `feature-technical`; exclude PRs, reports and prompt/template data as requirements sources. This is pending work and does not authorize runtime code changes. Consult the section review queue and preserve unresolved product decisions. Graphify selection and generation have not been completed.

## Knowledge References

- `knowledge/index.md` — current draft concepts.
- `docs/requirements/raw-inventory.md` — source inventory, draft requirements and questions.
- `docs/requirements/section-review.md` — source sections awaiting claim-level coverage.

## Risks and open questions

Coverage cannot be inferred from the presence of a heading or source link. Existing app testing is user-reported; no test evidence is attached here. Determine which claims are current, historical, duplicate, guidance or unresolved before making them normative. The Graphify corpus must be selected within the skill's size and sensitive-file rules.
