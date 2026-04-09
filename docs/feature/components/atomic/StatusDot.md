---
tier: atom
---

# StatusDot

An atomic component that displays a colored dot representing a status indicator.

## Overview

A simple circular indicator that uses color to convey status information. Automatically adapts to MUI theme colors.

## API

### Props

| Prop   | Type            | Default  | Description                   |
| ------ | --------------- | -------- | ----------------------------- |
| `tone` | `StatusDotTone` | Required | The status tone to display    |
| `size` | `number`        | `10`     | Diameter of the dot in pixels |

### Type Definitions

```typescript
export type StatusDotTone =
  | "ok"
  | "warning"
  | "error"
  | "executing"
  | "waiting"
  | "default";
```

### Color Mapping

| Tone        | Theme Color      |
| ----------- | ---------------- |
| `ok`        | `success.main`   |
| `warning`   | `warning.main`   |
| `waiting`   | `warning.main`   |
| `error`     | `error.main`     |
| `executing` | `info.main`      |
| `default`   | `text.secondary` |

## Usage Example

```tsx
import { StatusDot } from "@/common/components/atoms/StatusDot";

const StatusIndicator = ({ status }) => {
  const toneMap = {
    running: "executing",
    pending: "warning",
    complete: "ok",
    failed: "error",
  };

  return <StatusDot tone={toneMap[status]} size={12} />;
};
```

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/StatusDot.tsx`
