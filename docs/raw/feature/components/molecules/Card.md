---
tier: molecule
---

# Card

A molecular component that provides a styled container with optional title, supporting text, and action button.

## Overview

A versatile card component that wraps content in a Paper component with elevation. Supports header configuration with title, subtitle, and action slot.

## Responsibilities

- Render a styled Paper container with border-based premium styling
- Display an optional header with title, supportingText, and action slot
- Render children as the card body content

## API

### Props

| Prop             | Type        | Default   | Description                                   |
| ---------------- | ----------- | --------- | --------------------------------------------- |
| `title`          | `string`    | undefined | Card header title                             |
| `supportingText` | `string`    | undefined | Subtitle text below the title                 |
| `children`       | `ReactNode` | undefined | Card body content                             |
| `action`         | `ReactNode` | undefined | Action element (button, icon, etc.) in header |

### Interface

```typescript
export interface CardProps {
  title?: string;
  supportingText?: string;
  children?: ReactNode;
  action?: ReactNode;
}
```

### Styling Details

- Elevation: `0` (border-based, premium style)
- Padding: `spacing.lg` (24px)
- Border radius: `1` (8px)
- Background: `background.paper` from theme
- Gap between elements: `spacing.xs` (8px)
- Border: 1px solid divider

## Validation Rules

- All props are optional (`title?`, `supportingText?`, `children?`, `action?`)
- No runtime validation — all props are passed directly to rendering
- TypeScript enforces prop types but no runtime checks are performed

## Error Handling

- All props optional — no error state for missing props; empty Card renders as a surface with no visible content
- Empty `children`: renders a Box with no children (invisible surface)
- Missing `action`: the actions section is omitted entirely
- No error boundary is provided

## States

- **Idle**: Default rendering state — card displays with all provided content
- **Empty**: No children and no header props — renders as empty Paper surface with padding and border
- **Loaded**: Content is rendered normally — no loading state managed internally
- **Disabled**: Not applicable — no interactive behavior

## Inputs/Outputs

- **Inputs**: `title` (string, optional), `supportingText` (string, optional), `children` (ReactNode, optional), `action` (ReactNode, optional)
- **Outputs**: Renders a `<Paper>` container with optional header (title, supportingText, action) and children body; no callbacks or side effects

## Error Conditions

- **All props omitted**: Renders an empty Paper surface — visually present but contentless
- **Action overflow**: Action slot content may overflow on narrow card widths
- **Missing title with supportingText**: supportingText renders without a heading above it — may confuse visual hierarchy

## Future Enhancements

- Clickable card variant with hover elevation change for actionable surfaces
- Collapsible card body for expandable content sections
- Image or media area slot at the top of the card

## Open Questions

- Should click behavior be added directly or remain composed by consumers?
- What elevation level should apply in dark mode for adequate surface distinction?

## Non-Responsibilities

- Does not manage or persist state
- Does not fetch or load data
- Does not handle click events or user interactions beyond the action slot
- Does not enforce layout constraints beyond flex column
- Does not provide scroll or overflow behavior
- Does not manage focus or keyboard navigation

## Edge Cases

- All header props (title, supportingText, action) omitted: header row is not rendered; only children are displayed
- All props omitted: renders an empty Paper container with padding and border
- Empty children: renders an empty Box inside the Paper with no visible content
- Missing supportingText: no subtitle rendered under the title; action still displays if provided
- Missing title: supportingText renders without a title heading above it
- Long supportingText: text wraps naturally within the card width
- action slot overflow: action content is right-aligned and may overflow on narrow cards

## Localization

```tsx
// Parent component provides localized titles
<Card
  title={literal["card.system_status"]}
  supportingText={literal["card.current_health"]}
>
  {children}
</Card>
```

Required translation keys:
- `card.system_status` - Card title
- `card.current_health` - Supporting text

## Premium UI

Follows premium-ui-patterns skill guidelines:
- Soft surface contrast
- Subtle border over elevation
- Clear content hierarchy

## Usage Example

```tsx
import { Card } from "@/common/components/molecules/Card";
import { Button } from "@mui/material";
import { useLanguage } from "@/common/localization/LanguageContext";

const DashboardCard = () => {
  const { literal } = useLanguage();
  
  return (
    <Card
      title={literal["card.system_status"]}
      supportingText={literal["card.current_health"]}
      action={<Button size="small">{literal["ui.view_details"]}</Button>}
    >
      <div>Card content goes here...</div>
    </Card>
  );
};

// Without header
const SimpleCard = () => (
  <Card>
    <p>Just content with no header</p>
  </Card>
);
```

## Core Concepts

- **Slot-based composition pattern**: The Card exposes named slots (`title`, `supportingText`, `action`, `children`) rather than a single content prop — each section renders independently and can be omitted without affecting others.
- **Paper as structural foundation**: Built on MUI `Paper` with `elevation={0}` and border-based styling (1px solid divider) — achieves premium surfaces without shadow overhead.
- **Optional header pattern**: The header row (title + supportingText + action) only renders when at least one header prop is provided — empty props produce no header DOM.
- **Flex column layout**: Card body is a `flexDirection: 'column'` stack with `gap: spacing.xs` — child components control their own sizing within the flow.

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/Card.tsx`
