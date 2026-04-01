# Astra PR Specification (Sangama → Astra)

Date: 2026-03-31
Requesting Team: Sangama
Status: Ready for Astra review

## Executive Summary

Sangama requests promotion of 10 presentational components into the Astra shared library. All candidates have been pre-refactored to enforce strict statelessness — zero domain coupling, zero business logic, props-only data flow.

## Package Contents

| Document | Purpose |
|---|---|
| Component-Audit-Manifest.md | Pre/post refactoring audit results |
| Astra-PR-Specification.md | This document — master PR specification |
| Integration-Mapping-Log.md | Live tracking document for the migration lifecycle |

## Candidate Summary

### Atomic (Lane A — Promote Now)
1. **DynamicForm** — Schema-driven form renderer (object/string/number/boolean/array)
2. **CanvasNote** — Editable sticky note with Markdown preview
3. **CanvasGroup** — Resizable group container with label and description

### Atomic (Lane C — Duplicate Check)
4. **ThemeToggle** — Dark/light mode toggle (already uses Astra `useTheme`)

### Molecular (Lane A — Promote Now)
5. **StatusCard** — Status indicator card with action buttons and color-coded status bar
6. **HistoryDropdown** — Version history selector dropdown  
7. **FileTree** — Recursive folder/file tree with expand/collapse
8. **StatusTable** — Configurable data table with status chip column

### Organism (Lane A — Promote Now)
9. **CodeViewer** — Multi-format code/content viewer (Markdown, JSON, YAML, TOML, plain text)
10. **TerminalViewer** — Log terminal display with timestamped, level-colored entries

## Pre-Handover Quality Gates Passed

| Gate | Result |
|---|---|
| Zero domain type imports | ✅ All 10 components |
| Zero useLanguage/useSettings hooks | ✅ All accept labels via props |
| Zero hardcoded data/constants | ✅ All accept data via props |
| Controlled state where applicable | ✅ CanvasNote (editing), StatusCard (loading) |
| MUI theme-token styling only | ✅ All 10 components |
| Internal imports updated | ✅ 7 consumer files rewired via thin wrappers |

## Stateless Contract Pattern

All components follow this pattern:
```ts
// Domain-neutral props
interface ComponentProps {
    // Data props (strings, numbers, arrays)
    title: string;
    // ...

    // Callback props (parent-owned actions)
    onClick?: () => void;
    // ...

    // Optional label overrides for localization
    headerLabel?: string;
    emptyMessage?: string;
}
```

## Component Prop Schemas

### DynamicForm
```ts
interface DynamicFormProps {
    schema: any;        // JSON Schema object
    value: any;         // Current form value
    onChange: (value: any) => void;
    disabled?: boolean;
}
```

### CanvasNote
```ts
interface CanvasNoteProps {
    label: string;
    selected?: boolean;
    onChange?: (val: string) => void;
}
```

### CanvasGroup
```ts
interface CanvasGroupProps {
    label: string;
    description: string;
    selected?: boolean;
    onChangeLabel?: (val: string) => void;
    onChangeDescription?: (val: string) => void;
    children?: React.ReactNode;
}
```

### StatusCard
```ts
type StatusColorType = 'success' | 'error' | 'warning' | 'info' | 'default';
interface StatusCardProps {
    id: string;
    title: string;
    subtitle: string;
    statusLabel: string;
    statusColor: StatusColorType;
    lastChecked?: string;
    lastCheckedLabel?: string;
    isConnectDisabled?: boolean;
    onDelete?: (id: string) => void;
    onConnect?: (id: string) => Promise<void> | void;
    onCheckStatus?: (id: string) => Promise<void> | void;
    connectLabel?: string;
    loadingLabel?: string;
}
```

### HistoryDropdown
```ts
interface HistoryEntry { version: number; createdAt: string; }
interface HistoryDropdownProps {
    entries: HistoryEntry[];
    selectedVersion: number;
    latestVersion: number;
    onVersionChange: (version: number) => void;
    versionPrefix?: string;
    latestLabel?: string;
    availableLabel?: string;
}
```

### FileTree
```ts
interface FileTreeNode {
    id: string;
    name: string;
    type: 'folder' | 'file';
    childrenNodes?: FileTreeNode[];
    secondaryLabel?: string;
}
interface FileTreeProps {
    nodes: FileTreeNode[];
    expandedIds: Set<string>;
    selectedId: string | null;
    onToggle: (id: string) => void;
    onSelect: (id: string) => void;
    level?: number;
}
```

### StatusTable
```ts
type ChipColor = 'success' | 'error' | 'primary' | 'warning' | 'info' | 'default';
interface StatusTableRow { id: string; status: string; statusColor: ChipColor; columns: Record<string, string>; }
interface StatusTableProps {
    rows: StatusTableRow[];
    columnHeaders: { key: string; label: string }[];
    selectedId: string | null;
    onSelect: (row: StatusTableRow) => void;
    title?: string;
}
```

### CodeViewer
```ts
interface CodeViewerProps {
    content: string;
    extension?: string;
    isJson?: boolean;
    headerLabel?: string;
    hideHeader?: boolean;
    headerExtra?: React.ReactNode;
}
```

### TerminalViewer
```ts
interface LogEntry { id: string | number; timestamp: string; level: string; message: string; }
interface TerminalViewerProps {
    logs: LogEntry[];
    emptyMessage?: string;
    bottomRef?: React.RefObject<HTMLDivElement>;
}
```

## Expected Astra Response

Per the Handover Contract, Astra should return:
1. Completed mapping report (Markdown + JSON)
2. Decision per component (approved/renamed/duplicate/deferred)
3. Breaking change taxonomy where props are modified
4. Astra package version and commit metadata

## Read Order

1. Component-Audit-Manifest.md (audit results)
2. Astra-PR-Specification.md (this document)
3. Integration-Mapping-Log.md (tracking)
