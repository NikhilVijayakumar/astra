---
tier: organism
---

# FormLayout

A page-level form layout component with title and actions row.

## Overview

A structured form wrapper that provides consistent vertical layout for form pages. Includes an optional title header and a dedicated actions row at the bottom for submit/cancel buttons.

## Responsibilities

- Provide consistent vertical layout for form pages with flex column
- Render an optional title header at the top of the form
- Render an optional actions row at the bottom for submit/cancel buttons
- Maintain a max-width constraint (600px) for readability

## API

### Props

| Prop       | Type            | Default   | Description                        |
| ---------- | --------------- | --------- | ---------------------------------- |
| `title`    | `string`        | undefined | Form title displayed at the top    |
| `children` | `React.ReactNode` | Required | Form content                       |
| `actions`  | `React.ReactNode` | undefined | Action buttons rendered at bottom  |

### Interface

```typescript
interface FormLayoutProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}
```

### Behavior

- Renders title as a header section when provided
- Renders children as the main form body
- Renders actions row at the bottom (typically submit/cancel buttons)
- Maintains consistent spacing and alignment for all forms

## Non-Responsibilities

- Does not manage form state, field values, or submission handling
- Does not validate form inputs or display validation errors
- Does not handle form lifecycle events (submit, reset, dirty tracking)
- Does not provide scroll behavior for long forms
- Does not render feedback messages (success, error) — these must be added by the parent

## Edge Cases

- No title provided: header section is omitted entirely
- No actions provided: footer action row is omitted
- Empty children: renders an empty Box with flex column layout
- Single child element: renders one child without extra spacing issues
- Very long title: text wraps naturally; no built-in truncation
- Actions extend beyond max-width: action row is constrained by parent width; long actions may wrap

## Usage Example

const CreateUserForm = () => (
  <FormLayout
    title="Create User"
    actions={
      <>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Create</Button>
      </>
    }
  >
    <UserFields />
  </FormLayout>
);
```

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/FormLayout.tsx`
