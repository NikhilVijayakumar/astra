# UI Components

Source files:
- src/components/ui/Card.tsx
- src/components/ui/DataTable.tsx
- src/components/ui/FormLayout.tsx
- src/components/ui/HeroSection.tsx
- src/components/ui/Notification.tsx

Import:

```tsx
import { Card, DataTable, FormLayout, HeroSection, Notification } from 'astra/components';
```

These components are presentation-first and compatible with MVVM container/presentational separation.

## Card

Props:

```ts
type CardProps = {
  title?: string;
  supportingText?: string;
  children?: ReactNode;
  action?: ReactNode;
};
```

Use when you need a structured content surface with optional header and action.

```tsx
<Card
  title="Account Settings"
  supportingText="Manage your account preferences"
  action={<Button>Save</Button>}
>
  <SettingsForm />
</Card>
```

## DataTable

Props:

```ts
type Column<T> = {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  render?: (row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
};
```

Behavior notes:
- Uses MUI Table with sticky header.
- For each column:
  - uses column.render(row) when provided
  - otherwise reads row[column.id]

```tsx
<DataTable
  keyField="id"
  data={users}
  columns={[
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    {
      id: 'actions',
      label: 'Actions',
      align: 'right',
      render: (row) => <Button onClick={() => onEdit(row.id)}>Edit</Button>,
    },
  ]}
/>
```

## FormLayout

Props:

```ts
type FormLayoutProps = {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};
```

Use for vertically structured form pages with a dedicated actions row.

```tsx
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
```

## HeroSection

Props:

```ts
type HeroSectionProps = {
  headline: string;
  description?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  children?: ReactNode;
};
```

Use for entry sections, dashboard intros, and onboarding headers.

```tsx
<HeroSection
  headline="Build Faster with Astra"
  description="Ship consistent, token-driven interfaces using our MVVM stack."
  primaryActionLabel="Get Started"
  onPrimaryAction={onStart}
/>
```

## Notification

Props:

```ts
type NotificationProps = {
  open: boolean;
  message: string;
  severity?: AlertColor; // default: 'info'
  onClose: () => void;
  autoHideDuration?: number; // default: 4000
};
```

Use for operation feedback after ViewModel actions.

```tsx
<Notification
  open={notifyOpen}
  severity="success"
  message="User saved successfully"
  onClose={() => setNotifyOpen(false)}
/>
```

## UI Standards

1. Keep business logic out of UI components.
2. Pass translated strings from ViewModel/container using literal.
3. Prefer token/theme values over hardcoded style constants in app code.
4. Compose these components in feature views, not repositories/ViewModels.

## Related Docs

- ../MVVM_Clean_Architecture.md
- ../Theming.md

