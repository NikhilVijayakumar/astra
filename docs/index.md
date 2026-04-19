# Astra — AI-Native Documentation Index

## Navigation Guide

**Task-based quick reference:**
- **Add/modify UI component** → src/common/components/{atoms,molecules,organisms,templates}/
- **API calls** → src/common/repo/ (ApiService)
- **Theme/styling** → src/theme/, src/common/theme/
- **i18n/localization** → src/common/localization/
- **State management** → src/common/hooks/useDataState
- **Build/config** → vite.config.js, package.json

**Debug & Fix:**
- **Debug API error** → src/common/repo/ApiService.ts + src/common/hooks/useDataState.ts
- **Fix UI style** → src/theme/tokens/ (colors, spacing, typography)
- **Fix state bug** → src/common/state/AppState.ts

**Docs:**
- **Core features** → docs/feature/
- **Integration** → docs/integration-guide/
- **Component docs** → docs/feature/components/

## Global Constants

| Key | Value |
|-----|------|
| Name | astra |
| Version | 1.0.6 |
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
| uuid | 11.0.2 |

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

### Core Features (HIGH PRIORITY)
### Theming
- **feature/theming/hooks.md** → <!-- generated-by: gsd-doc-writer -->  # useTheme Hook
- **feature/theming/provider.md** → <!-- generated-by: gsd-doc-writer -->  # ThemeProvider
- **feature/theming/README.md** → <!-- generated-by: gsd-doc-writer -->  # Theming System
- **feature/theming/ThemeToggle.md** → <!-- generated-by: gsd-doc-writer -->  # ThemeToggle Component
- **feature/theming/tokens.md** → <!-- generated-by: gsd-doc-writer -->  # Design Tokens


### Localization
- **feature/localization/hooks.md** → <!-- generated-by: gsd-doc-writer -->  # useLanguage Hook
- **feature/localization/patterns.md** → <!-- generated-by: gsd-doc-writer -->  # Translation Patterns
- **feature/localization/provider.md** → <!-- generated-by: gsd-doc-writer -->  # LanguageProvider
- **feature/localization/README.md** → <!-- generated-by: gsd-doc-writer -->  # Localization System


### State
- **feature/state/AppStateHandler.md** → # AppStateHandler Component  A conditional UI router that renders Loading, Error
- **feature/state/README.md** → # State Management in Astra  Astra uses a **centralized state pattern** with MVV
- **feature/state/useDataState.md** → # useDataState Hook API  Manages async state with built-in loading, success, and


### Repository
- **feature/repository/api-service.md** → # ApiService  HTTP client wrapper implementing the Repository pattern.
- **feature/repository/http-status.md** → # HttpStatusCode  Enum of HTTP status codes used throughout the repository layer
- **feature/repository/README.md** → # Repository Layer  Provides a unified API client abstraction using the Reposito
- **feature/repository/server-response.md** → # ServerResponse<T>  Generic wrapper for API responses with success/error states


### Components
- **feature/components/atomic-design/atoms.md** → # Atoms  **Tier:** Atoms — Fundamental UI Primitives
- **feature/components/atomic-design/molecules.md** → # Molecules  **Tier:** Molecules — Composed Functional Units
- **feature/components/atomic-design/organisms.md** → # Organisms  **Tier:** Organisms — Complex UI Sections
- **feature/components/atomic-design/README.md** → # Atomic Design Methodology  **Purpose:** Establishes classification rules for U
- **feature/components/atomic-design/templates.md** → # Templates  **Tier:** Templates — Page-Level Layouts
- **feature/components/atoms/SeverityBadge.md** → --- tier: atom ---
- **feature/components/atoms/StatusDot.md** → --- tier: atom ---
- **feature/components/molecules/Card.md** → --- tier: molecule ---
- **feature/components/molecules/JsonViewer.md** → --- tier: template ---
- **feature/components/molecules/Notification.md** → --- tier: molecule ---
- **feature/components/molecules/TrendMetricCard.md** → --- tier: molecule ---
- **feature/components/organisms/CsvViewer.md** → --- tier: template ---
- **feature/components/organisms/FileViewerRouter.md** → --- tier: template ---
- **feature/components/README.md** → --- tier_index:   atoms: ./atoms/
- **feature/components/templates/HeroSection.md** → --- tier: template ---
- **feature/components/templates/PageHeader.md** → --- tier: template ---
- **feature/components/templates/SummaryPanel.md** → --- tier: template ---


### MVVM
- **feature/mvvm/best-practices.md** → # MVVM Best Practices  ## Do
- **feature/mvvm/pattern.md** → # MVVM Implementation Pattern  ## ViewModel: useDataState Hook
- **feature/mvvm/README.md** → # MVVM Architecture in Astra  Astra implements the **Model-View-ViewModel** patt



### Integration Guides
### Guides
- **integration-guide/electron.md** → # Electron Integration Guide  Astra works seamlessly in Electron desktop applica
- **integration-guide/getting-started.md** → # Getting Started with Astra  A comprehensive guide to integrating the Astra lib
- **integration-guide/react.md** → # React Integration Guide  This guide covers integrating Astra into React applic



### PR / Integration Docs (LOW PRIORITY)
### PR Docs
- **issue/ASTRA-EXPORT-SURFACE-GAP-2026-03-25.md** → # ASTRA Export Surface Gap (2026-03-25)  ## Scope
- **issue/ASTRA-INTEGRATION-GAPS-2026-03-25.md** → # Astra Integration Gap Log for Prana (2026-03-25)  Purpose:
- **pr/dhi/pr1/HANDOVER_CONTRACT.md** → # DHI ← Astra PR1 Component Promotion: Handover Contract  **Date**: 2026-03-26
- **pr/dhi/pr1/INDEX.md** → # 🎁 DHI Handover Package - Final Delivery  **Delivered**: 2026-03-26
- **pr/dhi/pr1/INTEGRATION_SUMMARY.md** → # DHI ← Astra PR1: Complete Handover Documentation Summary  **Generated**: 202
- **pr/dhi/pr1/Mapping-DHI.md** → # DHI → Astra Component Mapping (PR1)  **Status**: ✅ Ready for Integration
- **pr/dhi/pr1/plan.md** → # DHI PR1 Integration Plan (Feasibility + Astra Alignment)  ## Scope Reviewed
- **pr/dhi/pr1/README.md** → # DHI ← Astra PR1 Integration Index  **Status**: ✅ **Ready for DHI Consumption
- **pr/dristi/request/01-Atomic-Elements.md** → # 01 Atomic Elements  > Request snapshot (2026-03-31).
- **pr/dristi/request/02-Molecular-Layouts.md** → # 02 Molecular Layouts  > Request snapshot (2026-03-31).
- **pr/dristi/request/03-Organism-Complex-UI.md** → # 03 Organism Complex UI  > Request snapshot (2026-03-31).
- **pr/dristi/request/Astra-PR-Specification.md** → # Astra PR Specification (Drishti -> Astra)  Date: 2026-03-31
- **pr/dristi/request/Component-Audit-Manifest.md** → # Component Audit Manifest (Drishti -> Astra)  Generated: 2026-03-31
- **pr/dristi/request/Component-Inventory.md** → # Component Inventory (Drishti -> Astra)  > Request snapshot (2026-03-31).
- **pr/dristi/request/Handover-Contract.md** → # Handover Contract (Drishti -> Astra)  ## Purpose
- **pr/dristi/request/Integration-Mapping-Log.md** → # Integration Mapping Log (Drishti <-> Astra)  Created: 2026-03-31
- **pr/dristi/request/Mapping-Template.md** → # Drishti -> Astra Mapping Template  Fill one row per candidate returned by As
- **pr/dristi/response/HANDOVER_CONTRACT.md** → # Dristi -> Astra Handover Contract  ## 1. Astra Responsibilities (Completed)
- **pr/dristi/response/INDEX.md** → # Dristi Integration Index  ## Handover Documents
- **pr/dristi/response/INTEGRATION_SUMMARY.md** → # Integration Workflow Summary  The Dristi UI component promotion is now compl
- **pr/dristi/response/Mapping-Dristi.md** → # Dristi -> Astra Mapping (Response)  Status: Completed
- **pr/dristi/response/README.md** → # Dristi <- Astra PR Response  Status: Ready for Dristi consumption
- **pr/prana/request/01-Atomic-Elements.md** → # 01 Atomic Elements  ## Goal
- **pr/prana/request/02-Molecular-Layouts.md** → # 02 Molecular Layouts  ## Goal
- **pr/prana/request/03-Organism-Complex-UI.md** → # 03 Organism Complex UI  ## Goal
- **pr/prana/request/Component-Inventory.md** → # Component Inventory (Prana -> Astra)  ## Scope
- **pr/prana/request/Handover-Contract.md** → # Handover Contract (Prana -> Astra)  ## Purpose
- **pr/prana/request/Mapping-Template.md** → # Prana -> Astra Mapping Template  Fill one row per candidate returned by Astra.
- **pr/prana/response/HANDOVER_CONTRACT.md** → # Prana <- Astra Handover Contract (Response)  Date: 2026-03-28
- **pr/prana/response/INDEX.md** → # Prana Response Index  Delivered: 2026-03-28
- **pr/prana/response/INTEGRATION_SUMMARY.md** → # Prana Response Integration Summary  Generated: 2026-03-28
- **pr/prana/response/Mapping-Prana.md** → # Prana -> Astra Mapping (Response)  Status: Completed
- **pr/prana/response/plan.md** → # Astra Plan and Deep Analysis (Prana Request)  Date: 2026-03-28
- **pr/prana/response/README.md** → # Prana <- Astra PR Response  Status: Ready for Prana consumption
- **pr/sangama/request/Astra-PR-Specification.md** → # Astra PR Specification (Sangama → Astra)  Date: 2026-03-31
- **pr/sangama/request/Component-Audit-Manifest.md** → # Component Audit Manifest (Sangama → Astra)  Generated: 2026-03-31
- **pr/sangama/request/Integration-Mapping-Log.md** → # Integration Mapping Log (Sangama ↔ Astra)  Created: 2026-03-31
- **pr/sangama/response/HANDOVER_CONTRACT.md** → # Sangama ← Astra Handover Contract (Response)  Date: 2026-04-01
- **pr/sangama/response/INDEX.md** → # Sangama Response Index  Delivered: 2026-04-01
- **pr/sangama/response/INTEGRATION_SUMMARY.md** → # Sangama Response Integration Summary  Generated: 2026-04-01
- **pr/sangama/response/Mapping-Sangama.md** → # Sangama -> Astra Mapping (Response)  Status: Completed
- **pr/sangama/response/plan.md** → # Astra Plan and Deep Analysis (Sangama Request)  Date: 2026-04-01
- **pr/sangama/response/README.md** → # Sangama ← Astra PR Response  Status: Ready for Sangama consumption



## Rules

- All components use theme tokens - never hardcode colors
- All components stateless with data via props
- Use localization - never hardcode strings
- Follow Atomic Design methodology

## API Surface

See: src/lib.ts

## Maintenance

- Config: scripts/wiki-steps.json
- Generated: 2026-04-19
- Version: 1.0.6
