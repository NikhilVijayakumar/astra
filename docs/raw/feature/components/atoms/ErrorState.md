# ErrorState

A centered error display that shows when an operation fails.

## Overview

Displays an error message with appropriate visual treatment for error states. Accepts an optional custom error message; falls back to a localized default message when none is provided. Centered within its container.

## Responsibilities

- Display an error message with error-appropriate visual styling
- Show a custom error message when provided
- Fall back to a localized default message when no custom message is given

## Non-Responsibilities

- Does not capture or log errors to any service
- Does not provide retry, dismiss, or action callbacks
- Does not display error codes, stack traces, or technical details
- Does not manage error recovery or state transitions

## Core Concepts

- **Fallback chain pattern:** The component resolves display text by checking custom message first, then localized default, then empty state. No branch throws.
- **Optional prop with conditional rendering:** The message is optional — the component adapts its output based on presence or absence.
- **Purely presentational atom:** No state, no callbacks, no error recovery logic.

## States

- **Error** — Active rendering state; error message displayed
- **Empty** — No message provided and localization key missing; renders with no visible text

## Edge Cases

- No message provided: Falls back to localized default message
- Missing localization key: Renders with no visible content
- Extremely long message text: Text wraps within the container
- Multiple instances: Each renders independently with no coordination

## Error Conditions

- Missing message and missing localization key — Alert renders with no visible content
