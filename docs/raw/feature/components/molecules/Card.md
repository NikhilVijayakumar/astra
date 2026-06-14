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

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/Card.tsx`
