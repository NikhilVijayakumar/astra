# Astra

Core architecture and pattern library for React and Electron applications. Provides **MVVM**, **async state management**, and a **type-safe API layer**.

Eliminates the boilerplate of managing async loading, error, and empty states so features can focus on business logic.

> **For full documentation and AI context, see [docs/index.md](docs/index.md)** — the LLM-optimized knowledge map with module mapping, dependency stack, and file manifest.

## Features

- **MVVM Architecture**: `useDataState` hook manages async data with clean Repository → ViewModel → View separation; ViewModels are hooks, Views use `AppStateHandler`, repositories use `ApiService`
- **State Management**: `AppState` with `INIT → LOADING → COMPLETED` lifecycle; `isError`, `isSuccess`, `status`, `statusMessage`, `data` — stateless, persistence delegated to consumer; concurrent `execute()` calls race (last one wins)
- **AppStateHandler**: UI state router — fixed rendering priority: LOADING → error (`isError` or `status === 0`) → success/empty → INIT fallback; no manual branching required
- **API Repository**: `getApiService` singleton wrapping Axios; all errors normalized to `ServerResponse` — axios HTTP errors (actual status), network failures (`status = 0`), unexpected exceptions (`status = 500`); never throws
- **Electron Support**: First-class IPC integration — `useDataState` works with any async data source, including `window.electronAPI`

### What Astra Is Not

- **Not a UI framework** — bring your own components; Astra provides only `AppStateHandler` as a conditional-render utility
- **Not a localization library** — string management is the consumer's responsibility
- **Not a state persistence library** — stateless; persistence (localStorage, SQLite, IndexedDB) is the consumer's responsibility
- **Not a design system** — theming and brand guidelines are external concerns
- **Not a backend** — purely client-side; consumes APIs but does not implement server-side functionality

## Installation

```json
"dependencies": {
  "astra": "git+https://github.com/NikhilVijayakumar/astra.git"
}
```

Specific version (recommended for production):

```json
"dependencies": {
  "astra": "git+https://github.com/NikhilVijayakumar/astra.git#v1.1.1"
}
```

Local development:

```json
"dependencies": {
  "astra": "file:../astra"
}
```

> `astra` is open-source (`"private": false`) but currently GitHub-hosted.

## Quick Start

### 1. Install

```bash
npm install git+https://github.com/NikhilVijayakumar/astra.git
```

### 2. Wire UI Components (once at app root)

Astra provides no built-in loading/error/empty UI — bring your own. Configure once via `AppStateProvider`; all `AppStateHandler` instances in the tree use it automatically.

```tsx
import { AppStateProvider } from "astra";
// Use any design system — prati, shadcn, MUI, your own
import { LoadingState, ErrorState, EmptyState } from "prati";

function App() {
  return (
    <AppStateProvider value={{
      Loading: LoadingState,
      Error: ({ message }) => <ErrorState message={message} />,
      Empty: EmptyState,
    }}>
      <Router />
    </AppStateProvider>
  );
}
```

Or pass components per-instance via slot props (overrides context):

```tsx
<AppStateHandler
  appState={state}
  loadingComponent={<Spinner />}
  errorComponent={<ErrorBanner message="Failed to load." />}
  emptyComponent={<EmptyList />}
>
  {/* success content */}
</AppStateHandler>
```

### 3. Fetch Data with MVVM

```tsx
import { getApiService, useDataState, AppStateHandler, ServerResponse } from "astra";
import { useEffect } from "react";

// Repository — one ApiService instance per base URL
const api = getApiService("https://api.example.com", {
  internal_server_error: "Something went wrong.",
});

const UserRepo = {
  getUsers: (): Promise<ServerResponse<User[]>> => api.get("users"),
};

// ViewModel hook
function useUserViewModel() {
  const [userState, fetchUsers] = useDataState<User[]>();

  useEffect(() => {
    fetchUsers(() => UserRepo.getUsers());
  }, []);

  return {
    userState,
    retry: () => fetchUsers(() => UserRepo.getUsers()),
  };
}

// View
function UserList() {
  const { userState, retry } = useUserViewModel();

  return (
    <AppStateHandler
      appState={userState}
      emptyCondition={(data) => data.length === 0}
      errorMessage="Unable to load users."
    >
      {/* success: userState.data is populated */}
      <ul>
        {userState.data?.map((u) => <li key={u.id}>{u.name}</li>)}
      </ul>
    </AppStateHandler>
  );
}
```

### 3. Electron Usage

```tsx
import { useDataState, AppStateHandler, ServerResponse } from "astra";
import { useEffect } from "react";

// IPC repository (consumer-managed)
const settingsRepo = {
  get: (): Promise<ServerResponse<Settings>> =>
    window.electronAPI.getSettings(),
};

function useSettingsViewModel() {
  const [settingsState, loadSettings] = useDataState<Settings>();

  useEffect(() => {
    loadSettings(() => settingsRepo.get());
  }, []);

  return { settingsState };
}

function SettingsPage() {
  const { settingsState } = useSettingsViewModel();

  return (
    <AppStateHandler appState={settingsState} errorMessage="Failed to load settings.">
      <pre>{JSON.stringify(settingsState.data, null, 2)}</pre>
    </AppStateHandler>
  );
}
```

See [Electron integration guide](docs/raw/architecture/integration-contracts/electron.md) for full setup.

## Available Exports

**State & MVVM (Astra-native):**

- `useDataState` — MVVM hook, returns `[appState, execute, setAppState]`; `execute(apiCall)` drives the INIT → LOADING → COMPLETED lifecycle; `setAppState` for optimistic updates and manual resets
- `AppStateHandler` — UI state router; props: `appState` (required), `SuccessComponent`, `children`, `emptyCondition`, `errorMessage`, `loadingComponent`, `errorComponent`, `emptyComponent`; slot props override context; `children` takes precedence over `SuccessComponent`
- `AppStateProvider` — React context provider; configure `Loading`, `Error`, `Empty` render components once at app root; any design system works
- `AppStateContext` — React context object; access provider value directly when building custom wrappers around `AppStateHandler`
- `AppStateComponents` — type for `AppStateProvider` value: `{ Loading?, Error?, Empty? }`
- `AppState`, `StateType`, `StateCode` — state contract, lifecycle enum, internal status codes (`StateCode.IDLE = 1000` is the initial status before any HTTP activity)
- `AppStateHandlerProps` — component prop types

**API Layer (Astra-native):**

- `getApiService(baseUrl, literal)` — singleton factory (recommended); `literal` is a `{ statusKey: message }` map used by `getStatusMessage` for error string resolution; returns cached `ApiService` keyed by `baseUrl`
- `ApiService` — Axios-based HTTP client (`get`, `post`, `put`, `delete`); never throws — all errors returned as `ServerResponse`
- `ServerResponse` — typed response wrapper; construct via `ServerResponse.success({ status, statusMessage, data })` or `ServerResponse.error({ status, statusMessage })`
- `HttpStatusCode` — HTTP status enum (200, 201, 400, 401, 404, 500, 0 = INTERNET_ERROR)
- `getStatusMessage(code, literal)` — maps `HttpStatusCode` to a string from `literal`; returns empty string if no match

## Architecture

Astra follows **MVVM** with a **stateless** design.

```
┌─────────────────────────────────────────────┐
│  ASTRA                                      │
│  ViewModel  →  useDataState hook            │
│  Model      →  ApiService / Repository      │
│  State      →  AppState, StateType          │
│  Bridge     →  AppStateHandler              │
└─────────────────────────────────────────────┘
```

### State Flow

```
INIT → LOADING → COMPLETED (check isError / isSuccess)
```

There is no separate error state — errors are represented by `state === COMPLETED && isError === true`. Always read `appState.isError` after `COMPLETED` to distinguish success from failure.

Astra manages transient state only. Persistent state (localStorage, SQLite, IndexedDB) is the consumer's responsibility.

### AppState Contract

| Field | Description |
|-------|-------------|
| `state` | `INIT` / `LOADING` / `COMPLETED` |
| `isError` | True when last operation failed |
| `isSuccess` | True when last operation succeeded |
| `status` | `HttpStatusCode` or `StateCode` (initial value: `StateCode.IDLE = 1000`) |
| `statusMessage` | Human-readable status string |
| `data` | Result payload; null until a successful response populates it |

LOADING preserves the previous `data` value — supports stale-while-reloading. `setAppState` updates are dropped after component unmount (mountedRef guard inside `execute`).

### AppStateHandler Rendering Priority

Fixed order — first matching condition renders:

```
1. state === LOADING              → LoadingState
2. isError || status === 0        → ErrorState   (status 0 = INTERNET_ERROR / offline)
3. isSuccess && data !== null
   ├── emptyCondition(data) = true → EmptyState
   ├── children provided           → children
   └── SuccessComponent provided   → SuccessComponent(appState)
4. fallback (INIT / no data)       → EmptyState
```

`emptyCondition` is only evaluated when `isSuccess && data !== null`. Retry is the ViewModel's responsibility — re-expose `execute()` as a `retry` function and wire it to a button; `AppStateHandler` does not manage retry.

### MVVM Rules

- **Repositories use `ApiService`** — never import axios directly
- **Views use `AppStateHandler`** — no manual `isError` / `isSuccess` branching in JSX
- **ViewModels are hooks** — no class-based ViewModels; implement in `hooks/use<Feature>.ts`
- **One `useDataState` per async operation** — compose multiple operations with multiple hook instances

### Error Normalization

`ApiService` catches all errors and normalizes them into `ServerResponse` — it never throws:

| Cause | `status` |
|-------|----------|
| Axios HTTP error (4xx / 5xx) | Actual HTTP status code |
| Network failure / no response | `0` (`HttpStatusCode.INTERNET_ERROR`) |
| Non-axios / unexpected exception | `500` (`HttpStatusCode.INTERNAL_SERVER_ERROR`) |

## Project Structure

```
src/
  common/
    hooks/         # useDataState
    repo/          # ApiService, HttpStatusCode, ServerResponse, getApiService, APITypes
    state/         # AppState, StateType, StateCode
    components/
      organisms/   # AppStateHandler
  lib.ts           # entry point — public exports only
```

## Documentation

### Architecture
- `docs/raw/architecture/core/` — MVVM, hooks, repository, state, API surface
- `docs/raw/architecture/invariants/` — dependency safety, MVVM separation, repository isolation
- `docs/raw/architecture/integration-contracts/` — getting-started, React, Electron guides
- `docs/raw/architecture/runtime-maps/` — data flow, state flow, import resolution

### Features
- `docs/raw/feature-technical/mvvm/` — MVVM pattern and best practices
- `docs/raw/feature-technical/repository/` — ApiService, HttpStatusCode, ServerResponse
- `docs/raw/feature-technical/state/` — useDataState, AppStateHandler

## Development

```bash
npm install
npm run build    # vite build → dist/astra.es.js
npm test         # vitest
npm run coverage # istanbul coverage
npm run lint     # eslint
```
