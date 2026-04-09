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

## Source

`src/common/hooks/useDataState.ts`
