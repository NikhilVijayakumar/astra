---
tier: molecule
---

# JsonViewer

A file viewer component that displays JSON data with syntax highlighting.

## Overview

A specialized viewer for JSON and JSONL files with Prism syntax highlighting. Displays formatted JSON with monospace font.

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

## Source

`src/common/components/molecules/JsonViewer.tsx`
