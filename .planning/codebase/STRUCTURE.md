# Codebase Structure

**Analysis Date:** 2026-04-09

## Directory Layout

```
astra/                          # Root - Astra Component Library
├── src/                        # Source code (library source)
├── example/                     # Basic Vite consumer example
├── electron-example/           # Electron MVVM consumer example
├── .storybook/                 # Storybook configuration
├── public/                     # Static assets (vite.svg)
├── docs/                       # Documentation
├── dist/                       # Build output (generated)
├── package.json               # Library package manifest
├── vite.config.ts             # Library build configuration
├── tsconfig.json              # TypeScript base config
├── tsconfig.app.json         # App-specific TS config
├── tsconfig.node.json        # Node TS config
├── eslint.config.js          # ESLint flat config
└── vitest.setup.ts           # Vitest setup file

src/                           # Main library source
├── main.tsx                   # Dev entry point
├── App.tsx                    # Dev App component
├── App.css                   # Dev styles
├── index.css                 # Global styles
├── lib.ts                    # Library export barrel
├── lib.d.ts                  # Type declarations (generated)
├── vite-env.d.ts             # Vite environment types
├── components/               # UI components
├── common/                  # Shared utilities
└── theme/                   # Design system

src/components/
├── index.ts                 # Component barrel export
├── ui/                      # UI component primitives
│   ├── Card.tsx
│   ├── DataTable.tsx
│   ├── FormLayout.tsx
│   ├── HeroSection.tsx
│   ├── Notification.tsx
│   ├── StatusDot.tsx
│   ├── SeverityBadge.tsx
│   └── [30+ more components]
└── file-viewers/            # File content viewers
    ├── FileViewerRouter.tsx
    ├── CsvViewer.tsx
    ├── JsonViewer.tsx
    ├── ImageViewer.tsx
    └── MdViewer.tsx

src/common/
├── index.ts                 # Common barrel export
├── components/              # Shared UI components
│   ├── index.ts
│   ├── navigation/
│   │   ├── DrawerComponent.tsx
│   │   ├── ToolbarComponent.tsx
│   │   ├── Toolbardata.ts
│   │   ├── drawerData.ts
│   │   └── index.ts
│   └── wrapper/
│       ├── AppStateHandler.tsx
│       ├── LoadingState.tsx
│       ├── ErrorState.tsx
│       ├── EmptyState.tsx
│       └── index.ts
├── hooks/                   # Custom React hooks
│   ├── index.ts
│   ├── useDataState.ts
│   └── useDataState.test.ts
├── localization/            # i18n support
│   ├── index.ts
│   ├── LanguageProvider.tsx
│   ├── LanguageContext.ts
│   ├── LanguageComponent.tsx
│   ├── LanguageProvider.test.tsx
│   └── translations handling
├── repo/                    # API services
│   ├── index.ts
│   ├── ApiService.ts
│   ├── ApiService.test.ts
│   ├── apiServiceFactory.ts
│   ├── ServerResponse.ts
│   ├── APITypes.ts
│   └── HttpStatusCode.ts
├── state/                   # State types
│   ├── index.ts
│   └── AppState.ts
└── theme/                   # Theme re-exports for common/
    ├── index.ts
    ├── ThemeProvider.tsx
    ├── ThemeToggle.tsx
    ├── themeContext.ts
    ├── themeData.ts
    └── index.ts

src/theme/                   # Design system tokens
├── index.ts                 # Theme barrel export
├── appTheme.ts             # MUI theme factory
└── tokens/
    ├── colors.ts           # Color palette
    ├── typography.ts        # Type scale
    └── spacing.ts          # Spacing scale
```

## Directory Purposes

**`src/` (Library Source):**

- Purpose: All library code
- Contains: Components, common utilities, theme tokens
- Key files: `lib.ts` (main export), `main.tsx` (dev entry)

**`src/components/` (UI Components):**

- Purpose: Reusable React components for consumers
- Contains: 37+ components in `ui/` and `file-viewers/`
- Key files: `index.ts` (barrel export)

**`src/common/` (Infrastructure):**

- Purpose: Shared utilities, hooks, context providers, API services
- Contains: State management, localization, theme wrappers, navigation
- Key files: `ApiService.ts`, `useDataState.ts`, `LanguageProvider.tsx`, `ThemeProvider.tsx`

**`src/theme/` (Design System):**

- Purpose: Design tokens and MUI theme configuration
- Contains: Color palette, typography scale, spacing system, theme factory
- Key files: `appTheme.ts` (theme factory with light/dark variants)

**`example/` (Vite Consumer):**

- Purpose: Demonstrates basic usage of Astra library
- Contains: Full MVVM app consuming Astra components

**`electron-example/` (Electron Consumer):**

- Purpose: Demonstrates Astra in Electron desktop app
- Contains: MVVM feature modules with dashboard, users, settings

**`.storybook/` (Documentation):**

- Purpose: Storybook configuration for component docs
- Contains: Theme decorators, locale decorators, addon config

**`public/` (Static Assets):**

- Purpose: Static files served as-is
- Contains: `vite.svg`
- Generated: No
- Committed: Yes

## Key File Locations

**Entry Points:**

- `src/lib.ts`: Library export barrel (used by Vite build)
- `src/main.tsx`: Development server entry
- `src/App.tsx`: Development demo app

**Configuration:**

- `package.json`: Library metadata, scripts, dependencies
- `vite.config.ts`: Build config, library mode, test config
- `tsconfig.json`: TypeScript compiler options
- `eslint.config.js`: Linting rules (flat config format)
- `vitest.setup.ts`: Test setup file

**Core Logic:**

- `src/common/repo/ApiService.ts`: HTTP client wrapper
- `src/common/hooks/useDataState.ts`: Async state hook
- `src/common/components/wrapper/AppStateHandler.tsx`: State renderer
- `src/theme/appTheme.ts`: MUI theme factory

**Testing:**

- Tests colocated with source files (e.g., `ApiService.test.ts`)
- `.test.ts` / `.test.tsx` suffix pattern

## Naming Conventions

**Files:**

- PascalCase for components: `Card.tsx`, `DrawerComponent.tsx`
- camelCase for utilities/hooks: `useDataState.ts`, `apiServiceFactory.ts`
- kebab-case for directories: `file-viewers/`, `localization/

**Directories:**

- camelCase or kebab-case mixed (inconsistent): `common/`, `file-viewers/`
- PascalCase for feature modules in consumer apps: `features/dashboard/`

**Exports:**

- Named exports for individual items
- Barrel exports (`index.ts`) for module-level exports

## Where to Add New Code

**New UI Component:**

1. Create in `src/components/ui/` as `ComponentName.tsx`
2. Export type interface alongside component
3. Add export to `src/components/index.ts`
4. Add test as `ComponentName.test.tsx` (optional)
5. Add Storybook story as `ComponentName.stories.tsx` (optional)

**New Hook:**

1. Create in `src/common/hooks/` as `useName.ts`
2. Export from `src/common/hooks/index.ts`
3. Add test as `useName.test.ts`

**New API Service:**

1. Add to `src/common/repo/` as `ServiceName.ts`
2. Export from `src/common/repo/index.ts`
3. Add tests with mocked axios

**New Theme Token:**

1. Add to appropriate file in `src/theme/tokens/`
2. Update `src/theme/appTheme.ts` if needed
3. Export from `src/theme/index.ts`

**New Feature (Electron Example):**

1. Create `electron-example/src/features/featureName/`
2. Structure: `repo/`, `state/`, `view/`, `viewmodel/`
3. Follow MVVM pattern: ViewModel as hook, View as component

## Special Directories

**`dist/`:**

- Purpose: Built library output (ES and UMD bundles)
- Generated: Yes (by `npm run build`)
- Committed: Yes (for npm distribution)

**`.storybook/`:**

- Purpose: Storybook documentation configuration
- Generated: No
- Committed: Yes

**`node_modules/`:**

- Purpose: Installed dependencies
- Generated: Yes (by npm install)
- Committed: No

**`example/` and `electron-example/`:**

- Purpose: Consumer application examples
- Generated: No (template/reference)
- Committed: Yes

**`docs/`:**

- Purpose: Additional documentation
- Generated: No
- Committed: Yes

---

_Structure analysis: 2026-04-09_
