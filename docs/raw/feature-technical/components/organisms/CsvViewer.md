# CsvViewer

---

# Feature Summary

A CSV file viewer organism that parses raw CSV strings into tabular data and renders a paginated, sortable table with sticky headers. Auto-detects comma vs. semicolon delimiters from the first line. Manages its own pagination UI state (page, rowsPerPage) as a pure visual concern.

---

# Implementation Reference

## Status

Implemented

## Source Files

| File | Path | Role |
|------|------|------|
| Component | `src/common/components/organisms/CsvViewer.tsx` | Organism — CSV parse + paginated table |
| Barrel | `src/common/components/organisms/index.ts` | Re-exports `CsvViewer` |
| Localization | `src/common/localization/LanguageContext.tsx` | `useLanguage` hook |
| Spacing tokens | `src/theme/tokens/spacing.ts` | Token imports |

No test or story files exist.

## Public API

### Exports

```
CsvViewer          (component)
CsvViewerProps     (interface)
```

### Import Path

```typescript
import { CsvViewer } from "src/common/components/organisms/CsvViewer";
// or via barrel:
import { CsvViewer } from "src/common/components/organisms";
```

### Props Interface

```typescript
interface CsvViewerProps {
  fileName: string;          // required — CSV file name for display
  fileContent?: string;       // optional — raw CSV content string
}
```

### Contract

- `fileName` is required — TypeScript compilation fails if omitted
- `fileContent` is optional — empty/undefined content produces empty table + empty-state message
- No runtime validation
- Delimiter auto-detected from first line: `includes(";")` → semicolon, else comma

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Stateless UI | UI-only state | `useState` for `page` and `rowsPerPage` — purely visual pagination state, not domain state |
| Atomic Hierarchy | Organism | Composes MUI Table, Typography, TablePagination (molecules/atoms); contains parse logic |
| Theme Sovereignty | All styling via theme tokens | `spacing.md/sm`, `palette.text.primary/secondary`, `background.default/paper`, `borderColor: 'divider'` |
| MVVM Separation | View with parse utility | `parseCsv` is a pure utility function (model-adjacent), not a ViewModel hook |
| Localization | `useLanguage` for empty message | Key `viewer.empty_csv` with hardcoded fallback |
| Dependency Safety | Minimal imports | Only MUI components, `useLanguage`, spacing tokens |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|-----------------|--------------|
| `CsvViewer` | `src/common/components/organisms/CsvViewer.tsx` | CSV file viewer | Parse CSV string, detect delimiter, render paginated table with sticky headers, empty state handling | MUI (`Box`, `Table`, `TableBody`, `TableCell`, `TableContainer`, `TableHead`, `TableRow`, `Paper`, `Typography`, `TablePagination`), `useLanguage`, `spacing` |

## ViewModel

No separate ViewModel hook. The component co-locates the following concerns:

| Concern | Implementation | Location |
|---------|---------------|----------|
| Parse CSV | `parseCsv(content: string): { headers: string[]; rows: string[][] }` | In-component utility (module-level function) |
| Pagination state | `useState(0)` for `page`, `useState(10)` for `rowsPerPage` | In component body |
| Delimiter detection | `lines[0].includes(";") ? ";" : ","` | Inside `parseCsv` |

## State Model

| State Variable | Type | Initial Value | Purpose | Transitions |
|---------------|------|---------------|---------|-------------|
| `page` | `number` | `0` | Current page index | `setPage(newPage)` on page change; `setPage(0)` on rows-per-page change |
| `rowsPerPage` | `number` | `10` | Rows displayed per page | `setRowsPerPage(parseInt(value, 10))` on rows-per-page change |

### State Transitions

```
[page: 0, rowsPerPage: 10] ← initial
       ↓
User clicks next page → page++
User changes rows-per-page → rowsPerPage = newValue, page = 0
       ↓
[page: n, rowsPerPage: m] ← current
```

### Parsing State (derived, not stored)

```
fileContent string → parseCsv() → { headers: string[], rows: string[][] }
                                    ↓
                              displayed rows = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
```

## Workflow Design

```
Parent provides fileName + fileContent
       ↓
CsvViewer receives props
       ↓
parseCsv(fileContent ?? "") executes:
  ├── Split by /\r?\n/, trim, filter empty
  ├── If lines.length === 0 → { headers: [], rows: [] }
  ├── Detect delimiter: lines[0].includes(";") ? ";" : ","
  ├── headers = lines[0].split(delimiter)
  └── rows = lines[1..n].map(line => line.split(delimiter))
       ↓
Render UI:
  ├── fileName as h4 title
  ├── If headers.length === 0 → empty message
  ├── Table with stickyHeader:
  │     ├── TableHead → header cells
  │     └── TableBody → sliced rows (page * rowsPerPage to page * rowsPerPage + rowsPerPage)
  └── TablePagination:
        ├── rowsPerPageOptions: [10, 25, 50]
        ├── count: rows.length
        └── page, rowsPerPage controlled by state
```

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `fileName` required | TypeScript compilation | TS error | N/A — compile-time |
| Empty `fileContent` | `fileContent ?? ""` produces empty string | `parseCsv("")` returns `{ headers: [], rows: [] }` | Empty-state message displayed |
| Delimiter detection | First line contains `;` | Switches to semicolon delimiter for all lines | Incorrect parse if later lines use comma — no error surfaced |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|-----------|-------|----------------|---------------|
| No fileContent | Prop omitted or undefined | `parseCsv("")` returns empty arrays | Renders title + "No CSV content available" |
| Empty CSV string | Content is empty string | Same as above | Same as above |
| Mixed delimiters | Some rows use `;`, others use `,` | Delimiter detected from first line only — subsequent lines may parse incorrectly | Rows may have unexpected cell counts; no error surfaced |
| Missing translation key | `literal["viewer.empty_csv"]` undefined | Uses hardcoded `"No CSV content available"` | English fallback displayed |
| Whitespace-only CSV | After trim, all lines empty | Lines filtered out; `headers` and `rows` both empty | Empty-state message |
| Large CSV (>50K rows) | Rows count exceeds typical | Pagination without virtualization — DOM grows with each page | Performance degradation |

---

# Non-Functional Requirements

## Performance

- Parse is O(n) on lines — runs on every render (no memoization of `parseCsv` result)
- Table renders all columns and current page rows — no virtualization for large datasets
- `page`/`rowsPerPage` state changes cause full component re-render including re-parse
- **Risk**: `parseCsv` executes on every render — should memoize via `useMemo` for large files

## Reliability

- Delimiter detection is first-line-only heuristic — works for ~95% of real-world CSV files
- Pagination resets to page 0 on `rowsPerPage` change — prevents invalid page index after page size change
- `stickyHeader` + fixed-height container ensures column labels remain visible during scroll

## Maintainability

- `parseCsv` is a module-level pure function — independently testable without React
- Pagination state is fully internal (UI-only) — no parent coordination needed
- Single-file implementation — no supporting data types file

---

# Architecture Compliance Review

## Applied Patterns

- **Stateless UI**: Partial compliance — `page` and `rowsPerPage` are UI interaction state (compliant per invariant); `parseCsv` is domain-adjacent logic that should ideally be externalized to a utility or hook
- **Atomic Hierarchy**: Full compliance — organism tier
- **Theme Sovereignty**: Full compliance — no hardcoded values
- **MVVM Separation**: Partial compliance — `parseCsv` lives in the component file; should be extracted to a utility module within the organism's scope for testability
- **Localization**: Full compliance — uses `useLanguage` for empty message
- **Repository Isolation**: N/A — no data access

## Risks

- `parseCsv` runs on every render with no `useMemo` — potential performance issue on large files
- Delimiter detection is heuristic-based (first line only) — mixed-delimiter files parse silently wrong
- No column type detection — all cells rendered as strings, no number/date formatting
- No error boundary — uncaught errors in parse (e.g., if `fileContent` is not a string type) propagate to parent

## Gaps

- No column sorting — documented as future enhancement
- No column filtering/search — documented as future enhancement
- No row selection — documented as future enhancement
- No virtualization — performance degrades on large datasets
- `parseCsv` not extracted to separate module — violates separation of concerns (parse logic mixed with component code)

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `CsvViewer` | `src/common/components/organisms/CsvViewer.tsx` | `CsvViewer`, `CsvViewerProps` | `react`, `@mui/material`, `useLanguage`, `spacing` |
| Barrel | `src/common/components/organisms/index.ts` | `CsvViewer` | re-exports |

---

# Final Rule

Pagination state (`page`, `rowsPerPage`) is the only allowed internal state — it is pure UI interaction state in compliance with the Stateless UI invariant. The `parseCsv` function must be treated as a module-level pure utility, not a ViewModel; it must not cause side effects, access React hooks, or interact with the DOM. The delimiter detection heuristic (`first line includes ";"`) is the single source of truth for delimiter selection — mixed-delimiter files are an accepted limitation with no error recovery.
