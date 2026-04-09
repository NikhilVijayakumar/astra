# External Integrations

**Analysis Date:** 2026-04-09

## APIs & External Services

**Mock API (Development):**

- JSONPlaceholder API - Used in `electron-example`
  - Base URL: `https://jsonplaceholder.typicode.com`
  - Purpose: Development/testing API
  - Implementation: `electron-example/src/common/repo/ApiClient.ts`

**Custom Backend Integration:**

- `ApiService` class in `src/common/repo/ApiService.ts`
- Axios-based HTTP client
- Configurable base URL per service instance
- Supports all CRUD operations (GET, POST, PUT, DELETE)

## Authentication/Authorization

**Status:** No built-in authentication

**Current Approach:**

- API service accepts any base URL
- Consumers implement their own auth headers via Axios config
- Localization context supports i18n but not auth

**Extensibility:**

- Add interceptors in `ApiService.request()` method
- Inject auth tokens via `AxiosRequestConfig` per request

## Database & Storage

**No Built-in Database:**

- Library is UI/state-focused
- No ORM or database client

**Browser Storage:**

- localStorage - Theme preference persistence
  - Key: `darkMode`
  - Location: `src/common/theme/ThemeProvider.tsx`

**File Handling:**

- File viewers component set (`src/components/file-viewers/`)
  - `CsvViewer.tsx` - CSV display
  - `JsonViewer.tsx` - JSON display
  - `ImageViewer.tsx` - Image display
  - `MdViewer.tsx` - Markdown rendering via react-markdown

## Third-Party Library Scope

**UI Framework:**

- MUI (Material UI) 7.2.0
  - Scope: All UI components
  - Theming: Custom theme via Emotion
  - Icons: @mui/icons-material

**HTTP Client:**

- Axios 1.10.0
  - Scope: All API communication
  - Configuration: Base URL + request/response handling

**Animation:**

- Framer Motion 11.x
  - Scope: `AudioPlayerBar`, `AnimatedHeroCharacter`
  - Pattern: Motion components with variants

**Icons:**

- Lucide React 0.400.0
  - Scope: UI components needing icons
  - Alternative: MUI icons also available

**Date/Time:**

- MUI X Date Pickers 8.7.0
  - Scope: Date selection components
  - Integration: MUI Lab components

**Content Rendering:**

- react-markdown 10.1.0
  - Scope: `MdViewer` component
  - Use case: Documentation rendering

**Code Highlighting:**

- react-syntax-highlighter 16.1.1
  - Scope: Code blocks in markdown
  - Use case: Documentation/code viewer

**Typography:**

- Fontsource Roboto 5.1.0
  - Scope: Default font loading
  - Alternative: Custom fonts in theme

## Electron/Main Process Integration

**Example Project:** `electron-example/`

**Main Process:**

- Electron 28.x
- File: `electron-example/electron/main.ts`
- Creates BrowserWindow with configurable dimensions
- Dev tools enabled in development mode

**Build System:**

- electron-builder 24.9.1
- Cross-platform targets: Windows (NSIS), macOS (DMG), Linux (AppImage)

**Vite Integration:**

- vite-plugin-electron 0.28.0
- vite-plugin-electron-renderer 0.14.5
- Dev workflow: `concurrently` + `wait-on`

**Preload Scripts:**

- Not explicitly configured in example
- Basic Electron setup with nodeIntegration enabled

**IPC Patterns:**

- Not implemented in example
- Consumers would add via standard Electron IPC

## CI/CD & Deployment

**Visual Regression:**

- Chromatic 13.1.2
  - Storybook screenshot testing
  - Configuration: `.storybook/` addons

**No Built-in CI Pipeline:**

- No GitHub Actions, Jenkins, or similar configs
- Consumers set up their own deployment

## Environment Configuration

**Required Environment Variables:**

- None required for library itself
- Consumer apps may configure:
  - API base URLs
  - Feature flags

**Secrets Management:**

- No built-in secrets handling
- Follows secure patterns (no .env in repo)

## Webhooks & Callbacks

**Status:** None

**API Layer:**

- `ApiService` supports standard HTTP callbacks
- No webhook-specific infrastructure

## Monitoring & Observability

**Error Tracking:**

- Console logging for errors
- No dedicated error tracking service
- `ServerResponse` captures HTTP errors

**Logging:**

- `console.log` in `ApiService.ts` (line 39)
- No structured logging library

## Storybook Integrations

**MSW (Mock Service Worker):**

- msw-storybook-addon 2.0.5
- API mocking for Storybook stories

**Accessibility Testing:**

- @storybook/addon-a11y 9.0.18
- Automated accessibility checks

**Theming:**

- @storybook/addon-themes 9.0.18
- Theme switching in Storybook

**Documentation:**

- @storybook/addon-docs 9.0.18
- MDX support for stories

---

_Integration audit: 2026-04-09_
