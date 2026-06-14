# Theming System

The theming system provides light/dark mode support with persistent preference and a unified set of design tokens.

## Overview

The user can switch between light and dark mode. Their preference is remembered across sessions. All components automatically adapt to the active theme through a shared theme context.

## Responsibilities

- Manage light/dark theme state across the application
- Persist theme preference across sessions
- Provide theme context to all components
- Supply design tokens (colors, spacing, typography) for consistent visual output

## Non-Responsibilities

- Does not manage per-component styling overrides
- Does not handle system-level theme preferences (auto-detect from OS)
- Does not synchronize theme across multiple browser tabs
- Does not provide animation or transition theme values

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| Theme Context | Shared state providing current mode and toggle function to all components |
| Light/Dark Modes | Two complete visual palettes — light and dark |
| Design Tokens | Spacing, color, and typography values that drive consistent rendering |
| Preference Persistence | User's choice is saved and restored across sessions |

## States

- **Uninitialized** — Before persistence is read; defaults to light mode
- **Light mode** — Light palette active
- **Dark mode** — Dark palette active
- **Forced mode** — External override active (bypasses persisted state)

## Edge Cases

- **Missing persistence**: Falls back to light mode if storage is unavailable
- **Server rendering**: No access to browser persistence; defaults to light mode
- **Rapid toggling**: Toggle is synchronous; no race condition
- **Nested providers**: Only the outermost provider should manage theme state

## Error Conditions

- **Persistence unavailable** — Storage access throws; fallback to light mode
- **Server rendering** — No browser APIs available; renders light theme, hydration may flicker
- **Invalid theme configuration** — Malformed theme values may cause rendering errors
- **Nested providers** — Multiple providers cause conflicting context; only root should manage state

## Future Enhancements

- System `prefers-color-scheme` detection with opt-in auto mode
- Theme transition animations for palette changes
- High-contrast accessibility theme variant

## Open Questions

- How should embedded widgets or micro-frontends participate in theming?
- Is CSS variable-based theming a better long-term approach?
