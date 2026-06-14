# State Management in Astra

Astra uses a **centralized state pattern** with MVVM to handle async data flows.

## Architecture

```
┌─────────────────┐
│   useDataState  │  ← ViewModel (hook)
│  (State + API)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AppState<T>    │  ← Model (type)
│   (interface)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ AppStateHandler │  ← View (component)
│   (UI Router)   │
└─────────────────┘
```

## Interfaces

### Core Types

| Type             | File                                | Description                    |
| ---------------- | ----------------------------------- | ------------------------------ |
| `AppState<T>`    | `src/common/state/AppState.ts`      | Generic state container        |
| `StateType`      | `src/common/state/AppState.ts`      | Enum: INIT, LOADING, COMPLETED |
| `HttpStatusCode` | `src/common/repo/HttpStatusCode.ts` | HTTP status constants          |

## When to Use

- **Yes**: API calls, form submissions, async operations
- **No**: UI-only state (use `useState`), global app config (use context)

## Responsibilities

- Define the centralized state architecture and MVVM pattern for all async data flows
- Document the core types (`AppState<T>`, `StateType`) and their usage
- Provide guidance on when to use centralized state vs. local alternatives

## Non-Responsibilities

- Does not define UI components — use `AppStateHandler` for rendering state
- Does not implement data fetching logic — use `useDataState` for async operations
- Does not cover global app configuration state (use React Context instead)

## Core Concepts

- **AppState\<T\>**: Generic state interface that wraps async data with loading, error, and status metadata
- **StateType enum**: Three-phase lifecycle (INIT → LOADING → COMPLETED) for every async operation
- **MVVM Pattern**: Components (View) consume state via hooks (ViewModel), keeping data-fetching logic out of UI

## Edge Cases

- Rapid state transitions: multiple LOADING → COMPLETED cycles from repeated `execute` calls
- State cleanup: component unmount before async completion must not trigger updates (handled by hook internals)
- Mixed state types: combining INIT state with stale cached data may require custom initial values

## States

- **Uninitialized (INIT)**: No async operation has been triggered yet; `state === StateType.INIT`
- **Loading**: An async operation is in progress; `state === StateType.LOADING`
- **Completed (Success)**: Async operation finished with data; `state === StateType.COMPLETED && isSuccess === true`
- **Completed (Error)**: Async operation finished with an error; `state === StateType.COMPLETED && isError === true`

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `AppState<T>` + async callback | Triples of `[appState, execute, setAppState]` via hooks |
| State type (`INIT \| LOADING \| COMPLETED`) | Derived UI routing via `AppStateHandler` |
| `customInitialState` partial override | Seeded initial state before first `execute` |

## Error Conditions

- **Unhandled promise rejection**: If `execute`'s callback throws a non-`ServerResponse` error, `isError` is set with `INTERNAL_SERVER_ERROR`
- **Stale state after unmount**: Component unmount during pending request — hook guards against `setState` on unmounted component
- **Mixed error flags**: `isError` and `isSuccess` are not mutually exclusive in custom states — consumers must use `state` for authoritative status

## Future Enhancements

- Global state devtools for debugging state transitions across all hooks
- Middleware support for logging, analytics, or side-effect injection on state changes
- Batched state updates for multiple concurrent async operations
- Persisted state hydration for offline-first scenarios

## Open Questions

- Should AppState encoding include timestamps for staleness checks?
- How should WebSocket or SSE-driven state updates integrate with the AppState lifecycle?
- Is a Zustand/Jotai-style atomic store a better fit than the current hook-per-component approach?

See [useDataState](./useDataState.md) and [AppStateHandler](./AppStateHandler.md) for details.
