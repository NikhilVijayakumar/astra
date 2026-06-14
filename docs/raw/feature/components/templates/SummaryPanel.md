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

## Validation Rules

- `title` and `lines` are required — TypeScript compilation fails if either is omitted
- `lines` must be an array of `SummaryLine` objects
- Each line's `variant` defaults to `"body2"` when not provided
- No runtime validation is performed on line contents

## Error Handling

- Empty `lines` array: renders the title with no body content below
- All lines set to the same `variant`: renders consistently but with no visual hierarchy
- Missing `variant` on a line: defaults to `body2` gracefully
- Long text wraps within the panel width — no overflow errors
- No error boundary is provided

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

## States

- **Populated**: Title and one or more lines rendered
- **Empty**: `lines` array is empty — renders title only with no body content
- **Single variant**: All lines share same variant — consistent display with no hierarchy

## Inputs/Outputs

- **Inputs**: `title` (required string), `lines` (required array of `SummaryLine`)
- **Outputs**: Renders a bordered panel with title header and styled text lines (body2 inline / caption block)
- **Side effects**: None — purely presentational

## Error Conditions

- **Empty `lines` array**: Renders title only — no crash
- **Missing `variant` on line**: Defaults gracefully to `body2` — no error
- **Long text**: Wraps within panel width — no overflow

## Future Enhancements

- Add a collapsible/expandable toggle for the panel content
- Support a "copy all" button to copy all line text to clipboard
- Introduce an icon or label slot next to each line for visual categorization
- Provide a loading skeleton variant for async content

## Open Questions

- Should the panel support a maximum height with internal scroll for very long line lists?
- What is the right balance between the two variants — should more typography variants be added?
- Should lines support rich content (links, badges) or remain plain text only?

## Core Concepts

- **Data-driven line rendering**: The `lines` array of `SummaryLine` objects drives all body content — the component is a map-renderer that iterates the array and renders each item as a Typography element with minimal logic.
- **Variant-based typography hierarchy**: `SummaryLine.variant` controls whether text renders as `body2` (inline, `display: 'inline'`) or `caption` (block, `display: 'block'`) — a lightweight approach to visual hierarchy without multiple slot components.
- **Border-based panel pattern**: Uses `1px solid divider` border with `borderRadius: spacing.xs` and `background.paper` — follows the premium UI pattern of subtle borders over elevation for panel surfaces.
- **Structured data pattern**: The `SummaryLine` interface (`text: string; variant?: "body2" | "caption"`) is a deliberate constraint — keeping data as plain objects rather than React nodes ensures consistent styling and simple serialization.

## Design Principles

This component is a template — a page-level layout component.

See [Templates](../atomic-design/templates.md) for classification guidelines and usage patterns.

## Source

`src/common/components/templates/SummaryPanel.tsx`
