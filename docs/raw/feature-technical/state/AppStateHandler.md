# AppStateHandler — Technical Blueprint

---

# Feature Summary

A generic conditional-rendering component that inspects an `AppState<T>` object and renders the appropriate UI: LoadingState → ErrorState → EmptyState → Success content (children or SuccessComponent). Eliminates repetitive loading/error/empty conditional trees in feature containers.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Purpose |
|------|---------|
| `src/common/components/organisms/AppStateHandler.tsx` | Component implementation |
| `src/common/components/organisms/AppStateHandler.test.tsx` | Unit tests (vitest) |
| `src/common/components/organisms/AppStateHandler.stories.tsx` | Storybook stories |
| `src/common/state/AppState.ts` | `AppState<T>` interface, `StateType` enum |
| `src/common/repo/HttpStatusCode.ts` | `HttpStatusCode` enum for INTERNET_ERROR detection |
| `src/common/components/atoms/LoadingState.tsx` | Rendered on LOADING |
| `src/common/components/atoms/ErrorState.tsx` | Rendered on error |
| `src/common/components/atoms/EmptyState.tsx` | Rendered on empty/fallback |

## Public API

```typescript
// Exported via state/index.ts barrel (alongside AppState, StateType)
// Also re-exported via components/organisms barrel path

export interface AppStateHandlerProps<T, S extends AppState<T> = AppState<T>> {
  appState: S;
  SuccessComponent?: FC<{ appState: S }>;
  emptyCondition?: (data: T) => boolean;
  errorMessage?: string;
  children?: ReactNode;
}

export default function AppStateHandler<T, S extends AppState<T>>(
  props: AppStateHandlerProps<T, S> & { children?: ReactNode },
): ReactElement;
```

---

# Architecture Mapping
| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Atomic Hierarchy | Organism tier | Composes atoms (LoadingState, ErrorState, EmptyState). Orchestrates data-flow routing. Template-agnostic (no layout assumptions). |
| Stateless UI | Enforcer | `AppStateHandler` is the mechanism that keeps parent components stateless — owns the conditional routing so parents don't need state or branching. |
| Theme Sovereignty | Delegated | No direct visual output — delegates to child atoms which must handle their own theming. |
| Localization | Partially | `errorMessage` prop accepts a translated string. The auto-fallback uses `appState.statusMessage` which may carry localized content. No hardcoded strings in this component. |
| Dependency Safety | Minimal | Depends on React, internal AppState types, and 3 internal atom components (LoadingState, ErrorState, EmptyState). |
| Public API Stability | Stable (default export) | Exported as default from `AppStateHandler.tsx`. Public API includes `AppStateHandlerProps<T, S>`. |

---

# Technical Structure

## Views
| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| AppStateHandler | `src/common/components/organisms/AppStateHandler.tsx` | Conditional state router | Evaluate appState in priority order: LOADING → ERROR → EMPTY → SUCCESS → fallback EMPTY | `react`, `state/AppState`, `repo/HttpStatusCode`, `atoms/LoadingState`, `atoms/ErrorState`, `atoms/EmptyState` |

## State Model
| State | File Path | Type Declaration | Transitions | Owner |
|-------|-----------|-----------------|-------------|-------|
| AppState<T> | `src/common/state/AppState.ts` | `interface AppState<T> { state: StateType; isError: boolean; isSuccess: boolean; status: HttpStatusCode; statusMessage: string; data: T \| null; }` | INIT → LOADING → COMPLETED (with isError/isSuccess) | `useDataState` hook |

## State Evaluation Priority (fixed order)
```
1. state === StateType.LOADING       → <LoadingState />
2. isError || status === INTERNET_ERROR → <ErrorState message={errorMessage} />
3. isSuccess && data !== null
   ├── emptyCondition?.(data) === true → <EmptyState />
   ├── children provided               → children
   └── SuccessComponent provided       → <SuccessComponent appState={appState} />
4. fallback                            → <EmptyState />
```

## Generic Type Parameters
- `T`: The data type held by AppState (e.g., `User[]`)
- `S extends AppState<T>`: The specific AppState subtype (allows extension with additional fields)

## Data Flow Sequence
```
Parent passes appState: AppState<T>
  → AppStateHandler reads appState fields
    → Branches to one of 4 internal atom components
    → Returns <ReactElement>
```

## Invariant Rules
- Evaluation order is fixed: LOADING > ERROR > EMPTY > SUCCESS
- `emptyCondition` is called only when `isSuccess && data !== null`
- `children` takes precedence over `SuccessComponent` when both provided
- Fallback state (INIT, no success, no error) renders `<EmptyState />`
- `errorMessage` is passed to `<ErrorState message={...} />` — if omitted, ErrorState uses its own default
- `SuccessComponent` receives the full `appState` as prop (not just `data`)
- Component is generic — reusable across any async data type

---

# Validation Design
| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `appState` is required | TypeScript | Compilation error | Provide AppState<T> |
| `state === LOADING` | Runtime eval | Renders LoadingState | N/A — valid state |
| `isError` with errorMessage | Runtime eval | Renders ErrorState with custom message | Consumer checks error |
| `status === INTERNET_ERROR` | Runtime eval | Renders ErrorState even if isError false | N/A — valid state |
| `emptyCondition` returns true | Runtime eval | Renders EmptyState | Consumer adjusts data or condition |
| No `children` or `SuccessComponent` | Runtime eval (success path) | Falls through to EmptyState | Provide one or the other |
| Both `children` and `SuccessComponent` | Runtime eval | `children` wins silently | Consumer removes unused |

---

# Error Handling
| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| Missing `errorMessage` | Consumer omits prop | Passes `undefined` to ErrorState — ErrorState uses its own default | Provide `errorMessage` |
| `emptyCondition` not provided | Consumer omits | `emptyCondition?.(data)` returns `undefined` (falsy) → skips empty check, renders success | Provide condition or accept behavior |
| `SuccessComponent` throws | Component error | Error propagates to parent — no ErrorBoundary in AppStateHandler | Wrap in ErrorBoundary |
| `appState` has unexpected shape | Consumer passes malformed state | TypeScript error at compile time | Fix type |
| All flags false (INIT state) | Data never loaded | Falls through to EmptyState | Consumer triggers execute |

---

# Non-Functional Requirements
- **Performance**: O(1) decision tree. No re-render amplification — re-renders only when `appState` reference changes.
- **Accessibility**: Delegates to child atoms. LoadingState should have `aria-busy`; ErrorState should have `role="alert"`.
- **Bundle**: ~45 lines of logic. Depends on 3 internal atom components (tree-shakeable if unused).
- **Testability**: 6 tests cover loading, error (isError), error (INTERNET_ERROR), success, empty, fallback.

---

# Architecture Compliance Review
## Applied Patterns
- Organism tier — composes atoms, orchestrates data flow
- State routing via fixed priority evaluation
- Generic component pattern with dual type params `<T, S>`
- Children vs. SuccessComponent dual API

## Risks
- `children` silently overwriting `SuccessComponent` may cause confusion (no warning logged)
- INFALLBACK → EmptyState is a design tradeoff — INIT state (never loaded) renders as "empty" which may be misleading
- Component is not memoized — `React.memo()` could prevent re-renders when parent re-renders with same `appState` reference

## Gaps
- No retry button in ErrorState (delegated to atom, but no `onRetry` prop chain)
- No `LoadingComponent` customization — always renders `LoadingState` atom
- No animation transitions between states (loading→success flash)
- No `LoadingComponent` customization — always renders `LoadingState` atom

---

# Module Map
| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| AppStateHandler | `src/common/components/organisms/AppStateHandler.tsx` | `AppStateHandlerProps<T,S>`, default export `AppStateHandler` | `react`, `state/AppState`, `repo/HttpStatusCode`, `atoms/LoadingState`, `atoms/ErrorState`, `atoms/EmptyState` |
| AppState | `src/common/state/AppState.ts` | `AppState<T>`, `StateType` | `repo/HttpStatusCode` |
| state barrel | `src/common/state/index.ts` | `AppState`, `StateType` | re-exports from `AppState` |
| LoadingState | `src/common/components/atoms/LoadingState.tsx` | default export | — |
| ErrorState | `src/common/components/atoms/ErrorState.tsx` | default export | — |
| EmptyState | `src/common/components/atoms/EmptyState.tsx` | default export | — |

---

# Final Rule

AppStateHandler is the single declarative boundary for async UI routing in Astra. All feature containers that consume `useDataState` must use AppStateHandler (or an equivalent) to render loading/error/empty/success states — no manual conditional branching on `AppState` flags is permitted in feature components. The INIT→EmptyState fallback behavior is intentional but must remain documented. No business logic, data fetching, or persistence may be added to this component.

## Authorization

**Visibility:** Public — stateless Astra library primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
