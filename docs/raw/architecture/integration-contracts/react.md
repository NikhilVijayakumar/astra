# React Integration Guide

This guide covers integrating Astra into React applications using Vite, Next.js, or Create React App.

## Supported Frameworks

- **Vite** (recommended) - Fast development, best performance
- **Next.js** - Full-stack React framework
- **Create React App** - Legacy setup (recommended migration to Vite)

## Vite Setup (Recommended)

### 1. Create Project

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install astra @mui/material @emotion/react @emotion/styled
```

### 2. Configure ASTRA

Update `src/App.tsx` with providers:

```tsx
import { ThemeProvider, LanguageProvider, useLanguage } from "astra";
import { createTheme, CssBaseline } from "@mui/material";

// Theme configuration
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
  },
});

// Translations
const translations = {
  en: { "app.welcome": "Welcome", "app.greeting": "Hello" },
  es: { "app.welcome": "Bienvenido", "app.greeting": "Hola" },
};

const availableLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider
        translations={translations}
        availableLanguages={availableLanguages}
        defaultLanguage="en"
      >
        <CssBaseline />
        <YourApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
```

### 3. Vite Config (Optional)

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
```

## Next.js Setup

### 1. Install Dependencies

```bash
npx create-next-app@latest my-app --typescript
cd my-app
npm install astra @mui/material @emotion/react @emotion/styled
```

### 2. Create Providers Component

Create `src/app/providers.tsx`:

```tsx
"use client";

import { ThemeProvider, LanguageProvider } from "astra";
import { createTheme } from "@mui/material";
import { ReactNode } from "react";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

const translations = {
  en: { "app.welcome": "Welcome" },
  es: { "app.welcome": "Bienvenido" },
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <LanguageProvider
        translations={translations}
        availableLanguages={[
          { code: "en", label: "English" },
          { code: "es", label: "Español" },
        ]}
        defaultLanguage="en"
      >
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

### 3. Wrap Root Layout

Update `src/app/layout.tsx`:

```tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## Create React App Setup

### 1. Create Project

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install astra @mui/material @emotion/react @emotion/styled
```

### 2. Update App.tsx

Follow the same pattern as Vite setup (see Vite section).

## Provider Composition

### Nesting Providers

Providers can be nested and combined in various ways:

```tsx
function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <LanguageProvider>
          <AuthProvider>{children}</AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
```

### Using useLanguage Hook

```tsx
import { useLanguage } from "astra";

function MyComponent() {
  const { literal, currentLanguage, setCurrentLanguage, availableLanguages } =
    useLanguage();

  return (
    <div>
      <h1>{literal['app.welcome']}</h1>
      <select
        value={currentLanguage}
        onChange={(e) => setCurrentLanguage(e.target.value)}
      >
        {availableLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Using useTheme Hook

```tsx
import { useTheme } from "astra";

function ThemeToggleButton() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
```

## Feature Module Structure

Astra follows MVVM (Model-View-ViewModel) architecture. See [Feature Structure](../core/feature-structure.md) for the canonical feature folder layout.

### Directory Layout

```
src/
├── features/
│   └── users/
│       ├── model/          # Domain types and DTOs
│       │   └── users.types.ts
│       ├── repo/           # Data access layer
│       │   └── usersApi.ts
│       ├── hooks/          # ViewModel custom hooks
│       │   └── useUsers.ts
│       └── view/
│           ├── components/ # Presentational leaf components
│           │   └── UserCard.tsx
│           └── pages/      # Stateful page containers
│               └── UsersPage.tsx
├── common/
│   └── repo/               # Shared API client
│       └── ApiClient.ts
├── layout/
│   └── MainLayout.tsx
├── App.tsx
└── main.tsx
```

### Layer Mapping

| Directory | MVVM Role | Responsibility |
|-----------|-----------|----------------|
| `model/` | Model | TypeScript interfaces, DTOs, state types |
| `repo/` | Repository | API calls via `ApiService` or IPC |
| `hooks/` | ViewModel | Custom hooks wrapping `useDataState` |
| `view/components/` | View | Pure presentational components (props only) |
| `view/pages/` | Container | Stateful pages that compose hooks + components |

### Repository Pattern

```ts
// src/features/users/repo/usersApi.ts
import { ApiService, ServerResponse } from "astra";

const api = new ApiService('https://api.example.com', { internal_server_error: 'Server unavailable' });

export const usersApi = {
  list: (): Promise<ServerResponse<User[]>> => api.get("/users"),
  get: (id: number): Promise<ServerResponse<User>> => api.get(`/users/${id}`),
  create: (data: CreateUserDto): Promise<ServerResponse<User>> => api.post("/users", data),
};
```

### ViewModel Hook

```tsx
// src/features/users/hooks/useUsers.ts
import { useDataState } from "astra";
import { usersApi } from "../repo/usersApi";

export const useUsers = () => {
  const [state, execute] = useDataState<User[]>();

  const load = () => {
    execute(() => usersApi.list());
  };

  return {
    state,
    load,
  };
};
```

### View Component

```tsx
// src/features/users/view/pages/UsersPage.tsx
import { useUsers } from "../../hooks/useUsers";
import { AppStateHandler, useLanguage } from "astra";
import { UserCard } from "../components/UserCard";

export const UsersPage = () => {
  const { state, load } = useUsers();
  const { literal } = useLanguage();

  return (
    <AppStateHandler
      appState={state}
      SuccessComponent={({ appState }) => (
        <div>
          {appState.data?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
      emptyCondition={(data) => data.length === 0}
      errorMessage={literal["users.loadError"]}
    />
  );
};
```

## Best Practices

### 1. Use Root Imports

```ts
// ✅ Recommended
import { ThemeProvider, useDataState, HeroSection } from "astra";

// ⚠️ Avoid deep imports
import { something } from "astra/dist/internal";
```

### 2. Create Feature-Focused ViewModels in hooks/

Each feature should have its own ViewModel hook in `hooks/use<Feature>.ts` that encapsulates:

- Data fetching logic
- State management
- User interactions
- Translation helpers

```tsx
// src/features/<name>/hooks/use<Feature>.ts
export const useFeature = () => {
  // 1. State
  const [dataState, execute] = useDataState<Data>();

  // 2. Localization
  const { literal } = useLanguage();

  // 3. Actions
  const loadData = () => execute(() => repo.getData());

  // 4. Computed values
  const isEmpty = dataState.isSuccess && dataState.data?.length === 0;

  return { state: dataState, actions: { loadData }, ui: { literal, isEmpty } };
 };
```

### 3. Use Type-Safe API Service

```ts
const api = new ApiService(BASE_URL, {
  internal_server_error: "Server unavailable",
  not_found: "Resource not found",
});

// Type-safe responses
const response = await api.get<User[]>("/users");
if (response.isSuccess && response.data) {
  // response.data is typed as User[]
}
```

### 4. Handle Loading States Consistently

Use `AppStateHandler` for automatic state handling. Always source `errorMessage` from localization:

```tsx
import { useLanguage } from "astra";

const { literal } = useLanguage();

<AppStateHandler
  appState={userState}
  SuccessComponent={({ appState }) => <Content data={appState.data} />}
  emptyCondition={(data) => data.length === 0}
  errorMessage={literal["users.loadError"]}
/>
```

### 5. Separate UI from Logic

```tsx
// hooks/useUser.ts - ViewModel (business logic + localization)
export const useUser = () => {
  const [state, execute] = useDataState<User>();
  const { literal } = useLanguage();

  const loadUser = (id: number) => execute(() => api.getUser(id));

  return { state, loadUser, literal };
};

// view/pages/UserProfilePage.tsx - Container (composes hook + UI)
export const UserProfilePage = () => {
  const { state, loadUser, literal } = useUser();

  return (
    <AppStateHandler
      appState={state}
      SuccessComponent={({ appState }) => <div>{appState.data?.name}</div>}
      errorMessage={literal["error.userLoadError"]}
    />
  );
};
```

## Component Architecture Rationale

### Why Atomic Design?

Astra uses Atomic Design methodology to organize the component library. This isn't just organizational—it's a design philosophy:

**1. Predictability at Scale**

When you see a component's tier (atom, molecule, organism, template), you immediately understand its complexity and purpose. Atoms are simple primitives; organisms are complex UI sections.

**2. Composability**

Lower-tier components are designed to be composed:

- Atoms (StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState) can be used anywhere
- Molecules (Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer) compose atoms into functional units
- Organisms (DataTable, FileViewerRouter, TimelineNode) combine molecules and atoms into coherent sections

**3. Clear Ownership**

- Atoms: Design system team owns primitives
- Molecules: Feature teams compose functional units
- Organisms: Domain teams build business-specific sections
- Templates: Platform team owns page structures

### Finding the Right Component

When building a feature:

1. **Start with atoms** for simple UI needs (StatusDot for status indicators)
2. **Look for molecules** for common patterns (Card for content containers)
3. **Check organisms** for complex UI (DataTable for data display)
4. **Use templates** for page structure (PageHeader for standard page layout)

Explore the full component library: [Component Documentation](../../feature/components/README.md)

For tier-specific guidance, see:

- [Atoms Guide](../../feature/components/atomic-design/atoms.md)
- [Molecules Guide](../../feature/components/atomic-design/molecules.md)
- [Organisms Guide](../../feature/components/atomic-design/organisms.md)
- [Templates Guide](../../feature/components/atomic-design/templates.md)

## Next Steps

- [Component Documentation](../../feature/components/README.md) - Browse the full component library
- [Getting Started Guide](getting-started.md) - Basic installation
- [Electron Integration Guide](electron.md) - Desktop app integration
- [Feature Structure](../core/feature-structure.md) - Canonical feature folder layout
- [MVVM Architecture](../core/mvvm-pattern.md) - Architecture deep dive
- [Repository Layer](../core/repository.md) - API patterns
