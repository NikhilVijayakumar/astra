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

### Parsing Behavior

1. Splits content by newlines (handles both `\n` and `\r\n`)
2. Trims empty lines
3. Uses first line as headers
4. Subsequent lines become data rows

## Usage Example

```tsx
import { CsvViewer } from "@/components/file-viewers/CsvViewer";

const CsvPreview = () => {
  const csvData = `Name,Age,Department,Salary
John Doe,32,Engineering,85000
Jane Smith,28,Marketing,72000
Bob Wilson,45,Sales,95000
Alice Brown,35,Engineering,88000`;

  return <CsvViewer fileName="employees.csv" fileContent={csvData} />;
};

// With state management for large datasets
const LargeCsvViewer = ({ fileData }) => (
  <div style={{ height: "500px" }}>
    <CsvViewer fileName={fileData.name} fileContent={fileData.content} />
  </div>
);
```

## Source

`src/components/file-viewers/CsvViewer.tsx`
