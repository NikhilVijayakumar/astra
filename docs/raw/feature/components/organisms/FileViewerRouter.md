---
tier: organism
---

# FileViewerRouter

A file viewer component that routes to the appropriate viewer based on file extension.

## Overview

A smart router component that automatically selects the correct viewer component based on the file extension. Supports CSV, Markdown, Images, JSON/JSONL, and displays an unsupported message for other file types.

## API

### Props

| Prop           | Type                   | Default   | Description                        |
| -------------- | ---------------------- | --------- | ---------------------------------- |
| `fileName`     | `string`               | Required  | The file name including extension  |
| `fileContent`  | `string`               | undefined | The file content as string         |
| `fileEncoding` | `'text'` \| `'base64'` | `'text'`  | Content encoding format            |
| `mimeType`     | `string`               | undefined | MIME type for specialized handling |

### Interface

```typescript
interface FileViewerRouterProps {
  fileName: string;
  fileContent?: string;
  fileEncoding?: "text" | "base64";
  mimeType?: string;
}
```

### Supported File Types

| Extension                                        | Viewer              | Notes                         |
| ------------------------------------------------ | ------------------- | ----------------------------- |
| `.csv`                                           | `CsvViewer`         | Tabular data with pagination  |
| `.md`, `.markdown`, `.txt`                       | `MdViewer`          | Markdown/text content         |
| `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`, `.webp` | `ImageViewer`       | Image rendering               |
| `.json`, `.jsonl`                                | `JsonViewer`        | JSON with syntax highlighting |
| Other                                            | Unsupported message | Binary/unsupported indicator  |

### Fallback Behavior

For unsupported file types, displays:

- Title: "Binary / Unsupported File"
- Subtitle showing the file extension

## Non-Responsibilities

- Does not load file content from disk or network
- Does not transform or convert file formats
- Does not validate file integrity or encoding
- Does not handle streaming or partial content

## Edge Cases

- No file extension: `ext` is `undefined` (empty string after the dot); falls through to the `default` case (unsupported file)
- File name without extension (e.g., `"Makefile"`): no dot present, `ext` is the full file name (`"makefile"`); falls through to `default`
- Unknown or unsupported extension: renders the unsupported file fallback with the extension displayed
- No `fileContent` provided: delegates to the sub-viewer (CsvViewer, MdViewer, ImageViewer, JsonViewer), each handles missing content independently
- `.txt` extension: routed to MdViewer (same as `.md`)
- `.jsonl` extension: routed to JsonViewer (same as `.json`)
- Missing localization keys (`viewer.unsupported`, `viewer.extension`): uses hardcoded fallback strings
- `fileEncoding` and `mimeType` are only passed through to ImageViewer; other viewers ignore them

## Usage Example

```tsx
import { FileViewerRouter } from "@/common/components/organisms/FileViewerRouter";

const FilePreview = ({ file }) => (
  <FileViewerRouter
    fileName={file.name}
    fileContent={file.content}
    fileEncoding="text"
    mimeType={file.mimeType}
  />
);

// Different file types
const DataViewer = () => (
  <FileViewerRouter fileName="data.csv" fileContent={csvData} />
);

const ConfigViewer = () => (
  <FileViewerRouter fileName="config.json" fileContent={jsonData} />
);

const ImagePreview = () => (
  <FileViewerRouter
    fileName="screenshot.png"
    fileContent={base64Data}
    fileEncoding="base64"
  />
);
```

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/FileViewerRouter.tsx`
