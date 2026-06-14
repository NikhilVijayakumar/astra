---
tier: molecule
---

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

## Non-Responsibilities

- Does not manage app-wide notification queue or stacking
- Does not persist notification history across sessions
- Does not provide undo or action callbacks within the notification
- Does not handle multiple simultaneous notifications — only one Snackbar instance
- Does not support custom positioning — anchored at bottom-center by default

## Edge Cases

- `open` is `false`: Snackbar is hidden; no content renders
- `message` is required — omitting it triggers a TypeScript error
- `onClose` is required — the component will not compile without it
- `severity` defaults to `"info"` when not provided
- `autoHideDuration` defaults to `4000` ms (4 seconds) when not provided
- Setting `autoHideDuration` to `null` keeps the notification open until manually dismissed
- `severity="error"` with very short `autoHideDuration`: user may not have time to read the message before auto-dismiss

## Usage Example

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

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/Notification.tsx`
