# UI Components

Astra provides a set of stateless presentation components out-of-the-box that maintain a premium look and feel. 

These components have no internal data fetching or state side-effects, making them fully compliant with MVVM Clean Architecture.

## Exported Components

You can import any of these directly from `astra/components`:

```tsx
import { Card, DataTable, FormLayout, HeroSection, Notification } from 'astra/components';
```

### Card
A highly reusable container for content. Features a standard padding, rounded corners, and optional headers.

```tsx
<Card 
  title="Account Settings" 
  supportingText="Manage your account preferences"
  action={<Button>Save</Button>}
>
  <YourContent />
</Card>
```

### HeroSection
A prominent, above-the-fold component used to highlight key app functionality or welcome users.

### DataTable
A styled wrapper around MUI's Table components optimized for data-dense displays.

### FormLayout
A responsive layout specifically designed for complex forms.

### Notification
A standard snackbar or inline notification component with predefined success, error, warning, and info states.
