# State Management in Astra

Astra uses a **centralized state pattern** with MVVM to handle async data flows.

## Architecture

```
┌─────────────────┐
│   useDataState  │  ← ViewModel (hook)
│  (State + API)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AppState<T>    │  ← Model (type)
│   (interface)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ AppStateHandler │  ← View (component)
│   (UI Router)   │
└─────────────────┘
```

## Core Types

| Type             | File                                | Description                    |
| ---------------- | ----------------------------------- | ------------------------------ |
| `AppState<T>`    | `src/common/state/AppState.ts`      | Generic state container        |
| `StateType`      | `src/common/state/AppState.ts`      | Enum: INIT, LOADING, COMPLETED |
| `HttpStatusCode` | `src/common/repo/HttpStatusCode.ts` | HTTP status constants          |

## When to Use

- **Yes**: API calls, form submissions, async operations
- **No**: UI-only state (use `useState`), global app config (use context)

See [useDataState](./useDataState.md) and [AppStateHandler](./AppStateHandler.md) for details.
