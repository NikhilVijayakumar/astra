# Getting Started with Astra

A comprehensive guide to integrating the Astra library into your React application.

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

For local development or testing:

```json
"dependencies": {
  "astra": "file:../path/to/astra"
}
```

Then install dependencies:

```bash
npm install
```

## Basic Setup

### 1. Theme Provider

Wrap your application with `ThemeProvider` to enable MUI theming with light/dark mode support:

```tsx
import { ThemeProvider } from "astra";
import { createTheme, CssBaseline } from "@mui/material";

const lightTheme = createTheme({
  palette: { mode: "light" },
});

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <CssBaseline />
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Language Provider

Add localization support with `LanguageProvider`:

```tsx
import { LanguageProvider } from "astra";

const translations = {
  en: { "app.greeting": "Hello", "app.welcome": "Welcome to our app" },
  es: { "app.greeting": "Hola", "app.welcome": "Bienvenido a nuestra app" },
};

const availableLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

function App() {
  return (
    <LanguageProvider
      translations={translations}
      availableLanguages={availableLanguages}
      defaultLanguage="en"
    >
      <YourApp />
    </LanguageProvider>
  );
}
```

### 3. Combined Providers

For most applications, you'll compose both providers at your app root:

```tsx
import { ThemeProvider, LanguageProvider } from "astra";
import { createTheme } from "@mui/material";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

const translations = {
  en: { "app.greeting": "Hello" },
  es: { "app.greeting": "Hola" },
};

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider
        translations={translations}
        availableLanguages={[{ code: "en", label: "English" }]}
        defaultLanguage="en"
      >
        <YourMainComponent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

## First Component Usage

### Using a UI Component

Astra provides ready-to-use UI components. All user-facing strings must use localization keys — never hardcoded literals. Here's how to use `HeroSection` with the localization system:

```tsx
import { HeroSection, useLanguage } from "astra";

function HomePage() {
  const { literal } = useLanguage();

  return (
    <HeroSection
      headline={literal["home.hero.headline"]}
      description={literal["home.hero.description"]}
      primaryActionLabel={literal["home.hero.cta"]}
      onPrimaryAction={() => {}}
    />
  );
}
```

Translation file:

```json
{
  "home": {
    "hero": {
      "headline": "Welcome to Our App",
      "description": "Get started with Astra",
      "cta": "Get Started"
    }
  }
}
```

### Using the MVVM Pattern

The recommended pattern for data-driven features separates concerns into three layers:

**Repository** — handles data access:
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

**ViewModel** — orchestrates business logic:
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

**View** — renders UI, delegates logic to ViewModel:
```tsx
import { useEffect } from "react";
import { StateType } from "astra";
import { useProducts } from "../hooks/useProducts";

function ProductsPage() {
  const { productsState, loadProducts } = useProducts();

  useEffect(() => { loadProducts(); }, []);

  if (productsState.state === StateType.LOADING) return <Spinner />;
  if (productsState.isError)
    return <ErrorMessage message={productsState.statusMessage} />;

  return <DataDisplay data={productsState.data} />;
}
```

### Using AppStateHandler

For automatic loading/error/empty state handling with a ViewModel:

```tsx
import { AppStateHandler, useLanguage } from "astra";
import { useUsers } from "../hooks/useUsers";

function UserList() {
  const { usersState, loadUsers } = useUsers();
  const { literal } = useLanguage();

  useEffect(() => { loadUsers(); }, []);

  return (
    <AppStateHandler
      appState={usersState}
      SuccessComponent={({ appState }) => (
        <ul>
          {appState.data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      emptyCondition={(data) => data.length === 0}
      errorMessage={literal["users.loadError"]}
    />
  );
}
```

## Export Surface

### Core Exports

| Export             | Description                                        |
| ------------------ | -------------------------------------------------- |
| `ThemeProvider`    | MUI theming provider with light/dark mode          |
| `ThemeToggle`      | Theme mode toggle button component                 |
| `LanguageProvider` | i18n provider for translations                     |
| `useLanguage`      | Hook to access translations and language switching |
| `useTheme`         | Hook to access theme state and toggle              |
| `useDataState`     | MVVM state management hook                         |
| `ApiService`       | Type-safe Axios wrapper for API calls              |
| `AppStateHandler`  | Automatic state UI handler component               |
| `StateType`        | Enum: `INIT`, `LOADING`, `COMPLETED`               |

### UI Components (Atomic Design)

Astra includes 30+ ready-to-use components organized by Atomic Design tiers:

| Tier | Description | Examples |
|------|-------------|----------|
| **Atoms** | Fundamental UI primitives | `StatusDot`, `SeverityBadge`, `ErrorState`, `EmptyState` |
| **Molecules** | Composed functional units | `Card`, `Notification`, `TrendMetricCard` |
| **Organisms** | Complex UI sections | `DataTable`, `FormLayout`, `TimelineNode`, `FileTree` |
| **Templates** | Page-level layouts | `PageHeader`, `SummaryPanel`, `HeroSection` |

For tier rules and classification guidance, see [Atomic Hierarchy Invariant](../invariants/atomic-hierarchy.md) and [Component Tiers](../core/component-tiers.md).

> A full component catalogue with props, screenshots, and interactive examples is maintained separately from the architecture corpus. Consult your project's component documentation for the complete library listing.

### Import Styles

```ts
// Root import (recommended)
import { ThemeProvider, useDataState, HeroSection, spacing, typography } from "astra";

// Subpath imports
import { HeroSection, Card } from "astra/components";
```

## Component Architecture

Astra's component library follows **Atomic Design** methodology, organizing components into four tiers:

| Tier      | Description                                                  | Examples                              |
| --------- | ------------------------------------------------------------ | ------------------------------------- |
| Atoms     | Fundamental UI primitives (smallest building blocks)         | StatusDot, SeverityBadge              |
| Molecules | Composed functional units (combine atoms into working units) | Card, Notification, TrendMetricCard   |
| Organisms | Complex UI sections (composed of molecules and atoms)        | DataTable, FormLayout                 |
| Templates | Page-level layouts (structural composition for pages)        | PageHeader, HeroSection, SummaryPanel |

### Why Atomic Design?

This structure provides:

- **Predictability**: Components have consistent patterns based on their tier
- **Maintainability**: Clear boundaries make updates localized
- **Reusability**: Lower-tier components can be recombined in many ways

For tier rules and import direction constraints, see [Atomic Hierarchy Invariant](../invariants/atomic-hierarchy.md) and the [Component Tiers Runtime Map](../runtime-maps/component-tiers.md).

## Next Steps

- [React Integration Guide](react.md) - Framework-specific setup
- [Electron Integration Guide](electron.md) - Desktop app integration
- [Feature Structure](../core/feature-structure.md) - Canonical feature folder layout
- [MVVM Architecture](../core/mvvm-pattern.md) - Architecture patterns
- [Theming](../core/theming.md) - Custom theming guide
- [Localization](../core/localization.md) - i18n patterns including interpolation
- [Atomic Hierarchy Invariant](../invariants/atomic-hierarchy.md) - Component tier rules
- [Component Tiers Runtime Map](../runtime-maps/component-tiers.md) - Visual tier hierarchy
