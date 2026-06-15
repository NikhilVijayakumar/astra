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

### State Transitions

| From State | To State | Trigger |
| ---------- | -------- | ------- |
| Uninitialized | Loading | Async operation initiated |
| Loading | Completed (Success) | Operation returns data |
| Loading | Completed (Error) | Operation returns error |
| Completed (Success) | Loading | Refresh or re-fetch triggered |
| Completed (Error) | Loading | Retry initiated |

## Error Conditions

- **Stale state after unmount**: Component unmounts during pending request — state updates must be guarded to avoid updating unmounted components
- **Rapid state transitions**: Multiple consecutive operations may cause rapid loading → completed cycling
- **Mixed error flags**: Error and success flags are not mutually exclusive in all states — consumers should use the state value for authoritative status

## Authorization

**Visibility:** Authenticated — state management operates within authenticated application contexts; no state tracking occurs before user identity is established.

## User Journey

### Entry Conditions
A developer encounters an async operation (API call, form submission) and needs a consistent way to track its state.

### Primary Flow
The developer adopts the three-phase lifecycle pattern — the component shows a loader during loading, renders content on success, or displays an error message on failure.

### Alternate Flows
A developer uses derived status flags (isLoading, isError, isSuccess) for conditional rendering without checking the raw state value.

### Failure Flows
A component unmounts during a pending request — state updates fire for an unmounted component, causing a warning.

### Recovery Flows
The developer adds cleanup logic to guard state updates after unmount, or uses the state value for authoritative status instead of derived flags.

### Exit Conditions
The async operation completes and the UI reaches its final state (success content or error display).

## Workflow

### Trigger
An async operation such as an API call or form submission is initiated.

### Preconditions
The component is mounted and the async operation has not yet started (uninitialized state).

### Steps
The state transitions from uninitialized to loading, the UI shows a spinner, then the operation completes transitioning to either a success or error state.

### Outcomes
The UI reflects the operation outcome — data is displayed on success or an error message on failure.

### Exceptions
Rapid state transitions occur from multiple consecutive operations causing loading-to-completed cycling.

### Completion Criteria
The state reaches completed (success or error) and the UI renders the appropriate content.

## See Also

- [Glossary](../concepts/glossary.md) — concept-to-feature ownership map
- [Authorization Model](../concepts/authorization.md) — cross-cutting permission rules
- [Dependency Contracts](../concepts/dependency-contracts.md) — formal contracts with other features
- [Lifecycle Ordering](../concepts/lifecycle.md) — initialization order

## Future Enhancements

- Devtools for debugging state transitions across all components
- Middleware support for logging or analytics on state changes
- Batched state updates for multiple concurrent async operations

## Open Questions

- Should state tracking include timestamps for staleness checks?
- How should WebSocket or SSE-driven state updates integrate with this lifecycle?
