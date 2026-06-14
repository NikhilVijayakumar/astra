# Localization System

The Astra i18n system provides runtime language switching with dictionary-based translations.

## Overview

The application can display content in multiple languages. Users switch languages at runtime without reloading the page. Each language has its own dictionary of translated strings organized by key.

## Responsibilities

- Provide a lightweight i18n system
- Enable runtime language switching without page reload
- Expose translation dictionaries to consuming components
- Supply a default language selector component

## Non-Responsibilities

- Not a translation management platform (no PO/XLIFF import/export)
- Does not perform automatic language detection or geolocation-based defaults
- Does not handle pluralization or interpolation rules
- Does not manage RTL layout switching
- Does not lazy-load translation chunks

## Core Concepts

| Concept | Description |
| ------- | ----------- |
| **Translation Dictionaries** | Key-value pairs per language |
| **Language Provider** | Wraps the application, provides translation context |
| **Runtime Switching** | Language changes propagate via re-render, no reload needed |
| **Translation Keys** | Dot-notation keys for looking up strings |

## States

- **Uninitialized**: Before provider mounts; language context is unavailable
- **Active**: Provider mounted with a valid language; translations available
- **Switching**: Language changed — new translations propagate to all consumers
- **Fallback**: Default language not found in translations — provider selects first available language

## Edge Cases

- **Missing translation key**: Lookup returns no value — consuming code should fall back to the key itself
- **Invalid language code**: Setting an unknown language yields an empty dictionary
- **Provider nesting**: Multiple providers do not merge — inner provider shadows outer context
- **Empty translations map**: All languages resolve to empty dictionaries

## Error Conditions

- **Missing translation key** — Component must handle with fallback text
- **Invalid language code** — Sets state but produces empty dictionary; UI may show no text
- **Provider nesting** — Inner provider shadows outer; consumers lose outer translations
- **Empty translations map** — UI renders without localized text

## Future Enhancements

- Lazy-loaded translation chunks loaded on-demand per feature
- Plurals and interpolation via ICU message format
- Auto-detection of browser language preference
- Translation key extraction CLI tool for CI pipeline

## Open Questions

- Should RTL layout switching be part of this system or handled by the theming layer?
- How should date, number, and currency formatting be integrated?
