# MVVM Implementation Pattern

## Overview

This document details the concrete implementation of Astra's MVVM pattern through the `useDataState` hook, `AppStateHandler` component, and `AppState` type. It describes how each piece connects to form a complete data-fetching and state-management pipeline.

## ViewModel: useDataState Hook

The `useDataState<T>` hook provides reactive state management:

```typescript
const [appState, execute, setAppState] = useDataState<User[]>();
```

**Returns:**

- `appState` — Current state object with `state`, `isError`, `isSuccess`, `data`
- `execute` — Async function to run API calls
- `setAppState` — Manual state setter

## View: AppStateHandler Component

Wraps the success component and handles UI states:

```tsx
<AppStateHandler
  appState={userListState}
  SuccessComponent={UserList}
  emptyCondition={(data) => data.length === 0}
/>
```

States handled: `LOADING` → `Error` → `Success` → `Empty`

## Model: AppState Type

```typescript
interface AppState<T> {
  state: StateType; // INIT | LOADING | COMPLETED
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data: T | null;
}
```

## Separation of Concerns

- **View** — Renders UI based on state, no business logic
- **ViewModel** — Manages state, calls repositories
- **Model** — Data fetching, type definitions

## Responsibilities

- **useDataState** — Exposes reactive app state, an execute function for async calls, and a manual setter
- **AppStateHandler** — Interprets AppState and renders the appropriate UI (Loading/Error/Success/Empty)
- **AppState type** — Provides a consistent contract between ViewModel and View for state representation

## Non-Responsibilities

- ViewModels do not manage navigation, routing, or URL state
- AppStateHandler does not handle non-async UI state (form inputs, toggles)
- The pattern does not dictate caching strategy; caching is handled by repositories or middleware
- useDataState does not provide built-in deduplication or request cancellation

## Core Concepts

- **Unidirectional flow** — View dispatches → ViewModel processes → Model fetches → State updates → View re-renders
- **State machine** — AppState transitions are deterministic: INIT → LOADING → COMPLETED (with success/error variants)
- **Generic typing** — useDataState&lt;T&gt; is parameterized, allowing type-safe state across any data type

## Edge Cases

- **Component unmount during request** — State updates after unmount cause React warnings; use cleanup flags
- **Re-execution** — Calling `execute()` while already loading should either queue, cancel, or ignore based on use case
- **Null data on success** — The API may return 200 with null body; ViewModel must handle this gracefully

## States

- **INIT** — `state = INIT`, no data, no error; ready for `execute()`
- **LOADING** — `state = LOADING`; async call in flight
- **COMPLETED / Success** — `state = COMPLETED`, `isSuccess = true`, `data` populated
- **COMPLETED / Error** — `state = COMPLETED`, `isError = true`, error payload in `statusMessage`

## Inputs/Outputs

- **Inputs:** Generic type `T` parameter, `execute(asyncFn: () => Promise<T>)`, `setAppState(partial)` manual setter
- **Outputs:** `[appState: AppState<T>, execute: Function, setAppState: Function]` tuple; conditionally rendered UI via `AppStateHandler`

## Error Conditions

- **Unmount during request** — State update after unmount causes React warning; hook uses cleanup flag internally
- **Re-execution while loading** — Calling `execute()` again during LOADING may queue, cancel, or ignore depending on implementation
- **Null data on success** — `isSuccess` alone is insufficient; consumers must check `data !== null`
- **Type mismatch** — `AppState<TypeA>` used where `AppState<TypeB>` expected passes TypeScript if shapes align

## Future Enhancements

- Auto-generated ViewModel hooks from OpenAPI specs to reduce boilerplate
- Command pattern for undo/redo support on state mutations
- ViewModel composition — combine multiple ViewModels into a single hook
- Integration with React Query or TanStack Query for server-state caching

## Open Questions

- Should the ViewModel own loading state per-field or is the current model-level granularity sufficient?
- How should dependent queries (fetch B after A succeeds) be expressed in the MVVM pattern?
- Is a state machine library (XState) worth considering for complex flows?
