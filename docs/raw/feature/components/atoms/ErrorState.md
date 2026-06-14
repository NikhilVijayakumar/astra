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

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/ErrorState.tsx`
