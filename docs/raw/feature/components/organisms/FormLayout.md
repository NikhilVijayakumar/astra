# FormLayout

A structured page-level form wrapper with title header and action footer.

## Overview

Provides consistent vertical layout for form pages. Includes an optional title header at the top and a dedicated actions row at the bottom for submit or cancel buttons. Maintains a max-width constraint for readability. All sections are optional and render independently.

## Responsibilities

- Provide consistent vertical layout for form pages
- Render an optional title header at the top of the form
- Render an optional actions row at the bottom for submit/cancel buttons
- Maintain a max-width constraint for readability

## Non-Responsibilities

- Does not manage form state, field values, or submission handling
- Does not validate form inputs or display validation errors
- Does not handle form lifecycle events (submit, reset, dirty tracking)
- Does not provide scroll behavior for long forms
- Does not render feedback messages (success, error)

## Core Concepts

- **Layout slot pattern:** Defines three vertical slots — header (title), body (children), and footer (actions) — each slot renders independently and can be omitted without affecting the others.
- **Max-width constraint for readability:** Content is constrained to a maximum width, preventing line lengths from exceeding comfortable reading width.
- **Optional section rendering:** Title and actions slots are conditionally rendered — when omitted, they produce no DOM.

## States

- **Idle** — Title, children, and actions displayed
- **No title** — Header section omitted
- **No actions** — Footer section omitted
- **Empty children** — Empty flex column rendered (invisible to user)

## Edge Cases

- No title provided: Header section omitted entirely
- No actions provided: Footer action row omitted
- Empty children: Renders empty layout
- Single child element: Renders one child without extra spacing issues
- Very long title: Text wraps naturally; no built-in truncation

## Error Conditions

- Missing required input (children content) — Required value must be provided
