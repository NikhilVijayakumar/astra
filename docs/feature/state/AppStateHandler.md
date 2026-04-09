# AppStateHandler Component

A conditional UI router that renders Loading, Error, Empty, or Success states.

## Props

| Prop               | Type                   | Required | Description                     |
| ------------------ | ---------------------- | -------- | ------------------------------- |
| `appState`         | `AppState<T>`          | Yes      | State object from useDataState  |
| `SuccessComponent` | `FC<{ appState: S }>`  | No       | Component to render on success  |
| `emptyCondition`   | `(data: T) => boolean` | No       | Function to detect empty data   |
| `errorMessage`     | `string`               | No       | Custom error message            |
| `children`         | `ReactNode`            | No       | Alternative to SuccessComponent |

## State Flow

```
appState.state === LOADING  → <LoadingState />
isError || status === INTERNET_ERROR → <ErrorState />
isSuccess && data !== null && emptyCondition(data) → <EmptyState />
isSuccess && data !== null → SuccessComponent || children
else → <EmptyState />
```

## Usage

```tsx
const [userState, loadUsers] = useDataState<User[]>();

return (
  <AppStateHandler
    appState={userState}
    SuccessComponent={UserList}
    emptyCondition={(data) => data.length === 0}
    errorMessage="Failed to load users"
  />
);
```

## Source

`src/common/components/wrapper/AppStateHandler.tsx`
