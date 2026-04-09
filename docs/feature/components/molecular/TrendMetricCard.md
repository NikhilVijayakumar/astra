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

## Usage Example

```tsx
import { TrendMetricCard } from "@/components/ui/TrendMetricCard";

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

## Source

`src/components/ui/TrendMetricCard.tsx`
