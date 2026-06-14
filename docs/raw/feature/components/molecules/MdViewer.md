# MdViewer

Renders Markdown content as styled HTML with a file name heading.

## Overview

Converts raw Markdown content into styled HTML for reading. Displays the file name as a heading above the rendered content. Applies custom styling to headings, paragraphs, lists, blockquotes, and horizontal rules. The Markdown parser is loaded lazily to optimize initial bundle size.

## Responsibilities

- Render Markdown content to styled HTML
- Display the file name as a heading with a divider separator
- Lazy-load the Markdown parser for code-splitting
- Apply custom styling to headings, blockquotes, paragraphs, lists, and horizontal rules

## Non-Responsibilities

- Does not load file content from disk or network
- Does not support syntax highlighting, diagrams, or embedded media
- Does not handle file encoding or format conversion
- Does not persist scroll position across re-renders

## Core Concepts

- **Lazy-loaded parser pattern:** The Markdown parser is loaded on demand — it's a large dependency that shouldn't block initial bundle load.
- **Content rendering pipeline:** Raw Markdown string is converted to styled HTML; each element type receives theme-aware styling.
- **Fallback chain for empty state:** Missing content renders an empty-state message instead of an error — maintains layout stability when content is absent.
- **File name as heading pattern:** The file name is always rendered as a heading above the Markdown content, separating metadata from content.

## States

- **Loaded** — Content provided; Markdown rendered as styled HTML
- **Empty** — No content or empty content; empty-state message displayed
- **Loading** — Parser module being lazily loaded; "Loading" fallback shown
- **Error** — Invalid Markdown gracefully renders as plain text

## Edge Cases

- No content provided or content is empty/whitespace-only: Renders empty-state message
- Missing localization key: Uses hardcoded fallback string
- Parser lazily loading: Shows a loading fallback while the parser module loads
- Invalid Markdown syntax: Gracefully renders as plain text without throwing
- Very long content: Scrolls naturally within the container

## Error Conditions

- Missing required value (file name) — Required value must be provided
- Invalid Markdown — Renders as plain text; no crash

## User Journey

### Entry Conditions
A user opens a Markdown or text file in a file viewer — this component renders the content as styled HTML.

### Primary Flow
The user sees the file name as a heading, then the Markdown content rendered as styled HTML underneath.

### Alternate Flows
No content is provided — an empty-state message is shown instead of the Markdown output.

### Failure Flows
Invalid Markdown syntax — the component renders the content as plain text without crashing.

### Recovery Flows
The user edits the Markdown source and reloads the file.

### Exit Conditions
The user finishes reading the Markdown content and navigates away.

## Workflow

### Trigger
A user opens a Markdown or text file or a developer provides Markdown string content.

### Preconditions
Content is provided as a string and a file name is given.

### Steps
The component displays the file name heading, lazily loads the Markdown parser, converts the content to styled HTML, and renders it.

### Outcomes
The user can read formatted Markdown content with theme-aware styling.

### Exceptions
Invalid Markdown — renders as plain text without crashing.

### Completion Criteria
The Markdown content is rendered as styled HTML beneath the file name heading.
