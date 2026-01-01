# Theming & Localization Compliance Questionnaire

This questionnaire ensures the app correctly uses Astra's theming and localization systems as defined in `docs/Theming.md` and `docs/Localization.md`.

## Theming
- [ ] Is the app wrapped in `ThemeProvider`?
- [ ] Are `lightTheme` and `darkTheme` provided?
- [ ] Does the app use `useTheme` to toggle modes?
- [ ] **Critical**: Is `CssBaseline` explicitly **removed** from `App.tsx`? (Astra's `ThemeProvider` includes it automatically; duplication causes issues).
- [ ] Are Material UI components used to leverage the theme automatically?

## Localization
- [ ] Is the app wrapped in `LanguageProvider`?
- [ ] Are `translations` and `availableLanguages` provided?
- [ ] Does the app use `useLanguage` to access literals?
- [ ] Are hardcoded strings avoided in the UI?
