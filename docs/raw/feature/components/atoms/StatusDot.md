---
tier: atom
---

# StatusDot

An atomic component that displays a colored dot representing a status indicator.

## Overview

A simple circular indicator that uses color to convey status information. Automatically adapts to MUI theme colors.

## Responsibilities

- Render a colored circular dot representing a status tone
- Map status tones to MUI theme colors (ok, warning, error, executing, waiting, default)
- Support configurable dot size

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

## Validation Rules

- `tone` is required — TypeScript compilation fails if omitted
- `tone` must be a valid `StatusDotTone` value at runtime; unknown values fall back to `default`
- `size` defaults to `10` when not provided or `undefined`
- No runtime validation on `size` — any number is accepted; values ≤ 0 render an invisible dot

## Error Handling

- Unknown `tone` values are silently mapped to `default` (`text.secondary`) — no error is thrown
- The component does not throw or surface errors for any prop combination
- No error boundary is provided — unhandled errors propagate to the parent

## States

- **Idle**: Default rendering state — dot is displayed with the mapped tone color
- **Active**: The dot is always "active" since it is a static indicator — no interactive states
- **Disabled**: Not applicable — no user interaction

## Inputs/Outputs

- **Inputs**: `tone` (StatusDotTone, required), `size` (number, optional, default 10)
- **Outputs**: Renders a `<Box>` element with a circular colored dot via `sx` styling; no callbacks or side effects

## Error Conditions

- **Unknown tone value**: Silently falls back to `default` (`text.secondary`) — no warning logged
- **Size ≤ 0**: Dot renders with zero dimensions — invisible but present in DOM
- **Missing tone**: TypeScript compile error; runtime behavior is undefined

## Future Enhancements

- Pulse animation variant for the `executing` tone to indicate active processing
- Tooltip support to display human-readable status labels on hover
- Accessibility improvements via `aria-label` mapping per tone

## Open Questions

- Should pulse animation be configurable or always-on for the `executing` tone?
- What minimum `size` ensures visibility across all supported display densities and themes?

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

## Core Concepts

- **Color mapping via lookup table**: The `toneColorMap` object maps each `StatusDotTone` to a MUI theme color key — no conditional logic, no branching. Adding a new tone means adding one entry to the map.
- **MUI theme token integration**: Colors are resolved through MUI's theme system (`theme.palette.success.main`, etc.), ensuring automatic dark/light mode adaptation without component-level awareness.
- **Fallback chain pattern**: Unknown `tone` values silently cascade to `default` via `toneColorMap[tone] || toneColorMap.default`, never throwing.
- **Static indicator pattern**: The component is a pure function of its props — no internal state, no side effects, no interaction. It emits a single DOM node.

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/StatusDot.tsx`
