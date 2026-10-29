# astra-contracts Specification

## Purpose

Record a draft, traceable baseline of Astra's documented library contracts. Historical sources and code observations require review; scenarios do not constitute executed tests. Unresolved requirements remain in `docs/requirements/raw-inventory.md` until decided.

## Requirements

### Requirement: Async state lifecycle
The hook SHALL expose INIT, LOADING and COMPLETED phases and preserve existing data while entering LOADING (REQ-STATE-001; `knowledge/concepts/async-state.md`).

#### Scenario: Start an operation with existing data
- **GIVEN** a state with existing data
- **WHEN** execution starts
- **THEN** the state is LOADING and the existing data is retained

### Requirement: Async result mapping
The hook SHALL map a resolved response to completion fields and turn a thrown operation into a completed error with status 500 and the configured fallback message, if any (REQ-STATE-002; `knowledge/concepts/async-state.md`).

#### Scenario: Operation throws
- **GIVEN** an unexpected error message is configured
- **WHEN** the operation throws while mounted
- **THEN** state is COMPLETED with an error, status 500 and that message

### Requirement: State rendering priority
The state handler SHALL choose loading before error, followed by success or empty, then fallback; a supplied slot SHALL take precedence over its context component (REQ-UI-001; `knowledge/concepts/state-rendering.md`).

#### Scenario: Loading takes precedence over error
- **GIVEN** state is LOADING and also marked as error
- **WHEN** the handler renders with a loading slot and context loading component
- **THEN** the loading slot is rendered

### Requirement: HTTP response normalization
The HTTP service SHALL return a ServerResponse for successful requests and ordinary request failures, distinguishing HTTP response status, network status 0 and unexpected status 500 (REQ-HTTP-001; `knowledge/concepts/transports.md`). The behavior of a throwing error callback is an open question.

#### Scenario: Network failure
- **GIVEN** an Axios request fails without a response and the error callback does not throw
- **WHEN** the service handles the failure
- **THEN** it returns an error response with status 0

### Requirement: API service cache
The API service factory SHALL reuse an instance for the same base URL (REQ-HTTP-002; `knowledge/concepts/transports.md`).

#### Scenario: Repeated factory request
- **GIVEN** an instance has been created for a base URL
- **WHEN** the factory is called again with that URL
- **THEN** it returns the existing instance

### Requirement: Electron transport
The IPC service SHALL provide request-response invocation, one-way send, and event reception with an unsubscribe function using the consumer's preload bridge (REQ-IPC-001; `knowledge/concepts/transports.md`).

#### Scenario: Bridge unavailable for invoke
- **GIVEN** a browser window without an Electron API
- **WHEN** invoke is called
- **THEN** it returns an error response with status 500

### Requirement: Public library boundaries
Public API changes SHALL be assessed against declared exports and peer compatibility; consumers provide presentation, localization, persistence and runtime bridge infrastructure (REQ-API-001, REQ-BOUNDARY-001; `knowledge/architecture/public-api-build.md` and `knowledge/architecture/mvvm-boundaries.md`).

#### Scenario: Proposed public export change
- **GIVEN** a proposed change to a public export
- **WHEN** it is reviewed
- **THEN** the review assesses declared entry points, declarations and consumer compatibility

### Requirement: Concurrent async completion
Concurrent executions SHALL be documented as independently completing without an invocation-order guard (REQ-STATE-003; `knowledge/concepts/async-state.md`).

#### Scenario: Earlier invocation finishes last
- **GIVEN** two operations are executing and the later invocation completes first
- **WHEN** the earlier invocation completes while the hook remains mounted
- **THEN** its response can update state after the later invocation's response

### Requirement: Default and overridden state
The hook SHALL initialize state to INIT, false result flags, IDLE status, an empty message and null data, with caller-provided partial overrides (REQ-STATE-004; `knowledge/concepts/async-state.md`).

#### Scenario: Override initial data
- **GIVEN** an initial data override
- **WHEN** the hook initializes
- **THEN** the data matches the override and unspecified fields retain their defaults

### Requirement: Preserve prior state during loading
The hook SHALL change the phase to LOADING while preserving all other previous fields (REQ-STATE-005; `knowledge/concepts/async-state.md`).

#### Scenario: Reload after an error
- **GIVEN** an error state with existing data and status
- **WHEN** a new operation starts
- **THEN** its phase is LOADING while the previous flags, status, message and data remain

### Requirement: Empty and error rendering
The handler SHALL evaluate the empty predicate only for successful non-null data and pass the explicit errorMessage to a context error component when no error slot overrides it (REQ-UI-002; `knowledge/concepts/state-rendering.md`).

#### Scenario: Null successful data
- **GIVEN** success is true and data is null
- **WHEN** the handler renders
- **THEN** the empty predicate is not called

### Requirement: HTTP request methods
The HTTP service SHALL support GET, POST, PUT and DELETE, pass request configuration to Axios, and set its own URL and method after applying that configuration. POST and PUT also set the supplied data after applying configuration (REQ-HTTP-003; `knowledge/concepts/transports.md`).

#### Scenario: Request with configuration
- **GIVEN** a base URL, path and request configuration
- **WHEN** GET is invoked
- **THEN** Axios receives the configuration with the service's GET method and concatenated URL, even if configuration supplied different values for those fields

### Requirement: IPC event lifecycle
The IPC service SHALL suppress send errors and return the bridge's unsubscribe function for a registered receiver; the consumer owns listener disposal (REQ-IPC-003; `knowledge/concepts/transports.md`).

#### Scenario: Send failure
- **GIVEN** a bridge send operation that throws
- **WHEN** the service sends a message
- **THEN** the exception is suppressed
