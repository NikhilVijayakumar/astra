---
tier: template
---

# PageHeader

A layout component that provides a standardized page-level header with title, subtitle, and action buttons.

## Overview

A comprehensive header component for page-level content. Supports primary and secondary actions, leading/trailing meta content, and responsive layout.

## API

### Props

| Prop              | Type                 | Default   | Description                           |
| ----------------- | -------------------- | --------- | ------------------------------------- |
| `title`           | `string`             | Required  | Page title text                       |
| `subtitle`        | `string`             | undefined | Optional description text below title |
| `primaryAction`   | `HeaderActionConfig` | undefined | Primary action button configuration   |
| `secondaryAction` | `HeaderActionConfig` | undefined | Secondary action button configuration |
| `leadingMeta`     | `ReactNode`          | undefined | Content placed before title/subtitle  |
| `trailingMeta`    | `ReactNode`          | undefined | Content placed after actions          |

### Interfaces

```typescript
export interface HeaderActionConfig {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  primaryAction?: HeaderActionConfig;
  secondaryAction?: HeaderActionConfig;
  leadingMeta?: ReactNode;
  trailingMeta?: ReactNode;
}
```

### Layout Behavior

- Flex container with `justifyContent: space-between`
- Wraps on smaller screens (`flexWrap: 'wrap'`)
- Title uses `variant="h3"`
- Subtitle uses `variant="body1"`
- Bottom margin: `spacing.xl`
- Gap between elements: `spacing.md`

## Non-Responsibilities

- Does not manage page-level state or data fetching
- Does not handle navigation routing — `onClick` on action configs are void callbacks
- Does not render breadcrumbs, tabs, or other secondary navigation
- Does not provide sticky or scroll-aware behavior
- Does not manage responsive breakpoints beyond the `flexWrap: 'wrap'` behavior

## Edge Cases

- No `subtitle` provided: subtitle slot is omitted; title renders alone
- No `primaryAction` or `secondaryAction` provided: action buttons section is omitted
- No `leadingMeta` or `trailingMeta` provided: meta slots are omitted
- Only `secondaryAction` without `primaryAction`: only the secondary button renders (primary is not required)
- Action button defaults: `variant` defaults to `"outlined"`, `size` defaults to `"small"`
- Actions render in reverse order: `trailingMeta` then `secondaryAction` then `primaryAction` (right to left)
- Narrow viewport: container wraps via `flexWrap: 'wrap'`; actions move to the row below the title
- Long title without subtitle: title occupies full width with no wrapping issues

## Usage Example
import { StatusDot } from "@/common/components/atoms/StatusDot";
import { SeverityBadge } from "@/common/components/atoms/SeverityBadge";

const UserManagementPage = () => (
  <PageHeader
    title="User Management"
    subtitle="Manage user accounts and permissions"
    leadingMeta={
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <StatusDot tone="ok" />
        <span>All systems operational</span>
      </div>
    }
    primaryAction={{
      label: "Add User",
      onClick: () => navigate("/users/new"),
      variant: "contained",
    }}
    secondaryAction={{
      label: "Export",
      onClick: handleExport,
    }}
    trailingMeta={<SeverityBadge level="INFO" />}
  />
);
```

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/templates/PageHeader.tsx`
