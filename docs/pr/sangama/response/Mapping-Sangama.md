# Sangama -> Astra Mapping (Response)

Status: Completed  
Astra Version: 0.1.0  
Date: 2026-04-01

| Old Component | New Astra Component | Old Import | New Import | Status | Phase | Priority | Effort | Breaking Prop Changes | Migration Notes |
|---|---|---|---|---|---|---|---|---|---|
| CanvasNote | CanvasNote | import { CanvasNote } from 'sangama/common/components/CanvasNote' | import { CanvasNote } from 'astra/components' | mapped | A | LOW | 15-30 min | No prop changes; hardcoded colors replaced with MUI theme tokens internally | Swap import path only; no consumer-side changes needed |
| CanvasGroup | CanvasGroup | import { CanvasGroup } from 'sangama/common/components/CanvasGroup' | import { CanvasGroup } from 'astra/components' | mapped | A | LOW | 15-30 min | No prop changes; hardcoded colors replaced with MUI theme tokens internally | Swap import path only; no consumer-side changes needed |
| StatusCard | StatusActionCard | import { StatusCard } from 'sangama/common/components/StatusCard' | import { StatusActionCard } from 'astra/components' | mapped | B | MEDIUM | 30-60 min | Component renamed StatusCard → StatusActionCard; StatusCardProps → StatusActionCardProps | Rename component reference and type imports; no prop shape changes |
| HistoryDropdown | VersionHistorySelector | import { HistoryDropdown } from 'sangama/common/components/HistoryDropdown' | import { VersionHistorySelector } from 'astra/components' | mapped | B | MEDIUM | 30-60 min | Component renamed HistoryDropdown → VersionHistorySelector; HistoryDropdownProps → VersionHistorySelectorProps | Rename component reference and type imports; HistoryEntry type unchanged |
| FileTree | FileTree | import { FileTree } from 'sangama/common/components/FileTree' | import { FileTree } from 'astra/components' | mapped | A | LOW | 15-30 min | No changes | Swap import path only |
| TerminalViewer | TerminalViewer | import { TerminalViewer } from 'sangama/common/components/TerminalViewer' | import { TerminalViewer } from 'astra/components' | mapped | A | LOW | 15-30 min | No changes | Swap import path only |
| ThemeToggle | — | import ThemeToggle from 'sangama/common/components/ThemeToggle' | import { useTheme } from 'astra' | duplicate | C | LOW | 15-30 min | N/A — ThemeToggle is a trivial wrapper around Astra's useTheme hook | Remove local ThemeToggle; build inline toggle using Astra's `useTheme()` → `{ darkMode, toggleDarkMode }` directly in app shell |
| StatusTable | DataTable | import { StatusTable } from 'sangama/common/components/StatusTable' | import { DataTable } from 'astra/components' | duplicate | C | MEDIUM | 1-2 hrs | StatusTableRow shape → generic T with Column render functions; selectedId/onSelect need local wrapper | Replace with DataTable and use column `render` prop for status Chip; add row click handler via MUI TableRow props |
| CodeViewer | FileViewerRouter | import { CodeViewer } from 'sangama/common/components/CodeViewer' | import { FileViewerRouter } from 'astra/components' | duplicate | C | MEDIUM | 1-2 hrs | content+extension API → fileName+fileContent API; headerLabel/headerExtra not natively supported | Map content via FileViewerRouter which routes to JsonViewer, MdViewer based on extension; wrap with custom header if needed |
| DynamicForm | — | — | — | deferred | D | HIGH | N/A | N/A | Source code not provided in PR components folder; resubmit with source to proceed |

## Duplicate Rejection Notes

- ThemeToggle is rejected because it is a trivial one-line wrapper around Astra's own `useTheme` hook. Any app consuming Astra can build this inline with `const { darkMode, toggleDarkMode } = useTheme()`.
- StatusTable is rejected because Astra's existing `DataTable` component provides a superset of functionality via the generic `Column<T>` render function, which can render status chips, selection, and any custom content.
- CodeViewer is rejected because Astra's `FileViewerRouter` + `JsonViewer` + `MdViewer` already cover JSON and Markdown viewing. YAML/TOML support should be contributed as an extension to FileViewerRouter rather than a parallel viewer.

## New Export Surface Added

- CanvasNote
- CanvasGroup
- StatusActionCard
- VersionHistorySelector
- FileTree
- TerminalViewer
