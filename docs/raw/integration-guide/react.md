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
  en: { welcome: "Welcome", greeting: "Hello" },
  es: { welcome: "Bienvenido", greeting: "Hola" },
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
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <CssBaseline />
        <YourApp />
      </ThemeProvider>
    </LanguageProvider>
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
  en: { welcome: "Welcome" },
  es: { welcome: "Bienvenido" },
};

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider
      translations={translations}
      availableLanguages={[
        { code: "en", label: "English" },
        { code: "es", label: "Español" },
      ]}
      defaultLanguage="en"
    >
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        {children}
      </ThemeProvider>
    </LanguageProvider>
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
      <LanguageProvider {...i18nConfig}>
        <ThemeProvider {...themeConfig}>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
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
      <h1>{literal.welcome}</h1>
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

Astra follows MVVM (Model-View-ViewModel) architecture. Here's the recommended structure:

### Directory Layout

```
src/
├── features/
│   └── users/
│       ├── repo/           # Data access layer
│       │   └── UsersRepo.ts
│       ├── state/          # State types
│       │   └── UsersState.ts
│       ├── viewmodel/      # Business logic
│       │   └── useUsersViewModel.ts
│       └── view/           # UI components
│           ├── UsersContainer.tsx
│           └── UserCard.tsx
├── common/
│   └── repo/               # Shared API client
│       └── ApiClient.ts
├── layout/
│   └── MainLayout.tsx
├── App.tsx
└── main.tsx
```

### Repository Pattern

```ts
// src/features/users/repo/UsersRepo.ts
import { ApiService, ServerResponse } from "astra";

export class UsersRepo {
  private api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

  async getUsers(): Promise<ServerResponse<User[]>> {
    return this.api.get<User[]>("/users");
  }

  async getUser(id: number): Promise<ServerResponse<User>> {
    return this.api.get<User>(`/users/${id}`);
  }

  async createUser(data: CreateUserDto): Promise<ServerResponse<User>> {
    return this.api.post<User>("/users", data);
  }
}
```

### ViewModel Hook

```tsx
// src/features/users/viewmodel/useUsersViewModel.ts
import { useDataState } from "astra";
import { useApiClient } from "../../../common/repo/ApiClient";
import { UsersRepo } from "../repo/UsersRepo";

export const useUsersViewModel = () => {
  const apiClient = useApiClient();
  const usersRepo = new UsersRepo(apiClient);

  const [state, execute] = useDataState<User[]>();

  const loadUsers = () => {
    execute(() => usersRepo.getUsers());
  };

  const createUser = (data: CreateUserDto) => {
    execute(() => usersRepo.createUser(data));
  };

  return {
    state,
    loadUsers,
    createUser,
  };
};
```

### View Component

```tsx
// src/features/users/view/UsersContainer.tsx
import { useUsersViewModel } from "../viewmodel/useUsersViewModel";
import { AppStateHandler } from "astra";

export const UsersContainer = () => {
  const { state, loadUsers } = useUsersViewModel();

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
      errorMessage="Failed to load users"
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

### 2. Create Feature-Focused ViewModels

Each feature should have its own ViewModel hook that encapsulates:

- Data fetching logic
- State management
- User interactions
- Translation helpers

```tsx
export const useFeatureViewModel = () => {
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

Use `AppStateHandler` for automatic state handling:

```tsx
<AppStateHandler
  appState={userState}
  SuccessComponent={({ appState }) => <Content data={appState.data} />}
  emptyCondition={(data) => !data || data.length === 0}
  emptyMessage="No users found"
  errorMessage="Failed to load users"
/>
```

### 5. Separate UI from Logic

```tsx
// ViewModel - business logic only
export const useUserViewModel = () => {
  const [state, execute] = useDataState<User>();
  const { literal } = useLanguage();

  const loadUser = (id: number) => execute(() => api.getUser(id));

  return { state, loadUser, t: literal };
};

// View - UI only
export const UserProfile = () => {
  const { state, loadUser, t } = useUserViewModel();

  return (
    <AppStateHandler
      appState={state}
      SuccessComponent={({ appState }) => <div>{appState.data?.name}</div>}
      errorMessage={t.user_load_error}
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

Explore the full component library: [Component Documentation](../feature/components/README.md)

For tier-specific guidance, see:

- [Atoms Guide](../feature/components/atomic-design/atoms.md)
- [Molecules Guide](../feature/components/atomic-design/molecules.md)
- [Organisms Guide](../feature/components/atomic-design/organisms.md)
- [Templates Guide](../feature/components/atomic-design/templates.md)

## Next Steps

- [Component Documentation](../feature/components/README.md) - Browse the full component library
- [Getting Started Guide](./getting-started.md) - Basic installation
- [Electron Integration Guide](./electron.md) - Desktop app integration
- [MVVM Architecture](../MVVM_Clean_Architecture.md) - Architecture deep dive
- [Repository Layer](../Repository_Layer.md) - API patterns
