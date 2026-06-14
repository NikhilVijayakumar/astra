<!-- generated-by: gsd-doc-writer -->

# Localization System

The Astra i18n system provides React context-based internationalization with runtime language switching and dictionary-based translations.

## Overview

| Feature                | Description                          |
| ---------------------- | ------------------------------------ |
| **Architecture**       | React Context API + useState         |
| **Translation Format** | Key-value dictionary per language    |
| **Language Switching** | Runtime mutable state                |
| **Provider**           | `LanguageProvider` wraps application |

## Core Components

- **LanguageProvider** — Context provider wrapping the app
- **LanguageContext** — React context with type definitions
- **LanguageSelector** — MUI dropdown for language switch

## Usage

```tsx
import { LanguageProvider } from "@astra/localization";

const translations = {
  en: { greeting: "Hello", farewell: "Goodbye" },
  es: { greeting: "Hola", farewell: "Adiós" },
};

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
];

<App>
  <LanguageProvider translations={translations} availableLanguages={languages}>
    <YourApp />
  </LanguageProvider>
</App>;
```

## Export Path

```ts
// src/common/localization/index.ts
export * from "./LanguageComponent";
export * from "./LanguageContext";
export * from "./LanguageProvider";
```

## Responsibilities

- Provide a lightweight React Context-based i18n system
- Enable runtime language switching without page reload
- Expose translation dictionaries to consuming components
- Supply a default `LanguageSelector` UI component
- Integrate with the Astra application shell

## Non-Responsibilities

- Not a translation management platform (no PO/XLIFF import/export)
- Does not perform automatic language detection or geolocation-based defaults
- Does not handle pluralization or interpolation rules
- Does not manage RTL layout switching
- Does not lazy-load translation chunks

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| **TranslationMap** | Key-value dictionary per language keyed by language code |
| **LanguageProvider** | React context provider that holds current language state |
| **LanguageContext** | The React context consumed by hooks and components |
| **Runtime mutability** | Language changes propagate via React re-render, no reload needed |

## Edge Cases

- **Missing translation key**: `literal["unknown.key"]` returns `undefined` — consuming code should fall back to the key itself or a default
- **Invalid language code**: `setCurrentLanguage("zz")` sets the state but yields an empty dictionary — provider validates against `availableLanguages`
- **Provider nesting**: Multiple `LanguageProvider` instances do not merge — inner provider shadows outer context
- **Empty translations map**: If `translations` is empty, all languages resolve to an empty `literal` dictionary

## States

- **Uninitialized**: Before `LanguageProvider` mounts; `useLanguage` throws if called outside provider
- **Active**: Provider mounted with a valid `currentLanguage`; translations available via `literal`
- **Switching**: `setCurrentLanguage` called — React re-render propagates new `literal` dictionary to all consumers
- **Fallback**: `defaultLanguage` not found in `translations` — provider selects the first available language

## Inputs/Outputs

| Input | Output |
|-------|--------|
| `translations: TranslationMap` | Per-language key-value dictionaries available via context |
| `availableLanguages: LanguageDefinition[]` | Language options exposed to consumers |
| `defaultLanguage?: string` | Initial `currentLanguage` value (default `'en'`) |
| `children` wrapping | All descendants gain access to `useLanguage` context |

## Error Conditions

- **Missing translation key**: `literal["unknown.key"]` returns `undefined` — components must handle with fallback
- **Invalid language code**: `setCurrentLanguage("zz")` sets state but yields empty dictionary — UI may show no text
- **Provider nesting**: Inner `LanguageProvider` shadows outer — consumers inside inner provider lose outer translations
- **Empty `translations` map**: All languages resolve to empty `Record<string, string>` — UI renders without localized text

## Future Enhancements

- Lazy-loaded translation chunks loaded on-demand per feature
- Plurals and interpolation rules via ICU message format
- Auto-detection of browser language preference on initial visit
- Translation key extraction CLI tool for CI pipeline integration

## Open Questions

- Should RTL layout switching be part of this system or handled by the theming layer?
- How should date, number, and currency formatting be integrated?
- Is the flat dictionary pattern still viable at 1000+ translation keys?
