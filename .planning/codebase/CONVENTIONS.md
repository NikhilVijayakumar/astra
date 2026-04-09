# Coding Conventions

**Analysis Date:** 2026-04-09

## Naming Patterns

**Files:**

- Components/UI: `PascalCase.tsx` (e.g., `LoadingState.tsx`, `ErrorState.tsx`)
- Hooks: `camelCase.ts` (e.g., `useDataState.ts`)
- Utilities/Services: `PascalCase.ts` for classes (e.g., `ApiService.ts`, `ServerResponse.ts`), `camelCase.ts` for functions
- Index files: `index.ts`
- Test files: Same name with `.test.ts` or `.test.tsx` suffix (e.g., `LoadingState.test.tsx`)
- Story files: Same name with `.stories.tsx` suffix (e.g., `LoadingState.stories.tsx`)

**Functions:**

- Hooks: `useCamelCase` (e.g., `useDataState`, `useLanguage`)
- Regular functions: `camelCase`
- Class methods: `camelCase`
- Event handlers: `handleCamelCase` (e.g., `handleClick`)
- Test functions: `shouldCamelCase` (e.g., `should return success response`)

**Variables:**

- camelCase (e.g., `baseUrl`, `mockData`, `appState`)
- Constants: `SCREAMING_SNAKE_CASE` for enum values (e.g., `StateType.LOADING`)

**Types:**

- Interfaces: `PascalCase` (e.g., `AppStateProps`, `ResponseSucess`)
- Type aliases: `PascalCase` (e.g., `LanguageDefinition`)
- Enums: `PascalCase` with `PascalCase` values (e.g., `HttpStatusCode.SUCCESS`)

## TypeScript Usage

**Strict Mode:** Enabled in `tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**Type Declarations:**

- Prefer interfaces for object shapes that may be extended
- Use type aliases for unions, intersections, and utility types
- Always use explicit return types for public functions

**Generic Types:**

```typescript
// Example from useDataState hook
export function useDataState<T>(customInitialState: Partial<AppState<T>> = {});
```

## Code Style

**Formatting:**

- Tool: Prettier (configured in project)
- Run: `npm run format`

**Linting:**

- Tool: ESLint with TypeScript-ESLint
- Plugins: `react-hooks`, `react-refresh`, `storybook`
- Run: `npm run lint`

**Key ESLint Configuration** (`eslint.config.js`):

```javascript
extends: [
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
]
```

## Component Patterns

**Functional Components Only:**
All components use the functional component pattern with `FC` type from React.

```typescript
// Basic component pattern
import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

interface ComponentNameProps {
  propA: string;
  optionalProp?: number;
}

const ComponentName: FC<ComponentNameProps> = ({ propA, optionalProp }) => {
  return (
    <Box>
      {/* content */}
    </Box>
  );
};

export default ComponentName;
```

**Hooks Pattern:**
Custom hooks follow React hooks rules and are prefixed with `use`:

```typescript
// src/common/hooks/useDataState.ts
import { useState } from 'react';

export function useDataState<T>(customInitialState: Partial<AppState<T>> = {}) {
  const [appState, setAppState] = useState<AppState<T>>({...});

  const execute = async (apiCall: () => Promise<ServerResponse<T>>) => {
    // implementation
  };

  return [appState, execute, setAppState] as const;
}
```

**Context Pattern:**

```typescript
// src/common/localization/LanguageContext.ts
import { createContext, useContext } from "react";

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a AstraLanguageProvider");
  }
  return context;
}
```

## Import/Export Patterns

**File Structure with Barrel Exports:**

```
src/common/
├── index.ts          # Re-exports from subdirectories
├── components/
│   ├── index.ts      # Re-exports all components
│   └── wrapper/
│       ├── index.ts  # Named exports for wrapper components
│       ├── LoadingState.tsx
│       └── ErrorState.tsx
```

**Index Export Patterns:**

```typescript
// Barrel export (index.ts)
export * from "./components";
export * from "./hooks";

// Named exports for components with default exports
export { default as AppStateHandler } from "./AppStateHandler";
export { default as EmptyState } from "./EmptyState";
```

**Import Patterns:**

```typescript
// Named imports for types
import { AppState, StateType } from "../state/AppState";
import { HttpStatusCode } from "../repo/HttpStatusCode";

// Default imports for components
import LoadingState from "./LoadingState";

// Mixed imports
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
```

## Error Handling

**Try/Catch Pattern:**

```typescript
// From ApiService.ts
private async request<T>(config: AxiosRequestConfig): Promise<ServerResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios(config);
    return ServerResponse.success<T>({...});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle axios error
      return ServerResponse.error<T>({...});
    } else {
      // Handle unknown error
      return ServerResponse.error<T>({...});
    }
  }
}
```

**ServerResponse Pattern:**

```typescript
// Static factory methods for success/error
export class ServerResponse<T> {
  public static success<T>(success: ResponseSucess<T>): ServerResponse<T> {...}
  static error<T>(error: ResponseError): ServerResponse<T> {...}
}
```

**Hook Error Handling:**

```typescript
// From useDataState.ts
try {
  const response = await apiCall();
  setAppState((prev) => ({...response...}));
} catch (error) {
  setAppState((prev) => ({
    ...prev,
    state: StateType.COMPLETED,
    isError: true,
    status: HttpStatusCode.INTERNAL_SERVER_ERROR,
    statusMessage: 'An unexpected error occurred.',
    data: null,
  }));
}
```

## Documentation Practices

**JSDoc Comments:**
All components should have JSDoc comments with description, parameters, and examples:

```typescript
/**
 * `ErrorState` is a reusable UI component that shows a prominent error message.
 *
 * It uses Material-UI's `Alert` component with `severity="error"` to ensure a
 * consistent and accessible presentation of errors.
 *
 * @component
 * @param {ErrorStateProps} props - The props for the component.
 * @returns {React.ReactElement} A React element containing the styled error alert.
 *
 * @example
 * <ErrorState message="Network connection failed." />
 */
const ErrorState: FC<ErrorStateProps> = ({ message }) => {...}
```

**Props Documentation:**

```typescript
interface ErrorStateProps {
  /**
   * The optional error message to display.
   * If not provided, the component will use a default message
   * from the localization context.
   */
  message?: string;
}
```

**Storybook Stories:**
Each component should have a corresponding `.stories.tsx` file:

```typescript
const meta: Meta<typeof LoadingState> = {
  title: "Components/Wrapper/LoadingState",
  component: LoadingState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Description of the component...",
      },
    },
  },
};
```

## Class Patterns

**Service Classes:**

```typescript
// src/common/repo/ApiService.ts
export class ApiService {
  private baseUrl: string;
  private literal: Record<string, string>;

  constructor(baseUrl: string, literal: Record<string, string>) {
    this.baseUrl = baseUrl;
    this.literal = literal;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>> {...}
}
```

## React Patterns

**State Management with Hooks:**

- Use `useState` with explicit types
- Return tuples with `as const` for immutability
- Use custom hooks for stateful logic

**Context Usage:**

- Create context with undefined as default
- Custom hook for context access with error throwing
- Provider components wrap children

**MUI Integration:**

- Use `sx` prop for inline styling
- Use MUI components directly (Box, Typography, CircularProgress, Alert, etc.)

---

_Convention analysis: 2026-04-09_
