# Astra

A robust React library designed to serve as a comprehensive boilerplate for building scalable applications. It implements **MVVM (Model-View-ViewModel)** patterns, handles **localization**, manages **state**, and provides a solid foundation for **theming** and **API interactions**.

This library abstracts away the repetitive setup code so you can focus on your application's business logic.

## 🚀 Features

- **MVVM Architecture**: Built-in hooks to manage data fetching and state transitions cleanly.
- **State Management**: Structured application state handling (`INIT`, `LOADING`, `COMPLETED`, `ERROR`).
- **Localization (i18n)**: Ready-to-use `LanguageProvider` and context for multi-language support.
- **Theming**: Integrated Material UI (MUI) theme management with Light/Dark mode interaction.
- **API Repository**: A type-safe Axios wrapper for standardized API requests and error handling.
- **Type Safety**: Fully written in TypeScript.

## 📦 Installation

To use this library in your project, add it to your `package.json`. Since this is hosted on GitHub, you can add it directly:

```json
"dependencies": {
  "astra": "git+https://github.com/NikhilVijayakumar/astra.git"
}
```

To target a specific version (tag), branch, or commit hash (recommended for production stability):

```json
"dependencies": {
  "astra": "git+https://github.com/NikhilVijayakumar/astra.git#v0.0.4"
}
```

Or if you are developing locally and linking it:

```json
"dependencies": {
  "astra": "file:../path/to/astra"
}
```

## 🛠 Usage

## 📜 Consumption Contract

Supported import styles:

```ts
import { ThemeProvider, spacing, HeroSection } from "astra";
```

```ts
import { spacing } from "astra/theme";
import { HeroSection } from "astra/components";
```

Notes:

- Root imports from `astra` remain the primary and recommended style.
- Subpath imports are supported only for the documented package export contract (`astra/theme`, `astra/components`, `astra/common`, and their `/*` variants).
- Direct imports into internal build output paths (for example `astra/dist/...`) are unsupported and may break without notice.

Migration guidance for older consumers:

- Replace any internal or alias-based imports with `astra` root imports where possible.
- If selective paths are needed, use only the declared subpaths above.

### Available Exports

**Core:**

- `ApiService` - Type-safe Axios wrapper
- `useDataState` - MVVM state management hook
- `StateType` - State type enum (`INIT`, `LOADING`, `COMPLETED`, `ERROR`)
- `AppState<T>` - State container type
- `AppStateHandler` - UI state handler component
- `ThemeProvider` - MUI theming provider
- `ThemeToggle` - Theme mode toggle
- `LanguageProvider` - i18n provider
- `useLanguage` - i18n hook

**UI Components:**

- `HeroSection`, `Card`, `DataTable`, `FormLayout`, `Notification`
- `StatusDot`, `SeverityBadge`, `TrendMetricCard`, `PageHeader`, `SummaryPanel`
- `StatusListRow`, `EntityConfidenceRow`, `AlertListItem`, `SummaryListItem`
- `DecisionActionCard`, `WeeklyReportCard`, `ReviewDecisionDialog`
- `MultiStepProgressIndicator`, `EntryLayoutFrame`, `OperationHealthPanel`
- `VerticalStepIndicator`, `InteractiveStepNode`, `AnimatedHeroCharacter`
- `FeatureSegmentCard`, `PlayableMediaCard`, `IconDescriptionListItem`
- `ProfileRevealCard`, `TimelineNode`, `AudioPlayerBar`
- `MultiPhaseWorkflowDiagram`, `CanvasNote`, `CanvasGroup`
- `StatusActionCard`, `VersionHistorySelector`, `FileTree`, `TerminalViewer`

**File Viewers:**

- `FileViewerRouter`, `CsvViewer`, `ImageViewer`, `JsonViewer`, `MdViewer`

**Theme Utilities:**

- `spacing`, `typography`, `ThemeModeContext`

**Note:** Some internal exports may exist but are not part of the public API contract. Use only the exports listed above.

### 1. Theming Setup

Wrap your application with `ThemeProvider`. You need to provide your Light and Dark theme configurations (MUI Theme objects).

```tsx
import { ThemeProvider, ThemeToggle } from "astra";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <ThemeToggle /> {/* Optional toggle button */}
      <YourMainComponent />
    </ThemeProvider>
  );
}
```

### 2. Localization Setup

Use `LanguageProvider` to manage translations.

```tsx
import { LanguageProvider } from "astra";

const translations = {
  en: { hello: "Hello World", welcome: "Welcome" },
  es: { hello: "Hola Mundo", welcome: "Bienvenido" },
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
      <YourContent />
    </LanguageProvider>
  );
}
```

### 3. Consuming Data (MVVM Pattern)

Astra encourages the use of Repository pattern combined with the `useDataState` hook.

**Step 1: Create your API Service**

```ts
import { ApiService } from "astra";

const api = new ApiService("https://api.example.com", {
  internal_server_error: "Something went wrong on our end.",
});

export const UserRepo = {
  getUsers: () => api.get<User[]>("users"),
};
```

**Step 2: Use it in a Component**

```tsx
import { useDataState, StateType } from "astra";
import { useEffect } from "react";
import { UserRepo } from "./repo";

function UserList() {
  const [appState, execute] = useDataState<User[]>();

  useEffect(() => {
    execute(() => UserRepo.getUsers());
  }, []);

  if (appState.state === StateType.LOADING) return <div>Loading...</div>;
  if (appState.isError) return <div>Error: {appState.statusMessage}</div>;

  return (
    <ul>
      {appState.data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 4. Handling UI States (AppStateHandler)

For a cleaner UI that automatically handles `LOADING`, `ERROR`, and `EMPTY` states, use the `AppStateHandler` component.

```tsx
import { AppStateHandler, useDataState, StateType } from "astra";
import { useEffect } from "react";
import { UserRepo } from "./repo";

function UserList() {
  const [userState, fetchUsers] = useDataState<User[]>();

  useEffect(() => {
    fetchUsers(UserRepo.getUsers);
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
      errorMessage="Unable to load users."
    />
  );
}
```

## 📁 Project Structure

The core logic resides in `src/common`:

- **`components/`**: Reusable UI components.
- **`hooks/`**: Custom hooks, primarily `useDataState` for MVVM state management.
- **`localization/`**: `LanguageProvider` and context for i18n.
- **`repo/`**: `ApiService`, `ServerResponse`, and networking types.
- **`state/`**: `AppState` type definitions (`INIT`, `LOADING`, `COMPLETED`).
- **`theme/`**: `ThemeProvider` and theming logic.

## 📚 Client Documentation

For production integrations, follow these docs in order:

1. `docs/MVVM_Clean_Architecture.md` for architecture boundaries and composition.
2. `docs/Repository_Layer.md` for API and data access conventions.
3. `docs/state.md` for app-state usage patterns and transitions.
4. `docs/Localization.md` for language setup and translation contracts.
5. `docs/Theming.md` for Astra token standards, theming architecture, and override strategy.
6. `docs/Platform_Compatibility.md` for browser/platform behavior notes.

Recommended onboarding path for client apps:

- Start with root imports from `astra`.
- Introduce `ThemeProvider` and `LanguageProvider` at app root.
- Keep feature modules aligned to MVVM and repository contracts.
- Prefer Astra token-driven styling and avoid per-feature hardcoded design constants.

## 💻 Development

### Install Dependencies

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build Library

```bash
npm run build
```

### Run Linter

```bash
npm run lint
```
