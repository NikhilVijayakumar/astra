# Astra — AI-Native Documentation Index

## Navigation Guide

**Task-based quick reference:**
- **Add/modify UI component** → src/common/components/ ( Atomic Design tiers)
- **API calls** → src/common/repo/ApiService
- **Theme/styling** → src/theme/, src/common/theme/
- **i18n/localization** → src/common/localization/
- **State management** → src/common/hooks/useDataState
- **Build/config** → vite.config.js, package.json

**For detailed docs:** See Feature Details section below.

## Global Constants

| Key | Value |
|-----|------|
| Name | astra |
| Version | 1.0.6 |
| License | N/A |

## High-Level Vision

Astra is a React + Electron boilerplate library providing a production-ready foundation for building applications. A robust React library designed to serve as a comprehensive boilerplate for building scalable applications. It implements **MVVM (Model-View-ViewModel)** patterns, handles **localization**, manages **state**, and provides a solid foundation for **theming** and **API interactions**.

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
  - Organisms: DataTable, DecisionActionCard, TimelineNode, +30 more (33)
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

### Create component
Define interface → Create component → Export index → Add documentation → Update index.md

### Add feature
Create docs/feature/[name]/ → Add to wiki-steps.json → Update generate-index.js

## Documentation Manifest

- **docs\components\file-viewers.md** → # File Viewers  Source:
- **docs\components\navigation.md** → # Navigation Components  Source:
- **docs\components\ui.md** → # UI Components  Source files:
- **docs\components\wrapper.md** → # Wrapper Components  Source:
- **docs\feature\components\atomic-design\atoms.md** → # Atoms  **Tier:** Atoms — Fundamental UI Primitives
- **docs\feature\components\atomic-design\molecules.md** → # Molecules  **Tier:** Molecules — Composed Functional Units
- **docs\feature\components\atomic-design\organisms.md** → # Organisms  **Tier:** Organisms — Complex UI Sections
- **docs\feature\components\atomic-design\README.md** → # Atomic Design Methodology  **Purpose:** Establishes classification rules for UI components in Astra, ensuring consistent composition patterns across the library.
- **docs\feature\components\atomic-design\templates.md** → # Templates  **Tier:** Templates — Page-Level Layouts
- **docs\feature\components\atoms\SeverityBadge.md** → --- tier: atom ---
- **docs\feature\components\atoms\StatusDot.md** → --- tier: atom ---
- **docs\feature\components\molecules\Card.md** → --- tier: molecule ---
- **docs\feature\components\molecules\JsonViewer.md** → --- tier: template ---
- **docs\feature\components\molecules\Notification.md** → --- tier: molecule ---
- **docs\feature\components\molecules\TrendMetricCard.md** → --- tier: molecule ---
- **docs\feature\components\organisms\CsvViewer.md** → --- tier: template ---
- **docs\feature\components\organisms\FileViewerRouter.md** → --- tier: template ---
- **docs\feature\components\README.md** → --- tier_index:   atoms: ./atoms/
- **docs\feature\components\templates\HeroSection.md** → --- tier: template ---
- **docs\feature\components\templates\PageHeader.md** → --- tier: template ---
- **docs\feature\components\templates\SummaryPanel.md** → --- tier: template ---
- **docs\feature\localization\hooks.md** → <!-- generated-by: gsd-doc-writer -->  # useLanguage Hook
- **docs\feature\localization\patterns.md** → <!-- generated-by: gsd-doc-writer -->  # Translation Patterns
- **docs\feature\localization\provider.md** → <!-- generated-by: gsd-doc-writer -->  # LanguageProvider
- **docs\feature\localization\README.md** → <!-- generated-by: gsd-doc-writer -->  # Localization System
- **docs\feature\mvvm\best-practices.md** → # MVVM Best Practices  ## Do
- **docs\feature\mvvm\pattern.md** → # MVVM Implementation Pattern  ## ViewModel: useDataState Hook
- **docs\feature\mvvm\README.md** → # MVVM Architecture in Astra  Astra implements the **Model-View-ViewModel** pattern to separate UI from business logic.
- **docs\feature\README.md** → # Feature Documentation  Modular documentation for Astra library features. Each module contains focused, atomic documents.
- **docs\feature\repository\api-service.md** → # ApiService  HTTP client wrapper implementing the Repository pattern.
- **docs\feature\repository\http-status.md** → # HttpStatusCode  Enum of HTTP status codes used throughout the repository layer.
- **docs\feature\repository\README.md** → # Repository Layer  Provides a unified API client abstraction using the Repository pattern.
- **docs\feature\repository\server-response.md** → # ServerResponse<T>  Generic wrapper for API responses with success/error states.
- **docs\feature\state\AppStateHandler.md** → # AppStateHandler Component  A conditional UI router that renders Loading, Error, Empty, or Success states.
- **docs\feature\state\README.md** → # State Management in Astra  Astra uses a **centralized state pattern** with MVVM to handle async data flows.
- **docs\feature\state\useDataState.md** → # useDataState Hook API  Manages async state with built-in loading, success, and error tracking.
- **docs\feature\theming\hooks.md** → <!-- generated-by: gsd-doc-writer -->  # useTheme Hook
- **docs\feature\theming\provider.md** → <!-- generated-by: gsd-doc-writer -->  # ThemeProvider
- **docs\feature\theming\README.md** → <!-- generated-by: gsd-doc-writer -->  # Theming System
- **docs\feature\theming\ThemeToggle.md** → <!-- generated-by: gsd-doc-writer -->  # ThemeToggle Component
- **docs\feature\theming\tokens.md** → <!-- generated-by: gsd-doc-writer -->  # Design Tokens
- **docs\index.md** → # Astra — AI-Native Documentation Index  ## Navigation Guide
- **docs\integration-guide\electron.md** → # Electron Integration Guide  Astra works seamlessly in Electron desktop applications. This guide covers integration patterns specific to Electron.
- **docs\integration-guide\getting-started.md** → # Getting Started with Astra  A comprehensive guide to integrating the Astra library into your React application.
- **docs\integration-guide\react.md** → # React Integration Guide  This guide covers integrating Astra into React applications using Vite, Next.js, or Create React App.
- **docs\issue\ASTRA-EXPORT-SURFACE-GAP-2026-03-25.md** → # ASTRA Export Surface Gap (2026-03-25)  ## Scope
- **docs\issue\ASTRA-INTEGRATION-GAPS-2026-03-25.md** → # Astra Integration Gap Log for Prana (2026-03-25)  Purpose:
- **docs\pr\dhi\pr1\HANDOVER_CONTRACT.md** → # DHI ← Astra PR1 Component Promotion: Handover Contract  **Date**: 2026-03-26
- **docs\pr\dhi\pr1\INDEX.md** → # 🎁 DHI Handover Package - Final Delivery  **Delivered**: 2026-03-26
- **docs\pr\dhi\pr1\INTEGRATION_SUMMARY.md** → # DHI ← Astra PR1: Complete Handover Documentation Summary  **Generated**: 2026-03-26
- **docs\pr\dhi\pr1\Mapping-DHI.md** → # DHI → Astra Component Mapping (PR1)  **Status**: ✅ Ready for Integration
- **docs\pr\dhi\pr1\plan.md** → # DHI PR1 Integration Plan (Feasibility + Astra Alignment)  ## Scope Reviewed
- **docs\pr\dhi\pr1\README.md** → # DHI ← Astra PR1 Integration Index  **Status**: ✅ **Ready for DHI Consumption**
- **docs\pr\dristi\request\01-Atomic-Elements.md** → # 01 Atomic Elements  > Request snapshot (2026-03-31).
- **docs\pr\dristi\request\02-Molecular-Layouts.md** → # 02 Molecular Layouts  > Request snapshot (2026-03-31).
- **docs\pr\dristi\request\03-Organism-Complex-UI.md** → # 03 Organism Complex UI  > Request snapshot (2026-03-31).
- **docs\pr\dristi\request\Astra-PR-Specification.md** → # Astra PR Specification (Drishti -> Astra)  Date: 2026-03-31
- **docs\pr\dristi\request\Component-Audit-Manifest.md** → # Component Audit Manifest (Drishti -> Astra)  Generated: 2026-03-31
- **docs\pr\dristi\request\Component-Inventory.md** → # Component Inventory (Drishti -> Astra)  > Request snapshot (2026-03-31).
- **docs\pr\dristi\request\Handover-Contract.md** → # Handover Contract (Drishti -> Astra)  ## Purpose
- **docs\pr\dristi\request\Integration-Mapping-Log.md** → # Integration Mapping Log (Drishti <-> Astra)  Created: 2026-03-31
- **docs\pr\dristi\request\Mapping-Template.md** → # Drishti -> Astra Mapping Template  Fill one row per candidate returned by Astra.
- **docs\pr\dristi\response\HANDOVER_CONTRACT.md** → # Dristi -> Astra Handover Contract  ## 1. Astra Responsibilities (Completed)
- **docs\pr\dristi\response\INDEX.md** → # Dristi Integration Index  ## Handover Documents
- **docs\pr\dristi\response\INTEGRATION_SUMMARY.md** → # Integration Workflow Summary  The Dristi UI component promotion is now complete on the Astra side. To complete the migration in Dristi, follow these steps:
- **docs\pr\dristi\response\Mapping-Dristi.md** → # Dristi -> Astra Mapping (Response)  Status: Completed
- **docs\pr\dristi\response\README.md** → # Dristi <- Astra PR Response  Status: Ready for Dristi consumption
- **docs\pr\prana\request\01-Atomic-Elements.md** → # 01 Atomic Elements  ## Goal
- **docs\pr\prana\request\02-Molecular-Layouts.md** → # 02 Molecular Layouts  ## Goal
- **docs\pr\prana\request\03-Organism-Complex-UI.md** → # 03 Organism Complex UI  ## Goal
- **docs\pr\prana\request\Component-Inventory.md** → # Component Inventory (Prana -> Astra)  ## Scope
- **docs\pr\prana\request\Handover-Contract.md** → # Handover Contract (Prana -> Astra)  ## Purpose
- **docs\pr\prana\request\Mapping-Template.md** → # Prana -> Astra Mapping Template  Fill one row per candidate returned by Astra.
- **docs\pr\prana\response\HANDOVER_CONTRACT.md** → # Prana <- Astra Handover Contract (Response)  Date: 2026-03-28
- **docs\pr\prana\response\INDEX.md** → # Prana Response Index  Delivered: 2026-03-28
- **docs\pr\prana\response\INTEGRATION_SUMMARY.md** → # Prana Response Integration Summary  Generated: 2026-03-28
- **docs\pr\prana\response\Mapping-Prana.md** → # Prana -> Astra Mapping (Response)  Status: Completed
- **docs\pr\prana\response\plan.md** → # Astra Plan and Deep Analysis (Prana Request)  Date: 2026-03-28
- **docs\pr\prana\response\README.md** → # Prana <- Astra PR Response  Status: Ready for Prana consumption
- **docs\pr\sangama\request\Astra-PR-Specification.md** → # Astra PR Specification (Sangama → Astra)  Date: 2026-03-31
- **docs\pr\sangama\request\Component-Audit-Manifest.md** → # Component Audit Manifest (Sangama → Astra)  Generated: 2026-03-31
- **docs\pr\sangama\request\Integration-Mapping-Log.md** → # Integration Mapping Log (Sangama ↔ Astra)  Created: 2026-03-31
- **docs\pr\sangama\response\HANDOVER_CONTRACT.md** → # Sangama ← Astra Handover Contract (Response)  Date: 2026-04-01
- **docs\pr\sangama\response\INDEX.md** → # Sangama Response Index  Delivered: 2026-04-01
- **docs\pr\sangama\response\INTEGRATION_SUMMARY.md** → # Sangama Response Integration Summary  Generated: 2026-04-01
- **docs\pr\sangama\response\Mapping-Sangama.md** → # Sangama -> Astra Mapping (Response)  Status: Completed
- **docs\pr\sangama\response\plan.md** → # Astra Plan and Deep Analysis (Sangama Request)  Date: 2026-04-01
- **docs\pr\sangama\response\README.md** → # Sangama ← Astra PR Response  Status: Ready for Sangama consumption

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
