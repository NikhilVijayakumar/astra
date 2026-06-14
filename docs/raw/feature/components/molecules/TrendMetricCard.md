---
tier: molecule
---

# TrendMetricCard

A molecular component that displays a metric value with an optional trend indicator.

## Overview

A compact card component for displaying key metrics with optional trend visualization. Shows a label, value, and trend percentage with color-coded direction.

## Responsibilities

- Display a metric label and value in a compact card
- Show an optional trend indicator with color-coded direction (up/down/neutral)
- Adapt to container width

## API

### Props

| Prop         | Type                 | Default   | Description                                |
| ------------ | -------------------- | --------- | ------------------------------------------ |
| `label`      | `string`             | Required  | Metric label/category                      |
| `value`      | `string` \| `number` | Required  | The metric value to display                |
| `trendValue` | `string`             | undefined | Trend indicator text (e.g., "+12%", "-5%") |
| `trend`      | `MetricTrend`        | undefined | Trend direction ('up', 'down', 'neutral')  |

### Type Definitions

```typescript
export type MetricTrend = "up" | "down" | "neutral";

export interface TrendMetricCardProps {
  label: string;
  value: string | number;
  trendValue?: string;
  trend?: MetricTrend;
}
```

### Color Mapping

| Trend                 | Color            |
| --------------------- | ---------------- |
| `up`                  | `success.main`   |
| `down`                | `error.main`     |
| `neutral` / undefined | `text.secondary` |

### Styling Details

- Label: `variant="micro"`, color: `text.secondary`
- Value: `variant="h5"`, tabular numbers
- Trend: `variant="captionBold"`
- Padding: `spacing.md`
- Border: `1px solid divider`

## Validation Rules

- `label` and `value` are required — TypeScript compilation fails if either is omitted
- `trendValue` and `trend` are optional
- `trend` must be a valid `MetricTrend` value (`"up"`, `"down"`, `"neutral"`) — unknown values fall back to `text.secondary` color
- `value` accepts `string | number` — both are rendered as-is via `toString()`

## Error Handling

- No trend indicator renders when `trendValue` is falsy (undefined, null, empty string)
- Unknown `trend` value: arrow icon renders in `text.secondary` color (neutral treatment)
- `value=0` or `value="0"` renders normally — zero is a valid metric value
- No error state or error boundary — purely presentational

## States

- **Loaded**: Default — label and value displayed
- **With trend**: `trendValue` and `trend` provided — trend indicator rendered with color-coded direction
- **Without trend**: `trendValue` omitted — only label and value shown

## Inputs/Outputs

- **Inputs**: `label` (string, required), `value` (string | number, required), `trendValue` (string, optional), `trend` (MetricTrend, optional)
- **Outputs**: Renders a `<Box>` card with label Typography, value Typography, and optional trend indicator with arrow icon; no callbacks

## Error Conditions

- **Missing `label` or `value`**: TypeScript compile error
- **Unknown `trend` value**: Arrow renders in `text.secondary` (neutral treatment)
- **`trend="up"` without `trendValue`**: Trend prop is ignored — nothing renders

## Future Enhancements

- Sparkline or mini-chart visualization below the metric value
- Click or hover interaction for drill-down navigation
- Configurable value formatting (decimal places, prefix/suffix)

## Open Questions

- Should trend arrows animate on value change for live-updating dashboards?
- What is the minimum card width before layout wrapping or truncation should trigger?

## Non-Responsibilities

- Does not fetch or calculate metric data
- Does not format values beyond rendering them as-is
- Does not handle click events or user interaction
- Does not animate trend changes or value transitions
- Does not provide chart or sparkline visualization

## Edge Cases

- No `trendValue` provided: trend indicator element is not rendered (checked via `!!trendValue`)
- `trendValue` provided but `trend` omitted: trend renders with `text.secondary` color (neutral gray)
- `trendValue` is an empty string: trend indicator is not rendered (empty string is falsy)
- `trend="up"` without `trendValue`: no trend renders; the `trend` prop is effectively ignored when `trendValue` is missing
- Very long `label` or `value`: text wraps within the card
- `value` of `0` or `"0"`: renders normally as a numeric value
- Card width context: the component uses `flex: 1` and adapts to its container's width

## Usage Example

const MetricsDashboard = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <TrendMetricCard
      label="Total Users"
      value={1250}
      trendValue="+12%"
      trend="up"
    />
    <TrendMetricCard
      label="Active Sessions"
      value={842}
      trendValue="-3%"
      trend="down"
    />
    <TrendMetricCard label="Conversion Rate" value="24.5%" />
  </div>
);
```

## Core Concepts

- **Metric display pattern**: Combines label, value, and optional trend into a single compact card — a reusable primitive for dashboard metric visualizations.
- **Conditional trend rendering**: The trend indicator (arrow + text) only renders when `trendValue` is truthy — checked via `!!trendValue` guard, making the `trend` prop inert without a value.
- **Color-coded direction mapping**: Trend direction maps to semantic theme colors (`success.main` for up, `error.main` for down, `text.secondary` for neutral) — consistent with the app's status color system.
- **Fluid width adaptation**: Uses `flex: 1` to fill available container space — designed to work in flex row layouts as part of a metric row group.

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/TrendMetricCard.tsx`
