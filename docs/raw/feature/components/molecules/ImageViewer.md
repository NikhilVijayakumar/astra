---
tier: molecule
---

# ImageViewer

A molecular component that displays image files with zoom and rotation controls.

## Overview

Renders base64-encoded image content with an interactive toolbar for zoom (0.5x–3x) and rotation (0°–270°). Shows a placeholder when no content is provided.

## Responsibilities

- Render base64-encoded images with zoom and rotation controls
- Provide zoom range from 0.5x to 3.0x with increment/decrement buttons
- Provide 90° incremental rotation cycling through 0°–270°
- Show a placeholder message when no image content is provided

## API

### Props

| Prop           | Type     | Default   | Description                                   |
| -------------- | -------- | --------- | --------------------------------------------- |
| `fileName`     | `string` | Required  | Image file name (displayed in toolbar)        |
| `fileContent`  | `string` | undefined | Base64-encoded image data                     |
| `fileEncoding` | `string` | undefined | Encoding type (`"text"` \| `"base64"`)        |
| `mimeType`     | `string` | undefined | MIME type fallback for the image (`image/png`) |

### Toolbar Controls

- **Zoom In**: +0.2x per click (max 3x)
- **Zoom Out**: -0.2x per click (min 0.5x)
- **Rotate**: +90° per click

### Translation Key

| Key                   | Default                                 |
| --------------------- | --------------------------------------- |
| `viewer.empty_image`  | No image content available for preview. |

## Non-Responsibilities

- Does not load file content from disk or network
- Does not support video, PDF, or non-image file types
- Does not provide full-screen mode or download capability
- Does not persist zoom or rotation state across re-renders
- Does not handle image load errors or invalid image data

## Edge Cases

- No `fileContent` provided: renders a placeholder box with empty message instead of the image
- `fileContent` provided but `fileEncoding` is not `"base64"`: `imageSource` is set to `null`, rendering the empty state (base64 images require explicit encoding)
- No `mimeType` provided with base64 content: defaults to `"image/png"`
- Image fails to load (broken data): the `<img>` element renders with no error handling; browser shows broken image icon
- Zoom range: minimum 0.5x, maximum 3.0x (clamped by `Math.max`/`Math.min`)
- Rotation cycles: 0° → 90° → 180° → 270° → 0° (modulo 360)
- Missing localization key `viewer.empty_image`: displays the hardcoded fallback string
- Very large images: constrained by `maxWidth`/`maxHeight` based on zoom level; `objectFit: "contain"` preserves aspect ratio

## Usage Example

```tsx
import { ImageViewer } from "@/common/components/molecules/ImageViewer";

<ImageViewer
  fileName="screenshot.png"
  fileContent={base64Data}
  fileEncoding="base64"
  mimeType="image/png"
/>;
```

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/ImageViewer.tsx`
