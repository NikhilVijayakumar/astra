# useDataState Hook API

Manages async state with built-in loading, success, and error tracking.

## Signature

```typescript
function useDataState<T>(
  customInitialState?: Partial<AppState<T>>,
): readonly [
  appState: AppState<T>,
  execute: (apiCall: () => Promise<ServerResponse<T>>) => Promise<void>,
  setAppState: React.Dispatch<React.SetStateAction<AppState<T>>>,
];
```

## Parameters

| Param                | Type                   | Description             |
| -------------------- | ---------------------- | ----------------------- |
| `customInitialState` | `Partial<AppState<T>>` | Optional initial values |

## Returns

| Index | Name          | Description                    |
| ----- | ------------- | ------------------------------ |
| 0     | `appState`    | Current state object           |
| 1     | `execute`     | Async function to run API call |
| 2     | `setAppState` | Direct state setter            |

## AppState Shape

```typescript
{
  state: StateType.INIT | LOADING | COMPLETED,
  isError: boolean,
  isSuccess: boolean,
  status: HttpStatusCode,
  statusMessage: string,
  data: T | null
}
```

## Usage

```typescript
interface User {
  id: number;
  name: string;
}

const [usersState, fetchUsers] = useDataState<User[]>();

useEffect(() => {
  fetchUsers(() => userRepository.getAll());
}, []);
```

## Responsibilities

- Provide a generic React hook for managing async state with loading, success, and error tracking
- Expose an `execute` function that wraps API calls and automatically transitions state through INIT → LOADING → COMPLETED
- Offer a direct `setAppState` setter for imperative state overrides when needed

## Non-Responsibilities

- Does not perform caching or deduplication of API calls
- Does not manage component lifecycle or cleanup on unmount (handled by React useEffect internally)
- Does not handle HTTP request construction or response parsing — takes a pre-built `Promise<ServerResponse<T>>`

## Core Concepts

- **Three-state lifecycle**: Every async operation transitions through INIT → LOADING → COMPLETED, with `isError`/`isSuccess` flags for derived UI state
- **Tuple return**: Returns `[appState, execute, setAppState]` as a readonly tuple for destructuring flexibility
- **Partial initialization**: `customInitialState` allows consumers to seed default values (e.g. cached data) without an API call

## Edge Cases

- Component unmount during pending request: the hook must guard against `setState` after unmount to prevent React warnings
- Consecutive `execute` calls: each call resets state to LOADING; rapid calls may cause flash-of-loading UI
- `ServerResponse` with unexpected shape: missing fields are surfaced via TypeScript, but runtime validation is the caller's responsibility

## States

- **INIT**: Initial state before first `execute` call; `isError: false, isSuccess: false, data: null`
- **LOADING**: Transitioned on every `execute` call; `isError: false, isSuccess: false`, previous data preserved
- **COMPLETED (success)**: After resolved promise with `isSuccess: true`; `data` populated from response
- **COMPLETED (error)**: After rejected promise or error response; `isError: true`, `status` set to error code

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `customInitialState?: Partial<AppState<T>>` | `readonly [AppState<T>, execute, setAppState]` |
| `execute(apiCall: () => Promise<ServerResponse<T>>)` | Mutates `appState` through LOADING → COMPLETED; returns `Promise<void>` |
| `setAppState(newState)` | Directly replaces `appState` value |

## Error Conditions

- **Callback throws non-ServerResponse error**: Caught and wrapped with `INTERNAL_SERVER_ERROR` status
- **Component unmounts before resolution**: `useEffect` cleanup prevents `setState` on unmounted component
- **Rapid consecutive `execute` calls**: Each call resets to LOADING — intermediate success states may be lost
- **Missing `data` in success response**: `appState.data` remains `null`; consumer must handle optional data

## Future Enhancements

- Built-in request deduplication to prevent duplicate concurrent API calls
- Request cancellation via AbortController integration for cleanup on unmount
- Optional caching layer with TTL to reduce redundant network requests
- Debounced execute mode for rapid-trigger scenarios (autocomplete, search)

## Open Questions

- Should `execute` return a promise with the unwrapped data for inline usage?
- How should optimistic updates be modeled within the current AppState lifecycle?
- Is there a need for a `retry` mechanism, or should that live at the repository layer?

## Source

`src/common/hooks/useDataState.ts`
