# CsvViewer

Displays CSV data in a paginated table with auto-detected delimiter.

## Overview

Parses CSV content into a sortable table with configurable pagination. Auto-detects comma or semicolon delimiters based on the first line. Shows column headers that remain visible during scroll. Supports configurable rows per page (10, 25, or 50). Displays an empty state message when no CSV content is available.

## Responsibilities

- Parse CSV content into headers and data rows
- Auto-detect comma or semicolon delimiter from the first line
- Render data in a paginated table with sticky headers
- Provide configurable rows per page
- Show an empty state message when no CSV content is available

## Non-Responsibilities

- Does not load file content from disk or network
- Does not support write-back, editing, or saving CSV data
- Does not validate CSV structure or column types
- Does not provide column sorting, filtering, or search
- Does not handle non-CSV file formats

## Core Concepts

- **Parse-and-render pipeline:** Raw CSV string is parsed into headers and data rows, then rendered in a paginated table — parsing and rendering are sequential phases with no external data fetching.
- **Auto-delimiter detection:** Scans only the first line for semicolons to choose between comma and semicolon delimiters — a lightweight heuristic that avoids full-file scanning.
- **Pagination state management:** Page number and rows-per-page are managed locally — pagination is a pure UI concern scoped to this component.
- **Sticky header with scrollable body:** Column labels remain visible while the user scrolls through data rows.

## States

- **Idle** — Content loaded and parsed; renders paginated table with headers and rows
- **Empty** — No content or empty CSV string; renders title and empty-state message
- **Headers-only** — CSV has headers but zero data rows; renders header row with empty table body

## Edge Cases

- No content or empty content: Renders empty-state message
- Empty CSV (headers only, no data rows): Renders header row with empty table body
- Delimiter detection on mixed-delimiter files: May parse incorrectly
- CSV with only newlines/whitespace: Headers and rows are empty arrays
- Single-cell CSV: Renders a one-column table with a single cell
- Very large CSV: Rows are paginated; no virtualization

## Error Conditions

- No content or empty content — Renders empty-state message
- Mixed-delimiter CSV — Delimiter detection on first line only; may parse subsequent lines incorrectly
- Very large datasets — Pagination without virtualization; performance degrades beyond typical sizes

## Future Enhancements

- Column sorting by clicking header cells
- Column search/filter input for quick data filtering
- Row selection with bulk action support
- Virtualized large datasets for 100K+ rows

## Open Questions

- Should CSV export functionality be added?
- What is the expected behavior for malformed CSV rows — skip, highlight, or surface an error?
