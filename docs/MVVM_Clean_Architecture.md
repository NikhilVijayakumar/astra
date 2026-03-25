# MVVM Clean Architecture Guide

This guide defines Astra's feature architecture standard for client applications.

## Architecture Contract

Each feature should have three layers:

1. View: presentational and container React components.
2. ViewModel: orchestration logic with hooks and action functions.
3. Repository: data access abstraction using ApiService (or another backend client).

## Recommended Feature Structure

```text
src/
  features/
    users/
      view/
        UsersContainer.tsx
        UsersList.tsx
      viewmodel/
        useUsersViewModel.ts
      repo/
        UsersRepo.ts
  layout/
    MainLayout.tsx
```

This keeps each feature vertically sliced and testable.

## Layer Responsibilities

### View

- Renders UI only.
- Reads ViewModel output.
- Triggers ViewModel actions.
- Does not call ApiService directly.

### ViewModel

- Owns useDataState hooks and async flows.
- Maps repository responses into screen behaviors.
- Exposes stable API for View:
  - state objects
  - computed flags
  - event handlers

### Repository

- Encapsulates endpoint details and request payloads.
- Returns ServerResponse<T>.
- Contains no React code.

## Source-Aligned Example

### 1. Repository

```ts
import { ApiService, ServerResponse } from 'astra';

export interface User {
  id: string;
  name: string;
}

export class UsersRepo {
  constructor(private api: ApiService) {}

  getUsers(): Promise<ServerResponse<User[]>> {
    return this.api.get<User[]>('users');
  }
}
```

### 2. ViewModel

```ts
import { useEffect, useMemo } from 'react';
import { useDataState, getApiService, HttpStatusCode, StateType } from 'astra';
import { UsersRepo } from '../repo/UsersRepo';

const API_BASE = 'https://example.com/api';

export function useUsersViewModel(literal: Record<string, string>) {
  const api = useMemo(() => getApiService(API_BASE, literal), [literal]);
  const repo = useMemo(() => new UsersRepo(api), [api]);

  const [usersState, executeUsers] = useDataState<{ id: string; name: string }[]>();

  const loadUsers = () => executeUsers(() => repo.getUsers());

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    usersState,
    loadUsers,
    isLoading: usersState.state === StateType.LOADING,
    isInternetError: usersState.status === HttpStatusCode.INTERNET_ERROR,
  };
}
```

### 3. Container + Presentational View

```tsx
import { AppStateHandler } from 'astra';
import { useLanguage } from 'astra';
import { useUsersViewModel } from '../viewmodel/useUsersViewModel';
import { UsersList } from './UsersList';

export function UsersContainer() {
  const { literal } = useLanguage();
  const { usersState, loadUsers } = useUsersViewModel(literal);

  return (
    <AppStateHandler
      appState={usersState}
      emptyCondition={(data) => data.length === 0}
      errorMessage={literal.unknown_message}
    >
      <UsersList users={usersState.data ?? []} onReload={loadUsers} />
    </AppStateHandler>
  );
}
```

## App Root Composition Standard

Use LanguageProvider and ThemeProvider at root so all features can consume language and theme context.

```tsx
import { LanguageProvider, ThemeProvider } from 'astra';
import { createAstraTheme } from 'astra/theme';

const { lightTheme, darkTheme } = createAstraTheme();

export function AppRoot() {
  return (
    <LanguageProvider
      translations={translations}
      availableLanguages={availableLanguages}
      defaultLanguage="en"
    >
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <MainLayout />
      </ThemeProvider>
    </LanguageProvider>
  );
}
```

## MVVM Standards Checklist

1. Every feature has view, viewmodel, and repo folders.
2. Repositories return ServerResponse<T>.
3. ViewModels own useDataState and async orchestration.
4. Views do not import ApiService.
5. AppStateHandler is used for consistent loading/error/empty/success rendering.
6. Language literal is consumed from useLanguage in ViewModel or container boundary.

## Anti-Patterns to Avoid

- API calls directly in view components.
- ViewModel returning raw AxiosResponse.
- Stringly-typed status handling without HttpStatusCode.
- Duplicate loading/error UI logic in every screen.

## Related Docs

- hooks.md
- state.md
- Repository_Layer.md
- Localization.md
- components/wrapper.md

