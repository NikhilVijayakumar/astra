# Runtime Map: State Flow

Maps `AppState<T>` transitions through runtime.

```
┌─────────┐    execute()     ┌─────────┐    success    ┌───────────┐
│  INIT   │ ────────────────→ │ LOADING │ ────────────→ │ COMPLETED │
└─────────┘                   └─────────┘               └───────────┘
                                   │                          │
                                   │ error                    │ error
                                   ↓                          ↓
                              ┌────────────────────────────────┐
                              │         isError: true           │
                              │   statusMessage: string         │
                              └────────────────────────────────┘
```

## Transitions

| From | To | Trigger | Data |
|------|----|---------|------|
| INIT | LOADING | `execute()` called | Preserved |
| LOADING | COMPLETED | API success | Updated |
| LOADING | ERROR | API failure | null |
| COMPLETED | LOADING | `execute()` recalled | Preserved |

## Aligned Documents

| Document | Role |
|----------|------|
| `invariants/mvvm-separation.md` | M-1: ViewModel owns state |
| `core/state-management.md` | State management guidance |
| `core/hooks.md` | useDataState API |
