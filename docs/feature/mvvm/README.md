# MVVM Architecture in Astra

Astra implements the **Model-View-ViewModel** pattern to separate UI from business logic.

## Pattern Overview

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│    View     │◄───►│  ViewModel   │◄───►│    Model    │
│ (React UI)  │     │ (Hooks/State)│     │ (Data/Repo) │
└─────────────┘     └──────────────┘     └─────────────┘
```

- **Model**: Data layer (repositories, API calls)
- **ViewModel**: State management hooks (`useDataState`)
- **View**: React components (`AppStateHandler`)

## Key Components

| Component         | Location                         | Purpose                  |
| ----------------- | -------------------------------- | ------------------------ |
| `useDataState`    | `src/common/hooks/`              | State + async execution  |
| `AppStateHandler` | `src/common/components/wrapper/` | Conditional UI rendering |
| `AppState`        | `src/common/state/`              | State type definitions   |

## Usage Flow

1. ViewModel exposes state via `useDataState`
2. Component calls `execute(apiCall)` to fetch data
3. `AppStateHandler` renders Loading/Error/Success/Empty

See [Pattern](./pattern.md) for implementation details.
