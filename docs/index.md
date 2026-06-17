# Astra — AI-Native Documentation Index

## Navigation Guide

**Task-based quick reference:**
- **MVVM / data fetching** → `src/common/hooks/useDataState.ts`
- **UI state routing** → `src/common/components/organisms/AppStateHandler.tsx`
- **API calls** → `src/common/repo/ApiService.ts`
- **State types** → `src/common/state/AppState.ts`
- **HTTP codes** → `src/common/repo/HttpStatusCode.ts`
- **Localization (provider)** → `src/common/localization/LanguageProvider.tsx`
- **Template rendering** → `src/services/templateRenderer.ts`
- **Build/config** → `vite.config.ts`, `package.json`
- **UI components / theming / design tokens** → see [Prati](https://github.com/NikhilVijayakumar/prati)

**Debug & Fix:**
- **Debug API error** → `src/common/repo/`
- **Fix state bug** → `src/common/state/`, `src/common/hooks/`
- **Fix template render** → `src/services/templateRenderer.ts`, `src/templates/`
- **Fix UI component / theme** → Prati repo

**Docs:**
- **Architecture** → `docs/raw/architecture/`
- **MVVM / state / repo** → `docs/raw/feature-technical/`
- **Integration** → `docs/raw/architecture/integration-contracts/`
- **Components / design system** → Prati `docs/raw/`

## Global Constants

| Key | Value |
|-----|-------|
| Name | astra |
| Version | 1.1.1 |
| Type | React + Electron Library |
| Build | Vite (ESM + UMD) |
| UI Dependency | prati (file:../Prati or git URL) |

## High-Level Vision

Astra is the architecture layer of the stack. It provides MVVM state management, a type-safe API layer (Axios), localization provider, AppStateHandler (state-to-UI bridge), and Handlebars template rendering. UI components, design tokens, and theming are owned by [Prati](https://github.com/NikhilVijayakumar/prati) — Astra re-exports Prati for backward compatibility.

## Dependency Stack

| Library | Version | Role |
|---------|---------|------|
| prati | file:../Prati | UI components, design system |
| axios | 1.15.0 | HTTP client |
| handlebars | 4.7.9 | Template rendering |
| react | ^19.2.3 | Peer |
| react-dom | ^19.2.3 | Peer |

## System Map

```
src/
├── lib.ts                          ← entry: re-exports prati + own modules
├── common/
│   ├── index.ts
│   ├── hooks/
│   │   ├── useDataState.ts         ← MVVM hook
│   │   └── index.ts
│   ├── repo/
│   │   ├── ApiService.ts           ← HTTP client
│   │   ├── HttpStatusCode.ts       ← status enum
│   │   ├── ServerResponse.ts       ← response wrapper
│   │   ├── APITypes.ts
│   │   ├── apiServiceFactory.ts
│   │   └── index.ts
│   ├── state/
│   │   ├── AppState.ts             ← AppState<T>, StateType, StateCode
│   │   └── index.ts
│   ├── components/
│   │   └── organisms/
│   │       ├── AppStateHandler.tsx ← bridges Astra state + Prati atoms
│   │       └── index.ts
│   └── localization/
│       └── LanguageProvider.tsx    ← injects translations into Prati's LanguageContext
├── services/
│   └── templateRenderer.ts        ← Handlebars renderer
├── templates/
│   ├── index.ts
│   ├── base-layout.hbs
│   ├── otp-email.hbs
│   ├── task-summary.hbs
│   └── alert.hbs
└── types/
    └── template.types.ts
```

## Feature Details

### MVVM State (src/common/hooks/)
- **Purpose:** Manages async data fetching and state transitions
- **Key:** `useDataState<T>()` → returns `[appState, execute, setAppState]`
- **States:** `INIT → LOADING → COMPLETED`
- **Usage:** Call `execute(() => repo.get())`, render based on `appState.state`

### AppStateHandler (src/common/components/organisms/)
- **Purpose:** UI router that maps `AppState` to Prati atoms
- **Key:** Renders `LoadingState` | `ErrorState` | `EmptyState` | `SuccessComponent`
- **Depends on:** `AppState` (Astra state), `LoadingState`/`ErrorState`/`EmptyState` (Prati atoms)

### Repository (src/common/repo/)
- **Purpose:** Type-safe API layer (Axios wrapper)
- **Key:** `ApiService`, `HttpStatusCode`, `ServerResponse<T>`
- **Usage:** `new ApiService(baseUrl, literal)` → `.get<T>()`, `.post<T>()`, `.put<T>()`, `.delete<T>()`

### State Types (src/common/state/)
- **Purpose:** Shared state type definitions
- **Key:** `AppState<T>`, `StateType` enum, `StateCode` enum
- **Note:** Used by both `useDataState` hook and `AppStateHandler`

### Localization Provider (src/common/localization/)
- **Purpose:** Injects translations into Prati's `LanguageContext`
- **Key:** `LanguageProvider` wraps app, passes `translations` + `availableLanguages`
- **Context + hook:** `useLanguage`, `LanguageSelector`, `LanguageContext` — provided by Prati

### Template Rendering (src/services/)
- **Purpose:** Handlebars-based template renderer (Node + browser)
- **Key:** `createTemplateRenderer(config)`, `templateRenderer` (default instance)
- **Templates:** Bundled `.hbs` files in `src/templates/`

### UI Components & Design System
> Owned by **Prati**. Astra re-exports all of Prati via `export * from "prati"` in `lib.ts`.
> See [Prati documentation](https://github.com/NikhilVijayakumar/prati/blob/main/README.md).

## Concept Mapping

| Concept | Implementation | Location |
|---------|---------------|----------|
| MVVM ViewModel | `useDataState` | `src/common/hooks/useDataState.ts` |
| State types | `AppState<T>`, `StateType` | `src/common/state/AppState.ts` |
| API client | `ApiService` | `src/common/repo/ApiService.ts` |
| UI state bridge | `AppStateHandler` | `src/common/components/organisms/AppStateHandler.tsx` |
| i18n provider | `LanguageProvider` | `src/common/localization/LanguageProvider.tsx` |
| Template engine | `templateRenderer` | `src/services/templateRenderer.ts` |
| Theme / Components | via Prati | `node_modules/prati` |

## Critical Flows

### Data Flow (API to UI)
```
Component → useDataState() → execute(repo.method) → ApiService → ServerResponse<T> → AppState<T> → AppStateHandler → Prati atoms or SuccessComponent
```

### Localization Flow
```
Wrap <LanguageProvider translations={...}> → Prati's LanguageContext populated → useLanguage() hook → translations['key'] → UI text
```

### State Flow
```
INIT → (execute called) → LOADING → (response) → COMPLETED [isSuccess | isError]
```

### Build Flow
```
npm run build → Vite + vite-plugin-dts → dist/astra.es.js (externalizes prati, react, @mui/*)
```

## Documentation Manifest

### Architecture
- `docs/raw/architecture/core/api-surface.md`
- `docs/raw/architecture/core/hooks.md`
- `docs/raw/architecture/core/localization.md`
- `docs/raw/architecture/core/mvvm-pattern.md`
- `docs/raw/architecture/core/repository.md`
- `docs/raw/architecture/core/state-management.md`
- `docs/raw/architecture/core/dependencies.md`
- `docs/raw/architecture/invariants/dependency-safety.md`
- `docs/raw/architecture/invariants/mvvm-separation.md`
- `docs/raw/architecture/invariants/repository-isolation.md`
- `docs/raw/architecture/invariants/localization.md`
- `docs/raw/architecture/invariants/public-api-stability.md`
- `docs/raw/architecture/integration-contracts/getting-started.md`
- `docs/raw/architecture/integration-contracts/react.md`
- `docs/raw/architecture/integration-contracts/electron.md`

### MVVM / State / Repository
- `docs/raw/feature-technical/mvvm/pattern.md`
- `docs/raw/feature-technical/mvvm/best-practices.md`
- `docs/raw/feature-technical/repository/api-service.md`
- `docs/raw/feature-technical/repository/http-status.md`
- `docs/raw/feature-technical/repository/server-response.md`
- `docs/raw/feature-technical/state/README.md`
- `docs/raw/feature-technical/state/useDataState.md`
- `docs/raw/feature-technical/state/AppStateHandler.md`
- `docs/raw/feature-technical/localization/README.md`
- `docs/raw/feature-technical/localization/provider.md`
- `docs/raw/feature-technical/localization/hooks.md`

### UI Components & Design System
> See Prati repo: `docs/raw/feature/components/`, `docs/raw/feature/theming/`, `docs/raw/design-system/`

## Rules

- All state transitions go through `useDataState` — no ad-hoc `useState` for async
- API calls return `ServerResponse<T>` — never throw raw errors to components
- Use `AppStateHandler` for loading/error/empty — no inline conditionals
- Use `LanguageProvider` at app root — never hardcode UI strings in Astra code
- Components (visual layer) belong in Prati — Astra only owns `AppStateHandler`

## API Surface

See: `src/lib.ts`

## Maintenance

- Version: 1.1.1
- UI dependency: Prati (`file:../Prati` locally, git URL for production)
