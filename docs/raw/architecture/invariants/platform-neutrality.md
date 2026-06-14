# Platform Neutrality Invariant

## Purpose

Astra is a runtime-agnostic UI library.

The core library must remain decoupled from any specific runtime environment. It must not depend on Electron, browser-specific APIs, Node.js APIs, or any platform that would limit where Astra components can render.

Platform neutrality guarantees:
- framework flexibility (React DOM, React Native, SSR)
- runtime portability (browser, Electron, testing)
- environment-independent rendering
- consumer choice of deployment target
- future-proof runtime support

---

## Architectural Rule

Astra core must not depend on platform-specific APIs.

Core modules may use:
- React DOM APIs (createElement, JSX)
- standard browser APIs (when documented as browser-only features)
- MUI abstractions (which handle platform variance internally)

Core modules may NOT:
- import Electron APIs (ipcRenderer, BrowserWindow, remote)
- use Node.js APIs (fs, path, process)
- use `window`, `document`, `navigator` directly without guards
- assume browser-specific behavior (localStorage, sessionStorage)
- depend on platform-specific module resolution
- assume DOM availability at module evaluation time

Platform-specific code must be isolated in:
- consumer applications (Electron integration)
- separate platform adapter packages
- clearly documented platform extension points

---

## Documented Exception: ThemeProvider Persistence

Astra's `ThemeProvider` persists the `darkMode` preference via `localStorage`. This is a single, controlled exception to the localStorage prohibition.

This exception is permitted only because:

1. It is guarded with an SSR check: `typeof localStorage !== 'undefined'`
2. It is limited to UX preference state (dark mode — not domain data)
3. It is implemented exclusively in `ThemeProvider`, not in any other Astra component

The SSR guard pattern is required — unguarded localStorage access is always a P1 violation:

```tsx
// Required guard pattern for any localStorage access in Astra core
if (typeof localStorage !== 'undefined') {
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}
```

See [Stateless UI Invariant](stateless-ui.md) for the full exception definition. No other Astra library component may use `localStorage` or `sessionStorage`.

---

## Allowed Patterns

### React DOM Standard APIs

Allowed:

```tsx
import { createElement } from 'react';
import { render } from 'react-dom';
```

Reason:
React DOM is Astra's target rendering layer — standard across browser and Electron.

---

### MUI Platform Abstraction

Allowed:

```tsx
import { createTheme, ThemeProvider } from '@mui/material';
```

Reason:
MUI handles platform variance internally (RTL, SSR, theming).

---

### Guarded Optional Browser Features

Allowed:

```tsx
function useBrowserFeature() {
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setFeature(window.matchMedia('(prefers-color-scheme: dark)'));
    }
  }, []);

  return feature;
}
```

Reason:
Feature is optional and guarded — does not crash in non-browser environments.

---

### SSR-Compatible Rendering

Allowed:

```tsx
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
}
```

Reason:
Component renders without browser APIs during SSR — hydrates on client.

---

### Props-Driven Platform Configuration

Allowed:

```tsx
// Consumer provides platform-specific behavior via props
<ThemeProvider
  theme={theme}
  platformConfig={{
    rippleEffect: false,  // disable in Electron for performance
  }}
/>
```

Reason:
Platform choices are externalized to the consumer.

---

## Forbidden Patterns

### Electron API Import in Core

Forbidden:

```tsx
// src/common/hooks/useElectron.ts
import { ipcRenderer } from 'electron';

export function usePlatformInfo() {
  return ipcRenderer.invoke('get-platform-info');
}
```

Reason:
Core library becomes Electron-coupled — unusable in plain browser or SSR.

---

### Direct Window/Document Access at Module Scope

Forbidden:

```tsx
// Module-level evaluation depends on browser APIs
const screenWidth = window.innerWidth;
const rootElement = document.getElementById('root');
```

Reason:
Module crashes during SSR or in non-browser environments.

---

### Node.js API Usage in Core

Forbidden:

```tsx
// src/common/utils/storage.ts
import { readFileSync } from 'fs';
import { join } from 'path';
```

Reason:
Core library becomes Node-dependent — breaks browser and React Native usage.

---

### localStorage Assumption

Forbidden:

```tsx
// Core component assumes localStorage availability
function usePersistedState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });
}
```

Reason:
Accesses browser storage without SSR guard — crashes during server render.

---

### Platform-Specific Module Resolution

Forbidden:

```json
{
  "browser": {
    "fs": false
  }
}
```

as a substitute for properly isolating platform code.

Reason:
Conditional module resolution masks platform coupling instead of eliminating it.

---

### Process Global Access

Forbidden:

```tsx
// Core component accesses process global
const isElectron = process.type === 'renderer';
```

Reason:
`process` global is Node.js-specific — undefined in browser or SSR.

---

### Browser-Only Feature Without Fallback

Forbidden:

```tsx
function useNetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine);
  // navigator.onLine is browser-only — no fallback for SSR
}
```

Reason:
No guard for non-browser environments — crashes during SSR.

---

## Detection Heuristics

### Electron Imports in Core

Detect:

```tsx
from 'electron'
require('electron')
import { ipcRenderer }
```

inside `src/common/` or `src/theme/` directories.

---

### Node.js Module Imports

Detect:

```tsx
from 'fs'
from 'path'
from 'os'
from 'process'
from 'child_process'
```

inside core library modules.

---

### Window/Document at Module Scope

Detect:

```tsx
window.
document.
navigator.
```

outside of `useEffect`, event handlers, or guarded conditionals.

---

### localStorage/sessionStorage in Components

Detect:

```tsx
localStorage.
sessionStorage.
```

inside component or hook files.

---

### Process Global Usage

Detect:

```tsx
process.env
process.platform
process.type
process.versions
```

inside core library code.

---

### Platform Branching Without Abstraction

Detect:

```tsx
if (typeof window === 'undefined')
if (process.type === 'renderer')
if (navigator.userAgent)
```

used for core behavioral changes (not optional features).

---

## Severity Levels

### P0 — Critical

Core module depends on platform-specific API for essential functionality.

Examples:

- Electron IPC import in core
- Node.js fs/path import in core
- window/document at module scope

Must fix before release.

---

### P1 — High

Core module assumes specific platform behavior.

Examples:

- localStorage without SSR guard
- navigator without fallback
- process global usage
- platform branching without abstraction

Must migrate.

---

### P2 — Transitional

Optional platform feature used with documented guard.

Examples:

- guarded window.matchMedia for optional dark mode detection
- documented browser-only feature with fallback

Allowed temporarily only.

---

### P3 — Informational

All platform-specific behavior is externalized or guarded.

No action required.

---

## Refactoring Guidance

### Move Electron Code to Consumer

BAD:

```tsx
// Astra core
export function usePlatformInfo() {
  const info = window.electronAPI.getPlatformInfo();
  return info;
}
```

GOOD:

```tsx
// Astra core — platform-agnostic
export function usePlatformInfo() {
  return null; // Consumer overrides via context or props
}

// Consumer — Electron-specific
import { usePlatformInfo } from 'astra';
export function useElectronPlatformInfo() {
  const info = window.electronAPI.getPlatformInfo();
  return info;
}
```

---

### Guard Browser-Only APIs

BAD:

```tsx
function useMediaQuery(query: string) {
  const matches = window.matchMedia(query).matches;
  return matches;
}
```

GOOD:

```tsx
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
```

---

### Remove Direct Storage Access

BAD:

```tsx
function useStorage(key: string) {
  const value = localStorage.getItem(key);
  // ...
}
```

GOOD:

```tsx
function useStorage(key: string) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof localStorage === 'undefined') return;
    setValue(localStorage.getItem(key));
  }, [key]);

  // ...
}
```

---

### Abstract Platform Dependencies Via Props

BAD:

```tsx
function FileSelector() {
  // Assumes browser file input
  return <input type="file" />;
}
```

GOOD:

```tsx
interface FileSelectorProps {
  onFileSelect: (file: File) => void;
  renderTrigger: (onClick: () => void) => React.ReactNode;
}

function FileSelector({ onFileSelect, renderTrigger }: FileSelectorProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {renderTrigger(() => inputRef.current?.click())}
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
      />
    </>
  );
}
```

---

### Remove Process Global Dependencies

BAD:

```tsx
const isDev = process.env.NODE_ENV === 'development';
```

GOOD:

```tsx
// Pass via props or context from consumer
interface DevFeatureProps {
  isDev?: boolean;
}
```

---

## Library Impact

Violating Platform Neutrality causes:

- Electron-only components (unusable in browser or mobile)
- SSR rendering failures (window/document not available)
- testing complexity (platform mocking required)
- consumer lock-in (tied to specific runtime)
- future platform incompatibility (new runtimes unsupported)
- codebase fragmentation (platform-specific branches everywhere)
- bundle bloat (platform-specific code for unused targets)

Without Platform Neutrality:
Astra becomes a platform-coupled UI set
instead of a runtime-agnostic, portable component library.

---

## Migration Notes

### Transitional Platform Coupling Must Include

```tsx
/**
 * @deprecated-platform-coupling
 * API: <what platform API is used>
 * Platform: <browser|electron|node>
 * Migration: <how to externalize>
 * Removal target: <version>
 */
```

---

### Migration Strategy

1. Identify all Electron, Node.js, and browser-specific API usage in core
2. Move platform-specific code to consumer responsibility
3. Add SSR guards to browser-only features
4. Replace direct platform API access with props or context
5. Remove process global usage from core
6. Verify core runs in: browser, SSR (Node.js), and Electron renderer

---

## Validation Requirements

Core library is compliant only if:

- no Electron imports exist in core
- no Node.js imports exist in core
- no window/document access at module scope
- all browser-only features have SSR guards
- no process global usage in core
- localStorage/sessionStorage not used in components
- no platform branching without abstraction
- core renders without error in non-browser environment

---

## Compliance Goal

Astra must behave as:

- a runtime-agnostic UI library
- a platform-neutral component set
- an environment-portable rendering layer
- a consumer-choice deployment substrate

NOT:

- an Electron-coupled UI library
- a browser-only component set
- a Node-dependent rendering layer
- a platform-locked deployment dependency
```
