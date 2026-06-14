# DataTable

---

# Feature Summary

A generic typed data table organism built on MUI Table that renders structured data with sticky headers. Supports custom column definitions (id, label, alignment, min-width) and per-cell custom rendering via a render prop pattern.

---

# Implementation Reference

## Status

Implemented

## Source Files

| File | Path | Role |
|------|------|------|
| Component | `src/common/components/organisms/DataTable.tsx` | View — generic data table |
| Barrel | `src/common/components/organisms/index.ts` | Re-exports `DataTable`, `Column`, `DataTableProps` |
| Spacing tokens | `src/theme/tokens/spacing.ts` | Token imports |

No test or story files exist.

## Public API

### Exports

```
DataTable<T>          (generic component)
Column<T>             (generic interface)
DataTableProps<T>     (generic interface)
```

### Import Path

```typescript
import { DataTable } from "src/common/components/organisms/DataTable";
import type { Column, DataTableProps } from "src/common/components/organisms/DataTable";
// or via barrel:
import { DataTable } from "src/common/components/organisms";
```

### Generic Constraint

```typescript
// DataTable uses <T extends Record<string, any>>
```

This constraint ensures `row[column.id]` access is valid for all rows.

### Interfaces

```typescript
interface Column<T> {
  id: string;                                // keyof T at usage site (not enforced generically)
  label: string;                             // displayed in header cell
  minWidth?: number;                         // optional minimum column width (px)
  align?: "right" | "left" | "center";       // optional text alignment
  render?: (row: T) => React.ReactNode;      // optional custom cell renderer
}

interface DataTableProps<T> {
  columns: Column<T>[];                      // required — column definitions
  data: T[];                                  // required — data rows
  keyField: keyof T;                          // required — unique row key field
}
```

### Contract

- All three props are required — TypeScript compilation fails if any are omitted
- `Column<T>.id` must correspond to a key of `T` at the call site (not enforced generically — caller responsibility)
- `keyField` is enforced via `keyof T` — must be a valid key of the data type
- When `column.render` is provided, it takes priority; otherwise `row[column.id]` is rendered as `ReactNode`

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Stateless UI | Component owns no state | Pure function of `columns`, `data`, `keyField` — no useState/useEffect |
| Atomic Hierarchy | Organism | Composes MUI Table, TableHead, TableBody, TableRow, TableCell (atoms) with layout structure |
| Theme Sovereignty | All styling via theme tokens | `borderColor: 'divider'`, `backgroundColor: 'background.paper'`, `spacing.md/sm` |
| MVVM Separation | Pure View | No data fetching, no business logic, no ViewModel |
| Dependency Safety | Minimal imports | Only MUI Table components and spacing tokens |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|-----------------|--------------|
| `DataTable` | `src/common/components/organisms/DataTable.tsx` | Generic data table | Render sticky header table with typed columns, custom cell rendering via `column.render(row)`, hover row styling | MUI (`Table`, `TableBody`, `TableCell`, `TableContainer`, `TableHead`, `TableRow`, `Paper`, `Box`), `spacing` |

No ViewModel — component is purely presentational.

## State Model

No state — stateless data table.

## Column Dispatch Logic

```
For each row in data:
  For each column in columns:
    if column.render exists:
      render column.render(row)
    else:
      render String(row[column.id])   // implicit ReactNode conversion
```

## Workflow Design

No interactive workflows — component renders data and emits no callbacks. All interactivity (sorting, pagination, filtering) is delegated to parent.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `columns`, `data`, `keyField` required | TypeScript compilation | TS error | N/A — compile-time |
| `keyField` must be keyof T | TypeScript compilation | TS error if `keyField` not in `keyof T` | N/A — compile-time |
| `Column<T>.id` matches key of T | Caller responsibility | `row[column.id]` returns `undefined` at runtime | Cell renders blank/undefined — no crash |
| Empty `data` array | Runtime | Header renders with no body rows | Table appears empty (header visible) |
| Empty `columns` array | Runtime | Table renders with no columns — empty table | Invisible to user |

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|-----------|-------|----------------|---------------|
| Null/undefined keyField value | `row[keyField]` is null/undefined | `String(row[keyField])` produces `"null"` or `"undefined"` as React key | React key collision warning; rendering may flicker |
| Duplicate key values | Two rows share same `row[keyField]` value | React warns about duplicate keys | Rendering artifacts possible (rows may not update correctly) |
| Missing render function | No `column.render` provided | Falls back to `row[column.id]` | Cell shows the raw value |
| Error in render function | `column.render(row)` throws | Propagates to parent — no error boundary | Table crashes |
| `row[column.id]` is undefined | Column id does not match data shape | Renders `undefined` as text | Cell shows "undefined" text |

---

# Non-Functional Requirements

## Performance

- O(n * m) cell rendering (n = rows, m = columns) — no virtualization
- No row memoization — all rows re-render on every parent re-render
- Sticky header via MUI `stickyHeader` prop — CSS-based, no JS scroll handling

## Reliability

- `String(row[keyField])` ensures key is always a primitive string — prevents React key type warnings
- `hover` prop on `TableRow` enables MUI's hover styling without custom CSS
- Border color uses `'divider'` theme token — adapts to light/dark mode

## Maintainability

- Fully generic — any data shape works provided `Column<T>.id` values match data keys
- Column definition pattern separates schema from data — adding a column is just a new `Column<T>` entry
- No built-in pagination/sorting — keeps component pure and focused

---

# Architecture Compliance Review

## Applied Patterns

- **Stateless UI**: Full compliance
- **Atomic Hierarchy**: Full compliance — organism tier
- **Theme Sovereignty**: Full compliance — no hardcoded values
- **MVVM Separation**: Full compliance — pure View
- **Repository Isolation**: N/A — no data access
- **Localization**: N/A — `column.label` is a pre-translated string from parent

## Risks

- No row memoization (`React.memo`) — large datasets (1000+ rows) will cause performance degradation on every parent render
- `Column<T>` interface does not enforce that `id` is a `keyof T` — it's declared as `string`, so callers can pass mismatched IDs without compile-time errors
- `String(row[column.id])` cast at runtime — if the value is an object, it renders `[object Object]` instead of an error
- No error boundary around `column.render(row)` — a rendering error in a custom cell crashes the entire table

## Gaps

- No built-in empty state — parent must handle `data.length === 0` externally
- No loading or error states — parent responsibility
- No sorting, filtering, pagination, or row selection — documented as future enhancements
- No `aria-label` on table — accessibility gap (though `aria-label` is set to "premium data table" as a static value)

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `DataTable` | `src/common/components/organisms/DataTable.tsx` | `DataTable`, `Column`, `DataTableProps` | `@mui/material`, `spacing` |
| Barrel | `src/common/components/organisms/index.ts` | `DataTable` | re-exports |

---

# Final Rule

The component must never manage pagination, sorting, filtering, or data loading — these are parent responsibilities. The `Column<T>.id` field is a `string` type but must semantically match a key of `T` at the call site; mismatches result in silent runtime errors. The keyField must map to a unique, stable value per row — duplicate or null/undefined keys produce React rendering warnings.
