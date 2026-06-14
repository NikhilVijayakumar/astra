# SeverityBadge - Technical Specification

# Overview

An atomic component that renders a severity label badge with color-coded background and text. The badge is a single `<Typography>` element with MUI `variant="micro"` and semi-transparent background derived from the theme palette. Unknown severity levels fall back to `info.main` styling.

# Feature Summary

Renders a `<Typography>` element with the `level` prop text as content. Background and text color are determined by a lookup table that maps level strings to MUI theme color tokens. Background uses hex alpha transparency (`${tone}15`). The component accepts any string at runtime via `SeverityLevel | string` — known keys get color-coded styling; unknown keys render as info-styled text.

# Implementation Reference

## Status
Implemented

## Source Files

| File | Path |
|------|------|
| Component source | `src/common/components/atoms/SeverityBadge.tsx` |
| Component tests | `src/common/components/atoms/SeverityBadge.test.tsx` |
| Barrel export | `src/common/components/atoms/index.ts` |

Storybook stories file does not exist for this component.

## Public API

### Exported Symbols

```typescript
// File: src/common/components/atoms/SeverityBadge.tsx

export type SeverityLevel =
  | 'CRITICAL'
  | 'WARNING'
  | 'URGENT'
  | 'INFO'
  | 'SUCCESS';

export interface SeverityBadgeProps {
  level: SeverityLevel | string;
}

export const SeverityBadge: FC<SeverityBadgeProps>;
```

### Barrel Re-export

```typescript
// src/common/components/atoms/index.ts
export * from './SeverityBadge';
```

All named exports (`SeverityBadge`, `SeverityLevel`, `SeverityBadgeProps`) are re-exported via `export *`.

```typescript
import { SeverityBadge, SeverityLevel } from '@/common/components/atoms';
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| **Atom (Atomic Hierarchy)** | Single `<Typography>` element with sx styling | One primitive DOM node; no composition of other components. |
| **Stateless UI** | No state, no effects, no callbacks | Pure render function — output is solely determined by `level` prop. |
| **Theme Sovereignty** | Color values resolve through MUI theme: `'error.main'`, `'warning.main'`, `'success.main'`, `'info.main'` | All colors are theme token strings; no hardcoded hex/rgb values. Spacing uses token imports from `src/theme/tokens/spacing`. |
| **Public API Stability** | Named export via barrel; typed union with runtime-friendly `| string` widening | TypeScript consumers get autocomplete for known levels; dynamic data consumers pass arbitrary strings. |
| **Dependency Safety** | Imports `FC` from `react`, `Typography` from `@mui/material`, `spacing` from theme tokens | Minimal dependency surface; theme token import is tree-shakeable. |

Not used: Localization (text is the `level` prop itself, not a user-facing string), `useLanguage`, `useTheme`.

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `SeverityBadge` (single view) | `src/common/components/atoms/SeverityBadge.tsx` | Renders a color-coded severity label badge | Map `level` to theme color via `colorMap` lookup with `'info.main'` fallback; render `<Typography variant="micro">` with the level text; apply semi-transparent background via hex alpha (`${tone}15`); apply spacing tokens (`spacing.sm`, `spacing.internal`), borderRadius `1` | `react` (`FC`), `@mui/material` (`Typography`), `../../../theme/tokens/spacing` (`spacing`) |

The component renders a single view with no sub-views. The entire output is one `<Typography>` element.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|------------------|-------------------|
| `level` must be provided | Prop omitted at call site | TypeScript compile error | Developer provides `level` |
| `level` is a known `SeverityLevel` | Uppercase matching string | Color mapping applies correct styling | N/A — correct behavior |
| `level` is lowercase e.g. `"critical"` | Dynamic string at runtime | `colorMap[level]` returns `undefined`; fallback `|| 'info.main'` applies `info.main` styling | Text renders with info color (visual mismatch) |
| `level` is any unrecognized string | External data source | Fallback to `'info.main'` | Badge renders as info-styled |
| `level` is `"ERROR"` | Explicit string | `colorMap` has `ERROR` alias mapping to `'error.main'` | Badge renders as error-styled (CRITICAL alias) |

The `colorMap` includes an `ERROR` -> `'error.main'` alias not present in the `SeverityLevel` union, allowing `"ERROR"` as a recognized but untyped level.

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Unknown level string | External data source passes unrecognized value | `colorMap[level] || 'info.main'` resolves to `'info.main'`; badge renders in info color | Badge appears with incorrect severity color; text is still the provided level |
| Case-sensitive mismatch | Lowercase input like `"critical"` | `colorMap["critical"]` is `undefined`; fallback to `'info.main'` | Severity color is wrong (info instead of error) |
| Very long level text | Consumer passes long string | `nowrap` is not set — text wraps within badge; layout may expand | Badge may grow wider or taller than intended |
| Missing `level` (runtime) | JS without TS | `level` is `undefined`; `colorMap[undefined]` returns `undefined`; `'info.main'` fallback | Badge renders with "undefined" text in info color |

The component throws no errors, logs no warnings. No error boundary is provided.

---

# Non-Functional Requirements

## Performance

- Single MUI `<Typography>` element with inline `sx` — minimal DOM footprint.
- No state, no effects, no re-renders beyond prop changes.
- Theme spacing tokens are imported statically — no runtime context resolution required for spacing values.

## Reliability

- Every input path resolves: known key → mapped color; unknown key → `'info.main'`. No unhandled level exists.
- Hex alpha format (`${tone}15`) is a CSS `background-color` string — if `tone` resolves to an invalid token, `'info.main'` is still a valid CSS color string because MUI resolves theme token strings. If `tone` itself is `undefined` (impossible given fallback), the template string produces `"undefined15"` which is invalid CSS but does not throw — the property is silently ignored by the browser.

## Maintainability

- Adding a new severity level: add one entry to `SeverityLevel` union and one entry to `colorMap`. No branch logic.
- Changing color assignments: update the value in `colorMap` — no conditional changes.
- Spacing and borderRadius are literal values from token imports — single point of change.

---

# Architecture Compliance Review

## Applied Patterns

- Stateless UI — fully compliant (zero state, zero effects).
- Atom tier — renders a single typographic element with styling, no composition.
- Theme sovereignty — colors via theme token strings; spacing via token imports; no hardcoded pixel values.
- Public API — stable named export with typed union widened with `string` for dynamic callers.

## Risks

- **No Storybook stories**: Missing visual regression coverage for all 5 levels + unknown/custom levels. No dark mode visual verification through stories.
- **Hex alpha opacity mismatch**: The feature spec documents 12% opacity backgrounds, but the implementation uses `${tone}15` which evaluates to ~8% opacity (hex `15` = 21/255). This is a spec vs. implementation drift.
- **`borderRadius: 1` is a raw number**: While MUI resolves number values via `theme.shape.borderRadius` factor, `1` here is a raw value bypassing explicit theme token usage. The feature spec says `spacing.internal` should be used.
- **No accessibility**: The badge has no `role`, `aria-label`, or semantic HTML. Color is the only differentiator — no icon or text-style distinction for colorblind users.

## Gaps

- Icon slot (feature spec "Future Enhancements") — not implemented.
- Size presets — not implemented.
- Animated entrance — not implemented.
- `ERROR` alias exists in code but is undocumented in the feature spec.

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Component | `src/common/components/atoms/SeverityBadge.tsx` | `SeverityBadge` (component), `SeverityLevel` (type), `SeverityBadgeProps` (interface) | `react` (`FC`), `@mui/material` (`Typography`), `../../../theme/tokens/spacing` (`spacing`) |
| Barrel | `src/common/components/atoms/index.ts` | Re-exports all from `SeverityBadge.tsx` via `export *` | `./SeverityBadge` |
| Tests | `src/common/components/atoms/SeverityBadge.test.tsx` | None | `@testing-library/react`, `vitest`, `./SeverityBadge` |

---

# Final Rule

SeverityBadge is a pure, stateless label atom. Its visual output — background color, text color, spacing, and border radius — is a deterministic function of the `level` prop. Every string input resolves to a valid color output via the `colorMap` lookup with `'info.main'` fallback. The component must never hold state, respond to user interaction, or import from higher atomic tiers.
