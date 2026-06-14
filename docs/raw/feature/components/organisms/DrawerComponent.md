# DrawerComponent

A responsive side navigation drawer that adapts between mobile overlay and desktop sidebar.

## Overview

Renders a side navigation menu that adapts to screen size: temporary overlay drawer on small screens, permanent sidebar on larger screens. Menu items are filtered by matching feature names against a provided feature list map, enabling feature-flag-driven navigation. The parent controls the open/close state via callbacks.

## Responsibilities

- Render a responsive side navigation drawer (temporary on small screens, permanent on larger screens)
- Filter menu items by matching feature names against a provided feature list
- Call a click handler with the item index on menu item click
- Keep mobile drawer content mounted when closed

## Non-Responsibilities

- Does not manage navigation, routing, or page transitions
- Does not authenticate users or control access to menu items
- Does not manage mobile menu open/close state — receives state and toggle handler as inputs
- Does not handle deep linking or active state highlighting
- Does not fetch feature data — receives features as input

## Core Concepts

- **Responsive breakpoint pattern:** Renders a temporary drawer (overlay with backdrop) on small screens and a permanent drawer (always visible, no overlay) on larger screens — a single component adapts its navigation paradigm to viewport size.
- **Feature-based filtering:** Menu items are filtered by matching names against a feature list — items without a matching entry are silently excluded, enabling feature-flag-driven navigation without conditional logic.
- **Controlled component pattern:** Open/close state is owned by the parent — the drawer has no internal open/close state, keeping the toggle decision in the parent's responsive logic.
- **Content keep-mounted on mobile:** Drawer content stays in the DOM when closed, preserving scroll position and avoiding remount animations on toggle.

## States

- **Open (mobile)** — Temporary drawer visible on small screens; overlay active
- **Closed (mobile)** — Drawer hidden; content remains mounted
- **Open (desktop)** — Permanent drawer visible on larger screens; no overlay
- **Empty** — All features filtered out or empty feature list; renders empty list
- **Filtered** — Some features excluded due to missing feature list entries; only matching items render

## Edge Cases

- All features filtered out: Renders empty list with no items
- Empty feature list: Returns empty list with no children
- Missing feature name in feature list: The feature's menu item is filtered out silently
- Very long feature names: Truncated with ellipsis
- Drawer width is fixed and does not resize with viewport

## Error Conditions

- Empty feature list — Guard clause returns empty list
- No matching features — All items filtered out; renders empty list
