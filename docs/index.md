# Astra — AI-Native Documentation Index

## Navigation Guide

**Task-based quick reference:**
- **Add/modify UI component** → src/common/components/{atoms,molecules,organisms,templates}/
- **API calls** → src/common/repo/ (ApiService)
- **Theme/styling** → src/theme/, src/common/theme/
- **i18n/localization** → src/common/localization/
- **State management** → src/common/hooks/useDataState.ts (hook), src/common/state/AppState.ts (types)
- **Build/config** → vite.config.js, package.json

**Debug & Fix:**
- **Debug API error** → src/common/repo/
- **Fix UI style** → src/theme/tokens/, src/common/theme/
- **Fix state bug** → src/common/state/, src/common/hooks/

**Docs:**
- **Core features** → docs/feature/
- **Integration** → docs/integration-guide/
- **Component docs** → docs/feature/components/
- **Atomic Design** → docs/feature/components/atomic-design/

## Global Constants

| Key | Value |
|-----|------|
| Name | astra |
| Version | 1.0.7 |
| Type | React + Electron Library |
| Build | Vite (ESM + UMD) |

## High-Level Vision

Astra is a React + Electron boilerplate library providing a production-ready foundation with MVVM architecture, Material UI 7 theming, localization, type-safe API, and 46+ UI components organized by Atomic Design.

## Dependency Stack

| Library | Version |
|---------|---------|
| @emotion/react | 11.13.3 |
| @emotion/styled | 11.13.0 |
| @fontsource/roboto | 5.1.0 |
| @mui/icons-material | 7.2.0 |
| @mui/lab | 7.0.0-beta.14  |
| @mui/material | 7.2.0 |
| @mui/x-date-pickers | 8.7.0 |
| @types/react | 19.1.8 |
| @types/react-dom | 19.1.6 |
| @types/uuid | 10.0.0 |
| axios | 1.15.0 |
| framer-motion | ^11.18.2 |
| lucide-react | ^0.400.0 |
| react | ^19.2.3 |
| react-dom | ^19.2.3 |
| react-markdown | ^10.1.0 |
| react-syntax-highlighter | ^16.1.1 |
| uuid | 14.0.0 |

## System Map

```
├── App.css
├── App.tsx
├── common
│   ├── components
│   │   ├── atoms
│   │   ├── index.ts
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── templates
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useDataState.test.ts
│   │   ├── useDataState.ts
│   ├── index.ts
│   ├── localization
│   │   ├── index.ts
│   │   ├── LanguageComponent.tsx
│   │   ├── LanguageContext.ts
│   │   ├── LanguageProvider.test.tsx
│   │   ├── LanguageProvider.tsx
│   ├── repo
│   │   ├── ApiService.test.ts
│   │   ├── ApiService.ts
│   │   ├── apiServiceFactory.ts
│   │   ├── APITypes.ts
│   │   ├── HttpStatusCode.test.ts
│   │   ├── HttpStatusCode.ts
│   │   ├── index.ts
│   │   ├── ServerResponse.ts
│   ├── state
│   │   ├── AppState.ts
│   │   ├── index.ts
│   ├── theme
│   │   ├── index.ts
│   │   ├── themeContext.ts
│   │   ├── themeData.ts
│   │   ├── ThemeProvider.test.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
├── index.css
├── lib.ts
├── main.tsx
├── publicExports.test.ts
├── theme
│   ├── appTheme.ts
│   ├── index.ts
│   ├── tokens
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
├── types
│   ├── global.d.ts
├── vite-env.d.ts

```

## Feature Details

### Theming (src/theme/, src/common/theme/)
- **Purpose:** Material UI 7 theme system with design tokens
- **Key:** ThemeProvider, ThemeToggle, theme tokens (colors, typography, spacing)
- **Usage:** Wrap app, use tokens (never hardcode colors)
- **Mode:** Light/Dark supported

### Localization (src/common/localization/)
- **Purpose:** Internationalization (i18n)
- **Key:** LanguageProvider, useLanguage hook
- **Usage:** Provide translations, use hook to access
- **Languages:** Configurable, any language

### State Management (src/common/hooks/)
- **Purpose:** MVVM pattern with useDataState
- **Key:** useDataState hook, AppStateHandler
- **States:** INIT, LOADING, COMPLETED, ERROR
- **Usage:** Data fetching with auto state handling

### Repository (src/common/repo/)
- **Purpose:** Type-safe API layer (Axios wrapper)
- **Key:** ApiService, HttpStatusCode, ServerResponse
- **Usage:** Create instance, use typed methods
- **Errors:** Built-in status code handling

### Component Library (src/common/components/)
- **Organized by:** Atomic Design (atoms → molecules → organisms → templates)
- **Tiers:** 
  - Atoms: StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState (5)
  - Molecules: Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer (6)
  - Organisms: DataTable, DecisionActionCard, TimelineNode, +29 more (32)
  - Templates: PageHeader, SummaryPanel, HeroSection (3)

## Concept Mapping

| Concept | Implementation | Location |
|--------|---------------|----------|
| MVVM State | useDataState | src/common/hooks/useDataState.ts |
| Theme | ThemeProvider | src/common/theme/themeContext.ts |
| Localization | LanguageProvider | src/common/localization/LanguageContext.ts |
| API | ApiService | src/common/repo/ApiService.ts |
| Components | Atomic Design | src/common/components/ |

## Edit Map

| Task | Location |
|------|---------|
| Add component | src/common/components/{tier}/ |
| Add feature doc | docs/feature/ |
| Update theming | src/theme/ |
| Add integration guide | docs/integration-guide/ |

## Critical Flows

### Data Flow (API to UI)
Hook component → useDataState() → ApiService.get/post/put/delete() → ServerResponse<T> → Render data

### Theme Flow
Wrap <ThemeProvider> → useTheme() hook → MUI theme tokens → component styles

### Localization Flow
Wrap <LanguageProvider> → useLanguage() hook → translations['key'] → UI text

### Component Creation
Define props → Create {Component}.tsx → Export from {tier}/index.ts → Add doc to docs/feature/components/

### State Flow
INIT → (loading) → LOADING → (success) → COMPLETED | (error) → ERROR

### Build Flow
npm run build → Vite + vite-plugin-dts → dist/astra.es.js + dist/astra.umd.js + dist/lib.d.ts

## Documentation Manifest

### Core Features (theming, localization, state, repository, mvvm)
### Core
- **feature/localization/hooks.md** →  useLanguage Hook The `useLanguage` hook provides access to the i18n context. It
- **feature/localization/patterns.md** →  Translation Patterns Guidelines for organizing translations and accessing local
- **feature/localization/provider.md** →  LanguageProvider The `LanguageProvider` component wraps your React application 
- **feature/localization/README.md** →  Localization System The Astra i18n system provides React context-based internat
- **feature/mvvm/best-practices.md** → MVVM Best Practices Do ✅ Use for async data flows — API calls, file loading, com
- **feature/mvvm/pattern.md** → MVVM Implementation Pattern ViewModel: useDataState Hook The `useDataState<T>` h
- **feature/mvvm/README.md** → MVVM Architecture in Astra Astra implements the Model-View-ViewModel pattern to 
- **feature/repository/api-service.md** → ApiService HTTP client wrapper implementing the Repository pattern. Class Overvi
- **feature/repository/http-status.md** → HttpStatusCode Enum of HTTP status codes used throughout the repository layer. E
- **feature/repository/README.md** → Repository Layer Provides a unified API client abstraction using the Repository 
- **feature/repository/server-response.md** → ServerResponse<T> Generic wrapper for API responses with success/error states. C
- **feature/state/AppStateHandler.md** → AppStateHandler Component A conditional UI router that renders Loading, Error, E
- **feature/state/README.md** → State Management in Astra Astra uses a centralized state pattern with MVVM to ha
- **feature/state/useDataState.md** → useDataState Hook API Manages async state with built-in loading, success, and er
- **feature/theming/hooks.md** →  useTheme Hook The `useTheme` hook provides access to theme context values in an
- **feature/theming/provider.md** →  ThemeProvider The `ThemeProvider` component wraps your application to provide t
- **feature/theming/README.md** →  Theming System The theming system provides light/dark mode support using MUI's 
- **feature/theming/ThemeToggle.md** →  ThemeToggle Component A Material UI icon button that toggles between light and 
- **feature/theming/tokens.md** →  Design Tokens Design tokens define the visual foundation of the theming system:



### Component Docs
### Components
- **feature/components/atomic-design/atoms.md** → Atoms Tier: Atoms — Fundamental UI Primitives Definition Atoms are the smallest,
- **feature/components/atomic-design/molecules.md** → Molecules Tier: Molecules — Composed Functional Units Definition Molecules are s
- **feature/components/atomic-design/organisms.md** → Organisms Tier: Organisms — Complex UI Sections Definition Organisms are complex
- **feature/components/atomic-design/README.md** → Atomic Design Methodology Purpose: Establishes classification rules for UI compo
- **feature/components/atomic-design/templates.md** → Templates Tier: Templates — Page-Level Layouts Definition Templates define the s
- **feature/components/atoms/SeverityBadge.md** →  tier: atom SeverityBadge An atomic component that displays a severity label wit
- **feature/components/atoms/StatusDot.md** →  tier: atom StatusDot An atomic component that displays a colored dot representi
- **feature/components/molecules/Card.md** →  tier: molecule Card A molecular component that provides a styled container with
- **feature/components/molecules/JsonViewer.md** →  tier: molecule JsonViewer A file viewer component that displays JSON data with 
- **feature/components/molecules/Notification.md** →  tier: molecule Notification A molecular component that displays a snackbar-styl
- **feature/components/molecules/TrendMetricCard.md** →  tier: molecule TrendMetricCard A molecular component that displays a metric val
- **feature/components/organisms/CsvViewer.md** →  tier: template CsvViewer A file viewer component that displays CSV data in a pa
- **feature/components/organisms/FileViewerRouter.md** →  tier: template FileViewerRouter A file viewer component that routes to the appr
- **feature/components/README.md** →  tier_index: atoms: ./atoms/ molecules: ./molecules/ organisms: ./organisms/ tem
- **feature/components/templates/HeroSection.md** →  tier: template HeroSection A layout component that displays a prominent headlin
- **feature/components/templates/PageHeader.md** →  tier: template PageHeader A layout component that provides a standardized page-
- **feature/components/templates/SummaryPanel.md** →  tier: template SummaryPanel A layout component that displays a titled collectio



### Integration Guides (react, electron, getting-started)
### Guides
- **integration-guide/electron.md** → Electron Integration Guide Astra works seamlessly in Electron desktop applicatio
- **integration-guide/getting-started.md** → Getting Started with Astra A comprehensive guide to integrating the Astra librar
- **integration-guide/react.md** → React Integration Guide This guide covers integrating Astra into React applicati



> **Archived:** PR/Integration docs in docs/pr/ (historical)

## Rules

- All components use theme tokens - never hardcode colors
- All components stateless with data via props
- Use localization - never hardcode strings
- Follow Atomic Design methodology

## API Surface

See: src/lib.ts

## Maintenance

- Config: scripts/wiki-steps.json
- Generated: 2026-04-26
- Version: 1.0.7
