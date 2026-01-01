# State & Hooks Compliance Questionnaire

This questionnaire checks usage of Astra's state management and custom hooks as defined in `docs/state.md` and `docs/hooks.md`.

## AppState
- [ ] Is `AppState<T>` used as the standard state interface?
- [ ] Are `StateType.LOADING`, `ERROR`, `SUCCESS` handled?

## Hooks
- [ ] Is `useDataState` used for async operations?
- [ ] Is `execute` used to wrap async calls?
- [ ] **Critical**: Does the code handle the potential `String` vs `string` type mismatch for `statusMessage` when consuming `ServerResponse`?
- [ ] Are manual state updates (via `setAppState`) minimized/avoided unless necessary?
- [ ] Are other hooks (`useLanguage`, `useTheme`) used where appropriate instead of prop drilling?
- [ ] Are hooks strictly kept in the `viewmodel` or `view` layers (not in `repo`)?
