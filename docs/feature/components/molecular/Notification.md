# Notification

A molecular component that displays a snackbar-style notification message.

## Overview

A toast notification component using MUI's Snackbar with Alert. Automatically dismisses after a configurable duration.

## API

### Props

| Prop               | Type         | Default  | Description                                                  |
| ------------------ | ------------ | -------- | ------------------------------------------------------------ |
| `open`             | `boolean`    | Required | Controls visibility of the notification                      |
| `message`          | `string`     | Required | The notification message content                             |
| `severity`         | `AlertColor` | `'info'` | Alert severity level ('success', 'info', 'warning', 'error') |
| `onClose`          | `() => void` | Required | Callback fired when notification is closed/dismissed         |
| `autoHideDuration` | `number`     | `4000`   | Auto-dismiss delay in milliseconds                           |

### Interface

```typescript
export interface NotificationProps {
  open: boolean;
  message: string;
  severity?: AlertColor;
  onClose: () => void;
  autoHideDuration?: number;
}
```

### Positioning

- Anchor: `vertical: 'bottom', horizontal: 'center'`
- Displays at bottom-center of viewport

## Usage Example

```tsx
import { useState } from "react";
import { Notification } from "@/components/ui/Notification";

const NotificationExample = () => {
  const [open, setOpen] = useState(false);

  const handleShow = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleShow}>Show Notification</button>
      <Notification
        open={open}
        message="Operation completed successfully!"
        severity="success"
        onClose={handleClose}
      />
    </>
  );
};

// Error notification
<Notification
  open={hasError}
  message="Failed to save changes"
  severity="error"
  onClose={() => setHasError(false)}
  autoHideDuration={6000}
/>;
```

## Source

`src/components/ui/Notification.tsx`
