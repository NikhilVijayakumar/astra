# Repository Layer Compliance Questionnaire

This questionnaire ensures correct implementation of the Data Layer as defined in `docs/Repository_Layer.md`.

## ApiService
- [ ] Is `ApiService` used for all HTTP requests?
- [ ] Is `ApiService` injected into Repositories (not instantiated inside)?

## Repository Pattern
- [ ] Does the Repository abstract the data source completely?
- [ ] Are methods properly typed with `Promise<ServerResponse<T>>`?
- [ ] Are `ServerResponse.success(SuccessResponse)` and `ServerResponse.error(ErrorResponse)` static methods used? (Avoid manual instantiation).
- [ ] **Critical**: Is `statusMessage` correctly handled as a `String` (object) vs `string` (primitive) if manual assignment occurs?
- [ ] Is error handling uniform (using `ServerResponse.error`)?
- [ ] Is raw `axios` usage avoided in feature code?

## Localization (Repo)
- [ ] Are error messages from the backend handled or localized if needed?
