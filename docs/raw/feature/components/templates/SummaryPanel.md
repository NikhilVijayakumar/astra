---
tier: template
---

# SummaryPanel

A layout component that displays a titled collection of text lines.

## Overview

A panel component for displaying structured text content with a title header. Supports different text variants for visual hierarchy.

## Responsibilities

- Render a bordered panel with a title header
- Display a collection of text lines with configurable variants (body2 inline, caption block)
- Apply consistent spacing and border styling

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

## Non-Responsibilities

- Does not manage state or fetch data
- Does not handle user interaction or click events
- Does not format or transform text content — text is displayed as provided
- Does not support collapsible sections or expand/collapse behavior
- Does not provide scroll behavior for long content

## Edge Cases

- Empty `lines` array: renders the title only with no text lines
- Single line: renders one Typography element — no spacing issues
- All lines with the same variant: renders consistently with no hierarchy distinction
- Very long text in a line: text wraps within the panel width
- Missing `variant` on a line: defaults to `body2` (inline display)
- Lines with `variant: "caption"` render as block elements (full width), while `body2` lines render as inline

## Usage Example

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
