---
tier: atom
---

# SeverityBadge

An atomic component that displays a severity label with color-coded background.

## Overview

A text badge component that displays severity levels (CRITICAL, WARNING, URGENT, INFO, SUCCESS) with appropriate styling. Uses semi-transparent backgrounds for visual hierarchy.

## Responsibilities

- Render a color-coded severity label badge
- Map severity levels to semi-transparent background and matching text color
- Accept any string level input with fallback to default info styling

## API

### Props

| Prop    | Type                        | Default  | Description                   |
| ------- | --------------------------- | -------- | ----------------------------- |
| `level` | `SeverityLevel` \| `string` | Required | The severity level to display |

### Type Definitions

```typescript
export type SeverityLevel =
  | "CRITICAL"
  | "WARNING"
  | "URGENT"
  | "INFO"
  | "SUCCESS";
```

### Styling Mapping

| Level            | Background                   | Text Color     |
| ---------------- | ---------------------------- | -------------- |
| `CRITICAL`       | `error.main` @ 12% opacity   | `error.main`   |
| `WARNING`        | `warning.main` @ 12% opacity | `warning.main` |
| `URGENT`         | `warning.main` @ 12% opacity | `warning.main` |
| `SUCCESS`        | `success.main` @ 12% opacity | `success.main` |
| `INFO` (default) | `info.main` @ 12% opacity    | `info.main`    |

### Styling Details

- Typography: `variant="captionBold"`
- Padding: `px: spacing.sm`, `py: spacing.internal`
- Border radius: `spacing.internal` (inherits from theme tokens)

## Non-Responsibilities

- Does not display icons, emojis, or visual indicators alongside text
- Does not handle click events or user interaction
- Does not manage or persist state
- Does not transform or format the level value — text is displayed as provided

## Edge Cases

- Unknown `level` value: falls back to `info.main` styling via `colorMap[level] || 'info.main'`
- Case-sensitive matching: the color map keys are uppercase (`"CRITICAL"`, `"WARNING"`); lowercase input like `"critical"` falls back to info styling
- The `level` prop accepts `SeverityLevel | string` — any string value is valid, but only known values get color-coded styling
- Very long level text: text wraps but `nowrap` is not set, so long text may break the badge layout
- `level` accepts `"ERROR"` as an alias for `"CRITICAL"` in the color map (displayed text remains as provided)

## Usage Example

```tsx
import { SeverityBadge, SeverityLevel } from '@/common/components/atoms/SeverityBadge';

const AlertItem = ({ severity }) => {
  return (
    <div>
      <SeverityBadge level={severity} />
    </div>
  );
};

// Usage
<SeverityBadge level="CRITICAL" />
<SeverityBadge level="WARNING" />
<SeverityBadge level="SUCCESS" />
```

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/SeverityBadge.tsx`
