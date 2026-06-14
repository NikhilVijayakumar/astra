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

## Non-Responsibilities

- Does not display text, labels, or tooltips
- Does not handle click events or user interaction
- Does not animate state transitions or pulse on changes
- Does not manage or persist state

## Edge Cases

- `tone` is required — omitting it triggers a TypeScript error
- Unknown tone value: falls back to `default` (`text.secondary`) via `toneColorMap[tone] || toneColorMap.default`
- `size` defaults to 10 pixels when not provided
- Size of 0: renders a dot with no dimensions (invisible but still in DOM)
- Large size values: dot scales accordingly with no upper bound

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
