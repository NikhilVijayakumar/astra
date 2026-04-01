# Component Audit Manifest (Sangama → Astra)

Generated: 2026-03-31
Status: Pre-migration audit complete

## Summary
All 10 presentational components in Sangama have been audited, refactored for statelessness, and centralized in `src/renderer/src/common/components/`. This manifest documents the before/after state of each component's prop contract.

## Audit Results

### Atomic Layer (4 components)

| Component | Original Path | Coupling Removed | Props Change | Zero-Dep Check |
|---|---|---|---|---|
| DynamicForm | components/ | `spacing` token import retained | No change (already props-only) | ✅ Pass |
| CanvasNote | features/workflow/.../ (was `NoteNode`) | `NodeProps` (reactflow) removed, direct `data` mutation removed | `label`, `selected`, `onChange` props | ✅ Pass |
| CanvasGroup | features/workflow/.../ (was `GroupNode`) | `NodeProps`, `NodeResizer` removed, direct `data` mutation removed | `label`, `description`, `selected`, `onChangeLabel`, `onChangeDescription`, `children` props | ✅ Pass |
| ThemeToggle | common/components/ (pre-existing) | None needed (uses Astra `useTheme`) | No change | ✅ Pass |

### Molecular Layer (4 components)

| Component | Original Path | Coupling Removed | Props Change | Zero-Dep Check |
|---|---|---|---|---|
| StatusCard | features/confluence/.../ (was `ConnectionCard`) | `Connection`, `ConnectionStatus` types removed, `useLanguage()` removed | Flat props: `id`, `title`, `subtitle`, `statusLabel`, `statusColor`, `onDelete`, `onConnect`, `onCheckStatus` + label props | ✅ Pass |
| HistoryDropdown | features/storage/.../ (was `VersionSelector`) | `ArtifactVersion` type removed | Generic `HistoryEntry[]` prop with `version` + `createdAt` | ✅ Pass |
| FileTree | features/storage/.../ (was `StorageTree`) | `ArtifactMetadata` type removed, `artifact_group`/`artifact_version` node types simplified | Generic `FileTreeNode` with `folder`/`file` types + `secondaryLabel` | ✅ Pass |
| StatusTable | features/execution/.../ (was `ExecutionList`) | `Execution` type removed, `AppStateHandler` removed, `useLanguage()` removed | Generic `StatusTableRow[]` + `columnHeaders[]` config | ✅ Pass |

### Organism Layer (2 components)

| Component | Original Path | Coupling Removed | Props Change | Zero-Dep Check |
|---|---|---|---|---|
| CodeViewer | features/storage/.../ (was `FilePreview`) | `StorageNode` type removed, `AppStateHandler` removed, `VersionSelector` removed, `useLanguage()` removed | `content`, `extension`, `isJson`, `headerLabel`, `hideHeader`, `headerExtra` | ✅ Pass |
| TerminalViewer | features/execution/.../ (was `LogTerminal`) | `ExecutionLog` type removed, `AppStateHandler` removed | Generic `LogEntry[]` array: `id`, `timestamp`, `level`, `message` | ✅ Pass |

## Dependency Audit Summary

All 10 components depend only on:
- `react` (peer)
- `@mui/material` (peer — theming tokens only)
- `react-markdown` (peer — CodeViewer, CanvasNote only)
- `react-syntax-highlighter` (peer — CodeViewer only)

**Zero imports from:**
- ❌ Sangama domain types
- ❌ Sangama data/repo layers
- ❌ Sangama services or context providers
- ❌ Non-UI external libraries (except the listed peers above)

## Build Validation
- All 10 common components centralized in `src/renderer/src/common/components/`
- All consuming containers/sections updated with thin wrapper pattern
