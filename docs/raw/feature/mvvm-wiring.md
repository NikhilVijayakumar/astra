# MVVM Wiring

How Repository, ViewModel hook, and View connect using Astra's building blocks. All async data flow follows this pattern.

```
Repository          →  ViewModel (hook)    →  View
ApiService calls       useDataState wraps     AppStateHandler renders
ServerResponse<T>      AppState<T>            loading/error/empty/success
```

## Full Example

### Repository

```typescript
// features/user/repo/UserRepository.ts
import { getApiService, ServerResponse } from 'astra';
import { useLanguage } from 'astra';

export class UserRepository {
  private api = getApiService(import.meta.env.VITE_API_URL, literal);

  getUser(id: string): Promise<ServerResponse<User>> {
    return this.api.get<User>(`users/${id}`);
  }
}

const userRepo = new UserRepository();
```

### ViewModel

```typescript
// features/user/viewmodel/useUserViewModel.ts
import { useDataState, useLanguage } from 'astra';

export function useUserViewModel(id: string) {
  const { literal } = useLanguage();
  const [userState, fetchUser] = useDataState<User>(
    {},
    { unexpectedErrorMessage: literal['common.errors.unexpected'] }
  );

  useEffect(() => {
    fetchUser(() => userRepo.getUser(id));
  }, [id]);

  return { userState };
}
```

### View

```typescript
// features/user/UserView.tsx
import { AppStateHandler } from 'astra';
import { useUserViewModel } from './viewmodel/useUserViewModel';

export function UserView({ id }: { id: string }) {
  const { userState } = useUserViewModel(id);

  return (
    <AppStateHandler
      appState={userState}
      emptyCondition={(u) => !u}
      errorMessage="Failed to load user."
    >
      <UserDetail user={userState.data!} />
    </AppStateHandler>
  );
}
```

## Rules

- Feature repositories must use `ApiService` — never import `axios` directly
- Feature views must use `AppStateHandler` — no manual branching on `isError`/`isSuccess` in JSX
- ViewModels are hooks — no class-based ViewModels
- One `useDataState` per async operation — compose multiple calls with multiple hook instances

## See Also

- [repository.md](./repository.md) — `ApiService`, `ServerResponse`
- [use-data-state.md](./use-data-state.md) — hook internals
- [app-state-handler.md](./app-state-handler.md) — component API
- [state-management.md](./state-management.md) — `AppState<T>` contract
