# File Viewers

Astra provides robust, stateless UI components for viewing various file formats. These are fully compatible with both Web and Electron environments since they don't depend on native file system APIs.

## Exported Components

```tsx
import { 
  FileViewerRouter, 
  CsvViewer, 
  ImageViewer, 
  JsonViewer, 
  MdViewer 
} from 'astra/components';
```

### Usage
File viewers accept standard data formats as `props` and render them cleanly.

```tsx
<JsonViewer 
  fileName="config.json"
  content='{"key": "value"}'
/>
```

Available Viewers:
- **`CsvViewer`**: Renders comma-separated data as an interactive data table with pagination.
- **`ImageViewer`**: Renders standard images (PNG, JPG, SVG) with zoom and rotate controls.
- **`JsonViewer`**: Renders JSON strings with syntax highlighting block (`react-syntax-highlighter`).
- **`MdViewer`**: Renders Markdown content with full formatting using `react-markdown`.

### FileViewerRouter
A convenient switch component that automatically routes to the appropriate viewer component based on the file extension.

```tsx
<FileViewerRouter 
  fileName="example.md" 
  content="# Hello World"
/>
```
