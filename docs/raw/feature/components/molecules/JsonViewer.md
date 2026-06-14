---
tier: molecule
---

# JsonViewer

A file viewer component that displays JSON data with syntax highlighting.

## Overview

A specialized viewer for JSON and JSONL files with Prism syntax highlighting. Displays formatted JSON with monospace font.

## Responsibilities

- Render JSON data with Prism syntax highlighting in vscDarkPlus theme
- Format JSON with indentation and monospace font
- Parse JSONL files line-by-line, handling each line independently
- Show a structured error state for invalid JSON with raw content fallback

## API

### Props

| Prop          | Type     | Default   | Description                   |
| ------------- | -------- | --------- | ----------------------------- |
| `fileName`    | `string` | Required  | The JSON file name for display |
| `fileContent` | `string` | undefined | JSON content as string         |

### Interface

```typescript
interface JsonViewerProps {
  fileName: string;
  fileContent?: string;
}
```

### Features

- **Syntax highlighting**: Uses Prism with vscDarkPlus theme
- **Monospace font**: IBM Plex Mono for code display
- **Empty state**: Displays message when no content available
- **Localization**: Uses `useLanguage` hook

## Localization

Uses `useLanguage` hook. Required translation key:
- `viewer.empty_json` - Message shown when JSON content is empty

Default fallback: `"No JSON content available for preview."`

## Premium UI

- Font: `"IBM Plex Mono", "Menlo", monospace`
- Font size: 0.75rem (12px)
- Border radius: 1 (8px)
- Uses spacing tokens

## Validation Rules

- `fileName` is required — TypeScript compilation fails if omitted
- `fileContent` is optional
- Content is parsed via `JSON.parse` — invalid JSON at runtime triggers error-state rendering
- JSONL format is supported: each line is parsed independently

## Error Handling

- No `fileContent`: renders a JSON object with a fallback message
- Invalid JSON (`JSON.parse` throws): renders a structured error JSON object with `{ error, raw }` and `rawContent` fallback in the viewer
- JSONL parsing: each line parsed independently; failed lines produce error objects within the output array
- Missing localization key `viewer.empty_json`: uses a hardcoded fallback string
- Lazy-loaded syntax highlighter: shows "Loading…" fallback on first render
- Large JSON may be slow — no virtualization is implemented

## States

- **Loaded**: Valid JSON — syntax-highlighted formatted output displayed
- **Empty**: No `fileContent` — fallback JSON object shown
- **Error**: Invalid JSON — structured error object with `{ error, raw }` displayed
- **Loading**: Syntax highlighter lazily loading — "Loading…" fallback shown
- **JSONL parsing**: Lines parsed independently — each line may be in loaded or error state

## Inputs/Outputs

- **Inputs**: `fileName` (string, required), `fileContent` (string, optional)
- **Outputs**: Renders a `<Box>` with lazily loaded `<SyntaxHighlighter>` displaying parsed JSON; no callbacks

## Error Conditions

- **Missing `fileName`**: TypeScript compile error
- **Invalid JSON**: `JSON.parse` throws — error object rendered with raw content fallback
- **JSONL parse failures**: Failed lines produce `{ line, parseError, raw }` objects in output
- **Very large JSON**: Syntax highlighting may cause performance issues — no virtualization
- **Missing localization key**: Uses hardcoded fallback string

## Future Enhancements

- Collapsible tree view for navigating deeply nested JSON structures
- Search or filter functionality to locate keys or values
- Copy path or copy value context actions for individual nodes

## Open Questions

- At what JSON size threshold should virtualization be introduced to maintain performance?
- Should JSONL parsing validate the file extension or rely solely on content detection?

## Non-Responsibilities

- Does not load file content from disk or network
- Does not validate JSON schema or structure
- Does not provide search, filter, or tree-view navigation
- Does not support editing or saving JSON content
- Does not handle binary or non-UTF-8 encoded content

## Edge Cases

- No `fileContent` provided or content is empty: displays a JSON object `{ "message": "No JSON content available for preview." }` instead of raw text
- Invalid JSON (`JSON.parse` throws): renders a JSON object `{ "parseError": true, "raw": "original text" }` showing the raw content
- `.jsonl` files: parsed line-by-line, each line `JSON.parse`'d individually; parse failures produce `{ "line": N, "parseError": true, "raw": "..." }` objects
- Missing localization key `viewer.empty_json`: uses hardcoded fallback string
- `react-syntax-highlighter` is lazily loaded: initial render shows a "Loading..." fallback while the Prism component loads
- vscDarkPlus style is fetched asynchronously: first render always shows LoadingFallback until style is loaded
- Very large JSON: syntax highlighting may be slow; the component does not virtualize or paginate content
- Non-object JSON values: `JSON.stringify` handles strings, numbers, arrays, and booleans normally

## Usage Example
import { useLanguage } from "@/common/localization/LanguageContext";

const JsonPreview = () => {
  const { literal } = useLanguage();
  const jsonData = JSON.stringify({ name: "John", age: 32 });

  return <JsonViewer fileName="user.json" fileContent={jsonData} />;
};
```

## Core Concepts

- **Parse-and-render pipeline**: Raw JSON string → `JSON.parse` → structured data → Prism syntax highlighting → styled HTML — errors in parsing produce a structured error object rather than crashing.
- **Graceful error recovery via structured error objects**: Invalid JSON produces `{ parseError: true, raw: originalText }` instead of throwing — the component stays mounted and shows both the error context and the raw content.
- **JSONL line-by-line parsing**: Each line of a `.jsonl` file is parsed independently via `JSON.parse` — a single malformed line produces an error object for that line only, preserving valid data from other lines.
- **Lazy-loaded syntax highlighter**: `react-syntax-highlighter` with the `vscDarkPlus` theme is loaded asynchronously, showing a "Loading..." fallback on first render to keep initial bundle size small.

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/JsonViewer.tsx`
