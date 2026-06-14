# MVVM Architecture in Astra

Astra implements the **Model-View-ViewModel** pattern to separate UI from business logic.

## Overview

Astra's MVVM architecture provides a structured separation between UI rendering (View), state management (ViewModel), and data access (Model). This pattern ensures components remain focused on presentation while business logic and data fetching live in reusable hooks.

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
| `AppStateHandler` | `src/common/components/organisms/` | Conditional UI rendering |
| `AppState`        | `src/common/state/`              | State type definitions   |

## Usage Flow

1. ViewModel exposes state via `useDataState`
2. Component calls `execute(apiCall)` to fetch data
3. `AppStateHandler` renders Loading/Error/Success/Empty

See [Pattern](./pattern.md) for implementation details.

## Responsibilities

- **ViewModel** — Manages component state, orchestrates async data flows, and exposes reactive state to the View
- **View** — Renders UI based on ViewModel state; contains no business logic
- **Model** — Handles data fetching, caching, and type definitions
- **AppStateHandler** — Standardizes rendering of loading, error, success, and empty states

## Non-Responsibilities

- MVVM does not replace global state management (Redux, Context) for cross-component shared state
- The View does not directly call API services or repositories
- ViewModels do not handle routing or navigation logic
- The pattern does not enforce a specific data-fetching library

## Core Concepts

- **Reactive State** — ViewModel state drives UI via the `appState` object; components react to state transitions
- **Separation of Concerns** — Each layer has a single responsibility with unidirectional data flow
- **AppState Machine** — State flows through INIT → LOADING → COMPLETED with associated metadata (status, error)

## Edge Cases

- **Stale data** — After navigation, ensure previous state does not leak into new views
- **Race conditions** — Multiple rapid `execute()` calls may resolve out of order; implement cancellation or debouncing
- **Memory leaks** — Unsubscribing from async operations on component unmount is essential
- **Empty success** — `isSuccess` can be true while `data` is null; always check data before rendering

## States

- **INIT** — Initial state before any `execute()` call; no data, no error
- **LOADING** — `execute()` in progress; UI should show spinner or skeleton
- **COMPLETED / Success** — Data fetched successfully; `isSuccess = true`, `data` populated
- **COMPLETED / Error** — Fetch failed; `isError = true`, `statusMessage` set
- **COMPLETED / Empty** — Success with no data; `isSuccess = true`, `data = null`

## Inputs/Outputs

- **Inputs:** `execute(asyncFn)` call from ViewModel, generic type `T` for state typing
- **Outputs:** `appState: AppState<T>` with `state`, `isError`, `isSuccess`, `status`, `statusMessage`, `data`; rendered UI via `AppStateHandler`

## Error Conditions

- **Race conditions** — Multiple rapid `execute()` calls resolve out of order; stale data may overwrite fresher results
- **Memory leaks** — Async operations completing after component unmount cause React state update warnings
- **Stale data** — Previous view state leaks into new view after navigation
- **Null data on success** — API returns 200 with null body; `data` is `null` despite `isSuccess = true`
- **State stuck at INIT** — Forgetting to call `execute()` leaves component in loading-indefinite state

## Future Enhancements

- Auto-execute option in `useDataState` to trigger on mount without explicit `execute()` call
- Request deduplication so two components fetching the same data share one request
- Side-effect middleware for logging, analytics, or optimistic updates on state transitions
- Suspense-compatible data fetching using React 18+ Suspense boundaries

## Open Questions

- How should WebSocket or SSE streams map onto the MVVM AppState lifecycle?
- Is the MVVM pattern overly abstract for simple CRUD features that need no ViewModel?
- Should the ViewModel layer be testable in isolation without rendering a component?
