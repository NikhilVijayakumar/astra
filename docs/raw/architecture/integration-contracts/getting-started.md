# Getting Started with Astra

A guide to integrating the Astra library into your application. Astra provides state management, async data flow, and the repository pattern. UI components, theming, and localization are provided by **Prati** — see the Prati documentation for those concerns.

## What Astra Provides

| Export | Description |
|--------|-------------|
| `useDataState` | MVVM state management hook for async operations |
| `AppState<T>` | State interface (INIT → LOADING → COMPLETED) |
| `AppStateHandler` | Conditional rendering for loading/error/empty/success states |
| `StateType` | Enum: `INIT`, `LOADING`, `COMPLETED` |
| `ApiService` | Type-safe Axios wrapper for HTTP API calls |
| `ServerResponse<T>` | Typed response wrapper returned by all repositories |
| `HttpStatusCode` | HTTP status code enum |

## What Prati Provides

`ThemeProvider`, `ThemeToggle`, `useTheme`, `LanguageProvider`, `useLanguage`, and all UI components (atoms, molecules, organisms, templates) are in the **Prati** package. Install and configure Prati separately. See the Prati integration guide for provider setup.

---

## Installation

### Via npm (GitHub Package)

Add Astra directly from GitHub to your `package.json`:

```json
"dependencies": {
  "astra": "git+https://github.com/NikhilVijayakumar/astra.git"
}
```

For production stability, target a specific version tag:

```json
"dependencies": {
  "astra": "git+https://github.com/NikhilVijayakumar/astra.git#v0.0.4"
}
```

### Via Local File

For local development:

```json
"dependencies": {
  "astra": "file:../path/to/astra"
}
```

Then install:

```bash
npm install
```

---

## Using the MVVM Pattern

Astra's core pattern separates data access, state orchestration, and presentation into three layers.

### Repository — data access

```tsx
// src/features/products/repo/productsApi.ts
import { ApiService, ServerResponse } from "astra";

const api = new ApiService("https://api.example.com", {
  internal_server_error: "Server unavailable",
});

export const productsApi = {
  list: (): Promise<ServerResponse<Product[]>> => api.get("/products"),
};
```

### ViewModel — state orchestration

```tsx
// src/features/products/hooks/useProducts.ts
import { useDataState } from "astra";
import { productsApi } from "../repo/productsApi";

export const useProducts = () => {
  const [productsState, execute] = useDataState<Product[]>();

  const loadProducts = () => execute(() => productsApi.list());

  return { productsState, loadProducts };
};
```

### Page — composes ViewModel with UI

```tsx
// src/features/products/view/pages/ProductsPage.tsx
import { useEffect } from "react";
import { AppStateHandler } from "astra";
import { useProducts } from "../../hooks/useProducts";

function ProductsPage() {
  const { productsState, loadProducts } = useProducts();

  useEffect(() => { loadProducts(); }, []);

  return (
    <AppStateHandler
      appState={productsState}
      SuccessComponent={({ appState }) => (
        <ul>
          {appState.data?.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )}
      emptyCondition={(data) => data.length === 0}
      errorMessage="Failed to load products"
    />
  );
}
```

---

## Manual State Handling

Use `StateType` directly when `AppStateHandler` is not sufficient:

```tsx
import { StateType } from "astra";
import { useProducts } from "../hooks/useProducts";

function ProductsPage() {
  const { productsState, loadProducts } = useProducts();

  useEffect(() => { loadProducts(); }, []);

  if (productsState.state === StateType.LOADING) return <Spinner />;
  if (productsState.isError) return <ErrorMessage message={productsState.statusMessage} />;

  return <DataDisplay data={productsState.data} />;
}
```

---

## Feature Module Structure

Astra defines a canonical folder structure for consumer feature modules. See [Feature Structure](../core/feature-structure.md) for the full reference.

```
src/
├── features/
│   └── [feature-name]/
│       ├── model/           # TypeScript types and DTOs
│       │   └── <feature>.types.ts
│       ├── repo/            # Data access via ApiService or IPC
│       │   └── <feature>Api.ts
│       ├── hooks/           # ViewModel custom hooks (useDataState)
│       │   └── use<Feature>.ts
│       └── view/
│           ├── components/  # Presentational leaf components (props only)
│           │   └── <Name>Component.tsx
│           └── pages/       # Stateful page-level containers
│               └── <Feature>Page.tsx
├── common/
│   └── repo/
│       └── ApiClient.ts
├── App.tsx
└── main.tsx
```

---

## Astra + Design System Together

Astra has no dependency on any design system. The typical composition when using Prati (or any design system) alongside Astra:

1. **Astra's `AppStateProvider`** wires in the design system's loading/error/empty components at app root.
2. **Design system** (e.g. Prati) provides `ThemeProvider`, `LanguageProvider`, and UI components.
3. **Astra** provides `useDataState`, `ApiService`, and `AppStateHandler` inside feature modules.

```tsx
// App.tsx — wire design system into Astra's rendering slots once at root
import { AppStateProvider } from "astra";
import { ThemeProvider, LanguageProvider, LoadingState, ErrorState, EmptyState } from "prati";

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider translations={translations} defaultLanguage="en">
        <AppStateProvider value={{
          Loading: LoadingState,
          Error: ({ message }) => <ErrorState message={message} />,
          Empty: EmptyState,
        }}>
          <Router />
        </AppStateProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

All `AppStateHandler` instances in the tree automatically use these components — no per-instance wiring needed.

---

## Import Style

```ts
// Astra — state, data access, and rendering context
import { useDataState, AppStateHandler, AppStateProvider, ApiService, ServerResponse, StateType } from "astra";

// Design system (e.g. Prati) — UI, theming, localization
import { ThemeProvider, LanguageProvider, useLanguage, Button } from "prati";
```

Design system symbols are never imported from `astra`. Astra symbols are never imported from the design system package.

---

## Next Steps

- [Feature Structure](../core/feature-structure.md) — Canonical feature folder layout
- [MVVM Pattern](../core/mvvm-pattern.md) — Architecture deep dive
- [Repository Pattern](../core/repository.md) — API and data access patterns
- [State Management](../core/state-management.md) — `AppState`, `StateType`, `AppStateHandler`
- [React Integration Guide](react.md) — Framework-specific setup
- [Electron Integration Guide](electron.md) — Desktop app integration
- Prati Documentation — UI components, theming, localization
