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

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/MdViewer.tsx`
