---
tier: template
---

# CsvViewer

A file viewer component that displays CSV data in a paginated table format.

## Overview

A specialized viewer for CSV files that renders data in a sortable table with pagination controls. Auto-detects the delimiter (comma or semicolon) based on the first line.

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
```
const LargeCsvViewer = ({ fileData }) => (
  <div style={{ height: "500px" }}>
    <CsvViewer fileName={fileData.name} fileContent={fileData.content} />
  </div>
);
```

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/file-viewers/CsvViewer.tsx`
