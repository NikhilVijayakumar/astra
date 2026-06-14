# ThemeToggle Component

A button that switches between light and dark mode.

## Overview

Renders a clickable icon button. When dark mode is active, shows a sun icon (switch to light). When light mode is active, shows a moon icon (switch to dark). Accessible with a descriptive label.

## Usage

Place the toggle in a toolbar, navigation, or settings area. It receives the current theme state and toggle function from the theme context.

## Responsibilities

- Render a clickable button for theme switching
- Display the correct icon based on current mode
- Toggle the theme on user click
- Provide accessible label for screen readers

## Non-Responsibilities

- Does not manage theme state or persistence
- Does not handle keyboard shortcut toggling
- Does not render tooltips or labels for theme state
- Does not animate icon transitions

## States

- **Light icon** — Light mode active; renders moon icon (switch to dark)
- **Dark icon** — Dark mode active; renders sun icon (switch to light)

## Edge Cases

- **Missing context**: Component requires theme context — will error if rendered outside theme provider
- **Rapid clicks**: Toggle is synchronous; no race condition

## Error Conditions

- **Missing theme context** — Component cannot function without theme state
- **Null/undefined context** — Runtime error when accessing theme state

## User Journey

### Entry Conditions
A user sees a sun or moon icon in the toolbar and wants to switch the visual theme.

### Primary Flow
The user clicks the icon — it toggles from sun to moon (or vice versa) and all themed components update immediately.

### Alternate Flows
A keyboard-bound power user expects a shortcut to toggle themes without reaching for the mouse.

### Failure Flows
The theme context is missing — the component cannot render and throws an error.

### Recovery Flows
The developer ensures the toggle is rendered inside a theme provider; no recovery flow exists for the end user.

### Exit Conditions
The user's theme preference is applied; the icon now shows the opposite state for future toggling.

## Workflow

### Trigger
A click event on the theme toggle icon button.

### Preconditions
The theme context is available and provides the current mode and a toggle function.

### Steps
The user clicks the button, the component calls the toggle function from context, and the icon switches to represent the new mode.

### Outcomes
The theme mode toggles and the application palette updates accordingly.

### Exceptions
The context is undefined — the component throws a runtime error.

### Completion Criteria
The icon updates to reflect the new theme mode and the toggle is ready for the next interaction.

## Future Enhancements

- Animated icon transition between sun and moon
- Keyboard shortcut for power users
- Tooltip showing current mode and next mode on hover

## Open Questions

- Should the toggle accept a size option, or remain fixed-size?
- Should the accessible label be localized?
