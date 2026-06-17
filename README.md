# Astra

A robust **React + Electron** library providing **MVVM architecture**, **state management**, **localization**, a **type-safe API layer**, and **Handlebars template rendering** as a boilerplate foundation for scalable web and desktop applications.

UI components and the design system are provided by [Prati](https://github.com/NikhilVijayakumar/prati) — Astra depends on Prati and re-exports everything from it, so a single `import { X } from "astra"` gives you the full stack.

> **For full documentation and AI context, see [docs/index.md](docs/index.md)** — the LLM-optimized knowledge map with module mapping, dependency stack, and file manifest.

## Features

- **MVVM Architecture**: `useDataState` hook manages data fetching and state transitions (`INIT → LOADING → COMPLETED`).
- **State Management**: Structured `AppState<T>` with `isError`, `isSuccess`, `status`, `statusMessage`, `data` — **stateless**, persistence delegated to consumer.
- **AppStateHandler**: UI state router that renders `LoadingState` / `ErrorState` / `EmptyState` / success view based on current `AppState`.
- **Localization (i18n)**: `LanguageProvider` injects translations; `useLanguage` and `LanguageSelector` are provided by Prati.
- **API Repository**: Type-safe Axios wrapper (`ApiService`) with `ServerResponse<T>`, `HttpStatusCode`, and `getStatusMessage`.
- **Template Renderer**: Handlebars-based `createTemplateRenderer` / `templateRenderer` for server-side or Node rendering.
- **Electron Support**: First-class integration with Electron 28+ via context bridge pattern.
- **UI Components via Prati**: 47 components (Atoms → Templates), theming with MUI 7, and design tokens — all re-exported from Prati.
- **Type Safety**: Fully written in TypeScript.

### What Astra Is Not

- **Not a UI framework** — components come from Prati; Astra is the architecture layer
- **Not a state persistence library** — stateless; persistence (localStorage, SQLite, IndexedDB) is the consumer's responsibility
- **Not a design system** — design tokens, brand guidelines, and component visual rules live in Prati
- **Not a backend** — purely client-side; consumes APIs but does not provide server-side functionality

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

> `astra` is open-source (`"private": false`) but currently GitHub-hosted. Astra automatically pulls Prati as a dependency — you do not need to install Prati separately unless you want to import from it directly.

## Quick Start

### 1. Install

```bash
npm install git+https://github.com/NikhilVijayakumar/astra.git
```

### 2. Wrap Providers

```tsx
import { ThemeProvider, LanguageProvider, lightTheme, darkTheme } from "astra";

const translations = {
  en: { hello: "Hello World" },
};

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider
        translations={translations}
        availableLanguages={[{ code: "en", label: "English" }]}
        defaultLanguage="en"
      >
        <YourApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### 3. Fetch Data with MVVM

```tsx
import { useDataState, AppStateHandler, ApiService } from "astra";
import { DataTable } from "astra"; // re-exported from prati
import { useEffect } from "react";

const api = new ApiService("https://api.example.com", {
  internal_server_error: "Something went wrong.",
});

const UserRepo = {
  getUsers: () => api.get<User[]>("users"),
};

function UserList() {
  const [userState, fetchUsers] = useDataState<User[]>();

  useEffect(() => {
    fetchUsers(UserRepo.getUsers);
  }, []);

  return (
    <AppStateHandler
      appState={userState}
      SuccessComponent={({ appState }) => (
        <DataTable rows={appState.data ?? []} columns={columns} />
      )}
      emptyCondition={(data) => data.length === 0}
      errorMessage="Unable to load users."
    />
  );
}
```

### 4. Electron Usage

```tsx
import { useDataState } from "astra";
import { useEffect } from "react";

function SettingsPage() {
  const [settings, loadSettings] = useDataState();

  useEffect(() => {
    loadSettings(() => window.electronAPI.getSettings());
  }, []);

  if (settings.isError) return <div>Failed to load settings</div>;
  return <pre>{JSON.stringify(settings.data, null, 2)}</pre>;
}
```

See [Electron integration guide](docs/raw/architecture/integration-contracts/electron.md) for full setup.

## Available Exports

**State & MVVM (Astra-native):**

- `useDataState` — MVVM hook, returns `[appState, execute, setAppState]`
- `AppStateHandler` — UI state router component
- `AppState<T>`, `StateType`, `StateCode` — state types and enums
- `AppStateHandlerProps` — component prop types

**API Layer (Astra-native):**

- `ApiService` — type-safe Axios wrapper
- `ServerResponse<T>` — typed response wrapper
- `HttpStatusCode` — HTTP status enum
- `getStatusMessage` — localized status message helper
- `APITypes`, `apiServiceFactory` — supporting types and factory

**Localization (Astra-native):**

- `LanguageProvider` — wraps app, injects translations into context

**Template Rendering (Astra-native):**

- `createTemplateRenderer`, `templateRenderer` — Handlebars renderer
- `TemplateRendererConfig`, `RenderTemplateOptions`, `RenderResult` — types

**UI Components + Design (via Prati — re-exported):**

- All 47 components: `StatusDot`, `Card`, `DataTable`, `PageHeader`, `HeroSection`, etc.
- `ThemeProvider`, `ThemeToggle`, `useTheme`, `lightTheme`, `darkTheme`, `createAstraTheme`
- `useLanguage`, `LanguageSelector`, `LanguageContext`
- Design tokens: `colors`, `spacing`, `typography`, `fonts`

## Architecture

Astra follows **MVVM** with a **stateless** design.

```
┌─────────────────────────────────────────────┐
│  ASTRA                                      │
│  ViewModel  →  useDataState hook            │
│  Model      →  ApiService / Repository      │
│  State      →  AppState<T>, StateType       │
│  Bridge     →  AppStateHandler              │
│  i18n       →  LanguageProvider             │
├─────────────────────────────────────────────┤
│  PRATI (dependency)                         │
│  View       →  React components (47)        │
│  Design     →  tokens, ThemeProvider        │
│  i18n UI    →  useLanguage, LanguageSelector│
└─────────────────────────────────────────────┘
```

### State Flow

```
INIT → LOADING → COMPLETED | ERROR
```

Astra manages transient state only. Persistent state (localStorage, SQLite, IndexedDB) is the consumer's responsibility.

## Project Structure

```
src/
  common/
    hooks/         # useDataState
    repo/          # ApiService, HttpStatusCode, ServerResponse
    state/         # AppState, StateType, StateCode
    components/
      organisms/   # AppStateHandler (bridges Astra state + Prati atoms)
    localization/  # LanguageProvider (context provided by Prati)
  services/        # templateRenderer (Handlebars)
  templates/       # bundled .hbs templates
  types/           # template types
  lib.ts           # entry: re-exports prati + own modules
```

## Documentation

### Architecture
- `docs/raw/architecture/core/` — MVVM, hooks, repository, state, localization
- `docs/raw/architecture/invariants/` — dependency safety, MVVM separation, repository isolation
- `docs/raw/architecture/integration-contracts/` — getting-started, React, Electron guides
- `docs/raw/architecture/runtime-maps/` — data flow, state flow, import resolution

### Features
- `docs/raw/feature-technical/mvvm/` — MVVM pattern and best practices
- `docs/raw/feature-technical/repository/` — ApiService, HttpStatusCode, ServerResponse
- `docs/raw/feature-technical/state/` — useDataState, AppStateHandler
- `docs/raw/feature-technical/localization/` — LanguageProvider, hooks, patterns

### UI Components & Design System
> Documented in [Prati](https://github.com/NikhilVijayakumar/prati): component catalog, design tokens, BAVANS brand guidelines.

## Development

```bash
npm install
npm run build    # vite build → dist/astra.es.js
npm test         # vitest
npm run coverage # istanbul coverage
npm run lint     # eslint
```

> Prati must be built before building Astra locally. Run `npm run build` in `E:/Python/Prati` first, or use `npm install --ignore-scripts` in Astra if Prati is pre-built.
