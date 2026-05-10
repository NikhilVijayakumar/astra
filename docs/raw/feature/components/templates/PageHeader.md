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

## Usage Example

```tsx
import { PageHeader } from "@/common/components/templates/PageHeader";
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
