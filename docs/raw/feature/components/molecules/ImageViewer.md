# ImageViewer

Displays image content with interactive zoom and rotation controls.

## Overview

Renders base64-encoded image data with a toolbar for zoom (0.5x to 3x) and rotation (0 to 270 degrees in 90-degree increments). Shows a placeholder message when no image content is provided. Useful for previewing image files within a file viewer context.

## Responsibilities

- Render base64-encoded images with zoom and rotation controls
- Provide zoom range from 0.5x to 3x with increment/decrement buttons
- Provide 90-degree incremental rotation cycling through 0–270 degrees
- Show a placeholder message when no image content is provided

## Non-Responsibilities

- Does not load file content from disk or network
- Does not support video, PDF, or non-image file types
- Does not provide full-screen mode or download capability
- Does not persist zoom or rotation state across re-renders
- Does not handle image load errors or invalid image data

## Core Concepts

- **Internal view state:** Zoom and rotation are managed locally — these are UI-only view states that don't need to persist or be lifted to parents.
- **Toolbar control pattern:** Zoom in/out and rotate buttons form a compact toolbar above the image; controls are always visible, giving the user continuous feedback on current values.
- **Base64 image pipeline:** Constructs an image source from content data and MIME type — the component is a renderer of pre-loaded content, not a fetcher.
- **Clamped property pattern:** Zoom is clamped to range limits and rotation cycles via modulo arithmetic — edge cases are handled at the state update level.

## States

- **Loaded** — Content provided with valid encoding; image renders with toolbar
- **Empty** — No content; placeholder message displayed
- **Error** — Corrupted image data; browser shows broken image icon
- **Zooming** — Zoom level changes via toolbar buttons
- **Rotating** — Rotation cycles via toolbar buttons

## Edge Cases

- No content provided: Renders placeholder instead of the image
- Content provided but encoding is not base64: Falls to empty state
- No MIME type provided with base64 content: Defaults to PNG
- Image fails to load (broken data): Browser shows broken image icon — no custom error handling
- Zoom range: Clamped between 0.5x and 3x
- Rotation cycles: 0, 90, 180, 270 degrees (modulo 360)
- Very large images: Constrained by container dimensions with aspect ratio preserved

## Error Conditions

- Missing required value (file name) — Required value must be provided
- Invalid encoding — Falls to empty state
- Image load failure — Browser broken image icon; no custom error handler
