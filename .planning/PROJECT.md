# Project: Astra

**Type:** React + Electron Boilerplate Library
**Version:** 1.0.2
**Initialized:** 2026-04-09

## What is Astra?

Astra is a standalone boilerplate library for building React and Electron applications. It provides:

- **MVVM Architecture** with `useDataState` hook for state management
- **Theming** via Material UI with Light/Dark mode support
- **Localization** with `LanguageProvider` for i18n
- **API Repository** - type-safe Axios wrapper
- **36+ UI Components** for common patterns
- **Electron-ready** structure and patterns

## Project Context

- **Architecture:** MVVM with Repository pattern
- **Stack:** React 19, TypeScript, Vite, Material UI 7, Electron
- **Build:** Dual ESM/UMD output via vite-plugin-dts
- **Distribution:** Published to npm, consumed via GitHub dependencies
- **Consumers:** Client applications add `astra` to their `package.json`
- **Documentation:** Storybook 9 with i18n addon

## Quality Goal

Improve codebase quality for library consumers:

- Increase test coverage
- Fix type safety gaps
- Improve security (localStorage handling)
- Fix export surface issues
- Better documentation
- No CI/CD needed (library, not app)

## Key Files

| Path                | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `src/common/`       | Core library code (hooks, components, theme, i18n) |
| `src/components/`   | 36 UI components                                   |
| `electron-example/` | Electron integration example                       |
| `example/`          | React demo application                             |
| `docs/`             | Consumer documentation                             |

## Constraints

- Must maintain backward compatibility
- Cannot break existing consumer imports
- React 19 is required (documented limitation)
- Electron support required
- No React Native support (documented)

## Dependencies

**Critical to maintain:**

- `@mui/material@7.2.0`
- `react@19.2.3`
- `typescript@5.8.3`

**Needs monitoring:**

- `@mui/lab@7.0.0-beta.14` (pre-release)
- `framer-motion@^11.0.0`
- `lucide-react@^0.400.0`

---

_Last updated: 2026-04-09_
