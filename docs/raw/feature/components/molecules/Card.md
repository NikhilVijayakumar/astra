# Card

A styled container that groups related content with an optional header section.

## Overview

A versatile card component that wraps content in a bordered surface. Supports a header with title, supporting text, and an action slot. The card body accepts any content as children. All header sections are optional and render independently.

## Responsibilities

- Render a styled container surface for grouping content
- Display an optional header with title, supporting text, and action slot
- Render children as the card body content

## Non-Responsibilities

- Does not manage or persist state
- Does not fetch or load data
- Does not handle click events or user interactions beyond the action slot
- Does not enforce layout constraints
- Does not provide scroll or overflow behavior

## Core Concepts

- **Slot-based composition:** The card exposes named slots (title, supporting text, action, children) — each section renders independently and can be omitted without affecting others.
- **Border-based premium styling:** Uses a subtle border rather than shadow for the surface treatment.
- **Optional header pattern:** The header row only renders when at least one header prop is provided — empty props produce no header.
- **Flex column layout:** Card body stacks vertically with consistent spacing; child components control their own sizing.

## States

- **Full** — Title, supporting text, action, and children all present
- **Empty** — No header props and no children; renders as empty surface with padding and border
- **No header** — Only children rendered without title or action sections

## Edge Cases

- All header props omitted: Header row not rendered; only children displayed
- All props omitted: Renders empty container with padding and border
- Action slot overflow: Action content may overflow on narrow card widths
- Long supporting text: Text wraps naturally within the card width

## Error Conditions

- Action overflow — Action slot content may overflow on narrow cards
