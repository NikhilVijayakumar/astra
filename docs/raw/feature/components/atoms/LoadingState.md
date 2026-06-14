---
tier: atom
---

# LoadingState

An atomic component that displays a centered loading spinner with a localized message.

## Overview

A simple full-width loading indicator consisting of a MUI `CircularProgress` spinner and a "Loading..." text message. Centered both horizontally and vertically within its container.

## Responsibilities

- Render a centered CircularProgress spinner with primary color
- Display a localized "Loading..." text message below the spinner
- Fill the full width of its parent container

## API

No props. Uses localization internally.

### Translation Key

| Key               | Default        |
| ----------------- | -------------- |
| `loading_message` | Loading...     |

## Validation Rules

- No props accepted — the component is self-contained with an empty props interface
- TypeScript ensures no props can be passed
- Relies on localization key `loading_message` for display text

## Error Handling

- Missing localization key `loading_message`: CircularProgress renders without text (Typography renders with empty string)
- No error is thrown for any condition — purely presentational
- Parent layout may override centering via flex properties but no error is surfaced
- No error boundary is provided

## States

- **Loading**: Always in loading state by definition — spinner animating, text displayed
- **Error**: Not applicable — component does not surface errors
- **Empty**: Not applicable — no data concept
- **Success**: Not applicable — transitions are managed by parent

## Inputs/Outputs

- **Inputs**: No props — self-contained component
- **Outputs**: Renders a centered `<Box>` containing `CircularProgress` and a `<Typography>` with localized "Loading..." text; no callbacks

## Error Conditions

- **Missing localization key `loading_message`**: Spinner renders without text — Typography element is empty
- **Parent layout overrides centering**: Component still renders but may not appear centered

## Future Enhancements

- Optional `message` prop to override the default localized loading text
- Alternative spinner variants (determinate progress bar, skeleton placeholders)
- Size presets aligned with MUI `CircularProgress` size variants

## Open Questions

- Should a minimum display duration be enforced to prevent flicker during fast loads?
- Is there a need for an optional label describing what specific resource is loading?

## Non-Responsibilities

- Does not accept custom messages or content — displays only the localized default
- Does not handle error, empty, or success transitions
- Does not manage animation state beyond CircularProgress
- Does not respond to user interaction

## Edge Cases

- No props accepted — component is self-contained and stateless
- Missing localization key `loading_message`: displays only the CircularProgress spinner without text (the Typography element renders with an empty string if the translation is missing)
- Not centered within a flex container: the centering applies within its own Box wrapper; parent layout may override

## Usage Example

```tsx
import LoadingState from "@/common/components/atoms/LoadingState";

<LoadingState />
```

## Core Concepts

- **Zero-prop interface pattern**: The component accepts no props — it is a fully self-contained visual indicator, enforcing consistent usage across the app.
- **MUI component composition**: Wraps MUI `CircularProgress` (spinner) and `Typography` (label) inside a `Box` with flex centering — leverages MUI's styling system without custom CSS.
- **Localization-driven text**: The "Loading..." message is resolved through the `useLanguage` hook, making it locale-aware without any prop plumbing.
- **Centering via flex container**: Uses `sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}` pattern for bidirectional centering within its parent.

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/LoadingState.tsx`
