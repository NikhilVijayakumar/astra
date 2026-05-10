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
