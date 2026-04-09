# Phase 1: Methodology Foundation - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Create comprehensive Atomic Design methodology documentation in `docs/feature/components/atomic-design/` including:

- README.md with core principles and tier definitions
- 4 tier guides (atoms.md, molecules.md, organisms.md, templates.md)
- Decision flowchart for component classification
- Verify component structure compliance

</domain>

<decisions>
## Implementation Decisions

### Documentation Depth

- **D-01:** Comprehensive reference documentation
- Include full explanations, anti-patterns, and decision guides
- Link to external Atomic Design resources for supplementary reading

### Visual Aids

- **D-02:** Use Mermaid diagrams for visual representations
- Decision flowcharts rendered via Mermaid code blocks
- Component hierarchy diagrams

### Documentation Tone

- **D-03:** Technical and precise tone
- Clear definitions with precise language
- Focus on decision-making guidance
- Explain "why" behind each rule, not just "what"

### the agent's Discretion

- Exact Mermaid diagram syntax and layout
- Specific examples to illustrate each tier
- File structure within atomic-design/ directory
- Anti-pattern examples to include

</decisions>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context

- `.planning/PROJECT.md` — Core value and project goals
- `.planning/REQUIREMENTS.md` — DOCS-01, DOCS-02, DOCS-05, REFA-01 requirements
- `.planning/ROADMAP.md` — Phase 1 success criteria

### Research Insights

- `.planning/research/SUMMARY.md` — Key findings on documentation structure
- `.planning/research/FEATURES.md` — Classification framework details
- `.planning/research/PITFALLS.md` — Prevention of common documentation mistakes

### Existing Code

- `.planning/codebase/CONVENTIONS.md` — Naming patterns and component structure
- `src/common/components/` — Current atomic design implementation

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- `src/common/components/atoms/` — StatusDot, SeverityBadge (reference atoms)
- `src/common/components/molecules/` — Card, Notification, TrendMetricCard (reference molecules)
- `src/common/components/organisms/` — 27 complex components (reference organisms)
- `src/common/components/templates/` — PageHeader, SummaryPanel, HeroSection (reference templates)

### Established Patterns

- Barrel exports via index.ts files
- JSDoc comments for component documentation
- Functional components with FC type

### Integration Points

- New docs go in `docs/feature/components/atomic-design/`
- Must link from `docs/feature/components/README.md`
- Component docs reference tier guides via "Design Principles" sections

</code_context>

<specifics>
## Specific Ideas

- Mermaid decision flowchart for "Is this an atom, molecule, organism, or template?"
- Show component tier progression from atoms → molecules → organisms → templates
- Include anti-pattern examples (what NOT to do)
- Reference existing components as concrete examples for each tier

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

_Phase: 01-methodology-foundation_
_Context gathered: 2026-04-09_
