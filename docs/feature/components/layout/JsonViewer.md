# JsonViewer

A file viewer component that displays JSON/JSONL content with syntax highlighting.

## Overview

A specialized viewer for JSON and JSON Lines (JSONL) files. Pretty-prints JSON with syntax highlighting using react-syntax-highlighter. Handles both standard JSON and newline-delimited JSON.

## API

### Props

| Prop          | Type     | Default   | Description                    |
| ------------- | -------- | --------- | ------------------------------ |
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

- **Syntax highlighting**: Uses `vscDarkPlus` theme
- **JSONL support**: Parses newline-delimited JSON (one object per line)
- **Error handling**: Displays parse errors gracefully
- **Empty state**: Shows message when no content available

### Normalization Behavior

#### Standard JSON (`.json`)

- Attempts to parse and pretty-print with 2-space indentation
- On parse failure, displays raw content with error indicator

#### JSON Lines (`.jsonl`)

- Splits by newlines and parses each line as separate JSON object
- Converts to an array of objects for display
- Line numbers included in error objects for failed parses

### Display Format

- Header bar shows file name
- Code block uses `vscDarkPlus` theme
- Font size: `12px`
- Background: `background.paper`

## Usage Example

```tsx
import { JsonViewer } from "@/components/file-viewers/JsonViewer";

// Standard JSON
const ConfigViewer = () => {
  const config = `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}`;

  return <JsonViewer fileName="package.json" fileContent={config} />;
};

// JSON Lines / JSONL
const LogViewer = () => {
  const logs = `{"level": "info", "message": "Server started", "timestamp": "2024-01-15T10:30:00Z"}
{"level": "warn", "message": "High memory usage", "timestamp": "2024-01-15T10:35:00Z"}
{"level": "error", "message": "Connection failed", "timestamp": "2024-01-15T10:40:00Z"}`;

  return <JsonViewer fileName="app.jsonl" fileContent={logs} />;
};

// Empty content handling
const EmptyViewer = () => <JsonViewer fileName="empty.json" />;
```

## Source

`src/components/file-viewers/JsonViewer.tsx`
