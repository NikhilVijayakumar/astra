# State Management

Astra provides an async state lifecycle for managing data operations (API calls, form submissions). Every async operation follows the same three-phase pattern.

## State Lifecycle

Every async operation progresses through these phases:

- **Uninitialized**: No operation has been triggered yet
- **Loading**: An operation is in progress
- **Completed (Success)**: Operation finished with data
- **Completed (Error)**: Operation finished with an error

## When to Use

- **Yes**: API calls, form submissions, async operations
- **No**: UI-only state (local to component), global app configuration

## Responsibilities

- Define the async state lifecycle pattern for all data operations
- Provide state-driven UI routing: show loading, error, empty, or success content based on current state
- Give components a consistent way to track whether data is loading, available, or errored

## Non-Responsibilities

- Does not manage persistent state across page reloads
- Does not synchronize state across browser tabs
- Does not manage global application configuration

## Core Concepts

- **Three-phase lifecycle**: Every async operation transitions through INIT → LOADING → COMPLETED
- **State-driven routing**: UI adapts based on current state — shows spinners during load, content when ready, errors when failed
- **Derived status flags**: Each state provides success/error/loading flags for easy conditional rendering

## States

- **Uninitialized**: No async operation has been triggered yet
- **Loading**: An async operation is in progress
- **Completed (Success)**: Async operation finished with data
- **Completed (Error)**: Async operation finished with an error

## Error Conditions

- **Stale state after unmount**: Component unmounts during pending request — state updates must be guarded to avoid updating unmounted components
- **Rapid state transitions**: Multiple consecutive operations may cause rapid loading → completed cycling
- **Mixed error flags**: Error and success flags are not mutually exclusive in all states — consumers should use the state value for authoritative status

## Future Enhancements

- Devtools for debugging state transitions across all components
- Middleware support for logging or analytics on state changes
- Batched state updates for multiple concurrent async operations

## Open Questions

- Should state tracking include timestamps for staleness checks?
- How should WebSocket or SSE-driven state updates integrate with this lifecycle?
