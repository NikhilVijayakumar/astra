---
tier: molecule
---

# MdViewer

A molecular component that renders Markdown content with syntax-styled HTML output.

## Overview

Renders markdown file content using `react-markdown` with lazily loaded parser. Displays the file name as a heading and renders content with custom styling for headings, paragraphs, lists, blockquotes, and horizontal rules.

## Responsibilities

- Render markdown content to styled HTML using react-markdown
- Display the file name as a heading with a divider separator
- Lazy-load the react-markdown parser for code-splitting
- Apply custom styling to headings, blockquotes, paragraphs, lists, and horizontal rules

## API

### Props

| Prop          | Type     | Default   | Description                    |
| ------------- | -------- | --------- | ------------------------------ |
| `fileName`    | `string` | Required  | Markdown file name (heading)   |
| `fileContent` | `string` | undefined | Raw markdown content to render |

### Styling

- Headings h1-h3: `primary.main` color
- Blockquotes: left border with `primary.main`, italic text, `action.hover` background
- Paragraphs: 1.6 line-height
- Horizontal rules: reduced opacity

### Translation Key

| Key                     | Default                                  |
| ----------------------- | ---------------------------------------- |
| `viewer.empty_markdown` | No markdown content available for preview. |

## Validation Rules

- `fileName` is required — TypeScript compilation fails if omitted
- `fileContent` is optional
- No runtime validation is performed on markdown content — any string is accepted

## Error Handling

- No `fileContent` or empty content: renders an italicized empty-state message
- Invalid markdown: `react-markdown` renders plain text gracefully without throwing
- `react-markdown` lazy loading: shows a "Loading…" fallback while the parser module loads
- Missing localization key `viewer.empty_markdown`: uses a hardcoded fallback string
- Very long content scrolls naturally via `overflow-y: auto` — no virtualization is provided

## States

- **Loaded**: `fileContent` provided — markdown rendered as styled HTML
- **Empty**: No `fileContent` or empty/whitespace — italicized empty-state message
- **Loading**: Parser module being lazily loaded — "Loading…" fallback shown
- **Error**: Invalid markdown gracefully renders as plain text — no error state

## Inputs/Outputs

- **Inputs**: `fileName` (string, required), `fileContent` (string, optional)
- **Outputs**: Renders a `<Box>` with fileName heading, divider, and react-markdown rendered content; no callbacks

## Error Conditions

- **Missing `fileName`**: TypeScript compile error
- **No `fileContent`**: Empty-state message displayed
- **Invalid markdown**: `react-markdown` renders as plain text — no crash
- **Missing localization key**: Uses hardcoded fallback string

## Future Enhancements

- Syntax highlighting for code blocks within markdown content
- Table of contents generation for longer documents
- Copy-to-clipboard button for code blocks

## Open Questions

- Should heading IDs be auto-generated for anchor linking within the document?
- How should extremely long documents be paginated or virtualized for performance?

## Non-Responsibilities

- Does not load file content from disk or network
- Does not support syntax highlighting, diagrams, or embedded media
- Does not handle file encoding or format conversion
- Does not persist scroll position across re-renders

## Edge Cases

- No `fileContent` provided or content is empty/whitespace-only: renders `_emptyMessage_` as italic markdown content
- Missing localization key `viewer.empty_markdown`: uses hardcoded fallback string
- `react-markdown` is lazily loaded: first render shows a "Loading..." fallback while the parser loads
- Invalid markdown syntax: `react-markdown` gracefully renders plain text without throwing
- Very long markdown content: scrolls naturally within the container (overflow-y: auto)
- File name treated as a heading: always rendered as h3 regardless of markdown content

## Usage Example

```tsx
import { MdViewer } from "@/common/components/molecules/MdViewer";

<MdViewer
  fileName="README.md"
  fileContent="# Hello World\n\nThis is markdown content."
/>;
```

## Core Concepts

- **Lazy-loaded parser pattern**: `react-markdown` is loaded via `React.lazy()` with a dynamic `import()` — the markdown parser is a large dependency that shouldn't block initial bundle load.
- **Content rendering pipeline**: Raw markdown string → `react-markdown` AST → custom styled HTML — each heading, blockquote, list, and paragraph gets theme-aware styling through `react-markdown`'s component overrides.
- **Fallback chain for empty state**: Missing `fileContent` renders an italicized empty-state message instead of an error — maintains layout stability when content is absent.
- **File name as heading pattern**: The `fileName` prop is always rendered as an h3 heading above the markdown content, separating metadata (what file) from content (what it says).

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/MdViewer.tsx`
