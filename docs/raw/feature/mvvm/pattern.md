# MVVM Implementation Pattern

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
