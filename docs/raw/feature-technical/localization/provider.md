# LanguageProvider

---

# Feature Summary

Root component of the localization system. Wraps the React component tree with a `LanguageContext.Provider` that holds current language state, a translation dictionary, and available language metadata. Any descendant can access translations and switch languages via `useLanguage()`. The provider re-renders the entire consumer subtree on language change by updating context value.

---

# Implementation Reference
## Status
Implemented
## Source Files
| File | Role |
|------|------|
| `src/common/localization/LanguageProvider.tsx` | `LanguageProvider` component definition |
| `src/common/localization/LanguageContext.ts` | Context creation, `LanguageContextValue` type, `useLanguage` hook, `LanguageDefinition` type |
| `src/common/localization/index.ts` | Barrel re-export |
| `src/common/localization/LanguageProvider.test.tsx` | Unit tests |
## Public API
```typescript
// LanguageProvider.tsx
type TranslationMap = {
  [key: string]: Record<string, string>;
};

function LanguageProvider({
  children,
  translations,
  availableLanguages,
  defaultLanguage = 'en',
}: {
  children: ReactNode;
  translations: TranslationMap;
  availableLanguages: LanguageDefinition[];
  defaultLanguage?: string;
}): JSX.Element;

// LanguageContext.ts
type LanguageDefinition = {
  code: string;
  label: string;
};

type LanguageContextValue = {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  literal: Record<string, string>;
  availableLanguages: LanguageDefinition[];
};
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| React Context | `createContext(LanguageContext)` provides i18n state to entire subtree | No prop drilling — any component can access translations; aligns with `localization.md` |
| Provider Component | `LanguageProvider` wraps children with `LanguageContext.Provider` | Single initialization point at app root; enforces locale scope |
| State Lift | `currentLanguage` state lives in provider; `setCurrentLanguage` passed via context | Language state is global; consumer components only consume, never own |
| Effect-Driven Sync | `useEffect` updates `literal` when `currentLanguage` or `translations` changes | Reactive — dictionary stays in sync without imperative calls |
| Guard Clause | `useLanguage` throws if called outside provider | Catches misconfiguration at development time — aligns with `localization.md` |

---

# Technical Structure

## Views table
| View | File Path | Purpose | Responsibilities | Imports From |
|------|-----------|---------|------------------|--------------|
| `LanguageProvider` | `src/common/localization/LanguageProvider.tsx` | Context provider wrapper | Initialize language state; provide `literal` dictionary; propagate `setCurrentLanguage`; validate default language | `react`, `./LanguageContext` |

## State Model table
| State | Trigger | `currentLanguage` | `literal` |
|-------|---------|-------------------|-----------|
| Mounted (valid) | Provider mounts with valid `defaultLanguage` | `defaultLanguage` or `'en'` | `translations[currentLanguage]` |
| Mounted (fallback) | `defaultLanguage` not in `translations` | First key of `availableLanguages` | `translations[firstKey]` or `{}` |
| Language switch | `setCurrentLanguage(newCode)` called | `newCode` | `translations[newCode]` or `{}` (via `useEffect`) |
| Degraded | `translations[currentLanguage]` is `undefined` | Unchanged | `{}` (empty dictionary) |

## Data flow
```
LanguageProvider mount
  ↓
useState(defaultLanguage) → currentLanguage = 'en'
useState(translations['en']) → literal = { ... }
  ↓
useEffect: currentLanguage changes → setLiteral(translations[currentLanguage])
  ↓
Context value: { currentLanguage, setCurrentLanguage, literal, availableLanguages }
  ↓
Consumer calls useLanguage() → destructs context value
```

---

# Error Handling

| Error Type | Cause | System Response | Consumer Response |
|------------|-------|-----------------|-------------------|
| Missing default language | `defaultLanguage` not in `translations` keys | Falls back to first key in `translations` silently | No consumer action — but should validate at provider init |
| Empty `availableLanguages` | `availableLanguages` is `[]` | `currentLanguage` initializes to `'en'`; `useLanguage` consumers may crash iterating empty array | Always provide at least one language definition |
| Late translation addition | New keys added after mount | No effect — provider does not observe object mutation | Pass complete translation map at mount time |
| Missing translation key | `literal['some.key']` is `undefined` | Returns `undefined` in JSX (renders nothing or crashes) | Use fallback: `literal['key'] ?? key` |
| Runtime translation replacement | `translations` prop reference changes | `useEffect` fires, `setLiteral` updates context, subtree re-renders | Ensure stable reference or accept re-render cost |

---

# Non-Functional Requirements

| Requirement | Constraint |
|-------------|------------|
| Re-render Scope | All context consumers re-render on language change — no selective subtree updates |
| Initialization Cost | Two `useState` calls + one `useEffect` — negligible |
| Memory | Full translation dictionary held in memory for all languages simultaneously |
| Guard Strength | Missing provider throws immediately during render — clear error message |
| Default Language | `'en'` hardcoded as default — compliant but may not suit all consumers |

---

# Architecture Compliance Review

## Applied Patterns
- **Context-Based Localization**: `localization.md` and `localization-invariant.md` require `LanguageProvider` at app root — compliant
- **Prop-Driven Configuration**: Translations, languages, default are props — provider is stateless business-wise (only UI state is `currentLanguage`)
- **Guard Clause on Missing Context**: `useLanguage` throw aligns with `localization-invariant.md` — missing provider must error visibly

## Risks
- Entire consumer subtree re-renders on every language switch — potential performance issue in large trees
- No `useMemo` on context value — creates new object reference every render, causing unnecessary re-renders even if language hasn't changed
- `setLiteral` in `useEffect` causes a second render on mount (first render uses `useState(translations[defaultLanguage])`, then `useEffect` fires and sets it again) — redundant
- Externalizes `TranslationMap` type but not as a named export — importable from `LanguageProvider.tsx` path

## Gaps
- No deep-merge for partial translations (language → fallback chain)
- No persisted language preference across sessions
- No async translation loading with Suspense
- No validation on `setCurrentLanguage` — invalid language codes silently produce empty dictionary
- No RTL direction state alongside language

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `LanguageProvider` | `src/common/localization/LanguageProvider.tsx` | `LanguageProvider` (component), `TranslationMap` (type) | `react`, `./LanguageContext` |
| `LanguageContext` | `src/common/localization/LanguageContext.ts` | `LanguageContext`, `LanguageContextValue`, `LanguageDefinition`, `useLanguage` | `react` |
| `index` (localization) | `src/common/localization/index.ts` | Re-exports localization modules | `./LanguageComponent`, `./LanguageContext`, `./LanguageProvider` |
| `LanguageSelector` | `src/common/localization/LanguageComponent.tsx` | `LanguageSelector` (component) | `react`, `@mui/material`, `@mui/icons-material`, `../localization/LanguageContext` |

---

# Final Rule

`LanguageProvider` must be the outermost context provider in the application tree (above all routed content). Every user-facing string must flow through the `literal` dictionary provided by this component. Never hardcode a language code or translation string outside of this provider's configuration.
