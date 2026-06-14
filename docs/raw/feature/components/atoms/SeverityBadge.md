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

## Validation Rules

- `level` is required — TypeScript compilation fails if omitted
- `level` accepts `SeverityLevel | string`; TypeScript narrows to known types but any string is accepted at runtime
- No runtime validation — unknown strings are handled via color map fallback to `info.main`
- Known keys are case-sensitive and uppercase (`"CRITICAL"`, `"WARNING"`, `"URGENT"`, `"INFO"`, `"SUCCESS"`)

## Error Handling

- Unknown or lowercase `level` values are silently mapped to `info.main` styling — no error is thrown
- The component does not validate, throw, or log warnings for invalid level values
- Very long level text may break layout (`nowrap` not set) but causes no functional errors
- No error boundary is provided

## States

- **Idle**: Default rendering state — badge is displayed with level-mapped colors
- **Empty**: Not applicable — level prop is always required
- **Disabled**: Not applicable — no user interaction

## Inputs/Outputs

- **Inputs**: `level` (SeverityLevel | string, required)
- **Outputs**: Renders a `<Box>` with styled `<Typography>` containing the level text; no callbacks or side effects

## Error Conditions

- **Unknown level value**: Falls back to `info.main` styling — no error thrown
- **Case mismatch**: Lowercase input like `"critical"` falls back to info styling (keys are uppercase)
- **Very long text**: Wraps naturally as `nowrap` is not set — may break layout
- **Missing level**: TypeScript compile error

## Future Enhancements

- Icon slot to complement severity text with visual symbols
- Size presets (small, medium, large) for different layout densities
- Animated entrance for newly triggered alert badges

## Open Questions

- Should lowercase input be normalized to uppercase rather than silently falling back to info?
- What is the maximum text length before truncation or overflow handling should be considered?

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

## Core Concepts

- **Color mapping via lookup table**: The `colorMap` object maps each `SeverityLevel` to a MUI theme color — unknown values fall through to `'info.main'` via `colorMap[level] || 'info.main'`.
- **Semi-transparent background pattern**: Backgrounds use 12% opacity of the theme color (`alpha(error.main, 0.12)`) while text uses the full theme color, creating visual hierarchy without additional DOM elements.
- **Relaxed type boundary**: The `level` prop accepts `SeverityLevel | string`, allowing dynamic or external data sources while typed usage gets full autocomplete and compile-time safety.
- **Purely presentational atom**: No state, no callbacks, no interaction — renders a single `Box` + `Typography` pair.

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/SeverityBadge.tsx`
