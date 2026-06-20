# Overview

Astra's MVVM (Model-View-ViewModel) pattern is implemented through three concrete abstractions: the `useDataState<T>` hook (ViewModel), the `AppState<T>` interface (Model contract), and the `AppStateHandler` component (View utility). Together they form a unidirectional data-flow pipeline for async operations with deterministic state transitions: `INIT → LOADING → COMPLETED` (with success or error variants).

---

# Feature Summary

| Attribute | Value |
|-----------|-------|
| **Module** | MVVM — Implementation Pattern |
| **Status** | Implemented |
| **Primary Concern** | Standardized async state management with unidirectional data flow |
| **Consumers** | All feature modules that perform API calls or async data loading |
| **Localization** | `AppStateHandler` renders `LoadingState`, `ErrorState`, `EmptyState` atoms (may contain localized strings) |

---

# Implementation Reference

## Status

Implemented — all three abstractions are present and exported as public API.

## Source Files

| File | Purpose | Layer |
|------|---------|-------|
| `src/common/hooks/useDataState.ts` | ViewModel hook — manages async state machine | ViewModel |
| `src/common/state/AppState.ts` | `AppState<T>` interface and `StateType` enum | Model |
| `src/common/components/organisms/AppStateHandler.tsx` | Conditional rendering component for AppState | View |
| `src/common/repo/ServerResponse.ts` | Response type consumed by `execute()` | Repository |
| `src/common/repo/HttpStatusCode.ts` | Status code enum used in `AppState` | Model |

## Public API

### From `src/common/hooks/useDataState.ts`

```ts
function useDataState<T>(
  customInitialState?: Partial<AppState<T>>
): readonly [AppState<T>, (apiCall: () => Promise<ServerResponse<T>>) => Promise<void>, React.Dispatch<React.SetStateAction<AppState<T>>>];
```

Returns tuple: `[appState, execute, setAppState]`

### From `src/common/state/AppState.ts`

```ts
enum StateType { INIT = 0, LOADING = 1, COMPLETED = 2 }

interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data: T | null;
}
```

### From `src/common/components/organisms/AppStateHandler.tsx`

```tsx
interface AppStateHandlerProps<T, S extends AppState<T> = AppState<T>> {
  appState: S;
  SuccessComponent?: FC<{ appState: S }>;
  emptyCondition?: (data: T) => boolean;
  errorMessage?: string;
  children?: ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  emptyComponent?: ReactNode;
}
```

### From `src/common/components/organisms/AppStateContext.ts`

```tsx
export interface AppStateComponents {
  Loading?: FC;
  Error?: FC<{ message?: string }>;
  Empty?: FC;
}

export const AppStateContext: React.Context<AppStateComponents>;
export const AppStateProvider: React.Provider<AppStateComponents>;
```

### Import Contract

```tsx
import {
  useDataState, AppState, StateType, StateCode,
  AppStateHandler, AppStateHandlerProps,
  AppStateProvider, AppStateContext, AppStateComponents,
} from 'astra';
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| MVVM | ✅ Core implementation | `useDataState` = ViewModel, `AppState` = Model, `AppStateHandler` = View |
| Stateless UI | ✅ Enforced | ViewModel owns all state; components receive data via props |
| Public API Stability | ✅ Full | All three abstractions exported through `src/lib.ts` |
| Dependency Safety | ✅ Full | Only React `useState` dependency |
| Feature Structure | ✅ Aligned | ViewModel lives in `hooks/`, Model in `state/`, View in `components/organisms/` |

---

# Technical Structure

## Services

| Name | File Path | Purpose | Dependencies |
|------|-----------|---------|--------------|
| `useDataState<T>` | `src/common/hooks/useDataState.ts` | Manage async state machine from INIT → LOADING → COMPLETED | `AppState.ts`, `ServerResponse.ts`, `HttpStatusCode.ts` |

### Internal State Machine

```
INIT (state=INIT, data=null)
  │
  └─ execute(apiCall) called
       │
       ▼
  LOADING (state=LOADING)
       │
       ├─ apiCall succeeds → setAppState({ COMPLETED, isSuccess: true, data: response.data })
       │
       └─ apiCall throws   → setAppState({ COMPLETED, isError: true, status: 500, data: null })
```

### execute() Contract

```ts
execute(apiCall: () => Promise<ServerResponse<T>>): Promise<void>
```

1. Sets `state: LOADING`
2. Awaits `apiCall()`
3. On success: `state: COMPLETED, isSuccess: true, data: response.data`
4. On failure (response error or thrown exception): `state: COMPLETED, isError: true, data: null`

## Views

| Name | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `AppStateHandler` | `src/common/components/organisms/AppStateHandler.tsx` | Conditional render based on AppState | Route to consumer-injected Loading/Error/Empty/Success UI via context (`AppStateContext`) or slot props | `AppState.ts`, `AppStateContext.ts`, `HttpStatusCode.ts` |

### AppStateHandler Rendering Logic

Slot props override context per-instance. Context is wired at root via `AppStateProvider`.

```
appState.state === LOADING
  → loadingComponent slot || context.Loading || null

appState.isError || status === 0
  → errorComponent slot || context.Error(message=errorMessage) || null

appState.isSuccess && data !== null
  ├─ emptyCondition(data) === true
  │    → emptyComponent slot || context.Empty || null
  ├─ children provided      → render children
  └─ SuccessComponent       → <SuccessComponent appState={appState} />

default (INIT)
  → emptyComponent slot || context.Empty || null
```

---

# Error Handling

| Condition | Behavior | Severity |
|-----------|----------|----------|
| Component unmount during request | `mountedRef` guard prevents state update after unmount | Safe — no stale update, no warning |
| `execute()` called while already LOADING | New request starts; previous result may overwrite | Logic error — caller should guard |
| API returns success with `data: null` | `isSuccess = true`, `data = null` | Edge case — AppStateHandler falls to `<EmptyState />` |
| `apiCall` throws non-ServerResponse error | Caught by try/catch → `isError = true, status: 500, data: null` | Graceful |
| `AppState<TypeA>` used where `AppState<TypeB>` expected | No TypeScript error if shapes align | Silent logic error |

---

# Non-Functional Requirements

| Requirement | Target | Enforcement |
|-------------|--------|-------------|
| Type safety | Generic `T` parameter | TypeScript strict |
| State consistency | State transitions are deterministic | Code review |
| Performance | Single `useState` per hook instance | Architectural |
| Reusability | ViewModel hooks composable per feature | Feature structure pattern |
| SSR compatibility | State initializes to `INIT` | No browser APIs used |

---

# Architecture Compliance Review

## Applied Patterns

| Invariant | Compliance | Evidence |
|-----------|------------|----------|
| MVVM | ✅ Full | Three-layer separation: `useDataState` (VM), `AppState` (M), `AppStateHandler` (V) |
| Stateless UI | ✅ Full | State owned by hooks; components receive data via props |
| Public API Stability | ✅ Full | All symbols exported through `src/lib.ts` |
| Feature Structure | ✅ Full | `hooks/`, `state/`, `components/organisms/` separation |

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| No built-in cancellation | Stale requests may update unmounted components | Consumer must implement cleanup/abort |
| No deduplication | Duplicate requests for same data | Consumer memoization or React Query integration |
| No retry logic | Transient failures render error immediately | Consumer-level retry wrapper |

## Gaps

- No AbortController integration — `mountedRef` prevents stale state but the underlying request still completes
- No request deduplication — concurrent `execute` calls race
- No dependent query support (fetch B after A succeeds)
- No optimistic update pattern
- No cache layer — every execute() triggers a full request

---

# Module Map

```
hooks/useDataState.ts ──→ state/AppState.ts (StateType, AppState)
       │                     repo/ServerResponse.ts
       │                     repo/HttpStatusCode.ts
       │
       ├── Used by: feature ViewModel hooks (useUsers, useOrders, etc.)
       │       ↓
       │   feature/hooks/use<Feature>.ts
       │       ↓
       │   feature/view/pages/<Feature>Page.tsx
       │       ↓
       │   AppStateHandler (renders atoms)
       │
       └── Exported via: hooks/index.ts → common/index.ts → lib.ts
```

---

# Final Rule

Every feature that performs async data loading must use `useDataState<T>` for state management. ViewModel hooks must be the exclusive owners of feature state. Components must never call `useDataState` directly — they receive data via props from a page-level container that composes the ViewModel. Always handle all four states: INIT (render nothing), LOADING (spinner), ERROR (error message), SUCCESS (data). Always check `data !== null` before accessing data properties.

## Authorization

**Visibility:** Public — stateless Astra library primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
