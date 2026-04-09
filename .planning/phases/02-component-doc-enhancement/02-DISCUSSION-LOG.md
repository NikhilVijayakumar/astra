# Phase 2: Component Doc Enhancement - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-09
**Phase:** 02-component-doc-enhancement
**Areas discussed:** Tier Display Method, Design Principles Links, Source Path Updates

---

## Tier Classification Display

| Option                 | Description                                                                        | Selected |
| ---------------------- | ---------------------------------------------------------------------------------- | -------- |
| Frontmatter tier field | Add tier to frontmatter (clean, machine-readable, can be used for auto-generation) | ✓        |
| Header badge           | Visual badge at top of doc (visible but adds visual noise)                         |          |
| Sidebar marker         | Mark in sidebar/navigation (requires navigation config changes)                    |          |

**User's choice:** Frontmatter tier field (Recommended)
**Notes:** Add `tier: atom|molecule|organism|templates` to frontmatter of each component doc

---

## Design Principles Section Placement

| Option                | Description                                                | Selected |
| --------------------- | ---------------------------------------------------------- | -------- |
| Before Source section | Add after Usage Example, before Source — logical placement | ✓        |
| At the end            | Append after Source section — end of doc flow              |          |
| After Overview        | Add early for context — but interrupts API section flow    |          |

**User's choice:** Before Source section (Recommended)
**Notes:** Section includes tier name with link to corresponding tier guide

---

## Source Path Updates

| Option                  | Description                                                             | Selected |
| ----------------------- | ----------------------------------------------------------------------- | -------- |
| Update to correct paths | Fix src/components/ui → src/common/components (addresses docs accuracy) | ✓        |
| Skip for now            | Leave paths as-is (Phase 2 scope is classification, not path fixes)     |          |

**User's choice:** Update to correct paths (Recommended)
**Notes:** Change `src/components/ui/` to `src/common/components/`

---

## the agent's Discretion

- Exact frontmatter format (e.g., `tier: atom` vs `tier: atoms`)
- Specific link text for Design Principles section
- Order of tier guides in README links

## Deferred Ideas

None
