---
tier: template
---

# SummaryPanel

A layout component that displays a titled collection of text lines.

## Overview

A panel component for displaying structured text content with a title header. Supports different text variants for visual hierarchy.

## API

### Props

| Prop    | Type            | Default  | Description                    |
| ------- | --------------- | -------- | ------------------------------ |
| `title` | `string`        | Required | Panel header title             |
| `lines` | `SummaryLine[]` | Required | Array of text lines to display |

### Interfaces

```typescript
export interface SummaryLine {
  text: string;
  variant?: "body2" | "caption";
}

export interface SummaryPanelProps {
  title: string;
  lines: SummaryLine[];
}
```

### Styling Details

- Title: `variant="h6"`, color: `text.primary`, bottom margin: `spacing.sm`
- Lines: Default variant `body2`, color `text.secondary`
- Lines with `variant: 'caption'` display as block elements
- Body2 lines display as inline elements
- Padding: `spacing.lg`
- Border: `1px solid divider`
- Border radius: `spacing.xs`
- Background: `background.paper`

## Usage Example

```tsx
import { SummaryPanel } from "@/common/components/templates/SummaryPanel";

const SystemInfo = () => (
  <SummaryPanel
    title="System Information"
    lines={[
      { text: "Version: 1.2.3" },
      { text: "Environment: Production", variant: "caption" },
      { text: "Last Updated: 2024-01-15" },
      { text: "Region: us-east-1", variant: "caption" },
    ]}
  />
);

// Inline content example
const ContactInfo = () => (
  <SummaryPanel
    title="Contact Details"
    lines={[
      { text: "Email: support@example.com" },
      { text: "Phone: +1 (555) 123-4567", variant: "caption" },
    ]}
  />
);
```

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/templates/SummaryPanel.tsx`
