# EmptyState - Technical Specification

# Overview

A self-contained atomic component that renders a centered "No data found" text indicator. The component accepts no props — text is resolved entirely through the `useLanguage` localization context via key `no_data_found`. It is the empty-data counterpart in the state atom trio.

# Feature Summary

Renders a `<Box>` with centered text alignment containing a `<Typography>` displaying the localized string from key `no_data_found`. Uses theme spacing tokens for padding and margin. The component has no input props, no internal state, no interaction surface, and no conditional rendering.

# Implementation Reference

## Status
Implemented

## Source Files

| File | Path |
|------|------|
| Component source | `src/common/components/atoms/EmptyState.tsx` |
| Component tests | `src/common/components/atoms/EmptyState.test.tsx` |
| Component stories | `src/common/components/atoms/EmptyState.stories.tsx` |
| Barrel export | `src/common/components/atoms/index.ts` |

## Public API

### Exported Symbols

```typescript
// File: src/common/components/atoms/EmptyState.tsx

const EmptyState: FC;
export default EmptyState;
```

### Barrel Re-export

```typescript
// src/common/components/atoms/index.ts
export { default as EmptyState } from './EmptyState';
```

The component is a **default export** re-exported as a named export from the barrel:

```typescript
import { EmptyState } from '@/common/components/atoms';
// or
import EmptyState from '@/common/components/atoms/EmptyState';
```

No type exports are provided (no props interface exists).

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| **Atom (Atomic Hierarchy)** | Single `<Typography>` inside a `<Box>` | Renders only MUI primitives; no user component composition. |
| **Stateless UI** | No state, no effects, no callbacks | Pure render function — output determined solely by `useLanguage` context. |
| **Theme Sovereignty** | `color="text.secondary"` via Typography prop; spacing via `spacing.lg`, `spacing.xl` tokens | All visual properties derive from theme; no hardcoded values. |
| **Localization** | `literal.no_data_found` via `useLanguage()` | No hardcoded string — full locale support through context. |
| **Public API Stability** | Default export with barrel rename | Stable import path; zero props means zero breaking changes to the API surface. |
| **Dependency Safety** | Imports `FC` from `react`, `Box`/`Typography` from `@mui/material`, `useLanguage` from local context, `spacing` from theme tokens | Minimal imports; tree-shakeable. |

---

# Technical Structure

## Views

| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `EmptyState` (single view) | `src/common/components/atoms/EmptyState.tsx` | Renders centered "No data found" text | Create `<Box>` with `textAlign: "center"`, `p: spacing.lg`, `mt: spacing.xl`; render `<Typography variant="body1" color="text.secondary">` with localized `no_data_found` text | `react` (`FC`), `@mui/material` (`Box`, `Typography`), `../../localization/LanguageContext` (`useLanguage`), `../../../theme/tokens/spacing` (`spacing`) |

The component has one view with one child Typography. No sub-views, no conditional rendering.

---

# Validation Design

| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|------------------|-------------------|
| No props accepted | Consumer passes any prop | TypeScript compile error (empty interface `FC`) | Remove extraneous props |
| Localization key `no_data_found` exists | Component renders | Typography shows `literal.no_data_found` | N/A |
| Localization key `no_data_found` missing | Translation object lacks key | Typography renders empty — no visible text | Add `no_data_found` to translation files |
| Language context missing | Component rendered outside `LanguageProvider` | `useLanguage()` throws runtime error | Wrap consumer in `LanguageProvider` |

No runtime validation is performed. All constraints are enforced by TypeScript or the React context system.

---

# Error Handling

| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing localization key | Translation file lacks `no_data_found` | `literal.no_data_found` resolves to `undefined`; Typography renders empty | No visible content — empty page section with no explanation |
| Missing `LanguageProvider` | Component rendered outside provider | `useLanguage()` throws runtime error | Application crashes (white screen / error boundary) |
| Missing theme context | Component rendered outside `ThemeProvider` | MUI defaults apply; text color may not match design | Text renders in default black |

No error boundary is provided. Errors propagate to the parent.

---

# Non-Functional Requirements

## Performance

- Renders 2 DOM nodes (Box > Typography). No animated elements.
- No internal state or effects — re-render only on context change or parent re-render.
- Lightest component in the atom set — no icons, no complex layout, no animations.

## Reliability

- Zero-prop interface eliminates all prop-related errors.
- If the localization key is missing, the Box still renders (empty Typography) — layout space is preserved.
- Spacing uses theme tokens — consistent with LoadingState and ErrorState layouts.

## Maintainability

- Zero-prop API means zero migration burden when changing internal implementation.
- Changing the empty message requires only updating the translation key value — no component code changes.
- Structural twin of LoadingState (same pattern: flex-centered Box + Typography with localized text) — shared mental model.

---

# Architecture Compliance Review

## Applied Patterns

- Stateless UI — fully compliant (no state, no effects).
- Atom tier — composes only MUI primitives (Box, Typography).
- Theme sovereignty — text color and spacing via theme tokens.
- Localization — text via `useLanguage` context, no hardcoded strings.
- Public API — stable default export, zero props.

## Risks

- **No props interface for extensibility**: The component cannot accept a custom message, action button, or illustration slot. The feature spec lists these as future enhancements but the current API precludes them without a breaking change (adding props would widen the implicit `{}` interface).
- **Typographic coupling**: `variant="body1"` is hardcoded. If the consumer's theme redefines `body1` to be inappropriate for empty-state messaging, there is no override.
- **No min-height enforcement**: When populated content loads, the area may shift. The feature spec recommends evaluating a min-height to prevent layout shift, but none is implemented.

## Gaps

- Action button slot (feature spec "Future Enhancements") — not implemented.
- Illustration or icon slot — not implemented.
- Custom message prop — not implemented.
- Min-height to prevent layout shift — not implemented.

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| Component | `src/common/components/atoms/EmptyState.tsx` | `EmptyState` (default export) | `react` (`FC`), `@mui/material` (`Box`, `Typography`), `../../localization/LanguageContext` (`useLanguage`), `../../../theme/tokens/spacing` (`spacing`) |
| Barrel | `src/common/components/atoms/index.ts` | `EmptyState` (renamed default export) | `./EmptyState` |
| Tests | `src/common/components/atoms/EmptyState.test.tsx` | None | `@testing-library/react`, `vitest`, `./EmptyState` |
| Stories | `src/common/components/atoms/EmptyState.stories.tsx` | Default | `@storybook/react`, `./EmptyState` |

---

# Final Rule

EmptyState is a self-contained, zero-prop atomic empty-data indicator. It must always render a centered text message derived from the localization context key `no_data_found`. The component must never accept props, manage state, or compose user-defined components. It is the empty-data counterpart in the state atom trio (LoadingState, ErrorState, EmptyState), sharing the same structural pattern of centered Box + localized Typography text.
