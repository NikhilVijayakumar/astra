# IPC Service Layer

IPC communication wrapper for Electron targets. All Electron IPC access in Astra goes through this layer — feature repositories never call `window.electronAPI` directly.

## `IpcService`

`IpcService` is the service abstraction over Electron IPC. It wraps `window.electronAPI` (exposed by Prana's preload context bridge) and normalizes all responses into `ServerResponse`.

| Method | Parameters | Returns |
|--------|------------|---------|
| `invoke` | `channel` (string), optional `...args` | Promise of ServerResponse |
| `send` | `channel` (string), optional `...args` | void |
| `receive` | `channel` (string), `callback` | void |

### `invoke`

Calls `window.electronAPI.invoke(channel, ...args)` and wraps the return value in `ServerResponse`.

```typescript
const ipc = new IpcService();

// channel: string — maps to ipcMain.handle('tasks:list', ...)
// args: optional payload passed to the handler
const result = await ipc.invoke('tasks:list');
```

**Error normalization** — all errors are caught and returned as `ServerResponse.error(...)`, never thrown:

| Cause | `status` in response |
|-------|----------------------|
| `window.electronAPI` returns error | Status from IPC response |
| Communication failure | `HttpStatusCode.INTERNAL_SERVER_ERROR` (500) |
| Unexpected exception | `HttpStatusCode.INTERNAL_SERVER_ERROR` (500) |

### `send`

One-way message to the main process. No response expected.

```typescript
ipc.send('channel', payload);
```

### `receive`

Listen for messages from the main process. Returns an unsubscribe function.

```typescript
const unsubscribe = ipc.receive('channel', (data) => {
  // handle data from main process
});
```

## Usage in a Feature Repository

```
ipc = new IpcService()

taskRepository:
  list()       → ipc.invoke("tasks:list")
  get(id)      → ipc.invoke("tasks:get", { id })
  create(data)  → ipc.invoke("tasks:create", data)
  update(data)  → ipc.invoke("tasks:update", data)
  delete(id)   → ipc.invoke("tasks:delete", { id })
```

The repository contract is identical to an HTTP repository. Only the transport differs.

## Requirements

`IpcService` requires:

- `window.electronAPI` to be exposed by a preload script via `contextBridge.exposeInMainWorld`
- The preload script to expose at minimum an `invoke` method
- TypeScript ambient declaration for `window.electronAPI` interface

## Non-Responsibilities

`IpcService` does not:

- register `ipcMain.handle(...)` handlers — that belongs to the main process (Prana or consumer-owned)
- expose `contextBridge` or `ipcRenderer` — those are runtime infrastructure owned by Prana
- manage React state — that is `useDataState`
- render loading/error/success UI — that is `AppStateHandler`
- decide when to fetch — that is the ViewModel (`useEffect` in a hook)

## See Also

- [repository.md](./repository.md) — `ServerResponse` that `invoke` returns
- [use-data-state.md](./use-data-state.md) — hook that calls the repository and updates `AppState`
- [Runtime Boundary Invariant](../architecture/invariants/runtime-boundary.md) — Astra vs Prana ownership rules
