# FileViewerRouter

---

# Feature Summary

A smart routing organism that dispatches file content to the correct viewer molecule based on file extension. Supports CSV, Markdown, Images, and JSON/JSONL files with an unsupported-file fallback. Acts as the entry point for file preview across the application.

---

# Implementation Reference

## Status

Implemented

## Source Files

| File | Path | Role |
|------|------|------|
| Component | `src/common/components/organisms/FileViewerRouter.tsx` | Organism — extension-based router/dispatcher |
| Barrel | `src/common/components/organisms/index.ts` | Re-exports `FileViewerRouter` |
| CsvViewer | `src/common/components/organisms/CsvViewer.tsx` | Sub-viewer for `.csv` |
| MdViewer | `src/common/components/molecules/MdViewer.tsx` | Sub-viewer for `.md`, `.markdown`, `.txt` |
| ImageViewer | `src/common/components/molecules/ImageViewer.tsx` | Sub-viewer for image extensions |
| JsonViewer | `src/common/components/molecules/JsonViewer.tsx` | Sub-viewer for `.json`, `.jsonl` |
| Localization | `src/common/localization/LanguageContext.tsx` | `useLanguage` hook |
| Spacing tokens | `src/theme/tokens/spacing.ts` | Token imports |

No test or story files exist.

## Public API

### Exports

```
FileViewerRouter          (component)
FileViewerRouterProps     (interface)
```

### Import Path

```typescript
import { FileViewerRouter } from "src/common/components/organisms/FileViewerRouter";
// or via barrel:
import { FileViewerRouter } from "src/common/components/organisms";
```

### Props Interface

```typescript
interface FileViewerRouterProps {
  fileName: string;                        // required — including extension for routing
  fileContent?: string;                    // optional — file content string
  fileEncoding?: "text" | "base64";        // optional — passed through to ImageViewer only
  mimeType?: string;                       // optional — passed through to ImageViewer only
}
```

### Route Map

| Extension(s) | Target Viewer | Passed Props |
|-------------|--------------|--------------|
| `.csv` | `CsvViewer` | `fileName`, `fileContent` |
| `.md`, `.markdown`, `.txt` | `MdViewer` | `fileName`, `fileContent` |
| `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`, `.webp` | `ImageViewer` | `fileName`, `fileContent`, `fileEncoding`, `mimeType` |
| `.json`, `.jsonl` | `JsonViewer` | `fileName`, `fileContent` |
| Other / none | Fallback Box | hardcoded fallback title and extension label |

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Stateless UI | Component owns no state | Pure routing function of props — no useState/useEffect |
| Atomic Hierarchy | Organism | Composes molecules (CsvViewer, MdViewer, ImageViewer, JsonViewer) and atoms (Typography) |
| Theme Sovereignty | Fallback UI via theme tokens | `spacing.lg`, `palette.text.secondary` |
| MVVM Separation | Pure View | No data fetching, no business logic beyond extension extraction |
| Localization | `useLanguage` for fallback keys | `viewer.unsupported`, `viewer.extension` |
| Dependency Safety | Controlled imports | Imports only known sub-viewer molecules |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|-----------------|--------------|
| `FileViewerRouter` | `src/common/components/organisms/FileViewerRouter.tsx` | Extension-based file viewer dispatcher | Extract extension via `split('.').pop()`, switch on extension, render matched viewer or fallback | `CsvViewer`, `MdViewer`, `ImageViewer`, `JsonViewer`, MUI (`Box`, `Typography`), `useLanguage`, `spacing` |

No ViewModel — routing is a stateless deterministic function of props.

## Sub-Viewer Contracts

### Consumer Perspective

Each sub-viewer is an independent molecule imported by the router. The router must not transform data before passing it — pass-through of `fileContent`, `fileEncoding`, `mimeType` is the only behavior.

### ImageViewer-Specific Contract

`fileEncoding` and `mimeType` are forwarded only to `ImageViewer`. All other viewers receive `fileName` and `fileContent` only.

## State Model

No state — stateless routing organism.

## Workflow Design

```
User selects a file
       ↓
Parent provides fileName, fileContent
       ↓
FileViewerRouter receives props
       ↓
Extract ext = fileName.split(".").pop()?.toLowerCase()
       ↓
switch (ext)
  ├── "csv"          → <CsvViewer />
  ├── "md"/"markdown"/"txt" → <MdViewer />
  ├── "jpg"/"jpeg"/"png"/"gif"/"svg"/"webp" → <ImageViewer />
  ├── "json"/"jsonl" → <JsonViewer />
  └── default → Fallback Box with title + extension label
```

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `fileName` required | TypeScript compilation | TS error | N/A — compile-time |
| Extension extraction | `fileName.split('.').pop()` returns `undefined` | Falls to `default` case — unsupported fallback | User sees "Binary / Unsupported File" |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|-----------|-------|----------------|---------------|
| Unsupported extension | No matching `case` in switch | Renders fallback Box with title + `.ext` label | User sees "Binary / Unsupported File" message |
| Missing localization key | `literal["viewer.unsupported"]` undefined | Uses `"⚠️"` as fallback for title, `"📄"` for extension | Fallback emoji displayed |
| Sub-viewer crash | Error in CsvViewer/MdViewer/etc. | Propagates to parent — no error boundary | App crashes or parent catches error |
| No file extension | `ext` is `undefined` | Falls to `default` case | Unsupported file message with `undefined` as extension |
| No `fileContent` | `fileContent` prop omitted | Delegated to sub-viewer — each handles independently | Depends on sub-viewer |

---

# Non-Functional Requirements

## Performance

- O(1) routing decision — simple switch-case, no iteration
- Sub-viewers are lazy-loaded only for their matched route — no unnecessary rendering

## Reliability

- Extension extraction uses `?.toLowerCase()` — case-insensitive matching
- Localization fallback prevents blank UI on missing keys
- No side effects — deterministic output for given props

## Maintainability

- Adding a new file type requires: (1) add `case` to switch, (2) import viewer molecule, (3) add prop forwarding
- Extension list concentrated in single switch-case — single point of truth for routing logic
- Sub-viewers can be tested independently — router is just a switch

---

# Architecture Compliance Review

## Applied Patterns

- **Stateless UI**: Full compliance
- **Atomic Hierarchy**: Full compliance — organism composes molecules
- **Theme Sovereignty**: Full compliance in fallback UI
- **MVVM Separation**: Full compliance — pure View
- **Localization**: Full compliance — uses `useLanguage` for fallback text
- **Repository Isolation**: N/A — no data access

## Risks

- No error boundary around sub-viewers — a crash in any sub-viewer propagates to the parent and may take down the entire file preview
- `fileEncoding` and `mimeType` forwarding is implicit — dependent on ImageViewer API shape; changes to ImageViewer props must update router
- Hardcoded emoji fallbacks (`"⚠️"`, `"📄"`) — not localizable; violates localization invariant for fallback case

## Gaps

- No support for `.xml`, `.yaml`, `.pdf`, `.log` — future enhancement tracked in spec
- No file-size-based routing — large files could crash sub-viewers
- No `key` prop on routed sub-viewers — may cause React reconciliation issues on re-mount with same extension

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `FileViewerRouter` | `src/common/components/organisms/FileViewerRouter.tsx` | `FileViewerRouter`, `FileViewerRouterProps` | `CsvViewer`, `MdViewer`, `ImageViewer`, `JsonViewer`, MUI (`Box`, `Typography`), `useLanguage`, `spacing` |
| Barrel | `src/common/components/organisms/index.ts` | `FileViewerRouter` | re-exports |
| `CsvViewer` | `src/common/components/organisms/CsvViewer.tsx` | `CsvViewer` | see CsvViewer spec |
| `MdViewer` | `src/common/components/molecules/MdViewer.tsx` | `MdViewer` | molecule |
| `ImageViewer` | `src/common/components/molecules/ImageViewer.tsx` | `ImageViewer` | molecule |
| `JsonViewer` | `src/common/components/molecules/JsonViewer.tsx` | `JsonViewer` | molecule |

---

# Final Rule

The router must never contain rendering logic beyond the fallback unsupported state — all file-type-specific rendering must be delegated to sub-viewer molecules. The switch-case is the single source of truth for the supported extension-to-viewer mapping; adding a new file type requires only a new case entry and the corresponding molecule import. Hardcoded emoji fallback strings violate the localization invariant and must be replaced with translation keys.
