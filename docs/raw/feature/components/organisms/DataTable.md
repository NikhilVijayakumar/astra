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

## Validation Rules

- `columns`, `data`, `keyField` are all required — TypeScript compilation fails if any are omitted
- `columns` array must have at least one entry for meaningful rendering
- `keyField` must be a valid key of the generic data type `T`
- Generic type `T` ensures type safety between `columns[].accessor` and `data` items

## Error Handling

- Empty `data` array: renders the sticky header with no body rows
- Empty `columns` array: renders an empty table (no columns or data cells)
- Null/undefined `keyField` value at runtime: row key becomes `"null"` or `"undefined"` — potential React key collision if multiple rows share this value
- Duplicate key values: React renders a console warning but no functional error occurs
- No error boundary is provided — errors propagate to the parent

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

## States

- **Idle**: Data loaded — renders sticky header with body rows
- **Empty data**: `data` is an empty array — renders header with no body rows
- **Empty columns**: `columns` is an empty array — renders an empty table

## Inputs/Outputs

- **Inputs**: `columns` (required array of `Column<T>`), `data` (required array of `T`), `keyField` (required key of `T`)
- **Outputs**: Renders an MUI Table with sticky header, body rows, and custom cell content via `column.render()`
- **Side effects**: None — purely presentational

## Error Conditions

- **Null/undefined key value**: Row key becomes `"null"` or `"undefined"` — potential React key collision
- **Duplicate keys**: React console warning; duplicate keys may cause rendering issues
- **Missing render function**: Falls back to `String(row[column.id])` — no crash
- **Component error in render function**: No error boundary — propagates to parent

## Future Enhancements

- Add built-in pagination with configurable page size
- Implement column sorting with ascending/descending toggle
- Support row selection with checkbox column and select-all header
- Virtualize rows for smooth scrolling through large datasets

## Open Questions

- Should filtering be built in or delegated entirely to the parent via data pre-processing?
- What accessibility pattern should row selection follow — checkboxes or row click with aria-selected?
- Should column resizing and reordering be supported, and if so, should the state be persisted?

## Core Concepts

- **Generic typed component pattern**: Uses React generics (`<T>`) to ensure type safety between `columns` and `data` — `columns[].id` must match keys of `T`, and `keyField` must be a valid `keyof T`.
- **Column definition-driven rendering**: The `columns` array is the schema — each column's `id`, `label`, `align`, `minWidth`, and optional `render` function fully drives table output. Data is transformed into UI purely through column definitions.
- **Render prop pattern per cell**: `column.render(row)` provides custom cell rendering without coupling the table to specific data shapes — enables buttons, badges, or any ReactNode per cell while keeping the table generic.
- **MUI Table composition**: Built on MUI `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell` — leverages MUI's table semantics (sticky headers, hover rows) without re-implementing table layout.

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/DataTable.tsx`
