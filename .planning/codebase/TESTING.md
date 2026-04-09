# Testing Patterns

**Analysis Date:** 2026-04-09

## Test Framework

**Runner:**

- Vitest v4.0.16
- Config: `vite.config.ts` (test section)

**Assertion Library:**

- Vitest built-in assertions (`expect`)

**Additional Libraries:**

- `@testing-library/react` v16.3.1 - React component testing
- `@testing-library/jest-dom` v6.9.1 - DOM assertions
- `@testing-library/user-event` v14.6.1 - User interaction simulation
- `happy-dom` v20.0.11 - DOM environment for tests
- `axios` v1.10.0 - HTTP client (mocked)

**Run Commands:**

```bash
npm run test              # Run all tests in watch mode
npm run test:ui          # Run tests with Vitest UI
npm run coverage          # Run tests with coverage report
```

## Test File Organization

**Location:**

- Test files are **co-located** with source files
- Location: Same directory as the source file being tested

**Naming Convention:**

- Components: `{ComponentName}.test.tsx` (e.g., `LoadingState.test.tsx`)
- Services/Hooks: `{ServiceName}.test.ts` (e.g., `ApiService.test.ts`)

**Test Structure:**

```
src/common/
├── hooks/
│   ├── useDataState.ts
│   └── useDataState.test.ts
├── components/
│   └── wrapper/
│       ├── LoadingState.tsx
│       ├── LoadingState.test.tsx
│       ├── LoadingState.stories.tsx
│       └── ...
└── repo/
    ├── ApiService.ts
    └── ApiService.test.ts
```

## Test Structure

**Suite Organization:**

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  // Optional: shared setup
  beforeEach(() => {
    // Reset mocks or setup
  });

  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('progressbar')).toBeTruthy();
  });

  it('should display correct content', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeTruthy();
  });
});
```

**Component Test Pattern:**

```typescript
// Mock dependencies before imports
vi.mock('../../localization/LanguageContext', () => ({
  useLanguage: () => ({
    literal: {
      loading_message: 'Loading Mock...',
    },
  }),
}));

describe('LoadingState', () => {
  it('renders the loading spinner', () => {
    render(<LoadingState />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeTruthy();
  });
});
```

**Hook Test Pattern:**

```typescript
import { renderHook, act } from "@testing-library/react";
import { useDataState } from "./useDataState";

describe("useDataState", () => {
  it("should initialize with default state", () => {
    const { result } = renderHook(() => useDataState());

    expect(result.current[0]).toEqual({
      state: StateType.INIT,
      isError: false,
      isSuccess: false,
      status: HttpStatusCode.IDLE,
      statusMessage: "",
      data: null,
    });
  });
});
```

**Async Testing Pattern:**

```typescript
it("should handle successful execution", async () => {
  const { result } = renderHook(() => useDataState<{ id: number }>());

  const mockApiCall = vi.fn().mockResolvedValue(mockResponse);

  await act(async () => {
    await result.current[1](mockApiCall);
  });

  expect(result.current[0].state).toBe(StateType.COMPLETED);
});
```

## Mocking

**Framework:** Vitest's `vi` (equivalent to Jest's `jest`)

**Mocking Modules:**

```typescript
// Mock a module
vi.mock("axios");

// Mock a specific export from a module
vi.mock("../../localization/LanguageContext", () => ({
  useLanguage: () => ({
    literal: {
      loading_message: "Loading Mock...",
    },
  }),
}));
```

**Mocking Functions:**

```typescript
// Create a mock function
const mockApiCall = vi.fn().mockResolvedValue(mockResponse);

// Mock with implementation
const mockCallback = vi.fn((value) => value * 2);

// Clear mocks between tests
beforeEach(() => {
  vi.clearAllMocks();
});
```

**Mocking Components:**

```typescript
vi.mock('./LoadingState', () => ({
  default: () => <div data-testid="loading-state">Loading...</div>,
}));

vi.mock('./ErrorState', () => ({
  default: ({ message }: { message?: string }) => (
    <div data-testid="error-state">{message || 'Error'}</div>
  ),
}));
```

**Mocking Axios:**

```typescript
import axios from "axios";

vi.mock("axios");

it("should make GET request", async () => {
  const mockResponse = { status: 200, data: { id: 1 } };
  (axios as any).mockResolvedValue(mockResponse);

  const result = await apiService.get("test");

  expect(axios).toHaveBeenCalledWith(
    expect.objectContaining({
      url: "https://api.example.com/test",
      method: "GET",
    }),
  );
});
```

## Fixtures and Factories

**Test Data:**
Defined inline within test cases:

```typescript
const mockData = { id: 1, name: "Test" };
const mockResponse = {
  status: 200,
  statusText: "OK",
  data: mockData,
};
```

**Translations Mock:**

```typescript
const translations = {
  en: { greeting: "Hello" },
  es: { greeting: "Hola" },
};
```

**Theme Mocks:**

```typescript
const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });
```

## Coverage

**Provider:** Istanbul (via `@vitest/coverage-istanbul`)

**Configuration:**

```typescript
// vite.config.ts
test: {
  globals: true,
  environment: 'happy-dom',
  setupFiles: './vitest.setup.ts',
  coverage: {
    provider: 'istanbul',
  },
},
```

**Setup File:**

```typescript
// vitest.setup.ts
import "@testing-library/jest-dom";
```

**View Coverage:**

```bash
npm run coverage
```

## Test Types

**Unit Tests:**

- Pure functions
- Custom hooks
- Services/Classes (with mocked dependencies)
- Components (with mocked context/hooks)

**Component Tests:**

- Render verification
- Props handling
- User interactions (via `@testing-library/user-event`)
- Conditional rendering based on props/state

**Hook Tests:**

- State initialization
- State updates
- Side effects
- Async operations

## Common Patterns

**Testing Library Queries:**

```typescript
// Role queries (preferred)
screen.getByRole("progressbar");
screen.getByRole("button");

// Text queries
screen.getByText("Loading...");
screen.getByLabelText("Username");

// Test ID queries (when other queries insufficient)
screen.getByTestId("custom-id");
```

**User Events:**

```typescript
import { fireEvent } from "@testing-library/react";
// or
import userEvent from "@testing-library/user-event";

fireEvent.click(screen.getByText("Submit"));
```

**Async Testing with act:**

```typescript
await act(async () => {
  await result.current[1](mockApiCall);
});
```

**Testing Error States:**

```typescript
it("should handle execution exceptions", async () => {
  const mockApiCall = vi.fn().mockRejectedValue(new Error("Crash"));

  await act(async () => {
    await result.current[1](mockApiCall);
  });

  expect(result.current[0].isError).toBe(true);
  expect(result.current[0].statusMessage).toBe("An unexpected error occurred.");
});
```

**Testing Conditional Rendering:**

```typescript
it('renders LoadingState when state is LOADING', () => {
  const appState = { state: StateType.LOADING, ... };

  render(<AppStateHandler appState={appState} SuccessComponent={MockSuccess} />);

  expect(screen.getByTestId('loading-state')).toBeTruthy();
});
```

## Storybook Integration

**Story Files:** Co-located with components using `.stories.tsx` suffix

**MSW (Mock Service Worker):**

- `msw-storybook-addon` v2.0.5 is installed for API mocking in Storybook

**Story Structure:**

```typescript
const meta: Meta<typeof LoadingState> = {
  title: "Components/Wrapper/LoadingState",
  component: LoadingState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Description...",
      },
    },
  },
};
```

## Best Practices

1. **Mock at the boundary:** Mock external dependencies (axios, context) not internal implementations
2. **Test behavior, not implementation:** Use `getByRole` and `getByText` over `getByTestId` when possible
3. **Isolate tests:** Each test should be independent and able to run in any order
4. **Clear mock data:** Use descriptive variable names for mock data
5. **Test error paths:** Include tests for error cases, not just success cases
6. **Use `beforeEach` for setup:** Reset mocks and state between tests

---

_Testing analysis: 2026-04-09_
