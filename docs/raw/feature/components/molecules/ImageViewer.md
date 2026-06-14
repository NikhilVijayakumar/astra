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

## Validation Rules

- `fileName` is required — TypeScript compilation fails if omitted
- `fileContent`, `fileEncoding`, `mimeType` are optional
- `fileEncoding` is typed as `string | undefined` at runtime with expected values `"text"` or `"base64"` — no runtime enforcement
- Zoom is clamped to [0.5, 3.0] via `Math.min`/`Math.max` internally
- Rotation cycles via modulo 360 (0, 90, 180, 270)

## Error Handling

- No `fileContent`: renders a placeholder box with an empty message
- `fileEncoding` not `"base64"`: `imageSource` is set to `null`, falling through to the empty state
- Image load failure (corrupted data): browser displays a broken image icon — no custom error handler is attached
- Missing localization key `viewer.empty_image`: uses a hardcoded fallback string
- No error boundary is provided — errors propagate to the parent

## States

- **Loaded**: `fileContent` provided with valid base64 — image renders with toolbar
- **Empty**: No `fileContent` — placeholder message displayed
- **Error**: Corrupted image data — browser shows broken image icon
- **Zooming**: Zoom level changes via toolbar buttons (0.5x–3.0x)
- **Rotating**: Rotation cycles via toolbar buttons (0°, 90°, 180°, 270°)

## Inputs/Outputs

- **Inputs**: `fileName` (string, required), `fileContent` (string, optional), `fileEncoding` (string, optional), `mimeType` (string, optional)
- **Outputs**: Renders a `<Box>` with toolbar (zoom/rotate controls) and `<img>` element; manages internal zoom and rotation state via `useState`

## Error Conditions

- **No `fileContent`**: Renders placeholder — no image attempted
- **`fileEncoding` not `"base64"`**: Falls to empty state — image not rendered
- **Image load failure**: Browser broken image icon — no custom error handler
- **Missing `fileName`**: TypeScript compile error

## Future Enhancements

- Full-screen mode for detailed image inspection
- Download or export button for the displayed image
- Pan support when zoomed beyond container bounds

## Open Questions

- Should zoom level reset automatically when `fileContent` changes?
- What image formats beyond PNG should be explicitly handled and documented?

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

## Core Concepts

- **Internal state management**: Zoom and rotation are managed via `useState` within the component — these are UI-only view states that don't need to persist or lift to parents.
- **Toolbar control pattern**: Zoom in/out and rotate buttons form a compact toolbar that sits above the image — controls are always visible, giving the user continuous feedback on current zoom/rotation values.
- **Base64 image pipeline**: Constructs a data URI from `fileContent` + `mimeType` (`data:${mimeType};base64,${fileContent}`) — the component is a renderer of pre-loaded content, not a fetcher.
- **Clamped property pattern**: Zoom is clamped to `[0.5, 3.0]` via `Math.min`/`Math.max` and rotation cycles via modulo 360 — edge cases are handled at the state update level, not with conditional rendering.

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/ImageViewer.tsx`
