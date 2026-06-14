# DataTable

A tabular data display with a sticky header and custom cell rendering.

## Overview

Renders structured data in a table format with a header that stays visible during vertical scroll. Column definitions drive the table output — each column specifies its label, alignment, minimum width, and an optional custom render function for cells. Rows display in the order provided; no built-in sorting or pagination.

## Responsibilities

- Render tabular data with a sticky header that remains visible during vertical scroll
- Support custom column definitions with label, alignment, and minimum width
- Support custom cell rendering via per-column render functions
- Apply hover styling on table rows

## Non-Responsibilities

- Does not paginate, sort, or filter data — rows render in the order provided
- Does not support inline editing, row selection, or bulk actions
- Does not fetch or load data from any source
- Does not provide built-in search or column visibility controls
- Does not handle empty, loading, or error states — these must be managed by the parent

## Core Concepts

- **Column definition-driven rendering:** The columns array is the schema — each column's properties fully drive table output. Data is transformed into UI purely through column definitions.
- **Custom cell rendering:** Per-column render functions provide custom cell content without coupling the table to specific data shapes — enables buttons, badges, or any content per cell while keeping the table generic.
- **Sticky header:** The header row remains visible at the top of the table during vertical scroll through data rows.

## States

- **Idle** — Data loaded; renders sticky header with body rows
- **Empty data** — Data array is empty; renders header with no body rows
- **Empty columns** — Columns array is empty; renders an empty table

## Edge Cases

- Empty data array: Renders only the sticky table header with no body rows
- Empty columns array: Renders an empty table with no columns or data cells
- Single row: Table renders with one row; sticky header remains visible
- Very long cell content: Text wraps within the cell
- Duplicate key values: May cause rendering issues with duplicate keys

## Error Conditions

- Null/undefined key value — Row key becomes the string "null" or "undefined"; potential key collision
- Duplicate keys — Console warning; may cause rendering issues
- Component error in render function — No error boundary; propagates to parent

## Future Enhancements

- Built-in pagination with configurable page size
- Column sorting with ascending/descending toggle
- Row selection with checkbox column
- Virtualized rows for smooth scrolling through large datasets

## Open Questions

- Should filtering be built in or delegated entirely to the parent?
- Should column resizing and reordering be supported?
