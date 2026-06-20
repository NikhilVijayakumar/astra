# Architecture: Platform Abstraction

Astra is a runtime-agnostic UI library. See [Platform Neutrality Invariant](../invariants/platform-neutrality.md) for the authoritative rules.

## Core vs Platform-Specific

Core modules must not depend on platform-specific APIs. Separate platform concerns behind abstractions:

| Layer | Allowed APIs | Example |
|-------|-------------|---------|
| Core library | React DOM, MUI abstractions | `useDataState`, `AppStateHandler`, `ApiService` |
| Platform adapters | Browser, Node, Electron | `ApiService` (browser HTTP), IPC adapter (Electron) |
| Prati (separate package) | Theming, localization, UI | `ThemeProvider`, `LanguageProvider`, UI components |

## Browser-Only Features

When a component uses browser APIs, guard it for SSR compatibility:

```typescript
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}
```

## Electron Abstraction

Electron-specific code must be isolated in consumer-managed abstractions, never in the core library:

```typescript
// Consumer-managed IPC abstraction for Electron
import { ServerResponse } from 'astra';

export const resourceApi = {
  list: async (): Promise<ServerResponse<Resource[]>> => {
    const response = await window.electronAPI.invoke('resource:list');
    return response;
  },
};
```

### What NOT to do

The core library must not import Electron or Node.js APIs:

```typescript
// ❌ Never in core library
import { ipcRenderer } from 'electron';
import { readFile } from 'fs/promises';
import path from 'path';
```

## Node.js-Only Features

Node.js APIs (`fs`, `path`, `process`) are forbidden in all Astra core modules. See [Platform Neutrality Invariant](../invariants/platform-neutrality.md) for the authoritative rule. There are no exceptions for lazy-loaded Node.js imports — any feature requiring Node.js APIs must be implemented in consumer-managed code, not in the Astra library.

## CSS Platform Guards

Platform-specific CSS (e.g., Electron's `-webkit-app-region`) must be isolated:

```typescript
// ✅ Acceptable: isolated in a platform-specific file, not in core
const electronStyles = { WebkitAppRegion: 'drag' as const };
```

## Testing Across Platforms

Verify platform neutrality by testing in browser, Node, and Electron environments:

```bash
npm test                    # jsdom (browser-like)
npm run test:node           # Node environment
npm run test:electron       # Electron environment
```

## Related

- [Repository Pattern](repository.md)
- [Dependencies](dependencies.md)
- [Public API Surface](api-surface.md)
