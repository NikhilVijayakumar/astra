# File Viewers

Source:
- src/components/file-viewers/FileViewerRouter.tsx
- src/components/file-viewers/CsvViewer.tsx
- src/components/file-viewers/ImageViewer.tsx
- src/components/file-viewers/JsonViewer.tsx
- src/components/file-viewers/MdViewer.tsx

Import:

```tsx
import {
  FileViewerRouter,
  CsvViewer,
  ImageViewer,
  JsonViewer,
  MdViewer,
} from 'astra/components';
```

## Common Input Model

All viewers are driven by in-memory content props, making them compatible with web and electron app shells.

## FileViewerRouter

Props:

```ts
type FileViewerRouterProps = {
  fileName: string;
  fileContent?: string;
  fileEncoding?: 'text' | 'base64';
  mimeType?: string;
};
```

Extension routing:
- csv -> CsvViewer
- md, markdown, txt -> MdViewer
- jpg, jpeg, png, gif, svg, webp -> ImageViewer
- json, jsonl -> JsonViewer
- default -> unsupported fallback panel

```tsx
<FileViewerRouter
  fileName="release-notes.md"
  fileContent={markdownContent}
/>
```

## CsvViewer

Props:

```ts
type CsvViewerProps = {
  fileName: string;
  fileContent?: string;
};
```

Behavior:
- auto-detects delimiter (semicolon or comma)
- parses first line as headers
- paginates rows with TablePagination

## JsonViewer

Props:

```ts
type JsonViewerProps = {
  fileName: string;
  fileContent?: string;
};
```

Behavior:
- pretty-prints valid JSON
- supports jsonl by parsing each line
- renders parse fallback object when content is invalid
- syntax highlighting via react-syntax-highlighter

## ImageViewer

Props:

```ts
type ImageViewerProps = {
  fileName: string;
  fileContent?: string;
  fileEncoding?: 'text' | 'base64';
  mimeType?: string;
};
```

Behavior:
- expects base64 when rendering image payload
- supports zoom in/out and 90-degree rotation
- shows fallback placeholder if no content

## MdViewer

Props:

```ts
type MdViewerProps = {
  fileName: string;
  fileContent?: string;
};
```

Behavior:
- renders markdown using react-markdown
- applies token-aware typography and spacing styles
- shows default placeholder text when content is empty

## Standards

1. Keep file loading logic outside viewers.
2. Pass content from ViewModel/container layer.
3. Use FileViewerRouter when extension-based routing is sufficient.
4. Use direct viewer components for fixed-format screens.

## Related Docs

- ui.md
- ../Theming.md

