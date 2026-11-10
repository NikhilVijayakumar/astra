## ADDED Requirements

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
