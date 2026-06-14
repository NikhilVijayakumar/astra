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

## Validation Rules

- `children` is required — TypeScript compilation fails if omitted
- `title` and `actions` are optional
- No runtime validation is performed

## Error Handling

- No `title`: the header section is omitted entirely
- No `actions`: the footer row is omitted entirely
- Empty `children`: renders an empty Box with flex column layout — invisible to the user
- No error state — purely a presentational layout wrapper
- No error boundary is provided

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

## States

- **Idle**: Default rendered state — title, children, and actions displayed
- **No title**: Header section omitted
- **No actions**: Footer section omitted
- **Empty children**: Empty flex column rendered (invisible to user)

## Inputs/Outputs

- **Inputs**: `title` (optional string), `children` (required ReactNode), `actions` (optional ReactNode)
- **Outputs**: Renders a flex-column layout with optional header, children body, and optional actions footer
- **Side effects**: None — purely presentational wrapper

## Error Conditions

- **Missing `children`**: TypeScript compilation error (required prop)
- **No error recovery**: Component does not catch or handle errors — purely structural

## Future Enhancements

- Add a `maxWidth` prop to allow layout width customization per form
- Support a sticky actions footer that pins to the viewport on scroll
- Provide a loading/skeleton variant for forms that fetch initial data
- Add a `title`-adjacent slot for breadcrumbs or back navigation

## Open Questions

- Should the component handle form-level validation summaries or keep that concern separate?
- Is the 600px max-width appropriate for all form types, or should it be configurable?
- What is the expected behavior when `children` contains a very tall element — should the layout scroll internally?

## Core Concepts

- **Layout slot pattern**: Defines three vertical slots — header (`title`), body (`children`), and footer (`actions`) — each slot renders independently and can be omitted without affecting the others.
- **Max-width constraint for readability**: Wraps content with a `maxWidth: 600px` constraint — a deliberate readability boundary for form content, preventing line lengths from exceeding comfortable reading width.
- **Flex column composition**: Uses `flexDirection: 'column'` with `gap` spacing between slots — a simple stacking layout that scales vertically with content height.
- **Optional section rendering**: `title` and `actions` slots are conditionally rendered — when omitted, they produce no DOM, keeping the rendered tree minimal when sections aren't needed.

## Design Principles

This component is an organism — a complex UI section composed of molecules and atoms.

See [Organisms](../atomic-design/organisms.md) for classification guidelines and usage patterns.

## Source

`src/common/components/organisms/FormLayout.tsx`
