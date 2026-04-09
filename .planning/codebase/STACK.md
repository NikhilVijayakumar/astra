# Technology Stack

**Analysis Date:** 2026-04-09

## Languages

**Primary:**

- TypeScript 5.8.3 - Full type safety across codebase
- JSX - React component syntax

**Secondary:**

- CSS - Component styling via MUI Emotion
- JSON - Localization files, configuration

## Runtime

**Environment:**

- Node.js (ES2020+ target)
- React 19.2.3 - UI library

**Package Manager:**

- npm 10+ (detected via package-lock.json)
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**

- React 19.2.3 - UI library with hooks
- MUI (Material UI) 7.2.0 - Component library
- Emotion 11.x - CSS-in-JS styling engine

**Testing:**

- Vitest 4.0.16 - Unit testing framework
- React Testing Library 16.3.1 - Component testing
- Happy DOM 20.0.11 - DOM environment for tests
- Istanbul (via vitest) - Code coverage

**Build/Dev:**

- Vite 7.0.3 - Build tool and dev server
- Vite Plugin DTS 4.5.4 - TypeScript declaration generation
- Storybook 9.0.18 - Component documentation and development

## UI Libraries & Styling

**Component Library:**

- `@mui/material` 7.2.0 - Core Material UI components
- `@mui/icons-material` 7.2.0 - Material Design icons
- `@mui/lab` 7.0.0-beta.14 - Lab components ( DatePickers, etc.)

**Styling Solutions:**

- `@emotion/react` 11.13.3 - CSS-in-JS library (MUI dependency)
- `@emotion/styled` 11.13.0 - Styled components API

**Animation:**

- `framer-motion` 11.x - Animation library
  - Used in `AudioPlayerBar.tsx`, `AnimatedHeroCharacter.tsx`
  - Used for page transitions and micro-interactions

**Icons:**

- `lucide-react` 0.400.0 - Icon library
  - Used in UI components (Play, Pause, SkipBack, etc.)

## State Management

**Approach:** Custom MVVM Hook-based State

**State Types:**

- `AppState<T>` interface in `src/common/state/AppState.ts`
  - States: `INIT`, `LOADING`, `COMPLETED`
  - Tracks: `isError`, `isSuccess`, `status`, `statusMessage`, `data`

**Hook:**

- `useDataState<T>()` in `src/common/hooks/useDataState.ts`
  - Returns `[appState, execute, setAppState]`
  - Manages async operation lifecycle
  - Integrates with `ServerResponse` for API results

**Theme State:**

- Theme context in `src/common/theme/ThemeProvider.tsx`
- Dark/light mode toggle with localStorage persistence
- Storybook integration via `forceTheme` prop

## Key Dependencies

**Critical:**

- `react` 19.2.3 - Core library (peer dependency)
- `react-dom` 19.2.3 - DOM rendering (peer dependency)
- `@mui/material` 7.2.0 - UI components (peer dependency)
- `axios` 1.10.0 - HTTP client for API layer

**Data & Content:**

- `react-markdown` 10.1.0 - Markdown rendering (MdViewer component)
- `react-syntax-highlighter` 16.1.1 - Code syntax highlighting

**Utilities:**

- `uuid` 11.0.2 - ID generation
- `@fontsource/roboto` 5.1.0 - Typography (bundled font)

**Date Handling:**

- `@mui/x-date-pickers` 8.7.0 - Date/time picker components

## Development Tools & Configs

**TypeScript Configs:**

- `tsconfig.json` - Base config (target ES2020, strict mode)
- `tsconfig.app.json` - App config (target ES2022, stricter)
- `tsconfig.node.json` - Node config for build tooling

**Build Config:**

- `vite.config.ts` - Vite configuration
  - Library mode for UMD/ESM output
  - React plugin for JSX
  - DTS plugin for type declarations
  - Rollup externals for MUI, Emotion, React

**Linting:**

- `eslint.config.js` - ESLint flat config
  - TypeScript ESLint plugin
  - React Hooks plugin
  - React Refresh plugin
  - Storybook plugin

**Code Formatting:**

- Prettier 3.3.3 - Code formatter
  - Config: `.prettierrc` (implied by usage in scripts)

**Testing Config:**

- `vitest.setup.ts` - Test setup file
  - Imports `@testing-library/jest-dom`
- Coverage via Istanbul provider

**Storybook Config:**

- `.storybook/main.ts` - Storybook configuration
  - Addons: docs, themes, a11y, onboarding, MSW
  - Framework: React Vite
- `.storybook/preview.tsx` - Storybook preview
  - Theme decorator with light/dark toggle
  - Language decorator with locale selector

## Platform Targets

**Development:**

- Modern browsers (ES2020+)
- Node.js 18+

**Production (Library):**

- UMD build for vanilla JS consumers
- ESM build for bundlers (Vite, Webpack, Rollup)
- Tree-shakeable component exports

**Electron Support:**

- `electron-example/` - Desktop app example
- Electron 28.x with Vite integration
- Cross-platform builds (Windows, macOS, Linux)

---

_Stack analysis: 2026-04-09_
