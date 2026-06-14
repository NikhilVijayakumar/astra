---
tier: molecule
---

# Notification

A molecular component that displays a snackbar-style notification message.

## Overview

A toast notification component using MUI's Snackbar with Alert. Automatically dismisses after a configurable duration.

## Responsibilities

- Render a Snackbar-based toast notification at bottom-center of viewport
- Display message with configurable Alert severity (success, info, warning, error)
- Auto-dismiss after a configurable duration
- Fire onClose callback when dismissed or auto-hidden

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

## Validation Rules

- `open`, `message`, `onClose` are required — TypeScript compilation fails if any are omitted
- `severity` defaults to `'info'` when not provided
- `autoHideDuration` defaults to `4000` when not provided
- `autoHideDuration` accepts `number | null` — `null` disables auto-dismiss

## Error Handling

- `open=false`: Snackbar is fully hidden — no content renders
- `autoHideDuration=null`: notification stays open until manually closed via `onClose`
- Very short `autoHideDuration` with `severity="error"`: user may not read the message in time — a UX concern, not a functional error
- `onClose` fires after auto-dismiss or manual close — no error handling is applied to the callback
- No error boundary is provided — parent is responsible for error management

## States

- **Open**: `open=true` — Snackbar is visible with Alert content
- **Closed**: `open=false` — Snackbar is hidden, no content renders
- **Auto-dismissing**: Timer active counting down to auto-hide
- **Persistent**: `autoHideDuration=null` — stays open until manually closed

## Inputs/Outputs

- **Inputs**: `open` (boolean, required), `message` (string, required), `severity` (AlertColor, optional, default `'info'`), `onClose` (() => void, required), `autoHideDuration` (number, optional, default 4000)
- **Outputs**: Renders a Snackbar anchored bottom-center with Alert; fires `onClose` callback on dismiss or auto-hide

## Error Conditions

- **Missing required props (`open`, `message`, `onClose`)**: TypeScript compile error
- **Short `autoHideDuration` with `severity="error"`**: User may miss critical error message
- **`onClose` callback throws**: Error propagates to parent — no internal error boundary
- **Multiple rapid open/close toggles**: Snackbar transition may flicker

## Future Enhancements

- Action button slot within the notification (e.g., "Undo", "View" actions)
- Stacked queue management for multiple simultaneous notifications
- Configurable slide direction (left, right, up) for entrance animation

## Open Questions

- Should severity-based `autoHideDuration` defaults differ (e.g., error stays longer than success)?
- How should multiple rapid open/close toggles be debounced or queued?

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

## Core Concepts

- **Controlled component pattern**: The parent owns visibility state via `open` and receives `onClose` callbacks — the component has no internal open/close state, following React's controlled component convention.
- **Snackbar + Alert composition**: Wraps MUI `Snackbar` (positioning, auto-dismiss, transition) around MUI `Alert` (severity styling, icon) — two MUI components combined into one cohesive molecule.
- **Timer-driven auto-dismiss**: `autoHideDuration` creates an internal timer via Snackbar's built-in mechanism; passing `null` disables it entirely for persistent notifications.
- **Bottom-anchored toast positioning**: Uses `anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}` — a deliberate UX choice for non-intrusive global notifications.

## Design Principles

This component is a molecule — a composed functional unit.

See [Molecules](../atomic-design/molecules.md) for classification guidelines and usage patterns.

## Source

`src/common/components/molecules/Notification.tsx`
