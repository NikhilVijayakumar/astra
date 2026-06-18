# State Management

Astra's async state lifecycle for data operations. Every API call, form submission, or async operation follows the same three-phase pattern through a shared `AppState<T>` contract.

## State Lifecycle

| Phase | `StateType` | Meaning |
|-------|-------------|---------|
| Uninitialized | `INIT = 0` | No operation started |
| Loading | `LOADING = 1` | Request in flight |
| Completed | `COMPLETED = 2` | Finished — check `isError`/`isSuccess` |

## `AppState<T>` — the shared contract

```typescript
interface AppState<T> {
  state: StateType;                      // lifecycle phase
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode | StateCode;    // HTTP code or internal code
  statusMessage: string;
  data: T | null;
}
```

Initial value (from `useDataState`):
```typescript
{ state: StateType.INIT, isError: false, isSuccess: false,
  status: StateCode.IDLE, statusMessage: '', data: null }
```

## Status Codes

`StateCode.IDLE = 1000` — initial status before any HTTP activity. Use this, not `HttpStatusCode.IDLE` (deprecated).

`HttpStatusCode.INTERNET_ERROR = 0` — no network / connection refused. `AppStateHandler` uses this to detect offline conditions.

## State Transitions

| From | To | Trigger |
|------|----|---------|
| INIT | LOADING | `execute()` called |
| LOADING | COMPLETED | API call resolves or throws |
| COMPLETED | LOADING | `execute()` called again (retry/refresh) |

## When to Use

- **Yes**: API calls, form submissions, any async operation
- **No**: UI-only local state, global app configuration

## Building Blocks

- [repository.md](./repository.md) — HTTP client, response normalization (`ApiService`, `ServerResponse`, `HttpStatusCode`)
- [use-data-state.md](./use-data-state.md) — React hook that manages `AppState` transitions
- [app-state-handler.md](./app-state-handler.md) — component that routes UI based on `AppState`
- [mvvm-wiring.md](./mvvm-wiring.md) — full pattern: Repository → ViewModel → View

## Edge Cases

- **Concurrent operations**: Multiple `execute()` calls in flight produce interleaved state — key state by operation if ordering matters
- **Unmount during request**: `useDataState` guards via `mountedRef` — updates dropped after unmount
- **Rapid re-trigger**: Loading→completed cycles before user sees result — debounce or abort if needed

## See Also

- [Glossary](../concepts/glossary.md)
- [Authorization Model](../concepts/authorization.md)
- [MVVM Pattern](../architecture/core/mvvm-pattern.md)
