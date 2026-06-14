# Architecture: MVVM Pattern

Astra implements **MVVM (Model-View-ViewModel)** pattern for all UI implementations. It provides the hooks, types, and components needed to build feature modules with clean separation of concerns.

## State Flow

```
INIT → LOADING → COMPLETED (or ERROR)
```

| State | Description | Code |
|-------|-------------|------|
| `INIT` | Initial state, no data loaded | `StateType.INIT = 0` |
| `LOADING` | Async operation in progress | `StateType.LOADING = 1` |
| `COMPLETED` | Operation succeeded with data | `StateType.COMPLETED = 2` |
| `ERROR` | Operation failed | `isError: true` |

## useDataState Pattern

Astra's `useDataState` hook centralizes async data handling:

```typescript
import { useDataState, StateType, AppState } from 'astra';

const [appState, execute] = useDataState<Model[]>();

useEffect(() => {
  execute(() => Repo.getAll());
}, []);

if (appState.state === StateType.LOADING) return <Loading />;
if (appState.isError) return <Error message={appState.statusMessage} />;
return <List data={appState.data} />;
```

## AppState Interface

```typescript
interface AppState<T> {
  state: StateType;
  isError: boolean;
  isSuccess: boolean;
  status: HttpStatusCode;
  statusMessage: string;
  data: T | null;
}
```

## MVVM Structure

Recommended project layout for consumers:

```
src/
└── features/
    └── [feature-name]/
        ├── components/
        │   ├── Container.tsx   # MVVM Container (data fetching + state orchestration)
        │   ├── ViewModel.ts    # ViewModel (state logic)
        │   └── View.tsx        # View (presentation)
        ├── domain/             # Business logic
        └── repo/               # Repository/API calls
```

## Container → ViewModel → View Pattern

### Container
```typescript
import { ViewModel } from './ViewModel';
import { View } from './View';

export function ListContainer() {
  const [appState, execute] = useDataState<Model[]>();

  useEffect(() => {
    execute(() => Repo.getAll());
  }, []);

  return <ViewModel appState={appState} />;
}
```

### ViewModel
```typescript
import { AppState } from 'astra';

interface Props {
  appState: AppState<Model[]>;
}

export function ViewModel({ appState }: Props) {
  return <View {...appState} />;
}
```

### View
```typescript
import { StateType } from 'astra';

interface Props extends AppState<Model[]> {}

export function View({ state, data, isError, statusMessage }: Props) {
  if (state === StateType.LOADING) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={statusMessage} />;

  return (
    <ul>
      {data?.map(item => <ItemCard key={item.id} item={item} />)}
    </ul>
  );
}
```

## Integration with Electron

Astra's MVVM pattern works with any data source. For Electron apps, repositories typically use IPC calls instead of HTTP:

```typescript
// Container uses Electron IPC:
const [appState, execute] = useDataState<Model[]>();

execute(async () => {
  const response = await window.electronAPI.invoke('resource:list');
  return response;
});
```

## Rules

- **Always use useDataState** for async operations
- **Never use useState directly** for data (use useDataState)
- **Follow Container → ViewModel → View** structure
- **Never hardcode strings** — use localization
- **Never hardcode colors** — use theme tokens

## Related

- [State Management](state-management.md)
- [Theming](theming.md)
- [Repository](repository.md)
- [Localization](localization.md)
