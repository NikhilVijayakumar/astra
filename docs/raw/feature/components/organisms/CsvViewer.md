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

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/CsvViewer.tsx`
