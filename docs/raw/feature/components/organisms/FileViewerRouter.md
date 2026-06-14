---
tier: organism
---

# FileViewerRouter

A file viewer component that routes to the appropriate viewer based on file extension.

## Overview

A smart router component that automatically selects the correct viewer component based on the file extension. Supports CSV, Markdown, Images, JSON/JSONL, and displays an unsupported message for other file types.

## Responsibilities

- Route to the correct viewer component (CsvViewer, MdViewer, ImageViewer, JsonViewer) based on file extension
- Support CSV (.csv), Markdown (.md, .markdown, .txt), Images (.jpg, .jpeg, .png, .gif, .svg, .webp), and JSON (.json, .jsonl) file types
- Display an unsupported file message for unknown extensions
- Pass encoding and MIME type metadata through to ImageViewer

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

## Validation Rules

- `fileName` is required — TypeScript compilation fails if omitted
- `fileContent`, `fileEncoding`, `mimeType` are optional
- File extension is extracted via `split('.').pop()` — files without an extension result in `undefined`
- Route mapping uses a `switch-case` with fallthrough to known type handlers

## Error Handling

- No match in the route map: renders an unsupported-file fallback (title + extension label)
- No `fileContent`: delegated to each sub-viewer — each viewer handles missing content independently
- Missing localization keys: uses hardcoded fallback strings
- No error boundary is provided — errors in sub-viewers propagate to the parent

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

## States

- **Idle**: Component rendered with a recognized file extension and `fileContent` — delegates to the appropriate sub-viewer
- **Unsupported**: File extension does not match any known viewer — renders the unsupported file fallback
- **Empty**: No `fileContent` provided — passes `undefined` to the sub-viewer (each handles it independently)

## Inputs/Outputs

- **Inputs**: `fileName` (required), `fileContent` (optional), `fileEncoding` (optional), `mimeType` (optional)
- **Outputs**: Renders the matched sub-viewer component (CsvViewer, MdViewer, ImageViewer, JsonViewer) or an unsupported-file fallback UI
- **Side effects**: None — purely a routing/presentational component

## Error Conditions

- **Unknown extension**: Falls through to `default` case — renders fallback ("Binary / Unsupported File")
- **Missing `fileContent`**: Delegated to sub-viewer — no error is thrown by the router itself
- **Missing localization keys**: Hardcoded fallback strings used — no crash
- **Sub-viewer crash**: No error boundary — error propagates to the parent

## Future Enhancements

- Add support for additional file types (PDF, XML, YAML, log files)
- Implement drag-and-drop file loading for inline previews
- Provide a fallback text-viewer mode for unknown text-based files instead of a generic unsupported message
- Allow custom viewer registration via a plugin or mapping prop

## Open Questions

- How should binary files larger than 50 MB be handled — streaming, chunked loading, or blocking?
- Should accessibility announcements differ per sub-viewer (e.g., "table loaded" for CSV vs "image displayed" for image)?
- What is the expected behavior when the route map has overlapping or ambiguous extensions?

## Core Concepts

- **Router/dispatcher pattern**: Uses a `switch-case` statement to map file extensions to sub-viewer components — a central decision point that coordinates which molecule renders based on file type metadata.
- **Delegation to sub-viewers**: Each file type routes to a dedicated molecule (CsvViewer, MdViewer, ImageViewer, JsonViewer) — the router itself has no rendering logic beyond the fallback unsupported state.
- **Extension-based routing logic**: The file extension is extracted via `fileName.split('.').pop()` — this is a metadata-level decision that doesn't require reading file content, enabling early routing.
- **Metadata pass-through**: `fileEncoding` and `mimeType` props are forwarded only to `ImageViewer` — other sub-viewers ignore them, keeping the routing logic simple and per-viewer contracts clear.

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/FileViewerRouter.tsx`
