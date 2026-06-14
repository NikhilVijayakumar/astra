---
tier: organism
---

# DataTable

A tabular data display component with sticky headers and custom cell rendering.

## Overview

A generic data table built on MUI Table that renders structured data with sticky headers. Supports custom column rendering, alignment, and min-width configuration.

## Responsibilities

- Render tabular data with a sticky header that remains visible during vertical scroll
- Support custom column definitions with id, label, alignment, and min-width
- Support custom cell rendering via column.render function
- Apply hover styling on table rows

## API

### Props

| Prop       | Type            | Default   | Description                    |
| ---------- | --------------- | --------- | ------------------------------ |
| `columns`  | `Column<T>[]`   | Required  | Column definitions             |
| `data`     | `T[]`           | Required  | Data rows                      |
| `keyField` | `keyof T`       | Required  | Unique key field for rows      |

### Interfaces

```typescript
interface Column<T> {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
}
```

### Behavior

- Sticky header that remains visible during vertical scroll
- For each column:
  - Uses `column.render(row)` when a render function is provided
  - Otherwise reads `row[column.id]` directly

## Non-Responsibilities

- Does not paginate, sort, or filter data — rows render in the order provided
- Does not support inline editing, row selection, or bulk actions
- Does not fetch or load data from any source
- Does not provide built-in search or column visibility controls
- Does not handle empty, loading, or error states — these must be managed by the parent

## Edge Cases

- Empty `data` array: renders only the sticky table header with no body rows
- Empty `columns` array: renders an empty table — no columns, no data cells
- Null or undefined `keyField` value in a row: `String(row[keyField])` produces `"null"` or `"undefined"` as the row key
- Duplicate key values: React warns about duplicate keys; rows with duplicate keys may cause rendering issues
- Single row: table renders with one row, sticky header remains visible
- Very long cell content: text wraps within the cell; `minWidth` on the column configures the minimum column width

## Usage Example

const UserTable = () => (
  <DataTable
    keyField="id"
    data={users}
    columns={[
      { id: "name", label: "Name" },
      { id: "email", label: "Email" },
      {
        id: "actions",
        label: "Actions",
        align: "right",
        render: (row) => <Button onClick={() => onEdit(row.id)}>Edit</Button>,
      },
    ]}
  />
);
```

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/DataTable.tsx`
