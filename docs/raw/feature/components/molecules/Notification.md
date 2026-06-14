# Notification

A temporary message that appears at the bottom of the screen and auto-dismisses.

## Overview

A toast-style notification that displays a message with a configurable severity level (success, info, warning, error). Anchored at the bottom-center of the viewport. Auto-dismisses after a configurable duration, or can be set to persist until manually closed.

## Responsibilities

- Display a toast notification at the bottom-center of the screen
- Show a message with configurable severity styling
- Auto-dismiss after a configurable duration
- Fire a callback when dismissed or auto-hidden

## Non-Responsibilities

- Does not manage app-wide notification queue or stacking
- Does not persist notification history across sessions
- Does not provide undo or action callbacks within the notification
- Does not handle multiple simultaneous notifications
- Does not support custom positioning

## Core Concepts

- **Controlled component pattern:** The parent owns visibility state and receives close callbacks — the component has no internal open/close state.
- **Timer-driven auto-dismiss:** Auto-dismiss is configured via a duration setting; setting it to null disables auto-dismiss entirely for persistent notifications.
- **Bottom-anchored toast positioning:** Deliberate UX choice for non-intrusive global notifications at the bottom-center of the viewport.

## States

- **Open** — Notification visible with content displayed
- **Closed** — Notification hidden, no content renders
- **Auto-dismissing** — Timer active, counting down to auto-hide
- **Persistent** — Auto-dismiss disabled; stays open until manually closed

## Edge Cases

- Open is false: Notification is hidden; no content renders
- Auto-dismiss set to null: Stays open until manually dismissed
- Very short auto-dismiss with error severity: User may not read the message in time
- Multiple rapid open/close toggles: Transition may flicker

## Error Conditions

- Missing required inputs (open state, message, close callback) — Required values must be provided
- Close callback throws — Error propagates to parent
