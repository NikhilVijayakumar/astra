# Card

---

# Feature Summary

A versatile card molecule that wraps content in a Paper-based premium surface with an optional header containing title, supporting text, and action slot. Follows slot-based composition — each section (title, supportingText, action, children) renders independently and can be omitted without affecting others.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Role |
|------|------|
| `src/common/components/molecules/Card.tsx` | Component implementation |
| `src/common/components/molecules/Card.test.tsx` | Unit tests (vitest, 6 tests) |
| `src/common/components/molecules/index.ts` | Barrel re-export |

## Public API
```typescript
import { Card, CardProps } from "astra"; // via barrel
import { Card, CardProps } from "@/common/components/molecules/Card";

export interface CardProps {
  title?: string;
  supportingText?: string;
  children?: ReactNode;
  action?: ReactNode;
}
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Molecule (Atomic Design) | Composes MUI atoms (Paper, Box, Typography) into a functional Card unit | `src/common/components/molecules/Card.tsx` — composes primitive MUI components only; no imports from organism/template tiers |
| Stateless UI | All data arrives via props; no internal state, no data fetching, no side effects | Props-driven rendering: title, supportingText, children, action are all optional and rendered conditionally |
| Theme Sovereignty | All visual values derive from theme tokens | Uses `spacing.lg`, `spacing.xs`, `spacing.internal`; border uses `'divider'`, background uses `'background.paper'`, typography uses `'text.primary'` / `'text.secondary'` |
| Localization | No hardcoded user-facing strings in component | Localization is the consumer's responsibility — caller passes already-translated strings via props |
| Dependency Safety | Minimal dependency surface — only MUI core and local spacing tokens | No additional heavy imports beyond `@mui/material` (Box, Paper, Typography) and `../theme/tokens/spacing` |

---

# Technical Structure

## Views table

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| Card (root) | `src/common/components/molecules/Card.tsx` | Renders a Paper container with optional header and children body | Render Paper with border-based styling; conditionally render title/supportingText header; render action slot; render children body | `react` (ReactNode), `@mui/material` (Box, Paper, Typography), `../../../theme/tokens/spacing` |

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| Title is optional | No `title` prop passed | Title `<Typography>` element is not rendered | Supporting text still renders; action still renders; header row renders supportingText only |
| supportingText is optional | No `supportingText` prop passed | supportingText `<Typography>` element is not rendered | Title still renders; action still renders |
| action is optional | No `action` prop passed | Action `<Box>` is not rendered | Title and supportingText still render in header |
| children is optional | No `children` prop passed | Children `<Box>` renders empty | Header still renders if any header prop is provided; empty Paper surface with padding and border is visible |
| All header props omitted | No `title`, `supportingText`, or `action` | Header row `<Box>` is not rendered (guard: `(title \|\| supportingText \|\| action) &&`) | Children body renders directly inside Paper |
| All props omitted | No props at all | Renders empty Paper with padding, border, border-radius, flex column layout | Visible as a minimal surface with no content |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing header content | All header props omitted | Header row is absent from DOM | Card displays children only; no visual break |
| Empty children | No children passed | Empty Box with `flexGrow: 1` renders | Card body is blank but header remains visible |
| N/A | All props optional | TypeScript compilation succeeds with any subset of props | No runtime errors possible from prop shape |

---

# Non-Functional Requirements
## Performance
- Single render pass — no effects, no memoization needed
- Minimal re-render scope: re-renders only when props change
- No external style system overhead — MUI `sx` prop handles styling

## Reliability
- No runtime validation — relies entirely on TypeScript static checking
- All rendering is deterministic given same props
- No error boundary — errors in children propagate to consumer

## Maintainability
- Single file, ~66 lines
- Clear slot-based prop interface with optional sections
- Spacing values from token system (`spacing.lg`, `spacing.xs`) — no magic numbers

---

# Architecture Compliance Review
## Applied Patterns
- **Slot composition**: Header row conditionally rendered via boolean guard — eliminates empty wrapper DOM
- **Premium styling**: Border-based surface (`elevation={0}`, `border: '1px solid'`, `borderColor: 'divider'`) instead of shadow-based
- **Molecule tier compliance**: Composes only MUI primitives (Paper, Box, Typography) — all atom-level. No imports from `organisms/` or `templates/`
- **No business logic**: Pure rendering — no calculations, no data transformations

## Risks
- No `displayName` set on the component — may affect DevTools identification
- `fontWeight={600}` is a raw numeric value (not a theme token like `fontWeightBold`) — minor theme-sovereignty gap per invariant rules

## Gaps
- [Gap] Hardcoded `fontWeight={600}` should reference `theme.typography.fontWeightBold` or equivalent token for full theme compliance

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Card | `src/common/components/molecules/Card.tsx` | `CardProps` (interface), `Card` (component) | `react`, `@mui/material`, `../../../theme/tokens/spacing` |
| molecules index | `src/common/components/molecules/index.ts` | Re-exports `Card` and `CardProps` | `./Card` |

---

# Final Rule

All data arrives via props. No internal state. No data fetching. Theme sovereignty must be maintained — any hardcoded style values (e.g., `fontWeight: 600`) should be replaced with theme token references.
