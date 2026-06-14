# Runtime Map: Platform Runtimes

Maps which parts of Astra run in which runtime environments.

```
Browser                     Node/SSR                  Electron
─────────                   ────────                  ────────
ThemeProvider  ───────────→ ThemeProvider  ──────────→ ThemeProvider
LanguageProvider ─────────→ LanguageProvider ────────→ LanguageProvider
useDataState   ───────────→ useDataState   ──────────→ useDataState
ApiService     ───────────→ ApiService     ──────────→ ApiService
                                                        │
UI Components  ───────────→ ⚠ SSR-safe only            ├── ipcRenderer
  (all tiers)               (ClientOnly wrapper)        └── WebkitAppRegion
```

## Platform-Specific Code

| Runtime | Allowed | Not Allowed |
|---------|---------|-------------|
| Browser | All features | None |
| Node/SSR | Theme, Language providers | UI components without ClientOnly guard |
| Electron | All features + IPC | Electron imports in core library |

## Isolation Pattern

Platform-specific code must be isolated in consumer-managed files:

```typescript
// ✅ Consumer-managed Electron adapter
// Not exported from core lib.ts
export const electronApi = {
  list: () => window.electronAPI.invoke('resource:list'),
};
```

## Aligned Documents

| Document | Role |
|----------|------|
| `invariants/platform-neutrality.md` | Core must be runtime-agnostic |
| `core/platform-abstraction.md` | Platform isolation guidance |
