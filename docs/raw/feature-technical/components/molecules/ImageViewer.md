# ImageViewer

---

# Feature Summary

An interactive base64 image viewer molecule with toolbar controls for zoom (0.5x–3x, 0.2x steps) and rotation (0°, 90°, 180°, 270°). Constructs a data URI from `fileContent` + `mimeType` and renders via an `<img>` element. Manages zoom and rotation as internal UI-only state via `useState`. Shows a localized placeholder when no content is provided.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Role |
|------|------|
| `src/common/components/molecules/ImageViewer.tsx` | Component implementation |
| `src/common/components/molecules/index.ts` | Barrel re-export |

## Public API
```typescript
import { ImageViewer } from "astra";
import { ImageViewer } from "@/common/components/molecules/ImageViewer";

interface ImageViewerProps {
  fileName: string;
  fileContent?: string;
  fileEncoding?: "text" | "base64";
  mimeType?: string;
}
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Molecule (Atomic Design) | Composes MUI atoms (Box, Typography, IconButton) with MUI icons (ZoomIn, ZoomOut, RotateRight) | No imports from organism/template tiers |
| Stateless UI | Manages only UI presentation state (`zoom`, `rotation`) via `useState` | Both are purely visual view states — not domain data, not business state, not persisted. All image content arrives via props |
| Theme Sovereignty | All visual values derive from theme tokens | Background via `'background.default'` / `'background.paper'`; border via `'divider'`; text via `'text.secondary'`; spacing from `spacing` constants |
| Localization | Uses `useLanguage` hook for empty-state message | `viewer.empty_image` translation key with fallback: `"No image content available for preview."` |
| Dependency Safety | Four MUI icon imports (`@mui/icons-material/ZoomIn`, etc.) | Tree-shakeable icon imports — only the used icons are included in the bundle |

---

# Technical Structure

## Views table

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| ImageViewer (root) | `src/common/components/molecules/ImageViewer.tsx` | Renders base64 image with zoom/rotate toolbar | Construct data URI from `fileContent` + `mimeType`; manage zoom state (clamped 0.5–3.0); manage rotation state (modulo 360); render toolbar with filename and zoom/rotate controls; render `<img>` or empty-state fallback | `react` (FC, useState), `@mui/material` (Box, Typography, IconButton), `@mui/icons-material/ZoomIn`, `@mui/icons-material/ZoomOut`, `@mui/icons-material/RotateRight`, `../../localization/LanguageContext`, `../../../theme/tokens/spacing` |

## Internal State

| State | Type | Initial | Mutations | Purpose |
|-------|------|---------|-----------|---------|
| `zoom` | `number` | `1` | `Math.min(prev + 0.2, 3)` / `Math.max(prev - 0.2, 0.5)` | Controls image scale (0.5x–3x) |
| `rotation` | `number` | `0` | `(prev + 90) % 360` | Controls image rotation (0, 90, 180, 270) |

## Data Flow

```
fileContent (string | undefined)
fileEncoding (string | undefined)
mimeType (string | undefined)
  ↓
imageSource = fileContent && fileEncoding === "base64"
  ? `data:${mimeType || "image/png"};base64,${fileContent}`
  : null
  ↓
imageSource ? <img src={imageSource} zoom+rotation transforms>
            : <placeholder Box>{emptyMessage}</placeholder>
```

## Translation Keys

| Key | Default | Location |
|-----|---------|----------|
| `viewer.empty_image` | "No image content available for preview." | `useLanguage().literal` access in component |

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `fileName` required | Not provided | TypeScript compile error | N/A |
| `fileContent` optional | Not provided | `imageSource = null` → placeholder rendered | Empty-state box shown with translated message |
| `fileEncoding` must be "base64" | Not "base64" or undefined | `imageSource = null` → placeholder rendered | Same empty-state as no content |
| `mimeType` optional | Not provided | Defaults to `"image/png"` in data URI | Image renders with PNG MIME type |
| Zoom minimum | zoom < 0.5 | Clamped to 0.5 via `Math.max` | Zoom stops at 0.5x |
| Zoom maximum | zoom > 3.0 | Clamped to 3.0 via `Math.min` | Zoom stops at 3.0x |
| Rotation cycle | rotation >= 360 | Modulo 360 resets to 0 | Rotation cycles naturally |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| No content | `fileContent` not provided | `imageSource = null` → placeholder Box with empty message | Sees "No image content available for preview." |
| Wrong encoding | `fileEncoding` not `"base64"` | `imageSource = null` → placeholder Box | Sees placeholder (same as no content) |
| Corrupted image data | Base64 string invalid | Browser shows broken image icon on `<img>` | Sees broken image icon — no custom error handler |
| Missing translation key | `literal["viewer.empty_image"]` falsy | Hardcoded fallback string used | English fallback displays in placeholder |

---

# Non-Functional Requirements
## Performance
- Minimal re-render: only zoom/rotation state changes trigger re-renders
- No lazy loading or code splitting — ImageViewer is eager-loaded
- Image loading is deferred to browser's native `<img>` element

## Reliability
- Zoom and rotation are clamped at the state update level — no conditional rendering
- Empty state is always reachable: missing content, wrong encoding, or missing fileContent all lead to same placeholder
- No async operations inside the component

## Maintainability
- ~128 lines, single file
- Internal state (`zoom`, `rotation`) is self-contained and localized
- Data URI construction is a single inline expression

---

# Architecture Compliance Review
## Applied Patterns
- **UI-only internal state**: `zoom` and `rotation` are pure presentation state — compliant with Stateless UI invariant which permits UI interaction state
- **Clamped property pattern**: State mutations clamped via `Math.min`/`Math.max` at the update site, not with conditional render logic
- **Base64 data URI pattern**: Component receives pre-loaded base64 data and constructs the data URI — no network fetching
- **Toolbar control pattern**: Compact toolbar with filename display and zoom/rotate controls always visible
- **Molecule tier compliance**: No data fetching, no business logic, no organism imports. Internal `useState` is UI-only state (zoom level, rotation angle)

## Risks
- No custom error handler for `<img>` `onError` — corrupted images show browser's native broken image icon
- No `displayName` set on component
- `fileEncoding` typed as `string` in interface (not `"text" | "base64"` union) — runtime logic checks `=== "base64"` but TypeScript does not enforce the union

## Gaps
- [Gap] `fileEncoding` prop type is `string | undefined` in interface but the component logic expects only `"text"` or `"base64"` — type should be narrowed to `"text" | "base64" | undefined` for better compile-time safety
- [Gap] No test file (`ImageViewer.test.tsx`) — component has no test coverage

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| ImageViewer | `src/common/components/molecules/ImageViewer.tsx` | `ImageViewer` (component) | `react`, `@mui/material` (Box, Typography, IconButton), `@mui/icons-material/ZoomIn`, `@mui/icons-material/ZoomOut`, `@mui/icons-material/RotateRight`, `../../localization/LanguageContext`, `../../../theme/tokens/spacing` |
| molecules index | `src/common/components/molecules/index.ts` | Re-exports `ImageViewer` | `./ImageViewer` |

---

# Final Rule

Image content arrives pre-loaded as base64 via props. No file system or network access. Zoom and rotation are UI-only internal state — not persisted, not lifted. Missing content or wrong encoding always shows a localized placeholder, never crashes.
