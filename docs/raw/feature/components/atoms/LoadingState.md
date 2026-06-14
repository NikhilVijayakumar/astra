# LoadingState

A centered loading indicator that shows when content is being fetched or processed.

## Overview

A simple full-width loading indicator consisting of a spinning animation and a localized "Loading..." text message. Centered both horizontally and vertically within its container. Self-contained with no configuration options.

## Responsibilities

- Display a centered animated spinner during loading operations
- Show a localized "Loading..." text message below the spinner
- Fill the full width of its parent container

## Non-Responsibilities

- Does not accept custom messages or content
- Does not handle error, empty, or success transitions
- Does not respond to user interaction
- Does not manage timing or minimum display duration

## Core Concepts

- **Zero-configuration interface:** The component accepts no inputs — it is a fully self-contained visual indicator, enforcing consistent usage across the application.
- **Localization-driven text:** The loading message resolves through the localization system, making it locale-aware without any prop plumbing.
- **Centered layout:** Uses flexbox centering for bidirectional alignment within its parent container.

## States

- **Loading** — Always in loading state by definition; spinner animating, text displayed

## Edge Cases

- Missing localization key: Spinner renders without text content
- Parent layout overrides centering: Component still renders but may not appear centered

## Error Conditions

- Missing localization key — Spinner renders without visible text
