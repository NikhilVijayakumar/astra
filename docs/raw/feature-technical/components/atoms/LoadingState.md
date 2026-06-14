# LoadingState - Technical Specification

# Overview

A self-contained atomic component that renders a centered loading indicator consisting of an MUI `CircularProgress` spinner and a localized "Loading..." text message. The component accepts no props — it is a fully self-contained visual state indicator that relies on `useLanguage` context for its text content.

# Feature Summary

Renders a `<Box>` with flex column centering containing a `CircularProgress` (spinner, role="progressbar") and a `<Typography>` displaying the localized string from key `loading_message`. Uses theme spacing tokens for padding and margin. The component has no input props, no internal state, and no interaction surface.

# Implementation Reference

## Status
Implemented

## Source Files

| File | Path |
|------|------|
| Component source | `src/common/components/atoms/LoadingState.tsx` |
| Component tests | `src/common/components/atoms/LoadingState.test.tsx` |
| Component stories | `src/common/components/atoms/LoadingState.stories.tsx` |
| Barrel export | `src/common/components/atoms/index.ts` |

## Public API

### Exported Symbols

```typescript
// File: src/common/components/atoms/LoadingState.tsx

const LoadingState: FC;
export default LoadingState;
```

### Barrel Re-export

```typescript
// src/common/components/atoms/index.ts
export { default as LoadingState } from './LoadingState';
```

The component is a **default export** re-exported as a named export from the barrel:

```typescript
import { LoadingState } from '@/common/components/atoms';
// or
import LoadingState from '@/common/components/atoms/LoadingState';
```

No type exports are provided (no props interface is exported).

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| **Atom (Atomic Hierarchy)** | Renders a fixed composition of Box + CircularProgress + Typography | These are MUI primitive elements, not user components. No user components are composed. |
| **Stateless UI** | No state, no effects, no callbacks | Pure render function. Output depends only on `useLanguage` context. |
| **Theme Sovereignty** | `color: 'primary.main'` for spinner; `color="text.secondary"` for text; spacing via `spacing.md`, `spacing.lg`, `spacing.xl` tokens | All colors and spacing derive from theme tokens — no hardcoded values. |
| **Localization** | `literal.loading_message` via `useLanguage()` | No hardcoded string; text is resolved through localization context. |
| **Public API Stability** | Default export with renamed barrel re-export | Internal file can change default name without breaking consumers who use the barrel. |
| **Dependency Safety** | Imports `FC` from `react`, `Box`/`CircularProgress`/`Typography` from `@mui/material`, `useLanguage` from local context, `spacing` from theme tokens | All imports are minimal and tree-shakeable. |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `LoadingState` (single view) | `src/common/components/atoms/LoadingState.tsx` | Renders centered loading spinner + localized message | Create flex column Box with centering; render `<CircularProgress>` with primary color and bottom margin; render `<Typography>` with `text.secondary` color and localized `loading_message` | `react` (`FC`), `@mui/material` (`Box`, `CircularProgress`, `Typography`), `../../localization/LanguageContext` (`useLanguage`), `../../../theme/tokens/spacing` (`spacing`) |

The component has one view. No sub-views, no conditional rendering, no composition of other user components.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|------------------|-------------------|
| No props accepted | Consumer passes any prop | TypeScript compile error (empty interface `FC`) | Remove extraneous props |
| Localization key `loading_message` exists | Component renders | Typography shows `literal.loading_message` | N/A |
| Localization key `loading_message` missing | Translation object lacks key | Typography renders empty — no text displayed | Add key to translation files; component still renders spinner |
| Language context missing | `useLanguage()` called outside `LanguageProvider` | Runtime error: hook context is undefined | Wrap consumer in `LanguageProvider` |

The component performs no runtime validation. All constraints are enforced by TypeScript or the React context system.

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing localization key | Translation file lacks `loading_message` | `literal.loading_message` resolves to `undefined`; Typography renders empty | Spinner visible but no text — confusing for long loads |
| Missing `LanguageProvider` | Component rendered outside provider context | `useLanguage()` throws runtime error | Application crashes (white screen / error boundary) |
| Missing theme context | Component rendered outside `ThemeProvider` | MUI defaults apply; colors may be incorrect | Spinner still renders |

No error boundary is provided. Errors propagate to the parent.

---

# Non-Functional Requirements

## Performance

- Renders 3 DOM nodes (Box > CircularProgress + Typography). CircularProgress renders an animated SVG.
- No internal state or effects — re-render only triggered by context change (language switch, theme switch) or parent re-render.
- Animation is handled by MUI's `CircularProgress` — no custom animation.

## Reliability

- The spinner always renders regardless of localization state.
- If the localization key is missing, the spinner still provides visual feedback (animated progress indicator without text).
- Spacing uses theme tokens — layout adapts to theme spacing changes.

## Maintainability

- Zero-prop interface means no API surface to maintain or deprecate.
- Changing the loading message requires only updating the translation key value — no component changes.
- The component is a direct analogue of `EmptyState` and `ErrorState` — shared patterns across all three state atoms.

---

# Architecture Compliance Review

## Applied Patterns

- Stateless UI — fully compliant (no state, no effects beyond CircularProgress internal animation).
- Atom tier — composes only MUI primitives (Box, CircularProgress, Typography). No user components.
- Theme sovereignty — all visual properties via theme tokens (color, spacing).
- Localization — text via `useLanguage` context, no hardcoded strings.
- Public API — default export with barrel rename.

## Risks

- **No props interface exported**: Consumers have no way to customize the component (message, spinner size, variant). The feature spec lists this as "Future Enhancements" but there is no current API for it.
- **Hardcoded `variant="body1"`**: While not a hardcoded color, the typography variant is a literal in sx and assumes `body1` exists in all consumer themes.
- **No `React.memo` or stabilization**: The component re-renders whenever its parent re-renders, even if nothing changed. Acceptable for an atom but worth noting.

## Gaps

- Optional `message` prop (feature spec "Future Enhancements") — not implemented.
- Alternative spinner variants — not implemented.
- Size presets — not implemented.
- Minimum display duration — not implemented.

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Component | `src/common/components/atoms/LoadingState.tsx` | `LoadingState` (default export) | `react` (`FC`), `@mui/material` (`Box`, `CircularProgress`, `Typography`), `../../localization/LanguageContext` (`useLanguage`), `../../../theme/tokens/spacing` (`spacing`) |
| Barrel | `src/common/components/atoms/index.ts` | `LoadingState` (renamed default export) | `./LoadingState` |
| Tests | `src/common/components/atoms/LoadingState.test.tsx` | None | `@testing-library/react`, `vitest`, `./LoadingState` |
| Stories | `src/common/components/atoms/LoadingState.stories.tsx` | Default + Default story | `@storybook/react`, `./LoadingState` |

---

# Final Rule

LoadingState is a self-contained, zero-prop atomic loading indicator. It must always render a spinner and a localized text message, regardless of the consumer's locale. The component must never accept props, manage state, or compose user-defined components. It is one of three sibling state atoms (LoadingState, ErrorState, EmptyState) sharing the same structural pattern of flex-centered Box + context-driven text content.
