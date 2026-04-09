# Phase 2: Component Doc Enhancement - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Update existing component documentation with tier classification and methodology links:

- Add tier classification to all component docs
- Add "Design Principles" section linking to relevant tier guide
- Update docs/feature/components/README.md with atomic design structure overview
- Fix outdated source paths (src/components/ui → src/common/components)

</domain>

<decisions>
## Implementation Decisions

### Tier Classification Display

- **D-01:** Use frontmatter tier field
- Add `tier: atom|molecule|organism|templates` to frontmatter of each component doc
- This approach is clean, machine-readable, and can be used for auto-generation

### Design Principles Section Placement

- **D-02:** Add "Design Principles" section before "Source" section
- Section includes tier name with link to corresponding tier guide
- Example: "See [Atoms](../atomic-design/atoms.md) for classification guidelines"

### Source Path Updates

- **D-03:** Update source paths to correct locations
- Change `src/components/ui/` to `src/common/components/`
- Affects all component docs (atoms, molecules, layout)
- This improves documentation accuracy

### the agent's Discretion

- Exact frontmatter format (e.g., `tier: atom` vs `tier: atoms`)
- Specific link text for Design Principles section
- Order of tier guides in README links

</decisions>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Methodology Docs (Phase 1)

- `docs/feature/components/atomic-design/README.md` — Tier definitions and decision flowchart
- `docs/feature/components/atomic-design/atoms.md` — Atom tier guide
- `docs/feature/components/atomic-design/molecules.md` — Molecule tier guide
- `docs/feature/components/atomic-design/organisms.md` — Organism tier guide
- `docs/feature/components/atomic-design/templates.md` — Template tier guide

### Existing Component Docs

- `docs/feature/components/README.md` — Main components README (to update)
- `docs/feature/components/atomic/StatusDot.md` — Atom example
- `docs/feature/components/molecular/Card.md` — Molecule example
- `docs/feature/components/layout/PageHeader.md` — Template example

### Project Context

- `.planning/ROADMAP.md` — Phase 2 success criteria
- `.planning/REQUIREMENTS.md` — DOCS-03, DOCS-04 requirements

</canonical_refs>

<codebase_context>

## Existing Code Insights

### Component Doc Structure

Each component doc has:

- Title
- Brief description (with tier reference for molecular/layout)
- Overview section
- API section (Props table, Type Definitions)
- Usage Example section
- Source section (currently outdated paths)

### Existing Frontmatter Pattern

Docs currently have no frontmatter — need to add tier field.

### Files to Update

| Directory  | Files                                                                                            | Tier     |
| ---------- | ------------------------------------------------------------------------------------------------ | -------- |
| atomic/    | StatusDot.md, SeverityBadge.md                                                                   | atom     |
| molecular/ | Card.md, Notification.md, TrendMetricCard.md                                                     | molecule |
| layout/    | PageHeader.md, SummaryPanel.md, HeroSection.md, FileViewerRouter.md, CsvViewer.md, JsonViewer.md | template |

</code_context>

<specifics>
## Specific Ideas

- Frontmatter format: `tier: atom` (singular, lowercase)
- Design Principles section content: "This component follows [Tier] patterns. See [Tier Guide](../atomic-design/{tier}.md) for classification guidelines."
- Source path format: `src/common/components/{tier}/{ComponentName}.tsx`

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

_Phase: 02-component-doc-enhancement_
_Context gathered: 2026-04-09_
