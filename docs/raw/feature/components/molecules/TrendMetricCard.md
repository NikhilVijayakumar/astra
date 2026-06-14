---
tier: molecule
---

# TrendMetricCard

A molecular component that displays a metric value with an optional trend indicator.

## Overview

A compact card component for displaying key metrics with optional trend visualization. Shows a label, value, and trend percentage with color-coded direction.

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

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/TrendMetricCard.tsx`
