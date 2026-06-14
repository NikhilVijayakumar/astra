---
tier: organism
---

# CsvViewer

A file viewer component that displays CSV data in a paginated table format.

## Overview

A specialized viewer for CSV files that renders data in a sortable table with pagination controls. Auto-detects the delimiter (comma or semicolon) based on the first line.

## Responsibilities

- Parse CSV content into headers and data rows
- Auto-detect comma or semicolon delimiter from the first line
- Render data in a paginated table with sticky headers
- Provide configurable rows per page (10, 25, 50)
- Show an empty state message when no CSV content is available

## API

### Props

| Prop          | Type     | Default   | Description                   |
| ------------- | -------- | --------- | ----------------------------- |
| `fileName`    | `string` | Required  | The CSV file name for display |
| `fileContent` | `string` | undefined | CSV content as string         |

### Interface

```typescript
interface CsvViewerProps {
  fileName: string;
  fileContent?: string;
}
```

### Features

- **Auto-delimiter detection**: Automatically selects `,` or `;` based on first line
- **Sticky header**: Column headers remain visible during scroll
- **Pagination**: Configurable rows per page (10, 25, 50)
- **Empty state**: Displays message when no CSV content is available
- **Localization**: Uses `useLanguage` hook for empty message

## Localization

Uses `useLanguage` hook. Required translation key:
- `viewer.empty_csv` - Message shown when CSV content is empty

Default fallback: `"No CSV content available"`

```tsx
const translations = {
  en: {
    "viewer.empty_csv": "No CSV data to display",
  }
};
```

## Premium UI

Follows premium-ui-patterns skill:
- Border radius: 1 (8px)
- Uses spacing tokens (spacing.md, spacing.sm)
- Typography: h4 for title, body2 for content

## Validation Rules

- `fileName` is required — TypeScript compilation fails if omitted
- `fileContent` is optional
- Delimiter is auto-detected from the first line: `,` or `;`
- Pagination options: 10, 25, 50 rows per page

## Error Handling

- No `fileContent` or empty content: renders title + empty-state message
- Empty CSV (headers only, no data rows): renders the header row with an empty table body
- Delimiter detection on mixed-delimiter files: may parse incorrectly — no error is surfaced
- Missing localization key: uses a hardcoded fallback string
- Large CSV is paginated (no virtualization) — performance degrades beyond typical dataset sizes

## Non-Responsibilities

- Does not load file content from disk or network
- Does not support write-back, editing, or saving CSV data
- Does not validate CSV structure or column types
- Does not provide column sorting, filtering, or search
- Does not handle non-CSV file formats

## Edge Cases

- No `fileContent` provided or empty: `parseCsv("")` returns `{ headers: [], rows: [] }`; renders the file name title and an empty message
- Empty CSV content (headers only, no data rows): renders the header row with an empty table body and pagination showing 0 rows
- Delimiter auto-detection: checks only the first line for semicolons; mixed-delimiter files may parse incorrectly
- CSV with only newlines/whitespace: lines are trimmed and empty lines filtered; if all lines are empty, headers and rows are empty arrays
- Missing localization key `viewer.empty_csv`: uses hardcoded fallback "No CSV content available"
- Single-cell CSV: renders a one-column table with a single cell
- Very large CSV: rows are paginated (10/25/50 per page); no virtualization for large datasets
- Page changes reset to 0 when changing rows-per-page

## Usage Example

```tsx
import { CsvViewer } from "@/common/components/organisms/CsvViewer";
import { useLanguage } from "@/common/localization/LanguageContext";

const CsvPreview = () => {
  const { literal } = useLanguage();
  const csvData = `Name,Age,Department,Salary
John Doe,32,Engineering,85000
Jane Smith,28,Marketing,72000`;

  return <CsvViewer fileName="employees.csv" fileContent={csvData} />;
};

const CsvPreviewLocalized = () => {
  const { literal } = useLanguage();
  const csvContent = literal["data.employees"] || "";
  
  return (
    <CsvViewer 
      fileName={literal["files.employees"]} 
      fileContent={csvContent} 
    />
  );
};

const LargeCsvViewer = ({ fileData }) => (
  <div style={{ height: "500px" }}>
    <CsvViewer fileName={fileData.name} fileContent={fileData.content} />
  </div>
);
```

## States

- **Idle**: CSV content loaded and parsed — renders paginated table with headers and rows
- **Empty**: No `fileContent` or empty CSV string — renders title + empty-state message
- **Headers-only**: CSV has headers but zero data rows — renders header row with empty table body

## Inputs/Outputs

- **Inputs**: `fileName` (required), `fileContent` (optional string)
- **Outputs**: Renders a paginated table with sticky headers, row count display, and page-size selector
- **Side effects**: None — stateless parse-and-render component

## Error Conditions

- **No content / empty content**: Renders empty-state message (no crash)
- **Mixed-delimiter CSV**: Delimiter detection on first line only — may parse subsequent lines incorrectly; no error surfaced
- **Missing translation key**: Falls back to hardcoded "No CSV content available"
- **Very large datasets**: Pagination without virtualization — performance degrades beyond typical sizes

## Future Enhancements

- Add column sorting by clicking header cells
- Introduce column search/filter input for quick data filtering
- Implement row selection with bulk action support (copy, export)
- Virtualize large datasets to handle 100K+ rows without performance degradation

## Open Questions

- Should CSV export functionality be added, or is that outside the viewer's scope?
- What is the expected behavior for malformed CSV rows — skip, highlight, or surface an error?
- Should column type detection (number, date, string) be automatic to enable formatting?

## Core Concepts

- **Parse-and-render pipeline**: Raw CSV string → delimiter detection → `headers[]` + `rows[][]` → paginated MUI Table — parsing and rendering are sequential phases with no external data fetching.
- **Auto-delimiter detection**: Scans only the first line for semicolons (`;`) to choose between comma and semicolon delimiters — a lightweight heuristic that avoids full-file scanning.
- **Pagination state management**: Internal `useState` for `page` and `rowsPerPage` — pagination is a pure UI concern scoped to this organism, not lifted to a parent or global store.
- **Sticky header + scrollable body**: Uses MUI Table's `stickyHeader` prop combined with a fixed-height container — ensures column labels remain visible while the user scrolls through data rows.

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/CsvViewer.tsx`
