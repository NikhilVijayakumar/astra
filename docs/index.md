# Astra Documentation Index

**Purpose:** This is the LLM-optimized knowledge map for Astra. Start here to understand the project, then navigate to specific documentation as needed.

> **Tracking:** See [wiki-steps.md](wiki-steps.md) for enhancement roadmap.

---

## Global Constants

| Constant | Value |
|-----------|-------|
| Version | 1.1.0 |
| Build Output | ESM + UMD (dual format) |
| Tests | ~120 passing |
| License | MIT |
| npm Package | astra |
| GitHub | NikhilVijayakumar/astra |

---

## High-Level Vision

Astra is a React + Electron boilerplate library providing a production-ready foundation for building applications. It offers MVVM architecture, theming with Material UI 7, localization, type-safe API repository, and 36+ UI components organized by Atomic Design methodology.

---

## Dependency Stack

| Category | Library | Version |
|----------|---------|---------|
| UI Framework | React | ^19.2.3 |
| UI Library | @mui/material | 7.2.0 |
| Styling | @emotion/react | 11.13.3 |
| Animations | framer-motion | ^11.18.2 |
| Icons | lucide-react | ^0.400.0 |
| HTTP Client | axios | 1.15.0 |
| Build Tool | vite | 7.3.2 |
| Language | TypeScript | 5.8.3 |
| Testing | vitest | ^4.0.16 |
| Documentation | storybook | ^9.0.18 |

---

## Module Overview

```
astra/
├── src/
│   ├── lib.ts                    # Main entry point
│   ├── common/
│   │   ├── components/          # UI Component Library
│   │   │   ├── atoms/          # StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState
│   │   │   ├── molecules/     # Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer
│   │   │   ├── organisms/     # 27 complex components
│   │   │   └── templates/     # PageHeader, SummaryPanel, HeroSection
│   │   ├── hooks/             # useDataState
│   │   ├── repo/              # ApiService, HttpStatusCode, ServerResponse
│   │   ├── state/             # AppStateHandler
│   │   ├── theme/             # ThemeProvider, theme tokens
│   │   └── localization/      # LanguageProvider
│   └── theme/                 # Theme tokens (colors, typography, spacing)
├── docs/
│   ├── feature/               # Feature documentation
│   │   ├── components/       # Component library docs
│   │   │   ├── atomic-design/ # Methodology (README + 4 tier guides)
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organisms/
│   │   │   └── templates/
│   │   ├── theming/          # Theme tokens, ThemeProvider, ThemeToggle
│   │   ├── localization/     # i18n patterns and hooks
│   │   ├── state/            # useDataState, AppStateHandler
│   │   ├── repository/       # ApiService documentation
│   │   └── mvvm/             # MVVM pattern best practices
│   └── integration-guide/    # Platform integration
│       ├── getting-started.md
│       ├── react.md
│       └── electron.md
```

---

## File Manifest

### Feature Documentation (`docs/feature/`)

| Category | Files | Description |
|----------|-------|-------------|
| **Components** | | |
| atomic-design | [README](feature/components/atomic-design/README.md), [atoms](feature/components/atomic-design/atoms.md), [molecules](feature/components/atomic-design/molecules.md), [organisms](feature/components/atomic-design/organisms.md), [templates](feature/components/atomic-design/templates.md) | Atomic Design methodology with tier definitions and decision flowchart |
| atoms | [StatusDot](feature/components/atoms/StatusDot.md), [SeverityBadge](feature/components/atoms/SeverityBadge.md) | Atom-tier components |
| molecules | [Card](feature/components/molecules/Card.md), [Notification](feature/components/molecules/Notification.md), [TrendMetricCard](feature/components/molecules/TrendMetricCard.md), [JsonViewer](feature/components/molecules/JsonViewer.md) | Molecule-tier components |
| templates | [PageHeader](feature/components/templates/PageHeader.md), [SummaryPanel](feature/components/templates/SummaryPanel.md), [HeroSection](feature/components/templates/HeroSection.md) | Template-tier components |
| **Theming** | [README](feature/theming/README.md), [tokens](feature/theming/tokens.md), [provider](feature/theming/provider.md), [ThemeToggle](feature/theming/ThemeToggle.md), [hooks](feature/theming/hooks.md) | Material UI 7 theming system |
| **Localization** | [README](feature/localization/README.md), [provider](feature/localization/provider.md), [hooks](feature/localization/hooks.md), [patterns](feature/localization/patterns.md) | i18n implementation |
| **State** | [README](feature/state/README.md), [useDataState](feature/state/useDataState.md), [AppStateHandler](feature/state/AppStateHandler.md) | MVVM state management |
| **Repository** | [README](feature/repository/README.md), [api-service](feature/repository/api-service.md), [server-response](feature/repository/server-response.md), [http-status](feature/repository/http-status.md) | Type-safe API layer |
| **MVVM** | [README](feature/mvvm/README.md), [pattern](feature/mvvm/pattern.md), [best-practices](feature/mvvm/best-practices.md) | Architecture patterns |

### Integration Guides (`docs/integration-guide/`)

| File | Description |
|------|-------------|
| [getting-started.md](integration-guide/getting-started.md) | Quick start guide with installation |
| [react.md](integration-guide/react.md) | React integration and usage |
| [electron.md](integration-guide/electron.md) | Electron setup |

### Legacy Docs (`docs/`)

| File | Description |
|------|-------------|
| [MVVM_Clean_Architecture.md](MVVM_Clean_Architecture.md) | Architecture overview |
| [Theming.md](Theming.md) | Theming guide |
| [Localization.md](Localization.md) | i18n guide |
| [Repository_Layer.md](Repository_Layer.md) | API layer |
| [state.md](state.md) | State management |
| [hooks.md](hooks.md) | Custom hooks |
| [Platform_Compatibility.md](Platform_Compatibility.md) | Platform notes |

---

## External Integrations

| Project | Type | Summary | Location |
|---------|------|---------|----------|
| Dristi | Request/Response | Integration with Dristi system | [View](./docs/pr/dristi/) |
| Sangama | Request/Response | Integration with Sangama system | [View](./docs/pr/sangama/) |
| Prana | Request/Response | Integration with Prana system | [View](./docs/pr/prana/) |
| Dhi | Request/Response | Integration with Dhi system | [View](./docs/pr/dhi/) |

---

## Legacy Documentation

| File | Summary | Status |
|------|---------|--------|
| MVVM_Clean_Architecture.md | Architecture overview | Legacy |
| Theming.md | Theming guide | Legacy |
| Localization.md | i18n guide | Legacy |
| Repository_Layer.md | API layer | Legacy |
| state.md | State management | Legacy |

> Note: See docs/feature/ for current documentation.

---

## Component Inventory

### Atoms (5)

| Component | Key Props | Description |
|-----------|----------|-------------|
| StatusDot | `tone`, `size` | Status indicator (ok/warning/error/executing/waiting/default) |
| SeverityBadge | `severity`, `label` | Severity level indicator (low/medium/high/critical) |
| LoadingState | `status` | Loading spinner state |
| ErrorState | `error` | Error display state |
| EmptyState | `data` | Empty data state |

### Molecules (6)

| Component | Key Props | Description |
|-----------|----------|-------------|
| Card | `variant`, `children` | Container card (elevated/outlined) |
| Notification | `severity`, `message` | Alert notification (success/warning/error/info) |
| TrendMetricCard | `value`, `trend` | Metric with trend indicator |
| ImageViewer | `src`, `alt` | Image display component |
| MdViewer | `content` | Markdown rendering |
| JsonViewer | `data` | JSON data display |

### Organisms (32)

| Component | Key Props | Description |
|-----------|----------|-------------|
| AlertListItem | `alert`, `onAction` | Alert list item |
| AudioPlayerBar | `src`, `controls` | Audio playback |
| DataTable | `data`, `columns` | Data table with sorting/filtering |
| DecisionActionCard | `decision`, `actions` | Decision with actions |
| DrawerComponent | `open`, `onClose` | Drawer/sidebar |
| EntityConfidenceRow | `entity`, `confidence` | Entity confidence display |
| EntryLayoutFrame | `children`, `title` | Layout container |
| FeatureSegmentCard | `feature`, `segment` | Feature segment |
| FileTree | `files`, `onSelect` | File tree display |
| FileViewerRouter | `file`, `type` | File viewer router |
| FormLayout | `schema`, `onSubmit` | Form layout |
| IconDescriptionListItem | `icon`, `description` | Icon with description |
| InteractiveStepNode | `step`, `active` | Interactive step |
| MultiPhaseWorkflowDiagram | `phases`, `current` | Workflow display |
| MultiStepProgressIndicator | `steps`, `current` | Progress indicator |
| OperationHealthPanel | `operations`, `health` | Health panel |
| PlayableMediaCard | `media`, `controls` | Media playback |
| ProfileRevealCard | `profile`, `onReveal` | Profile reveal |
| ReviewDecisionDialog | `decision`, `onApprove` | Review dialog |
| StatusActionCard | `status`, `action` | Status with action |
| StatusListRow | `status`, `label` | Status list item |
| SummaryListItem | `summary`, `details` | Summary item |
| TerminalViewer | `output`, `input` | Terminal display |
| TimelineNode | `events`, `current` | Timeline display |
| ToolbarComponent | `tools`, `onSelect` | Toolbar |
| VersionHistorySelector | `versions`, `current` | Version selector |
| VerticalStepIndicator | `steps`, `current` | Vertical steps |
| WeeklyReportCard | `report`, `metrics` | Weekly report |
| AppStateHandler | `appState`, `children` | State handler wrapper |

### Templates (3)

| Component | Key Props | Description |
|-----------|----------|-------------|
| PageHeader | `title`, `subtitle` | Page header with breadcrumb |
| SummaryPanel | `items`, `actions` | Summary panel |
| HeroSection | `title`, `description` | Hero section |

---

## Atomic Design Methodology

Astra uses Atomic Design to organize components into tiers:

- **Atoms**: StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState
- **Molecules**: Card, Notification, TrendMetricCard, ImageViewer, MdViewer, JsonViewer
- **Organisms**: 32 complex components
- **Templates**: PageHeader, SummaryPanel, HeroSection

**Decision Flowchart:**
```
Component → Is it a single element?
  Yes → Does it have internal state?
    Yes → Molecule
    No → Atom
  No → Is it a composition of molecules?
    Yes → Organism
    No → Is it a page-level layout?
      Yes → Template
      No → Review for single responsibility
```

See [Atomic Design Methodology](feature/components/atomic-design/README.md) for full details.

---

## Quick Start

```bash
# Install
npm install astra

# Development
npm run dev              # Start dev server
npm run build            # Build library
npm test                # Run tests
npm run storybook       # Start Storybook

# Usage in React app
import { Card, ThemeProvider, LanguageProvider } from 'astra';
```

---

## Key Design Patterns

### MVVM Architecture
- **Model**: Data structures and API responses
- **View**: React components
- **ViewModel**: `useDataState` hook for state management

### Theme Integration
- Use `ThemeProvider` wrapper
- All components use theme tokens (never hardcoded colors)
- Supports Light/Dark mode

### Localization
- Use `LanguageProvider` for i18n
- Never hardcode strings in components

---

## API Surface

```typescript
// Main exports
export { ThemeProvider, useTheme } from './theme';
export { LanguageProvider, useLanguage } from './localization';
export { useDataState } from './hooks';
export { ApiService, HttpStatusCode } from './repo';
export * from './common/components';
```

---

## Related Documentation

- For component API details: [Component Library](feature/components/README.md)
- For theming: [Theming Guide](feature/theming/README.md)
- For localization: [Localization Guide](feature/localization/README.md)
- For state management: [State Guide](feature/state/README.md)
- For API layer: [Repository Guide](feature/repository/README.md)
- For React integration: [React Guide](integration-guide/react.md)
- For Electron: [Electron Guide](integration-guide/electron.md)

---

## Maintenance

- **Tracking:** [wiki-steps.md](wiki-steps.md)
- **Last updated:** 2026-04-19
- **Version:** 1.1.0