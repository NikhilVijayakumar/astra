# MdViewer

---

# Feature Summary

A markdown file viewer molecule that renders raw markdown content to styled HTML using a lazily loaded `react-markdown` parser. Displays the file name as a heading with divider, and applies custom theme-aware styling to headings, blockquotes, paragraphs, lists, and horizontal rules. Shows a localized empty-state message when no content is provided.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Role |
|------|------|
| `src/common/components/molecules/MdViewer.tsx` | Component implementation |
| `src/common/components/molecules/index.ts` | Barrel re-export |

## Public API
```typescript
import { MdViewer } from "astra";
import { MdViewer } from "@/common/components/molecules/MdViewer";

interface MdViewerProps {
  fileName: string;
  fileContent?: string;
}
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Molecule (Atomic Design) | Composes MUI atoms (Box, Typography, Divider) with a lazy-loaded third-party markdown parser | No imports from organism/template tiers |
| Stateless UI | Props-driven rendering — no data fetching, no side effects, no mutable state | File content arrives via `fileContent` prop; component never loads files from disk/network |
| Theme Sovereignty | All visual values derive from theme tokens | Heading, blockquote, paragraph, list styles all use theme token strings (`'primary.main'`, `'action.hover'`, `'text.primary'`); spacing from `spacing` constants |
| Localization | Uses `useLanguage` hook for empty-state message | `viewer.empty_markdown` translation key with fallback: `"No markdown content available for preview."` |
| Dependency Safety | `react-markdown` loaded via `React.lazy()` — deferred to runtime | Markdown parser not included in initial bundle; lazy import reduces critical path weight |

---

# Technical Structure

## Views table

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| MdViewer (root) | `src/common/components/molecules/MdViewer.tsx` | Renders markdown content as styled HTML | Render file name as h3 heading; render divider separator; conditionally render markdown content or empty-state message; apply theme-aware styling to markdown elements via CSS selectors; wrap lazy-loaded react-markdown in Suspense | `react` (FC, lazy, Suspense), `@mui/material` (Box, Typography, Divider), `../../localization/LanguageContext` (useLanguage), `../../../theme/tokens/spacing` |

## Data Flow

```
fileContent (string) 
  → trim().length > 0 check
  → YES: raw markdown passed to <Markdown>
  → NO:  `_{emptyMessage}_` italicized fallback passed to <Markdown>

fileName (string)
  → always rendered as h3 heading above divider
```

## Translation Keys

| Key | Default | Location |
|-----|---------|----------|
| `viewer.empty_markdown` | "No markdown content available for preview." | `useLanguage().literal` access in component |

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `fileName` required | Not provided | TypeScript compile error | N/A |
| `fileContent` optional | Not provided | Content set to `_{emptyMessage}_` (italicized placeholder in markdown) | Placeholder renders as italic text via markdown parser |
| Empty content | `fileContent.trim().length === 0` | Same as not provided — `_{emptyMessage}_` rendered | Same as above |
| Missing translation key | `literal["viewer.empty_markdown"]` returns falsy | Hardcoded fallback string used | Fallback renders in place of translation |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Empty content | No `fileContent` or whitespace-only | Renders italicized empty-state message | Sees "No markdown content available for preview." |
| Missing translation key | Key not in literal map | Uses `||` fallback to hardcoded string | English fallback displays |
| Invalid markdown | Malformed markdown syntax | `react-markdown` renders content as plain text gracefully | Content visible without markdown formatting |
| Lazy load in progress | First render before `react-markdown` module loads | `<Suspense fallback={<LoadingFallback />}>` shows "Loading..." | Sees "Loading..." until parser loads |
| Very long content | Large `fileContent` string | Scrolls via `overflow-y: auto` | User scrolls within the container |

---

# Non-Functional Requirements
## Performance
- `react-markdown` is lazy-loaded via `React.lazy()` — initial bundle size excludes markdown parser
- No memoization — component re-renders on any prop change
- Long content handled by native overflow scrolling — no virtualization

## Reliability
- Empty content never crashes — fallback message always presentable
- Missing translation key does not break — hardcoded fallback chain
- Invalid markdown handled gracefully by `react-markdown`'s parser

## Maintainability
- ~73 lines, single file
- CSS selector-based styling for markdown elements — easy to extend with new selectors
- Single responsibility: markdown rendering

---

# Architecture Compliance Review
## Applied Patterns
- **Lazy loading**: `const Markdown = lazy(() => import("react-markdown").then(...))` — code splitting for a heavy dependency
- **Fallback chain**: Empty content → translation key → hardcoded fallback
- **CSS selector styling**: Theme-aware element selectors (`& h1, & h2, & h3`, `& blockquote`, etc.) inside MUI `sx` prop
- **Molecule tier compliance**: No data fetching, no business logic, no organism imports
- **Localization compliance**: `useLanguage` for all user-facing text

## Risks
- `react-markdown` lazy import has no retry logic — network failure during lazy load will cause Suspense to throw
- No `displayName` set on component

## Gaps
- No gap identified — component is fully compliant with all invariants

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| MdViewer | `src/common/components/molecules/MdViewer.tsx` | `MdViewer` (component) | `react`, `@mui/material`, `../../localization/LanguageContext`, `../../../theme/tokens/spacing`, `react-markdown` (lazy) |
| molecules index | `src/common/components/molecules/index.ts` | Re-exports `MdViewer` | `./MdViewer` |

---

# Final Rule

Pure file viewer. No file system access. No network fetching. Content arrives pre-loaded via props. Empty content never crashes — renders localized fallback. Markdown parser is lazy-loaded to preserve initial bundle size.
