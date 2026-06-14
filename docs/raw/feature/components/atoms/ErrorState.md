---
tier: atom
---

# ErrorState

An atomic component that displays an error alert with an optional localized message.

## Overview

A centered error display using MUI `Alert` with `severity="error"`. Falls back to a localized default message when no custom message is provided.

## Responsibilities

- Render a centered error Alert with severity="error"
- Display a custom error message when provided
- Fall back to a localized default message when no custom message is given

## API

### Props

| Prop      | Type     | Default   | Description                  |
| --------- | -------- | --------- | ---------------------------- |
| `message` | `string` | undefined | Custom error message to show |

### Translation Key

| Key               | Default        |
| ----------------- | -------------- |
| `unknown_message` | An unexpected error occurred |

## Validation Rules

- `message` is optional (`string | undefined`)
- When `message` is `undefined`, the component falls back to localized `unknown_message`
- TypeScript enforces the props interface — no other props are accepted

## Error Handling

- Missing `message` combined with missing localization key `unknown_message`: Alert renders with no visible text content
- The component does not log errors, capture error boundaries, or report to monitoring services
- Multiple ErrorState instances render independently — no shared state or coordination
- No error boundary is provided

## States

- **Error**: Active rendering state — Alert with severity="error" is displayed
- **Empty**: When no `message` is provided and localization key is missing — Alert renders with no visible text
- **Idle**: Not applicable — component only renders in error states

## Inputs/Outputs

- **Inputs**: `message` (string | undefined, optional)
- **Outputs**: Renders a centered `<Alert>` with severity="error" containing the message text; no callbacks or side effects

## Error Conditions

- **Missing `message` and missing localization key**: Alert renders empty with no visible content
- **Extremely long message text**: Text wraps within Alert — no truncation is applied
- **Multiple instances**: No coordination — each renders independently

## Future Enhancements

- Retry action callback for user-initiated recovery attempts
- Expandable detail section for error codes or stack traces
- Dismiss callback for closable error banners

## Open Questions

- Should extremely long messages be truncated with a "show more" toggle?
- Should the component accept an error severity level for differentiated visual treatment?

## Non-Responsibilities

- Does not capture or log errors to any service
- Does not provide retry, dismiss, or action callbacks
- Does not display error codes, stack traces, or technical details
- Does not manage error recovery or state transitions

## Edge Cases

- No `message` provided: falls back to localized `literal.unknown_message` ("An unexpected error occurred")
- Missing localization key `unknown_message`: renders an empty Alert with no content (the `finalMessage` will be `undefined`)
- Very long `message`: text wraps within the Alert component
- Multiple ErrorState instances render independently — no coordination or stacking

## Usage Example

```tsx
import ErrorState from "@/common/components/atoms/ErrorState";

// With custom message
<ErrorState message="Failed to load data" />;

// Uses localized default
<ErrorState />;
```

## Core Concepts

- **Fallback chain pattern**: The component resolves display text via `message ?? literal.unknown_message` — custom message takes priority, then localized default, then empty (if key is also missing). No branch throws.
- **MUI Alert integration**: Leverages MUI `Alert` with `severity="error"` to get built-in icon, color treatment, and accessibility semantics without re-implementing error styling.
- **Optional prop with conditional rendering**: The `message` prop is optional — the component adapts its output based on presence/absence, following a common atomic pattern for flexible reuse.
- **Purely presentational atom**: No state, no callbacks, no error recovery logic — renders a single `Alert` element centered in a flex `Box`.

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/ErrorState.tsx`
