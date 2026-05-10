---
tier: atom
---

# SeverityBadge

An atomic component that displays a severity label with color-coded background.

## Overview

A text badge component that displays severity levels (CRITICAL, WARNING, URGENT, INFO, SUCCESS) with appropriate styling. Uses semi-transparent backgrounds for visual hierarchy.

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
