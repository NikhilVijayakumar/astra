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

## Design Principles

This component is an atom — a fundamental UI primitive.

See [Atoms](../atomic-design/atoms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/atoms/EmptyState.tsx`
