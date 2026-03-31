# Astra PR Specification (Drishti -> Astra)

Date: 2026-03-31
Requesting Team: Drishti
Status: Ready for Astra review

## Executive Summary

Drishti requests promotion of 11 presentational components into the Astra shared library. All candidates have been pre-refactored to enforce strict statelessness — zero domain coupling, zero business logic, props-only data flow.

## Package Contents

| Document | Purpose |
|---|---|
| Component-Inventory.md | Master list of candidates with lane decisions |
| 01-Atomic-Elements.md | 4 atomic component contracts |
| 02-Molecular-Layouts.md | 5 molecular component contracts |
| 03-Organism-Complex-UI.md | 2 organism component contracts |
| Handover-Contract.md | Responsibilities, phases, safety gates |
| Mapping-Template.md | Blank mapping table for Astra response |
| mapping-report.template.json | Machine-readable mapping template |
| Component-Audit-Manifest.md | Pre/post refactoring audit results |

## Candidate Summary

### Atomic (Lane A — Promote Now)
1. **ScrollProgress** — Vertical step indicator with active dot tracking
2. **FlowStep** — Interactive step node for workflow visualization
3. **HeritageLetter** — Animated hero character with parallax and hover-reveal

### Atomic (Lane C — Duplicate Check)
4. **ThemeToggle** — Dark/light mode toggle (already uses Astra useTheme)

### Molecular (Lane A — Promote Now)
5. **SegmentCard** — Icon + title + subtitle card with audience list
6. **TrackCard** — Media cover card with play overlay
7. **PrincipleItem** — Icon + title + description list item
8. **PersonaCard** — Image-backed profile card with hover-reveal details
9. **TimelineNode** — Alternating timeline entry with status badges

### Organism (Lane A — Promote Now)
10. **AudioPlayer** — Fixed-bottom media player bar (controlled state)
11. **FlowVisualizer** — Multi-section step-flow diagram with detail panel

## Pre-Handover Quality Gates Passed

| Gate | Result |
|---|---|
| Zero domain type imports | ✅ All 11 components |
| Zero useSettings/context hooks | ✅ All use `t` prop instead |
| Zero hardcoded data/constants | ✅ All accept data via props |
| Controlled state where applicable | ✅ AudioPlayer, FlowVisualizer |
| MUI theme-token styling only | ✅ All 11 components |
| TypeScript build clean | ✅ `tsc -b && vite build` passes |
| Internal imports updated | ✅ 7 consumers rewired |

## Stateless Contract Pattern

All components follow this pattern:
```ts
// Domain-neutral props
interface ComponentProps {
    // Data props (strings, numbers, arrays)
    title: string;
    // ...

    // Callback props (parent-owned actions)
    onClick?: () => void;
    // ...

    // Localization injection
    t: (key: string, params?: Record<string, string | number>) => string;
}
```

## Expected Astra Response

Per the Handover Contract, Astra should return:
1. Completed `Mapping-Template.md` or `mapping-report.drishti.json`
2. Decision per component (approved/renamed/duplicate/deferred)
3. Breaking change taxonomy where props are modified
4. Astra package version and commit metadata

## Read Order

1. Component-Audit-Manifest.md (audit results)
2. Component-Inventory.md (master list)
3. 01-Atomic-Elements.md → 02-Molecular-Layouts.md → 03-Organism-Complex-UI.md
4. Handover-Contract.md (process)
5. Mapping-Template.md + mapping-report.template.json (response templates)
