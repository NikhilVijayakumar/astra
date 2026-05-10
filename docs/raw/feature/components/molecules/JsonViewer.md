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

## Usage Example

```tsx
import { JsonViewer } from "@/common/components/molecules/JsonViewer";
import { useLanguage } from "@/common/localization/LanguageContext";

const JsonPreview = () => {
  const { literal } = useLanguage();
  const jsonData = JSON.stringify({ name: "John", age: 32 });

  return <JsonViewer fileName="user.json" fileContent={jsonData} />;
};
```

## Source

`src/common/components/molecules/JsonViewer.tsx`
