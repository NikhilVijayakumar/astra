# Wrapper Components Compliance Questionnaire

This questionnaire ensures correct usage of `AppStateHandler` and other wrappers as defined in `docs/components/wrapper.md`.

## AppStateHandler
- [ ] Is `AppStateHandler` used to wrap the feature's success state?
- [ ] Is the `appState` prop passed correctly from the ViewModel?
- [ ] **Implementation Style**:
    - [ ] **Preferred**: Does it use the `children` pattern? (`<AppStateHandler><MyComponent /></AppStateHandler>`)
    - [ ] **Legacy**: Does it use `SuccessComponent` prop?
- [ ] Is an empty condition checked (if applicable via `emptyCondition`)?
- [ ] Is a custom `errorMessage` provided (if needed)?
- [ ] **Critical**: Do you handle the case where `children` are not provided? (AppStateHandler falls back to `EmptyState`).

## State Components
- [ ] Are `LoadingState` or `ErrorState` used manually? (They should typically be handled by `AppStateHandler`, but manual usage is allowed for edge cases).
