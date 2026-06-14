---
tier: template
---

# PageHeader

A layout component that provides a standardized page-level header with title, subtitle, and action buttons.

## Overview

A comprehensive header component for page-level content. Supports primary and secondary actions, leading/trailing meta content, and responsive layout.

## Responsibilities

- Render a page-level header with title and optional subtitle
- Render primary and secondary action buttons with configurable variant and size
- Render leadingMeta and trailingMeta content slots
- Wrap responsively on narrow viewports

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

## Validation Rules

- `title` is required — TypeScript compilation fails if omitted
- All other props are optional
- `primaryAction` and `secondaryAction` use the `HeaderActionConfig` interface — both accept `{ label, onClick, icon?, variant? }`
- No runtime validation is performed on action configs

## Error Handling

- No `subtitle`: the subtitle region is omitted entirely
- No actions or `meta`: the respective sections are omitted
- `secondaryAction` can render without `primaryAction` (reversed order in layout)
- Long content wraps naturally — no overflow errors
- No error boundary is provided

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

```tsx
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

## States

- **Full**: Title, subtitle, primary action, secondary action, leadingMeta, and trailingMeta all populated
- **Minimal**: Only `title` provided — all optional sections omitted
- **Partial**: Any combination of optional props present — each section independently renderable

## Inputs/Outputs

- **Inputs**: `title` (required), `subtitle`, `primaryAction`, `secondaryAction`, `leadingMeta`, `trailingMeta` (all optional)
- **Outputs**: Renders a flex container with title, subtitle, action buttons, and meta slots in responsive layout
- **Side effects**: None — purely presentational; action `onClick` callbacks are void functions

## Error Conditions

- **Missing `title`**: TypeScript compilation error
- **Empty string props**: Renders empty Typography elements for string props — no crash
- **Action config missing `onClick`**: Button renders but does nothing on click

## Future Enhancements

- Add a breadcrumb slot between the top of the page and the title
- Support sticky behavior so the header remains visible during vertical scroll
- Provide a responsive variant that collapses actions into a "More" menu on narrow viewports
- Add an optional status indicator or badge slot adjacent to the title

## Open Questions

- Should action buttons support a loading/spinner state when async operations are in progress?
- What is the expected wrapping behavior when both actions and trailingMeta overflow on small screens?
- Should the subtitle support rich text (links, inline code) or remain plain string only?

## Core Concepts

- **Slot-based layout pattern**: Defines five content slots — `leadingMeta`, `title`, `subtitle`, action buttons (primary/secondary), and `trailingMeta` — each renders independently and can be omitted without affecting the layout structure.
- **Responsive wrap pattern**: Uses `flexWrap: 'wrap'` with `justifyContent: 'space-between'` — on narrow viewports, action buttons wrap to the row below the title instead of overflowing or clipping.
- **Action config objects**: `primaryAction` and `secondaryAction` use a `HeaderActionConfig` interface (`label`, `onClick`, `variant`, `size`) — a structured data pattern that avoids passing raw React nodes for simple button cases.
- **Reverse order action rendering**: Action buttons render right-to-left (`trailingMeta` → `secondaryAction` → `primaryAction`) — visual order (primary rightmost) differs from DOM source order, a deliberate UX hierarchy choice.

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/templates/PageHeader.tsx`
