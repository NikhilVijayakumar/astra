# SummaryPanel — Technical Blueprint

---

# Feature Summary

A bordered panel template that renders a title header and a mapped array of `SummaryLine` text entries with variant-based typography hierarchy (`body2` inline / `caption` block).

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Purpose |
|------|---------|
| `src/common/components/templates/SummaryPanel.tsx` | Component implementation |
| `src/common/components/templates/SummaryPanel.test.tsx` | Unit tests (vitest) |
| `src/common/components/templates/index.ts` | Barrel re-export |
| `src/theme/tokens/spacing.ts` | Token dependency |

## Public API

```typescript
// Exported from src/common/components/templates/index.ts → lib.ts
export interface SummaryLine {
  text: string;
  variant?: "body2" | "caption";
}

export interface SummaryPanelProps {
  title: string;
  lines: SummaryLine[];
}

export const SummaryPanel: FC<SummaryPanelProps>;
```

---

# Architecture Mapping
| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Atomic Hierarchy | Template tier | Composes MUI atoms (Box, Typography). Defines section-level layout. No business logic. |
| Stateless UI | Fully compliant | Props-only (`title`, `lines`). No useState, no effects, no API calls. Pure render function. |
| Theme Sovereignty | Token-based | Uses `spacing.lg`, `spacing.sm` from theme tokens. Border, radius, colors via MUI sx theme path. |
| Localization | Not yet applied | `title` and `line.text` are raw string props — consumer must pass translated strings. |
| Dependency Safety | Minimal | Depends only on React, MUI Box/Typography, internal spacing token. |
| Public API Stability | Stable | Exported via barrel from `templates/index.ts`. `SummaryPanelProps` and `SummaryLine` are public types. |

---

# Technical Structure

## Views
| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| SummaryPanel | `src/common/components/templates/SummaryPanel.tsx` | Render bordered panel | Render title (h4), map lines to Typography elements with variant-aware display (inline/block) | `react`, `@mui/material`, `theme/tokens/spacing` |

## Data Flow Sequence
```
Consumer passes title and lines[]
  → SummaryPanel renders Box with border
    → Typography (h4) for title
    → lines.map → Typography (body2 | caption) per line
```

## Invariant Rules
- `title` is required string — TypeScript enforced
- `lines` is required `SummaryLine[]` — TypeScript enforced
- `SummaryLine.variant` defaults to `"body2"` via `line.variant ?? "body2"`
- `variant === "caption"` sets `display: "block"`; otherwise `display: "inline"`
- All text color: `text.secondary`
- All spacing via theme token constants (`spacing.lg`, `spacing.sm`)
- Composition only — no state, effects, refs, or callbacks

---

# Validation Design
| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `title` is string | TypeScript | Compilation error | Fix call-site |
| `lines` is array | TypeScript | Compilation error | Fix call-site |
| `variant` not provided | JS `??` operator | Defaults to `body2` | Automatic grace |
| Empty `lines` array | Runtime render | Title renders with no body content | N/A — valid state |
| Long text | Runtime | Wraps within panel width | N/A — CSS handles |

---

# Error Handling
| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing `title` | Consumer omits required prop | TypeScript compilation error | Provide `title` |
| Missing `lines` | Consumer omits required prop | TypeScript compilation error | Provide `lines` |
| `lines` of wrong type | Consumer passes non-array | TypeScript compilation error | Pass `SummaryLine[]` |
| Empty array | Consumer passes `[]` | Renders title only | Add lines or accept state |
| Undefined `variant` | Line object omits variant | Defaults to `body2` | No action needed |

---

# Non-Functional Requirements
- **Performance**: O(n) render over `lines` array. No re-renders trigger (pure component, no state).
- **Accessibility**: Typography inherits MUI a11y defaults. No interactive elements — no keyboard requirement.
- **Bundle**: Depends only on MUI Box, MUI Typography, internal spacing token. No added runtime.
- **Testability**: 4 tests cover title render, multi-line render, variant branches (`body2`, `caption`, default).

---

# Architecture Compliance Review
## Applied Patterns
- Template tier within Atomic Hierarchy — section-level layout only
- Props-driven, stateless rendering
- Theme token spacing via `spacing.ts` constants (not hardcoded px)
- Data-driven line rendering via `lines.map`

## Risks
- `title` and `SummaryLine.text` are raw strings — localization not built in. Consumer must pre-translate.
- No `key` uniqueness guarantee beyond `${line.text}-${index}` — duplicate text + index collision possible if order changes. Consider `React.useId()` or stable key.
- No max-height with scroll — very long line lists extend panel indefinitely.

## Gaps
- Localization invariant not enforced internally
- No HTML `aria-label` or `role` on panel container
- No loading/error/empty sub-states — only `lines.length === 0` is visible

---

# Module Map
| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| SummaryPanel | `src/common/components/templates/SummaryPanel.tsx` | `SummaryPanel`, `SummaryLine`, `SummaryPanelProps` | `react`, `@mui/material` (`Box`, `Typography`), `theme/tokens/spacing` |
| templates barrel | `src/common/components/templates/index.ts` | `SummaryPanel`, `PageHeader`, `HeroSection`, all related types | re-exports from individual modules |

---

# Final Rule

SummaryPanel must remain a stateless, props-driven template tier component that receives pre-translated `title` and `lines` arrays. No internal state, effects, or data fetching may be added. All visual properties must derive from theme tokens only.
