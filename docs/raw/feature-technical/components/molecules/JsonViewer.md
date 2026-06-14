# JsonViewer

---

# Feature Summary

A JSON/JSONL file viewer molecule with Prism syntax highlighting (vscDarkPlus theme). Parses input JSON string → structured data → highlighted output with a graceful error recovery pipeline. Supports `.jsonl` line-by-line independent parsing where each malformed line produces a structured error object without crashing the entire view.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Role |
|------|------|
| `src/common/components/molecules/JsonViewer.tsx` | Component implementation |
| `src/common/components/molecules/index.ts` | Barrel re-export |

## Public API
```typescript
import { JsonViewer } from "astra";
import { JsonViewer } from "@/common/components/molecules/JsonViewer";

interface JsonViewerProps {
  fileName: string;
  fileContent?: string;
}
```

## Internal Helper (not exported)
```typescript
const normalizeJsonForDisplay(
  fileName: string,
  fileContent?: string,
  emptyMessage?: string,
): string
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Molecule (Atomic Design) | Composes MUI atoms (Box, Typography) with lazy-loaded Prism syntax highlighter | No imports from organism/template tiers |
| Stateless UI | Props-driven rendering — file content arrives via props | The `normalizeJsonForDisplay` function is a pure data transformation (string → string), not a side effect |
| Theme Sovereignty | All visual values derive from theme tokens | Background via `'background.default'` / `'background.paper'`; border via `'divider'`; text via `'text.secondary'`; spacing from `spacing` constants |
| Localization | Uses `useLanguage` hook for empty-state message | `viewer.empty_json` translation key with fallback: `"No JSON content available for preview."` |
| Dependency Safety | `react-syntax-highlighter` and its Prism style loaded lazily | Heavy syntax highlighting dependency deferred to runtime — reduces initial bundle size |

---

# Technical Structure

## Views table

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| JsonViewer (root) | `src/common/components/molecules/JsonViewer.tsx` | Renders syntax-highlighted JSON content | Normalize JSON input via `normalizeJsonForDisplay`; load Prism style asynchronously (`vscDarkPlusPromise`); render file name header bar; render lazy-loaded SyntaxHighlighter inside Suspense; manage async style state via `useState` | `react` (FC, lazy, Suspense, useState), `@mui/material` (Box, Typography), `../../localization/LanguageContext`, `../../../theme/tokens/spacing`, `react-syntax-highlighter` (lazy) |

## Data Flow

```
fileContent (string | undefined)
  ↓
normalizeJsonForDisplay(fileName, fileContent, emptyMessage)
  ↓
  ├── No content or empty → JSON.stringify({ message: emptyMessage })
  ├── .jsonl extension     → Split by lines → each line JSON.parse independently
  │                          → Failed lines → { line, parseError: true, raw }
  │                          → Successful   → parsed object
  │                          → Output: JSON.stringify([...])
  └── Regular JSON         → JSON.parse → JSON.stringify(parsed, null, 2)
                             → On parse failure → { parseError: true, raw: fileContent }
  ↓
normalized string → <SyntaxHighlighter language="json" style={style}>
```

## Translation Keys

| Key | Default | Location |
|-----|---------|----------|
| `viewer.empty_json` | "No JSON content available for preview." | `useLanguage().literal` access in component |

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `fileName` required | Not provided | TypeScript compile error | N/A |
| `fileContent` optional | Not provided | `normalizeJsonForDisplay` returns `{ message: emptyMessage }` as JSON | Renders as valid syntax-highlighted JSON |
| Invalid JSON | `JSON.parse` throws | Returns `{ parseError: true, raw: fileContent }` as JSON | Error object displayed with raw content in the viewer |
| JSONL parse failure | Single line fails `JSON.parse` | That line becomes `{ line: N, parseError: true, raw }` | Other lines still parse successfully; error object inline |
| Missing translation key | `literal["viewer.empty_json"]` falsy | Hardcoded fallback string used | Fallback renders in empty JSON |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Empty content | No `fileContent` or whitespace-only | Returns JSON object with empty message as stringified output | Sees `{ "message": "No JSON content available for preview." }` in highlighted viewer |
| Invalid JSON | `JSON.parse` throws on content | Returns `{ "parseError": true, "raw": "original text" }` as stringified JSON | Sees structured error with raw content visible in viewer |
| JSONL line failure | Single line not valid JSON | Returns `{ "line": N, "parseError": true, "raw": "line text" }` for that line | Only the failed line shows error — other valid lines display normally |
| Style not loaded | First render before `vscDarkPlusPromise` resolves | `style` state is `null` → renders `LoadingFallback` | Sees "Loading..." until style loads |
| SyntaxHighlighter lazy load | Module not yet loaded | `<Suspense fallback={<LoadingFallback />}>` | Sees "Loading..." until module loads |

---

# Non-Functional Requirements
## Performance
- `react-syntax-highlighter` lazy-loaded — not in initial bundle
- vscDarkPlus style fetched asynchronously via dynamic `import()` — first render always shows LoadingFallback
- No virtualization — large JSON files may cause syntax highlighting performance issues

## Reliability
- Parse errors never crash the component — structured error objects preserve context
- JSONL parse isolation: one bad line does not affect others
- Empty content renders valid JSON — never crashes

## Maintainability
- ~111 lines, single file
- Pure helper `normalizeJsonForDisplay` is independently testable (currently untested)
- Three clear parse paths: empty, JSONL, regular JSON

---

# Architecture Compliance Review
## Applied Patterns
- **Parse-and-render pipeline**: Raw string → parse → format → highlight — error at any stage produces structured output
- **Graceful error recovery**: `JSON.parse` wrapped in try/catch; errors produce JSON objects not throw/crash
- **JSONL line isolation**: Independent per-line parse — one failure doesn't cascade
- **Lazy loading**: Both SyntaxHighlighter component and Prism style are deferred
- **Molecule tier compliance**: No data fetching, no business logic (parse is presentation-level formatting), no organism imports

## Risks
- `normalizeJsonForDisplay` is exported only within module — no direct test coverage (no `.test.tsx` for JsonViewer)
- Large JSON (>1MB) may freeze the UI during syntax highlighting — no virtualized rendering
- Async style loading: first render always shows LoadingFallback, even on fast connections (sequential await)

## Gaps
- [Gap] No test file (`JsonViewer.test.tsx`) — component has no test coverage
- [Gap] `normalizeJsonForDisplay` is an untested pure function that could benefit from isolated unit tests

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| JsonViewer | `src/common/components/molecules/JsonViewer.tsx` | `JsonViewer` (component) | `react`, `@mui/material`, `../../localization/LanguageContext`, `../../../theme/tokens/spacing`, `react-syntax-highlighter` (lazy) |
| molecules index | `src/common/components/molecules/index.ts` | Re-exports `JsonViewer` | `./JsonViewer` |

---

# Final Rule

Pure file viewer. No file system access. No network fetching. Parse errors produce structured JSON output — never throw. JSONL lines parse independently with per-line error isolation. Syntax highlighting deferred to runtime. Empty content renders valid JSON, never a crash.
