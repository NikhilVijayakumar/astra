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

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/LoadingState.tsx`
