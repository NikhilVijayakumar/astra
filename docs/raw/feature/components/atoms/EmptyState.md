---
tier: atom
---

# EmptyState

An atomic component that displays a centered "no data" message when a data set is empty.

## Overview

A simple text indicator showing a localized "No data found" message when no content is available to display. Centered in container with standard spacing.

## Responsibilities

- Render a centered "No data found" text indicator
- Use localization for the message text
- Fill the width of its parent container with standard spacing

## API

No props. Uses localization internally.

### Translation Key

| Key             | Default          |
| --------------- | ---------------- |
| `no_data_found` | No data found    |

## Validation Rules

- No props accepted — self-contained component with empty props interface
- Relies on localization key `no_data_found` for display text
- TypeScript enforces the empty props interface

## Error Handling

- Missing localization key `no_data_found`: renders empty Typography element with no visible text
- No error is thrown for any condition — purely presentational
- Parent layout may affect centering but no error is surfaced
- No error boundary is provided

## States

- **Empty**: Always in empty state by definition — displays "No data found" text
- **Loading**: Not applicable — parent manages loading state
- **Error**: Not applicable — parent handles error state
- **Populated**: Not applicable — component only renders when data is absent

## Inputs/Outputs

- **Inputs**: No props — self-contained component
- **Outputs**: Renders a centered `<Box>` with a `<Typography>` containing localized "No data found" text; no callbacks

## Error Conditions

- **Missing localization key `no_data_found`**: Typography renders with no visible text
- **Parent layout overrides centering**: Component still renders but may not appear centered
- **Multiple instances**: No coordination — each renders independently

## Future Enhancements

- Action button slot for contextual empty-state actions (e.g., "Create new", "Refresh")
- Illustration or icon slot for visual emphasis
- Custom message prop to accept user-defined text beyond the localized default

## Open Questions

- Should the component accept an image or illustration slot?
- What is the recommended min-height to prevent layout shift when populated content loads?

## Non-Responsibilities

- Does not accept custom messages or content
- Does not provide action buttons, retry, or dismiss functionality
- Does not handle loading, error, or populated state transitions
- Does not manage or persist state

## Edge Cases

- No props accepted — component is self-contained and stateless
- Missing localization key `no_data_found`: renders an empty Typography element with no text
- Multiple EmptyState instances render independently with no coordination
- Not centered within a flex container: centering applies within its own Box wrapper

## Usage Example

```tsx
import EmptyState from "@/common/components/atoms/EmptyState";

{data.length === 0 && <EmptyState />}
```

## Core Concepts

- **Zero-prop interface pattern**: Accepts no props — a self-contained "no data" indicator that enforces consistent empty messaging across the entire app.
- **Localization-driven text**: Message is resolved via `useLanguage` hook key `no_data_found`, enabling locale switching without prop changes or conditional rendering at call sites.
- **Conditional visibility pattern**: The parent controls when this component renders (`{data.length === 0 && <EmptyState />}`) — the component itself has no visibility logic.
- **Centering via flex container**: Uses the same flex centering pattern as `LoadingState` and `ErrorState` for visual consistency across all state atoms.

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/EmptyState.tsx`
