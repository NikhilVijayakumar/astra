# Architecture

**Analysis Date:** 2026-04-09

## Pattern Overview

**Overall:** Component Library with MVVM Pattern

This is a React component library (`Astra`) built on Material-UI that provides reusable UI components, state management hooks, API services, theming, and localization support. The consuming applications (documented in `example/` and `electron-example/`) follow a **Model-View-ViewModel (MVVM)** architecture pattern.

**Key Characteristics:**

- **Library Distribution:** Built as an ES module library with UMD fallback, published to npm
- **MVVM Architecture:** ViewModels are React hooks, Views are presentational components
- **Context-Based Features:** Theming and localization use React Context providers
- **Axios-Based API Layer:** Standardized HTTP service with typed responses

## Layers

**Component Layer (`src/components/`):**

- Purpose: Reusable UI primitives exposed to consumers
- Location: `src/components/`
- Contains: 37+ UI components organized into `ui/` and `file-viewers/` subdirectories
- Depends on: `src/common/` for state handling, MUI components
- Used by: Consumer applications via named exports

**Common/Infrastructure Layer (`src/common/`):**

- Purpose: Shared utilities, state management, API services, and context providers
- Location: `src/common/`
- Contains: hooks, localization, repo/API services, state management, theme, navigation
- Depends on: React, MUI, Axios
- Used by: Components, consumer applications

**Theme Layer (`src/theme/`):**

- Purpose: Design system tokens and MUI theme factory
- Location: `src/theme/`
- Contains: Color tokens, typography scale, spacing system, theme creation utilities
- Depends on: MUI theming system
- Used by: ThemeProvider, all styled components

**Entry/Library Export (`src/lib.ts`):**

- Purpose: Single export point for the entire library
- Location: `src/lib.ts`
- Triggers: Vite build process picks this up for library output
- Responsibilities: Barrel export all public APIs

## Data Flow

**API Request Flow:**

1. Consumer creates `ApiService` instance via `new ApiService(baseUrl, literal)` or `getApiService()` factory
2. ViewModel calls `useDataState.execute(() => repoFunction())`
3. `useDataState` sets `state: LOADING` via internal `setAppState`
4. `apiService.get/post/put/delete()` executes Axios request
5. Response wrapped in `ServerResponse<T>` (success or error)
6. `useDataState` updates with `state: COMPLETED` and response data
7. Component re-renders with new state
8. `AppStateHandler` component renders appropriate UI (LoadingState, ErrorState, EmptyState, or content)

**State Flow:**

```
useDataState hook
    ↓
AppState { state: INIT/LOADING/COMPLETED, data, status, isError, isSuccess }
    ↓
AppStateHandler component (renders based on state)
    ↓
LoadingState | ErrorState | EmptyState | SuccessComponent
```

**Localization Flow:**

```
LanguageProvider (wraps app)
    ↓
translations: Record<language, Record<key, string>>
    ↓
LanguageContext (currentLanguage, setCurrentLanguage, literal)
    ↓
useLanguage() hook in any component
    ↓
literal['key'] for string interpolation
```

## Key Abstractions

**ServerResponse<T> (`src/common/repo/ServerResponse.ts`):**

- Purpose: Standardized API response wrapper
- Pattern: Factory methods `success<T>()` and `error<T>()`
- Properties: `isSuccess`, `isError`, `status`, `statusMessage`, `data`

```typescript
// Usage
const response = ServerResponse.success({
  status: 200,
  statusMessage: "OK",
  data: payload,
});
const error = ServerResponse.error({ status: 404, statusMessage: "Not Found" });
```

**useDataState<T> (`src/common/hooks/useDataState.ts`):**

- Purpose: Async state management hook for API calls
- Pattern: Returns tuple `[appState, execute, setAppState]`
- Manages: Loading, success, error, empty states

```typescript
const [dataState, execute] = useDataState<MyData>();
await execute(() => myApiCall());
// dataState.state: INIT → LOADING → COMPLETED
```

**ApiService (`src/common/repo/ApiService.ts`):**

- Purpose: HTTP client wrapper with typed responses
- Pattern: Instance-based with factory caching
- Methods: `get<T>()`, `post<T>()`, `put<T>()`, `delete<T>()`

**AppStateHandler (`src/common/components/wrapper/AppStateHandler.tsx`):**

- Purpose: Polymorphic state renderer
- Pattern: Renders LoadingState, ErrorState, EmptyState, or children based on appState
- Supports: Custom error messages, empty condition functions

**FileViewerRouter (`src/components/file-viewers/FileViewerRouter.tsx`):**

- Purpose: Route file viewing based on extension
- Pattern: Switch on file extension
- Handles: csv, md, txt, images, json, jsonl

## Entry Points

**Development Entry:**

- Location: `src/main.tsx`
- Triggers: `npm run dev` (Vite dev server)
- Responsibilities: React root rendering with StrictMode

**Library Build Entry:**

- Location: `src/lib.ts` (configured in `vite.config.ts`)
- Triggers: `npm run build`
- Output: `dist/astra.es.js`, `dist/astra.umd.js`, `dist/lib.d.ts`

**Consumer Entry (Example):**

- Location: `example/src/main.tsx`
- Triggers: Consumer's `npm run dev`
- Responsibilities: Wraps app with ThemeProvider and LanguageProvider

**Electron Main Process:**

- Location: `electron-example/` (separate project)
- Triggers: `npm run electron:dev`
- Responsibilities: Native desktop shell, IPC communication

## Error Handling

**Strategy:** Result Pattern with typed responses

**Patterns:**

- `ServerResponse<T>` wraps all API responses with success/error state
- `AppState` tracks `isError`, `isSuccess`, `status`, `statusMessage`
- `AppStateHandler` renders `ErrorState` when `isError` is true
- Axios errors caught and converted to `ServerResponse.error()`
- Unknown exceptions caught in `useDataState.execute()` with fallback error state

**Error Types:**

- HTTP errors: Status code from response
- Network errors: `HttpStatusCode.INTERNET_ERROR` (status 0)
- Unknown errors: `HttpStatusCode.INTERNAL_SERVER_ERROR` (status 500)

## Cross-Cutting Concerns

**Theming:**

- MUI-based with custom tokens for colors, typography, spacing
- `ThemeProvider` wraps app, exposes `useTheme()` hook
- Light/dark mode toggle with localStorage persistence
- Storybook integration via `forceTheme` prop

**Localization:**

- `LanguageProvider` wraps app with translation maps
- `useLanguage()` hook provides `literal` object for string lookup
- Translation structure: `translations[locale][key]`

**Testing:**

- Vitest as test runner
- Testing Library for React component tests
- Mocking: vi.mock() for axios, renderHook for hooks

**Documentation:**

- Storybook for component documentation and visual testing
- Stories colocated with components (`.stories.tsx` files)

---

_Architecture analysis: 2026-04-09_
