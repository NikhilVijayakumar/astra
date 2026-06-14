# Architecture: Public API Surface

Astra is a library with a defined public API contract. See [Public API Stability Invariant](../invariants/public-api-stability.md) for the authoritative rules.

## Entry Points

The public API surface is defined by two mechanisms:

### Root Entry Point

`src/lib.ts` controls what consumers import from `astra`:

```typescript
// src/lib.ts — only export intentional public symbols
export { ThemeProvider, ThemeToggle } from "./common/theme";
export { LanguageProvider, useLanguage } from "./common/localization";
export { useDataState, AppStateHandler } from "./common/hooks";
export { ApiService, ServerResponse, HttpStatusCode } from "./common/repo";
export { HeroSection, PageHeader, SummaryPanel } from "./common/components/templates";
export { spacing, typography } from "./theme";
export type { TemplateManifest, TemplateVariable } from "./types/template.types";
```

### Subpath Exports

Package.json declares subpath exports for scoped imports:

```json
{
  "exports": {
    ".": "./src/lib.ts",
    "./theme": "./src/theme/index.ts",
    "./components": "./src/common/components/index.ts"
  }
}
```

## What Makes a Public Export

A symbol is public only if it is exported through a declared entry point. Internal utilities, private components, and implementation details must remain inaccessible.

A public export must:
- be documented in the relevant architecture doc
- have a stable interface (no breaking changes within major version)
- have a clear, testable contract
- follow naming conventions

## Barrel Export Rules

Barrel files (`index.ts`) aggregate module exports. Follow these rules:

```typescript
// Good: named exports of intentional public symbols
export { ThemeProvider, ThemeToggle } from './theme';
export { LanguageProvider, useLanguage } from './localization';
export { useDataState, AppStateHandler } from './hooks';

// Bad: indiscriminate re-exports
export * from './components';  // may expose internal components
```

## Deprecation Policy

When a public API must change:

```typescript
// Mark the old symbol as @deprecated with a replacement path
/** @deprecated Use `useDataState` instead. Removed in v2.0. */
export { useApiState as useOldState } from './hooks';
```

Deprecated APIs must:
- be documented with `@deprecated` JSDoc tag
- include the replacement API name
- specify the removal version
- remain functional for one major version after deprecation

## Internal vs External

| Scope | Import Path | Stability |
|-------|-------------|-----------|
| Public | `astra` | Stable, semver |
| Public subpath | `astra/theme` | Stable, semver |
| Internal | `src/common/hooks` | Unstable, no guarantees |

Consumers must never import from internal paths. Undocumented subpaths are not part of the public contract.

## Related

- [Feature Structure](feature-structure.md)
- [Build](build.md)
- [Dependencies](dependencies.md)
