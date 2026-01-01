# MVVM Clean Architecture Compliance Questionnaire

This questionnaire ensures that a feature implements the MVVM Clean Architecture pattern correctly as defined in `docs/MVVM_Clean_Architecture.md`.

## 1. Directory Structure
- [ ] Does the feature reside in `src/features/[feature_name]`?
- [ ] Does the folder contain `repo/`, `view/`, and `viewmodel/` subdirectories?

## 2. Repository Layer
- [ ] Is there a Repository class extracting data fetching logic?
- [ ] Does the Repository use **Composition** (injecting `ApiService`) instead of Inheritance?
- [ ] Does the Repository return a `Promise<ServerResponse<T>>`?
- [ ] Are API calls made **only** in the Repository, never in the ViewModel or View?

## 3. ViewModel Layer
- [ ] Is the ViewModel a custom hook (e.g., `use[Feature]ViewModel`)?
- [ ] Does the ViewModel uses `useDataState` to manage `AppState`?
- [ ] Is `isLoading`, `isError`, etc., managed automatically via `useDataState` helper?
- [ ] Is the ViewModel pure logic (no JSX/UI imports)?
- [ ] Does the ViewModel expose a single `state` object or clear primitive selectors?

## 4. View Layer
- [ ] Is the View split into a **Stateful Container** and **Stateless Components**?
- [ ] Does the Container use `AppStateHandler` to render the UI?
- [ ] Are stateless components defined purely by their props (no business logic)?

## 5. App Initialization
- [ ] Is the application wrapped with `LanguageProvider`?
- [ ] Is the application wrapped with `ThemeProvider`?
- [ ] Are providers placed correct (outside the Router/MainLayout)?
