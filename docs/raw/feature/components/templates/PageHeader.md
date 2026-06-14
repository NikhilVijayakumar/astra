# PageHeader

A standardized page-level header with title, subtitle, action buttons, and metadata slots.

## Overview

Provides a comprehensive header for page-level content. Supports primary and secondary action buttons with configurable appearance, leading and trailing meta content slots, and a responsive layout that wraps on narrow viewports. The title is required; all other sections are optional and render independently. Designed for use across multiple pages as a consistent page header template.

## Responsibilities

- Render a page-level header with title and optional subtitle
- Render primary and secondary action buttons with configurable variant and size
- Render leading and trailing meta content slots
- Wrap responsively on narrow viewports

## Non-Responsibilities

- Does not manage page-level state or data fetching
- Does not handle navigation routing — action click callbacks are void functions
- Does not render breadcrumbs, tabs, or other secondary navigation
- Does not provide sticky or scroll-aware behavior
- Does not manage responsive breakpoints beyond wrapping behavior

## Core Concepts

- **Slot-based layout pattern:** Defines five content slots — leading meta, title, subtitle, action buttons, and trailing meta — each renders independently and can be omitted without affecting the layout structure.
- **Responsive wrap pattern:** On narrow viewports, action buttons wrap to the row below the title instead of overflowing or clipping.
- **Action config objects:** Primary and secondary actions use a structured data pattern (label, click handler, variant, size) instead of passing raw nodes for simple button cases.
- **Reverse order action rendering:** Action buttons render right-to-left — visual order differs from DOM source order, a deliberate UX hierarchy choice.

## States

- **Full** — Title, subtitle, primary action, secondary action, leading meta, and trailing meta all populated
- **Minimal** — Only title provided; all optional sections omitted
- **Partial** — Any combination of optional props present; each section independently renderable

## Edge Cases

- No subtitle provided: Subtitle slot is omitted; title renders alone
- No actions provided: Action buttons section is omitted
- No meta content provided: Meta slots are omitted
- Only secondary action without primary action: Only the secondary button renders
- Narrow viewport: Container wraps; actions move to the row below the title
- Long title without subtitle: Title occupies full width with no wrapping issues

## Error Conditions

- Missing required input (title) — Required value must be provided
- Empty string inputs — Renders empty text elements; no crash
- Action config missing click handler — Button renders but does nothing on click

## Future Enhancements

- Breadcrumb slot between the top of the page and the title
- Sticky behavior so the header remains visible during vertical scroll
- Collapsible actions into a "More" menu on narrow viewports

## Open Questions

- Should action buttons support a loading state when async operations are in progress?
- Should the subtitle support rich text (links, inline code) or remain plain string only?
