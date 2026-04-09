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
  en: { greeting: "Hello", welcome: "Welcome to our app" },
  es: { greeting: "Hola", welcome: "Bienvenido a nuestra app" },
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
  en: { greeting: "Hello" },
  es: { greeting: "Hola" },
};

function App() {
  return (
    <LanguageProvider
      translations={translations}
      availableLanguages={[{ code: "en", label: "English" }]}
      defaultLanguage="en"
    >
      <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
        <YourMainComponent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
```

## First Component Usage

### Using a UI Component

Astra provides ready-to-use UI components. Here's how to use `HeroSection`:

```tsx
import { HeroSection } from "astra";

function HomePage() {
  return (
    <HeroSection
      title="Welcome to Our App"
      subtitle="Get started with Astra"
      primaryAction={{ label: "Get Started", onClick: () => {} }}
    />
  );
}
```

### Using the MVVM Pattern

The recommended pattern for data-driven features:

```tsx
import { useDataState, StateType } from "astra";

// Create a repository
const api = new ApiService("https://api.example.com");

// In your component
const [dataState, execute] = useDataState<MyData>();

execute(() => api.get<MyData>("endpoint"));

// Handle states
if (dataState.state === StateType.LOADING) return <Spinner />;
if (dataState.isError)
  return <ErrorMessage message={dataState.statusMessage} />;

return <DataDisplay data={dataState.data} />;
```

### Using AppStateHandler

For automatic loading/error/empty state handling:

```tsx
import { AppStateHandler } from "astra";

function UserList() {
  const [userState, fetchUsers] = useDataState<User[]>();

  useEffect(() => {
    fetchUsers(() => api.get<User[]>("users"));
  }, []);

  return (
    <AppStateHandler
      appState={userState}
      SuccessComponent={({ appState }) => (
        <ul>
          {appState.data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      emptyCondition={(data) => data.length === 0}
      errorMessage="Failed to load users"
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
| `StateType`        | Enum: `INIT`, `LOADING`, `COMPLETED`, `ERROR`      |

### UI Components

Astra includes 30+ ready-to-use components:

- **Layout**: `HeroSection`, `Card`, `PageHeader`, `EntryLayoutFrame`
- **Data Display**: `DataTable`, `SummaryPanel`, `TrendMetricCard`
- **Feedback**: `Notification`, `AlertListItem`, `SeverityBadge`
- **Forms**: `FormLayout`, `MultiStepProgressIndicator`
- **Navigation**: Various navigation components
- **File Viewers**: `CsvViewer`, `ImageViewer`, `JsonViewer`, `MdViewer`

### Import Styles

```ts
// Root import (recommended)
import { ThemeProvider, useDataState, HeroSection } from "astra";

// Subpath imports
import { spacing, typography } from "astra/theme";
import { HeroSection, Card } from "astra/components";
```

## Next Steps

- [React Integration Guide](./react.md) - Framework-specific setup
- [Electron Integration Guide](./electron.md) - Desktop app integration
- [MVVM Architecture](../MVVM_Clean_Architecture.md) - Architecture patterns
- [Theming](../Theming.md) - Custom theming guide
- [Localization](../Localization.md) - Advanced i18n patterns
