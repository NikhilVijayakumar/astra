# TrendMetricCard

---

# Feature Summary

A compact metric display molecule showing a label, value, and optional color-coded trend indicator. Designed for dashboard metric rows with fluid width adaptation (`flex: 1`). Trend direction maps to semantic theme colors (up → success.main, down → error.main, neutral → text.secondary).

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Role |
|------|------|
| `src/common/components/molecules/TrendMetricCard.tsx` | Component implementation |
| `src/common/components/molecules/TrendMetricCard.test.tsx` | Unit tests (vitest, 7 tests) |
| `src/common/components/molecules/index.ts` | Barrel re-export |

## Public API
```typescript
import { TrendMetricCard, TrendMetricCardProps, MetricTrend } from "astra";
import { TrendMetricCard, TrendMetricCardProps, MetricTrend } from "@/common/components/molecules/TrendMetricCard";

export type MetricTrend = "up" | "down" | "neutral";

export interface TrendMetricCardProps {
  label: string;
  value: string | number;
  trendValue?: string;
  trend?: MetricTrend;
}
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Molecule (Atomic Design) | Composes MUI atoms (Box, Typography) with layout structure | No imports from organism/template tiers; only atom-level MUI components |
| Stateless UI | Purely props-driven — no internal state, effects, or data lifecycle | All rendering determined by `label`, `value`, `trendValue`, `trend` props at render time |
| Theme Sovereignty | All style values use theme tokens | Colors via semantic token strings (`'success.main'`, `'error.main'`, `'text.secondary'`, `'text.primary'`); spacing via `spacing.md`, `spacing.sm`, `spacing.xs`; border via `'divider'` |
| Localization | No hardcoded user-facing strings | `label` and `trendValue` are props — caller provides translated strings |

---

# Technical Structure

## Views table

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| TrendMetricCard (root) | `src/common/components/molecules/TrendMetricCard.tsx` | Renders metric card with label, value, optional trend | Render label Typography (`variant="micro"`, `text.secondary`); render value Typography (`variant="h3"`, tabular numbers); conditionally render trend indicator with color-coded direction | `react` (FC), `@mui/material` (Box, Typography), `../../../theme/tokens/spacing` |

## Spec vs Source Discrepancies

| Spec | Source (Actual) | Impact |
|------|----------------|--------|
| Value `variant="h5"` | Value `variant="h3"` | Typography size differs — actual output is larger than spec describes |
| Trend `variant="captionBold"` | Trend `variant="caption"` | MUI does not export `"captionBold"` as a standard variant — source uses `"caption"` with `fontWeight: 600` for bold effect |
| No arrow icon | No arrow icon | Spec mentions "arrow icon with color-coded direction" in overview but actual source does not render an arrow — only colored text |

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `label` required | Not provided | TypeScript compile error | N/A |
| `value` required | Not provided | TypeScript compile error | N/A |
| `trendValue` optional | Not provided / empty string / null | Trend `<Typography>` not rendered (guard: `!!trendValue`) | Card shows label and value only |
| `trend` optional | Not provided | Trend color defaults to `'text.secondary'` | Neutral gray arrow-less text displayed |
| Unknown `trend` value | `trend` set to non-union value | Maps to `'text.secondary'` (neutral fallback) | Trend renders as neutral |
| `value=0` | Zero numeric value | Renders `"0"` normally | Valid metric display |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing trendValue | No `trendValue` prop | Trend element not rendered | Card displays label and value only |
| Unknown trend | `trend` set to unrecognized value | Falls to `'text.secondary'` via the ternary chain | Trend renders in neutral gray |
| `trend="up"` without trendValue | `trend` set but `trendValue` omitted | Trend element not rendered (`!!trendValue` guard skips) | No trend shown; trend prop ignored |

---

# Non-Functional Requirements
## Performance
- Single render pass — no effects, no state
- Minimal re-render on any prop change
- No lazy loading or code splitting needed

## Reliability
- TypeScript enforces required props at compile time
- Trend color mapping is deterministic via inline ternary chain
- Zero is a valid display value — no falsy-value bugs

## Maintainability
- ~69 lines, single file
- Clear color-mapping ternary in JSX
- Spacing values from token constants

---

# Architecture Compliance Review
## Applied Patterns
- **Conditional trend rendering**: `!!trendValue` guard prevents rendering when no trend text is present
- **Fluid width**: `flex: 1` enables use in flex row metric groups
- **Semantic color mapping**: Trend direction maps to theme semantic colors — consistent with rest of design system
- **Molecule tier compliance**: No data fetching, no business logic, no organism imports

## Risks
- `value` prop typed as `string | number` with no formatting support — consumers must pre-format
- No `MetricTrend` validation at runtime — unknown values silently fall back to `text.secondary`

## Gaps
- [Gap] Font variant names in spec (`"h5"`, `"captionBold"`) do not match source implementation (`"h3"`, `"caption"`) — spec is outdated relative to implementation

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| TrendMetricCard | `src/common/components/molecules/TrendMetricCard.tsx` | `MetricTrend` (type), `TrendMetricCardProps` (interface), `TrendMetricCard` (component) | `react`, `@mui/material`, `../../../theme/tokens/spacing` |
| molecules index | `src/common/components/molecules/index.ts` | Re-exports all above | `./TrendMetricCard` |

---

# Final Rule

Purely presentational. No state. No interactions. No formatting logic. Consumers pre-format values and provide translated labels. Trend rendering is gated by `trendValue` content, not `trend` direction.
