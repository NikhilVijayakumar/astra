---
tier: template
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

## Usage Example

```tsx
import { FileViewerRouter } from "@/common/components/file-viewers/FileViewerRouter";

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

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/file-viewers/FileViewerRouter.tsx`
