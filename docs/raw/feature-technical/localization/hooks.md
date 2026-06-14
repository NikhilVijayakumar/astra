# useLanguage Hook

---

# Feature Summary

Primary hook for accessing localization state. Returns the active language code, a language setter, the current translation dictionary, and the available languages list. Must be called within a `LanguageProvider`. Throws a descriptive error if called outside the provider boundary.

---

# Implementation Reference
## Status
Implemented
## Source Files
| File | Role |
|------|------|
| `src/common/localization/LanguageContext.ts` | `useLanguage` hook definition, `LanguageContext` creation, type exports |
| `src/common/localization/LanguageComponent.tsx` | `LanguageSelector` component that consumes `useLanguage` |
| `src/common/localization/index.ts` | Barrel re-export |
## Public API
```typescript
// From LanguageContext.ts
function useLanguage(): LanguageContextValue;

type LanguageContextValue = {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  literal: Record<string, string>;
  availableLanguages: LanguageDefinition[];
};

type LanguageDefinition = {
  code: string;
  label: string;
};
```

---

# Architecture Mapping

| Pattern | Feature Usage | Reason |
|---------|---------------|--------|
| Context Consumer Hook | `useLanguage` calls `useContext(LanguageContext)` | Standard React pattern for consuming nearest provider value |
| Guard Clause | Throws if context is `undefined` | Hard failure at development time — no silent `undefined` access |
| Destructured Return | Returns plain object, not lazy getters | All values are computed by provider on re-render |
| Re-Export Safety | Hook exported through barrel `index.ts` then `common/index.ts` then `lib.ts` | Accessible as `import { useLanguage } from 'astra'` per `public-api-stability.md` |

---

# Technical Structure

## Services table
| Service | File Path | Purpose | Dependencies |
|---------|-----------|---------|--------------|
| `useLanguage()` | `src/common/localization/LanguageContext.ts:20` | Returns `LanguageContextValue` from context | `React.useContext`, `LanguageContext` |
| `LanguageSelector` | `src/common/localization/LanguageComponent.tsx:7` | UI dropdown for language switching | `useLanguage`, `@mui/material`, `@mui/icons-material` |

## State Model table (from consumer perspective)
| State | Condition | `currentLanguage` | `literal` |
|-------|-----------|-------------------|-----------|
| Bound | Hook called inside `LanguageProvider` | Provider's state | Provider's dictionary |
| Unbound | Hook called outside `LanguageProvider` | **throws Error** | **throws Error** |
| Switching | After `setCurrentLanguage(newCode)` called | `newCode` | Updated dictionary (next render) |
| Empty dictionary | Active language has no translations | Language code | `{}` |

## Data flow
```
LanguageProvider
  ↓ creates context value: { currentLanguage, setCurrentLanguage, literal, availableLanguages }
  ↓
Component calls useLanguage()
  ↓
useLanguage() calls useContext(LanguageContext)
  ├── context exists → return LanguageContextValue
  └── context is undefined → throw Error("useLanguage must be used within a AstraLanguageProvider")
  ↓
Component destructs: const { currentLanguage, setCurrentLanguage, literal, availableLanguages } = useLanguage();
```

---

# Error Handling

| Error Type | Cause | System Response | Consumer Response |
|------------|-------|-----------------|-------------------|
| Missing provider | `useLanguage()` called outside `LanguageProvider` | Throws `Error: useLanguage must be used within a AstraLanguageProvider` | Wrap component tree with `LanguageProvider` |
| Missing translation key | `literal["key"]` is `undefined` | `undefined` propagates to JSX | Use fallback: `literal["key"] ?? "Fallback"` |
| Invalid language code | `setCurrentLanguage("xx")` with no matching translation | Provider accepts call; `literal` becomes `{}` | Validate language code before calling setter |
| Rapid re-renders | Multiple `setCurrentLanguage` calls synchronously | Each call triggers a re-render; last call wins | Debounce rapid switches if needed |

---

# Non-Functional Requirements

| Requirement | Constraint |
|------------|------------|
| Call Cost | O(1) — single `useContext` call |
| Error Message | Descriptive string hardcoded in source — not localized |
| TypeError Safety | Return type is typed — `currentLanguage: string`, `literal: Record<string, string>` |
| Bundle Size | Minimal — no dependencies beyond `react` |

---

# Architecture Compliance Review

## Applied Patterns
- **Context Access via Hook**: `localization.md` and `localization-invariant.md` require `useLanguage` — compliant
- **Guard Clause**: Throws on missing provider — compliant with `localization-invariant.md` rule against silent failure
- **Public Export**: Re-exported through barrel chain to `lib.ts` — compliant with `public-api-stability.md`

## Risks
- `LanguageSelector` import path (`src/common/localization/LanguageComponent.tsx`) uses inconsistent comment path `//src\common\components\LanguageComponent.tsx` — may confuse tooling
- No `useMemo` on hook return — new object reference on each render (but acceptable since context value already changes)
- No parameterized accessor like `t(key)` — consumers must manually do `literal["key"]` which is verbose and error-prone

## Gaps
- No `useTranslation(namespace)` for scoped key access
- No memoized `t(key)` function to optimize repeated lookups
- No typed key autocompletion (Template Literal Types)
- No `withTranslation` HOC for class components
- No `formatMessage` helper with variable interpolation

---

# Module Map

| Module | File Path | Exports | Imports From |
|--------|-----------|---------|--------------|
| `LanguageContext` | `src/common/localization/LanguageContext.ts` | `LanguageContext`, `LanguageContextValue`, `LanguageDefinition`, `useLanguage` | `react` |
| `LanguageComponent` | `src/common/localization/LanguageComponent.tsx` | `LanguageSelector` | `react`, `@mui/material`, `@mui/icons-material`, `../localization/LanguageContext` |
| `LanguageProvider` | `src/common/localization/LanguageProvider.tsx` | `LanguageProvider`, `TranslationMap` | `react`, `./LanguageContext` |
| `index` (localization) | `src/common/localization/index.ts` | Re-exports all localization modules | `./LanguageComponent`, `./LanguageContext`, `./LanguageProvider` |
| `index` (common) | `src/common/index.ts` | Re-exports common modules | `./localization` |

---

# Final Rule

Every component that renders user-facing text must call `useLanguage()` — never access `literal` from a global or module-level scope. The hook must only be called inside a `LanguageProvider` boundary. If a component receives translated text as props (pre-translated by a parent), it does not need `useLanguage` — but the parent must have called it.
