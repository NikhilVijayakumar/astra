# SummaryPanel

A bordered panel that displays a title with a collection of styled text lines.

## Overview

Renders a panel with a title header and an array of text lines, each configurable with one of two typography variants (body or caption) for visual hierarchy. The variant controls whether a line renders inline or as a block element, enabling mixed layouts within the same panel.

## Responsibilities

- Render a bordered panel with a title header
- Display a collection of text lines with configurable typography variants
- Apply consistent spacing and border styling

## Non-Responsibilities

- Does not manage state or fetch data
- Does not handle user interaction or click events
- Does not format or transform text content — text is displayed as provided
- Does not support collapsible sections or expand/collapse behavior
- Does not provide scroll behavior for long content

## Core Concepts

- **Data-driven line rendering:** The lines array drives all body content — the component iterates the array and renders each item as a text element with minimal logic.
- **Variant-based typography hierarchy:** Each line's variant controls whether it renders inline or as a block element — a lightweight approach to visual hierarchy without multiple slot components.
- **Border-based panel pattern:** Uses a subtle border instead of shadow for the panel surface, consistent with the premium UI approach.
- **Structured data pattern:** Lines are plain objects rather than rendered nodes, ensuring consistent styling and simple data handling.

## States

- **Populated** — Title and one or more lines rendered
- **Empty** — Lines array is empty; renders title only with no body content
- **Single variant** — All lines share same variant; consistent display with no hierarchy

## Edge Cases

- Empty lines array: Renders title only with no text lines
- Single line: Renders one text element; no spacing issues
- All lines with same variant: Renders consistently with no hierarchy distinction
- Very long text in a line: Text wraps within the panel width
- Missing variant on a line: Defaults to body (inline) display

## Error Conditions

- Empty lines array — Renders title only; no crash
- Missing variant on line — Defaults gracefully to body
- Long text — Wraps within panel width; no overflow

## Future Enhancements

- Collapsible/expandable toggle for the panel content
- "Copy all" button to copy all line text to clipboard
- Icon or label slot next to each line for visual categorization
- Loading skeleton variant for async content

## Open Questions

- Should the panel support a maximum height with internal scroll for very long line lists?
- Should lines support rich content (links, badges) or remain plain text only?
