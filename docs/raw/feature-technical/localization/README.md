# Localization System: Feature Technical

## 1. Technical Overview

The localization system provides runtime language switching via a React Context-based architecture. It is built on `LanguageProvider` (app root wrapper), `useLanguage` hook (consumer interface), and flat dictionary translation files (`src/common/localization/*.json`). The system is stateless — persistence is consumer-managed. All user-facing text must flow through `useLanguage().literal['domain.element.key']`. Interpolation uses `{{placeholder}}` syntax resolved at the ViewModel layer via a consumer-owned `common/i18n/interpolate.ts` utility.

## 2. Architecture Realization

| Feature Spec Concept | Architecture Implementation |
|---|---|
| Language Provider | `LanguageProvider` from `astra`, wraps app root. Accepts `translations`, `availableLanguages`, `defaultLanguage` props. |
| Runtime Switching | `setCurrentLanguage(langCode: string)` from `useLanguage()` — triggers re-render of all consumers via context update. |
| Translation Dictionaries | Flat JSON files in `src/common/localization/{lang}.json` with nested objects flattened at access time. |
| Translation Keys | Dot-notation `{domain}.{page}.{element}` pattern. Accessed via `literal['key']`. |
| Fallback | Missing key returns `undefined`. Consumer handles via optional chaining or fallback text. No silent fallback to English. |

Provider hierarchy: `ThemeProvider` → `LanguageProvider` → consumer providers (`AuthProvider`, `Router`, `Page`). `LanguageProvider` reads `ThemeContext` for theme-aware locale UI components.

## 3. Data Flow

```
User selects language
       ↓
LanguageSelector component → setCurrentLanguage('es')
       ↓
LanguageProvider updates context value
       ↓
All useLanguage() consumers re-render
       ↓
Components read literal['key'] → new translated string
```

**Response flow:**

```
Translation file (en.json) → LanguageProvider context → useLanguage().literal → Component JSX
```

Interpolation flow (consumer-managed):

```
ViewModel hook: interpolate(literal['common.itemsSelected'], { count })
       ↓
common/i18n/interpolate.ts: template.replace(/\{\{(\w+)\}\}/g, ...)
       ↓
Component receives pre-interpolated string as prop
```

## 4. State Management

State is managed by `LanguageProvider` internally via React state. The context shape exposed by `useLanguage()`:

| Property | Type | Description |
|---|---|---|
| `currentLanguage` | `string` | Active language code (e.g. `'en'`) |
| `setCurrentLanguage` | `(code: string) => void` | Switch active language |
| `literal` | `Record<string, string>` | Active translation dictionary keyed by dot-notation |
| `availableLanguages` | `{ code: string; label: string }[]` | Configured language list |

**State transitions:**

| Transition | Mechanism |
|---|---|
| Uninitialized → Active | `LanguageProvider` mounts with `translations` and `defaultLanguage` |
| Active → Switching | `setCurrentLanguage()` called — context update scheduled |
| Switching → Active | React re-render completes with new dictionary |
| Switching → Fallback | Invalid language code produces empty `{}` dictionary |

Persistence is consumer-managed — no `localStorage` access in Astra localization code.

## 5. Styling Implementation

No direct styling. The localization system provides text content only. Layout must not assume text direction — use CSS logical properties (`padding-inline-start`, `margin-inline-end`) per localization invariant rules. Components using `useLanguage` reference theme tokens for all visual properties.

## 6. Interaction Design

**LanguageSelector component** renders a `<Select>` with `availableLanguages` mapped to `<MenuItem>` options. On `onChange`, calls `setCurrentLanguage(e.target.value)`. No page reload — all translatable text updates via React re-render.

**States:**
- Languages loaded: dropdown with all options
- Single language: selector may be hidden
- Invalid selection: empty dictionary renders — UI shows no text

## 7. Accessibility Implementation

- Language selector uses native `<Select>` element with accessible labels
- Translation keys must include ARIA label keys for interactive elements
- `aria-label` values must come from `literal['key]`, not hardcoded
- Screen reader announcements on language switch: consumer-managed via `aria-live` region
- Text direction changes (LTR/RTL) are not handled by this system — layout relies on logical CSS properties

## 8. Error Handling

| Condition | Behavior | Mechanism |
|---|---|---|
| Missing translation key | `literal['key']` returns `undefined` | Consumer must handle with optional chaining or fallback |
| Invalid language code | `setCurrentLanguage('xx')` sets state, dictionary is empty `{}` | UI renders without text |
| Provider nesting | Inner `LanguageProvider` shadows outer context | Documented — avoid nesting; use single provider at root |
| Empty translations map | All keys resolve to `undefined` | UI renders without localized text |
| Interpolation error | `interpolate()` receives missing value → `String(values[key] ?? '')` renders empty | Consumer validates interpolation values |

## 9. Performance Considerations

- Context update on language switch triggers re-render of all `useLanguage()` consumers — subtree size matters
- Translation dictionaries are loaded eagerly at mount — no lazy-loading of translation chunks
- Flat key-value structure avoids deep object traversal cost
- `literal` object identity changes on every language switch — use `React.memo` on expensive subtrees
- Interpolation resolved in ViewModel layer, not in render path — avoids re-computation on parent re-render

## 10. Integration Points

| Integration | Mechanism | File |
|---|---|---|
| LanguageProvider → App root | Wraps entire application tree | `App.tsx` |
| useLanguage → Components | Hook consumed by any component needing translations | Any `.tsx` file |
| Translation files → LanguageProvider | Imported JSON objects passed as `translations` prop | `src/common/localization/index.ts` |
| Interpolation utility → ViewModel | `interpolate()` imported from `common/i18n/interpolate.ts` | `hooks/use<Feature>.ts` |
| ThemeProvider → LanguageProvider | LanguageProvider inside ThemeProvider per provider hierarchy | Provider nesting |
| MVVM pattern | Translation resolution in ViewModel, keys passed as props to pure components | `hooks/` + `view/components/` |

## 11. Open Questions

- Should RTL layout switching be part of this system or handled by the theming layer?
- How should date, number, and currency formatting be integrated?
- Is lazy-loaded translation chunk support needed for large applications?
- Should keys follow a strict hierarchical namespace or remain flat with prefixes?

## 12. Authorization

**Visibility:** Public — stateless Astra library component/primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
