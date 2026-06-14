# StatusDot - Technical Specification

# Overview

A primitive atomic component that renders a colored circular dot indicating status. The dot color is resolved through MUI theme tokens for automatic light/dark mode adaptation. The component is a pure render function — no state, no side effects, no interaction.

# Feature Summary

Displays a circular `<Box>` element with a diameter determined by the `size` prop and a background color mapped from the `tone` prop to a MUI theme color token. The tone-to-color mapping is a static lookup table with a fallback to `text.secondary`. The component is entirely props-driven and produces exactly one DOM node.

# Implementation Reference

## Status
Implemented

## Source Files

| File | Path |
|------|------|
| Component source | `src/common/components/atoms/StatusDot.tsx` |
| Component tests | `src/common/components/atoms/StatusDot.test.tsx` |
| Barrel export | `src/common/components/atoms/index.ts` |

Storybook stories file does not exist for this component.

## Public API

### Exported Symbols

```typescript
// File: src/common/components/atoms/StatusDot.tsx

export type StatusDotTone =
  | 'ok'
  | 'warning'
  | 'error'
  | 'executing'
  | 'waiting'
  | 'default';

export interface StatusDotProps {
  tone: StatusDotTone;
  size?: number;
}

export const StatusDot: FC<StatusDotProps>;
```

### Barrel Re-export

```typescript
// src/common/components/atoms/index.ts
export * from './StatusDot';
```

The named export `StatusDot`, type `StatusDotTone`, and interface `StatusDotProps` are all re-exported via `export *`. Consumers import from the barrel:

```typescript
import { StatusDot, StatusDotTone } from '@/common/components/atoms';
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| **Atom (Atomic Hierarchy)** | `tone` and `size` props → renders single `<Box>` | Smallest indivisible UI unit. No composition of other components. |
| **Stateless UI** | No state, no effects, no data fetching | Pure function of props — identical props produce identical output. |
| **Theme Sovereignty** | `toneColorMap` maps tones to theme token strings (`'success.main'`, `'text.secondary'`) | All colors derive from MUI theme; dark/light mode adaptation is automatic via sx prop resolution. |
| **Public API Stability** | Named export via `export *` from barrel | Clear, stable import path. No internal symbols leaked. |
| **Dependency Safety** | Only imports `FC` from `react`, `Box` from `@mui/material` | Minimal dependency surface; tree-shakeable MUI import. |

Not used: Localization (no user-facing text), `useLanguage`, `useTheme`.

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `StatusDot` (single view) | `src/common/components/atoms/StatusDot.tsx` | Renders a colored circular indicator | Map `tone` to theme color via lookup table; render `<Box>` with dynamic width/height/borderRadius/backgroundColor; apply fallback `default` tone for unknown values; default `size` to 10 | `react` (`FC`), `@mui/material` (`Box`) |

The component has no sub-views, no internal components, and no conditional rendering branches beyond the fallback expression `toneColorMap[tone] || toneColorMap.default`.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|------------------|-------------------|
| `tone` must be a valid `StatusDotTone` | Prop passed at call site | TypeScript compile error at call site if literal is not in the union | Developer fixes the type; runtime no enforcement |
| Unknown `tone` value at runtime | Non-TypeScript caller or dynamic value | Silently falls back to `toneColorMap.default` (`text.secondary`) | No recovery needed — UI shows default grey dot |
| `size` must be number | Prop passed at call site | TypeScript compile error if type mismatched | Developer fixes the type |
| `size` ≤ 0 | Value props of 0 or negative | Renders a `<Box>` with zero width/height — invisible in DOM | No recovery — parent responsible for valid dimensions |
| `tone` omitted | Required prop not provided | TypeScript compile error | Developer must provide `tone` |

No runtime validation is performed. All rules rely on TypeScript static enforcement or silent fallback.

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Unknown tone value | Dynamic string not in `StatusDotTone` union | `toneColorMap[tone]` returns `undefined`; fallback `|| toneColorMap.default` resolves to `text.secondary`; grey dot renders | No visible error; status color is incorrect but dot still visible |
| Negative size | Consumer passes negative number | `<Box>` renders with negative dimension — browser may clip or ignore | Dot may not render |
| Missing tone (runtime) | JS environment without TS | `tone` is `undefined`; `toneColorMap[undefined]` returns `undefined`; fallback resolves to `text.secondary` | Grey dot renders |

The component does not throw, log, or surface any error. No error boundary is provided. Any unhandled error (e.g., from MUI Box rendering) propagates to the parent error boundary.

---

# Non-Functional Requirements

## Performance

- Renders a single `<Box>` with inline `sx` — no virtual DOM overhead beyond a single element.
- No effects, no state, no re-renders triggered internally. Re-render only when parent passes new props.
- No localization hook — skips context subscription entirely.

## Reliability

- All tone values have an explicit entry in `toneColorMap` or fall through to `default`. No unhandled tone path exists.
- `size` has an ES2020 default parameter — no `undefined` size will cause NaN dimensions.
- Theme token strings are resolved by MUI's `sx` engine — invalid tokens render as transparent but do not crash.

## Maintainability

- Adding a new tone: add one entry to `toneColorMap` and one union member to `StatusDotTone`. No conditional logic change.
- Color mapping is a plain object — no switch/if-else branching.
- No external dependencies beyond `react` and `@mui/material`.

---

# Architecture Compliance Review

## Applied Patterns

- Stateless UI — fully compliant (zero state, zero effects).
- Atom tier compliance — renders single primitive, no composition, no business logic.
- Theme sovereignty — all colors via theme token strings in sx.
- Public API — named export with explicit type exports.

## Risks

- **No Storybook stories**: Missing visual regression coverage for size variants and tone colors across themes.
- **No accessibility attributes**: Dot has no `aria-label`, `role`, or `title`. Screen readers cannot interpret the indicator. The Box is an empty `<div>` with no semantic meaning. Future tooltip or label enhancement is noted in the feature spec.
- **Theme resolution silent failure**: If `toneColorMap` contains a token string not present in the consumer's theme, the dot renders transparent (no visible error).

## Gaps

- Pulse animation for `executing` tone (feature spec "Future Enhancements") — not implemented.
- Tooltip support — not implemented.
- Accessibility `aria-label` mapping per tone — not implemented.

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Component | `src/common/components/atoms/StatusDot.tsx` | `StatusDot` (component), `StatusDotTone` (type), `StatusDotProps` (interface) | `react` (`FC`), `@mui/material` (`Box`) |
| Barrel | `src/common/components/atoms/index.ts` | Re-exports all from `StatusDot.tsx` via `export *` | `./StatusDot` |
| Tests | `src/common/components/atoms/StatusDot.test.tsx` | None | `@testing-library/react`, `vitest`, `./StatusDot` |

---

# Final Rule

StatusDot is a pure, stateless atomic indicator. All visual output is a direct function of the two props: `tone` (determines color via theme token lookup) and `size` (determines diameter). The component produces exactly one `<Box>` DOM node with no children, no lifecycle, and no side effects. It must never import from higher tiers, accept domain data, or manage state.
