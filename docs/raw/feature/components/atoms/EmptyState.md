# EmptyState

A centered "no data" indicator shown when a dataset is empty.

## Overview

A simple text indicator displaying a localized "No data found" message when no content is available to display. Centered in its container with standard spacing. Self-contained with no configuration options.

## Responsibilities

- Display a centered "No data found" text indicator
- Use localization for the message text
- Fill the width of its parent container

## Non-Responsibilities

- Does not accept custom messages or content
- Does not provide action buttons, retry, or dismiss functionality
- Does not handle loading, error, or populated state transitions
- Does not manage or persist state

## Core Concepts

- **Zero-configuration interface:** Accepts no inputs — a self-contained "no data" indicator that enforces consistent empty messaging across the entire application.
- **Localization-driven text:** Message resolves through the localization system, enabling locale switching without prop changes.
- **Conditional visibility pattern:** The parent controls when this component renders — the component itself has no visibility logic.
- **Consistent centering pattern:** Uses the same centering approach as LoadingState and ErrorState for visual consistency across all state atoms.

## States

- **Empty** — Always in empty state by definition; displays "No data found" text

## Edge Cases

- Missing localization key: Renders with no visible text
- Parent layout overrides centering: Component still renders but may not appear centered
- Multiple instances: Each renders independently with no coordination

## Error Conditions

- Missing localization key — Typography renders with no visible text
