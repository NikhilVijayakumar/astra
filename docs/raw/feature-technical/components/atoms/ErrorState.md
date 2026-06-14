# ErrorState - Technical Specification

# Overview

An atomic component that renders a centered MUI `Alert` with `severity="error"`. Accepts an optional `message` prop; if omitted, falls back to a localized default string from key `unknown_message`. The component has no interaction surface, no state, and no side effects.

# Feature Summary

Renders a `<Box>` wrapper with centered text alignment containing an `<Alert severity="error">` element. The alert content resolves via `message || literal.unknown_message` — a custom message takes priority, then the localized default, then empty (if both are absent). The component fills the width of its parent with theme spacing.

# Implementation Reference

## Status
Implemented

## Source Files

| File | Path |
|------|------|
| Component source | `src/common/components/atoms/ErrorState.tsx` |
| Component tests | `src/common/components/atoms/ErrorState.test.tsx` |
| Component stories | `src/common/components/atoms/ErrorState.stories.tsx` |
| Barrel export | `src/common/components/atoms/index.ts` |

## Public API

### Exported Symbols

```typescript
// File: src/common/components/atoms/ErrorState.tsx

// Note: ErrorStateProps is NOT exported (file-local interface)
interface ErrorStateProps {
  message?: string;
}

const ErrorState: FC<ErrorStateProps>;
export default ErrorState;
```

### Barrel Re-export

```typescript
// src/common/components/atoms/index.ts
export { default as ErrorState } from './ErrorState';
```

The component is a **default export** re-exported as a named export from the barrel:

```typescript
import { ErrorState } from '@/common/components/atoms';
// or
import ErrorState from '@/common/components/atoms/ErrorState';
```

The props interface `ErrorStateProps` is file-internal and **not** part of the public API. Consumers interact with the component via inline props `message?: string`.

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| **Atom (Atomic Hierarchy)** | Single `<Box>` wrapping a single `<Alert>` — no user component composition | Renders only MUI primitives; no molecule or organism components. |
| **Stateless UI** | No state, no effects, no callbacks | Pure render function — output determined by `message` prop + localization context. |
| **Theme Sovereignty** | `severity="error"` uses MUI Alert's built-in theme-driven styling; spacing via `spacing.lg`, `spacing.xl` tokens | All visual properties derive from MUI theme; no hardcoded colors. |
| **Localization** | `literal.unknown_message` fallback via `useLanguage()` | Custom message takes priority; localized default is the secondary source. |
| **Public API Stability** | Default export with barrel rename; props interface is internal | The `message?: string` prop is stable by convention; changing it requires only component-internal updates. |
| **Dependency Safety** | Imports `FC` from `react`, `Box`/`Alert` from `@mui/material`, `useLanguage` from local context, `spacing` from theme tokens | Minimal imports; tree-shakeable MUI imports (`Alert` is a named import). |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `ErrorState` (single view) | `src/common/components/atoms/ErrorState.tsx` | Renders centered error Alert with (optional) custom message or localized fallback | Resolve display text via `message ?? literal.unknown_message`; render `<Box>` with `textAlign: "center"` and `mt: spacing.xl` / `p: spacing.lg`; render `<Alert severity="error">` with resolved message | `react` (`FC`), `@mui/material` (`Box`, `Alert`), `../../localization/LanguageContext` (`useLanguage`), `../../../theme/tokens/spacing` (`spacing`) |

The component has one view with one child Alert. No sub-views, no conditional rendering branches beyond the fallback expression.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|------------------|-------------------|
| `message` is optional | Usage without `message` prop | TypeScript allows; component falls back to `literal.unknown_message` | N/A — expected behavior |
| `message` is a string | Custom message provided | Alert renders with the custom string | N/A |
| Localization key `unknown_message` exists | Component renders without `message` | Alert shows `literal.unknown_message` | N/A |
| Localization key `unknown_message` missing | Component renders without `message` | `literal.unknown_message` is `undefined`; `message || undefined` resolves to `undefined`; Alert renders empty | Add `unknown_message` to translation files; component shows empty alert |

No runtime validation is performed beyond TypeScript compile-time checks.

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing `message` + missing localization key | No `message` prop AND `unknown_message` not in translation file | `finalMessage` is `undefined`; `<Alert>` renders with empty content | Empty alert box with the error icon but no text — confusing for users |
| Missing `LanguageProvider` | Component rendered outside `LanguageProvider` | `useLanguage()` throws runtime error | Application crashes |
| Extremely long message text | Consumer passes multi-line or long string | Alert text wraps naturally; no truncation applied | Alert may grow very tall; no layout break |

No error boundary is provided. Errors propagate to the parent.

---

# Non-Functional Requirements

## Performance

- Renders 2 DOM nodes (Box > Alert). Alert renders with an icon and optional children.
- No internal state or effects — re-render only on prop or context change.
- MUI Alert includes an icon by default — no custom icon rendering.

## Reliability

- Fallback chain `message || literal.unknown_message` is evaluated at render time — always resolves to the first truthy value.
- If both fallback sources are absent, the Alert renders empty (visible border + icon but no text) — no crash.
- Spacing uses theme tokens — layout adapts to theme spacing configuration.

## Maintainability

- Adding a new error severity level or prop requires expanding the file-local `ErrorStateProps` interface only — no barrel or export changes if the interface remains internal.
- The fallback pattern mirrors other atoms (StatusDot's `|| toneColorMap.default`) — consistent codebase pattern.
- Stories provide visual coverage for 3 variants: default, custom message, long message.

---

# Architecture Compliance Review

## Applied Patterns

- Stateless UI — fully compliant (no state, no effects).
- Atom tier — composes only MUI primitives (Box, Alert).
- Theme sovereignty — Alert's `severity="error"` triggers MUI's built-in error styling; spacing via token imports.
- Localization — text via `useLanguage` context fallback.
- Public API — stable default export with known prop shape.

## Risks

- **Props interface not exported**: Consumers cannot type-check usage with `ErrorStateProps`. They must rely on TypeScript's inference from usage. If the interface changes, errors may surface at call sites without IDE support.
- **MUI Alert coupling**: The component is tightly coupled to MUI Alert's rendering behavior (icon, padding, border, dismiss button area). Replacing or upgrading MUI Alert could change the visual output without component version bump.
- **Empty alert edge case**: When both `message` and `literal.unknown_message` are absent, the empty Alert is a confusing UX — visible error styling with no content.

## Gaps

- Retry action callback (feature spec "Future Enhancements") — not implemented.
- Expandable error detail section — not implemented.
- Dismiss callback — not implemented.
- Error severity differentiation — not implemented (always `severity="error"`).

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Component | `src/common/components/atoms/ErrorState.tsx` | `ErrorState` (default export) | `react` (`FC`), `@mui/material` (`Box`, `Alert`), `../../localization/LanguageContext` (`useLanguage`), `../../../theme/tokens/spacing` (`spacing`) |
| Barrel | `src/common/components/atoms/index.ts` | `ErrorState` (renamed default export) | `./ErrorState` |
| Tests | `src/common/components/atoms/ErrorState.test.tsx` | None | `@testing-library/react`, `vitest`, `./ErrorState` |
| Stories | `src/common/components/atoms/ErrorState.stories.tsx` | Default, WithCustomMessage, WithLongMessage | `@storybook/react`, `./ErrorState` |

---

# Final Rule

ErrorState is a pure, stateless error display atom. It renders exactly one MUI Alert element with error severity. The text content is resolved through a deterministic fallback chain: custom `message` prop → localized `unknown_message` → empty. The component must never manage state, handle retry logic, log errors, or import from higher atomic tiers. It is the error counterpart in the state atom trio (LoadingState, ErrorState, EmptyState).
