# useDataState — Technical Blueprint

---

# Feature Summary

A generic React hook (`useDataState<T>`) that manages async data operation lifecycle through three states (INIT → LOADING → COMPLETED). Returns a readonly tuple `[appState, execute, setAppState]`. Core ViewModel primitive for all async data flow in Astra.

---

# Implementation Reference
## Status
Implemented

## Source Files
| File | Purpose |
|------|---------|
| `src/common/hooks/useDataState.ts` | Hook implementation |
| `src/common/hooks/useDataState.test.ts` | Unit tests (vitest) |
| `src/common/hooks/index.ts` | Barrel re-export |
| `src/common/state/AppState.ts` | `AppState<T>` interface, `StateType` enum |
| `src/common/repo/ServerResponse.ts` | `ServerResponse<T>` type consumed by `execute` |
| `src/common/repo/HttpStatusCode.ts` | `HttpStatusCode` enum for status tracking |

## Public API

```typescript
// Exported from src/common/hooks/index.ts → lib.ts
// Depends on: AppState, StateType, ServerResponse, HttpStatusCode

export function useDataState<T>(
  customInitialState?: Partial<AppState<T>>,
  options?: { unexpectedErrorMessage?: string },
): readonly [
  appState: AppState<T>,
  execute: (apiCall: () => Promise<ServerResponse<T>>) => Promise<void>,
  setAppState: React.Dispatch<React.SetStateAction<AppState<T>>>,
];
```

## Key Types Consumed

```typescript
// src/common/state/AppState.ts
export enum StateType { INIT = 0, LOADING = 1, COMPLETED = 2 }

export interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data: T | null;
}
```

---

# Architecture Mapping
| Pattern | Feature Usage | Reason |
|---------|--------------|--------|
| Atomic Hierarchy | Not applicable | This is a hook, not a component. Used by Organism and Template tiers via ViewModel pattern. |
| Stateless UI | Enforcer | `useDataState` is the mechanism that keeps UI components stateless — it owns async state so components don't have to. |
| Theme Sovereignty | Not applicable | No visual output. |
| Localization | ✅ Compliant | `statusMessage` from `ServerResponse` carries localized strings. Exception fallback uses `options?.unexpectedErrorMessage ?? ''` — consumer passes `literal['common.errors.unexpected']` from `useLanguage()`. |
| Dependency Safety | Minimal deps | Depends on React `useState`, internal `AppState`, `ServerResponse`, `HttpStatusCode`. |
| Public API Stability | Stable | Exported via `hooks/index.ts` barrel. `useDataState` is a core public API surface of Astra. |

---

# Technical Structure

## State Model
| State | File Path | Type Declaration | Transitions | Owner |
|-------|-----------|-----------------|-------------|-------|
| AppState<T> | `src/common/state/AppState.ts` | `interface AppState<T> { state: StateType.INIT \| LOADING \| COMPLETED; isError: boolean; isSuccess: boolean; status: HttpStatusCode; statusMessage: string; data: T \| null; }` | INIT → LOADING → COMPLETED (with isError/isSuccess branching) | ViewModel hooks (consumer app) |

## Data Flow Sequence
```
1. Consumer calls useDataState<T>() at mount → appState = { INIT, isError: false, isSuccess: false, status: IDLE, data: null }

2. Consumer calls execute(apiCall)
   → setAppState({ ...prev, state: LOADING })
   → await apiCall()
   → on success: setAppState({ state: COMPLETED, isSuccess: true, data: response.data, ... })
   → on error (ServerResponse error): setAppState({ state: COMPLETED, isSuccess: false, isError: true, data: null, ... })
   → on exception (throw): setAppState({ state: COMPLETED, isError: true, status: INTERNAL_SERVER_ERROR, statusMessage: options?.unexpectedErrorMessage ?? '' })

3. Consumer reads appState for conditional rendering
```

## State Transition Table
| From | Event | To | State Properties |
|------|-------|----|-----------------|
| INIT | Component mount | INIT | `isError=false, isSuccess=false, data=null` |
| INIT | `execute()` called | LOADING | `isError=false, isSuccess=false, data=prev.data` |
| LOADING | `apiCall` resolves with success | COMPLETED+success | `isSuccess=true, isError=false, data=response.data` |
| LOADING | `apiCall` resolves with error | COMPLETED+error | `isSuccess=false, isError=true, data=null` |
| LOADING | `apiCall` throws | COMPLETED+error | `isSuccess=false, isError=true, status=500, data=null` |
| Any | `setAppState(newState)` | Arbitrary | Consumer-defined |

## Invariant Rules
- `customInitialState` merges with defaults via spread: `{ ...getInitialState(), ...customInitialState }`
- `execute` is async, always returns `Promise<void>`
- LOADING state preserves `prev.data` — allows stale-while-reloading UX
- Exception catch sets `status: HttpStatusCode.INTERNAL_SERVER_ERROR` (value 500)
- No unmount guard — `setAppState` after unmount produces React warning in development
- Return type is `readonly [AppState<T>, execute, setAppState]` via `as const`

---

# Validation Design
| Rule | Trigger | Failure Behavior | Recovery Behavior |
|------|---------|-----------------|-------------------|
| `apiCall` returns non-ServerResponse | Runtime | Exception catch branch activated | Status=500, generic error message |
| Component unmounts mid-request | React lifecycle | `setAppState` called on unmounted component — **no guard** in current implementation | React warning in dev; no UI impact (state discarded) |
| `customInitialState` has type mismatch | TypeScript | Compilation error (partial of AppState<T>) | Fix type |
| Rapid consecutive `execute` calls | Runtime | Each call sets LOADING — intermediate success states overwritten | Consumer must debounce or use abort |

---

# Error Handling
| Error Type | Cause | System Response | User Response |
|------------|-------|-----------------|---------------|
| API returns error ServerResponse | Backend error | `isError=true, status=errorStatusCode, data=null` | Consumer checks `isError` and renders ErrorState |
| API call throws exception | Network failure, crash | `isError=true, status=500, statusMessage=options?.unexpectedErrorMessage ?? ''` | Consumer passes `literal['common.errors.unexpected']` as `options.unexpectedErrorMessage` |
| Missing `data` in success response | Backend returns empty body | `data=null` though `isSuccess=true` | Consumer must handle `data !== null` check |
| `customInitialState` overrides `state` | Consumer sets LOADING as initial | Hook starts in LOADING | Valid use case (e.g. rehydrating) |

---

# Non-Functional Requirements
- **Performance**: O(1) state updates. No memoization. `execute` creates a new closure on each call.
- **Abort/cleanup**: No AbortController integration. No unmount guard for `setState` after unmount — potential React warning (harmless in production).
- **Type safety**: Fully generic `<T>`. TypeScript enforces `ServerResponse<T>` return from `apiCall`.
- **Testability**: 5 tests cover default init, custom init, success flow, error flow, exception flow, loading transition.
- **Bundle**: ~55 lines, no external dependencies beyond React and internal types.

---

# Architecture Compliance Review
## Applied Patterns
- ViewModel primitive — centralizes async state management
- Three-state lifecycle (INIT → LOADING → COMPLETED)
- Tuple return with `as const` for destructuring
- Partial initialization via `customInitialState`

## Risks
- **No unmount safety**: `execute` resolves after unmount → `setAppState` on unmounted component. Should use `useRef` mount guard.
- No unmount guard — `setAppState` called after component unmount produces React warning. Future: integrate `AbortController` or `useRef` mounted flag.
- **No request deduplication**: Concurrent `execute` calls race — last one wins regardless of order.
- **LOADING preserves prev.data**: Intended for stale-while-reloading but no explicit documentation warning consumers about UI flash.

## Gaps
- No AbortController integration for cancellation
- No retry mechanism
- No optimistic update primitive
- No middleware/extensibility point for logging or side effects

---

# Module Map
| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| useDataState | `src/common/hooks/useDataState.ts` | `useDataState` | `react`, `src/common/state/AppState`, `src/common/repo/ServerResponse`, `src/common/repo/HttpStatusCode` |
| hooks barrel | `src/common/hooks/index.ts` | `useDataState` | re-exports from `useDataState` |
| AppState | `src/common/state/AppState.ts` | `AppState<T>`, `StateType` | `src/common/repo/HttpStatusCode` |
| AppState barrel | `src/common/state/index.ts` | `AppState`, `StateType` | re-exports from `AppState` |

---

# Final Rule

`useDataState` is the single source of async state management in Astra. All data fetching operations must flow through this hook — components must never call `fetch`, `axios`, or API services directly. Pass `options.unexpectedErrorMessage` from `useLanguage().literal['common.errors.unexpected']` to satisfy the Localization invariant. No data caching, deduplication, or business logic may be added — these belong in the consumer's ViewModel layer.

## Authorization

**Visibility:** Public — stateless Astra library primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
