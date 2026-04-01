# Sangama ← Astra Handover Contract (Response)

Date: 2026-04-01  
Astra Version: 0.1.0  

## 1. Scope Outcome

This response covers all 10 candidates from the Sangama request package and applies the required decision semantics:

- Approved and implemented when reusable and no Astra equivalent exists.
- Duplicate mapped when Astra already provides equivalent component behavior.
- Deferred when source code was not provided.

## 2. Final Decisions

### Approved and implemented

- CanvasNote → CanvasNote (hardcoded colors refactored to MUI theme tokens)
- CanvasGroup → CanvasGroup (hardcoded colors refactored to MUI theme tokens)
- StatusCard → StatusActionCard (renamed for general clarity)
- HistoryDropdown → VersionHistorySelector (renamed for domain-neutral use)
- FileTree → FileTree (already generic)
- TerminalViewer → TerminalViewer (already generic)

### Duplicate mapped (new proposal rejected)

- ThemeToggle → Astra `useTheme` hook (trivial wrapper, not a library primitive)
- StatusTable → DataTable (use Column render prop for status chips)
- CodeViewer → FileViewerRouter + JsonViewer + MdViewer (existing file-viewer infrastructure)

### Deferred

- DynamicForm (source code not provided in PR components folder)

## 3. Why Decisions Were Made

### ThemeToggle Rejection
ThemeToggle directly imports and wraps Astra's own `useTheme` hook. It is a 10-line convenience wrapper that belongs in app-level code, not in the shared library. Any consumer can trivially build this.

### StatusTable Rejection
Astra's existing `DataTable` component accepts generic `Column<T>[]` with a `render` function per column, which is strictly more flexible than StatusTable's fixed `StatusTableRow` shape. Status chip rendering is achieved by providing a render function that returns a `<Chip>` component. Row selection can be added via MUI TableRow click handlers.

### CodeViewer Rejection
Astra's `FileViewerRouter` already routes file content to specialized viewers (JsonViewer for JSON/JSONL, MdViewer for Markdown, ImageViewer for images, CsvViewer for CSV). CodeViewer's YAML/TOML support should be contributed as extensions to the existing FileViewerRouter infrastructure rather than as a parallel viewer system.

### DynamicForm Deferral
The PR specification lists DynamicForm as a candidate, but no source file was included in the `docs/pr/sangama/components/` folder. Resubmit with source to proceed.

### Hardcoded Color Refactoring (CanvasNote, CanvasGroup)
Both components used hardcoded hex colors (#fff9c4, #fbc02d, #f57f17, #eee, #ccc, #666) which break dark mode support. Astra versions use MUI `theme.palette` tokens and `theme.palette.grey` scale for proper light/dark mode behavior.

## 4. Migration Phases For Sangama

### Phase A (rename-only / low risk)

- CanvasNote → import swap only
- CanvasGroup → import swap only
- FileTree → import swap only
- TerminalViewer → import swap only

### Phase B (contract migration)

- StatusCard → StatusActionCard (component and type rename)
- HistoryDropdown → VersionHistorySelector (component and type rename)

### Phase C (duplicate replacement)

- ThemeToggle → inline `useTheme()` call from Astra
- StatusTable → DataTable with column render functions
- CodeViewer → FileViewerRouter (requires content→fileName/fileContent API adaptation)

### Phase D (deferred)

- DynamicForm: keep local until source code is provided to Astra

## 5. Safety Gates

Proceed phase-by-phase only when current phase is clean:

1. Typecheck passes.
2. Build passes in Sangama and Astra consumption workspace.
3. UI smoke checks pass for impacted routes.
4. No unresolved imports to retired local components.

## 6. Revisit Triggers For Deferred Components

Promote DynamicForm only after:

- Source code is provided in PR components folder.
- Props use domain-neutral JSON Schema types only.
- No Sangama-specific form/validation coupling.
