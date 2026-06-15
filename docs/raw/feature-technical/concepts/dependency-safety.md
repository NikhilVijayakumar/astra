# Dependency Safety: Feature Technical

## 1. Technical Overview

Dependency safety governs which third-party packages Astra permits, how they are classified, and how the lockfile is maintained. Astra has three runtime peers (`react`, `react-dom`, `@mui/material`) and one direct runtime dependency (`axios`). All other packages are devDependencies. No new runtime dependencies may be added without explicit architectural review — every new package increases bundle size, attack surface, and upgrade burden. See `docs/raw/architecture/core/dependencies.md`.

## 2. Architecture Realization

**Dependency classification:**

| Category | Examples | Rule |
|---|---|---|
| Peer dependencies | `react`, `react-dom`, `@mui/material` | Consumer provides — Astra never bundles |
| Runtime dependency | `axios` | Only Astra-managed; never exposed to consumer directly |
| Dev dependencies | `vitest`, `typescript`, `vite`, `@testing-library/*` | Build/test only — zero consumer bundle impact |
| Forbidden at runtime | `lodash`, `moment`, `date-fns`, `rxjs` | Not permitted — consumer adds if needed |

**Dependency safety contract:**

```
src/lib.ts (public API)
  ↓
src/common/* (Astra code)
  ↓ may import
  ├── react (peer)
  ├── @mui/material (peer)
  └── axios (runtime, via ApiService only)
  
FORBIDDEN in src/common/*:
  ✗ Any package not listed above
  ✗ Dynamic require() or import()
  ✗ Node.js builtins (fs, path, crypto) — platform neutrality
  ✗ Browser-specific globals (window, document) without SSR guard
```

## 3. Data Flow

Dependencies enter the bundle at build time:

```
vite build
  → resolves import graph from src/lib.ts
  → tree-shakes unused exports
  → externalizes peer deps (react, @mui/material)
  → bundles: axios (runtime), all Astra source
  → output: dist/ (ESM + CJS)
```

Consumers install Astra via `package.json` → `npm install`. The lockfile (`package-lock.json` or `pnpm-lock.yaml`) pins all transitive dependency versions.

## 4. State Management

Dependencies have no runtime state. Dependency audit is a build-time and review-time concern.

**Audit triggers:**

| Event | Action |
|---|---|
| PR adds new `import` from unknown package | Block until review approves classification |
| `npm audit` reports vulnerability | Patch within 24h (critical) / 7 days (high) / 30 days (moderate) |
| Major version of peer dep released | Evaluate compatibility; update peer dep range |
| Lockfile drift (CI lockfile differs from local) | Regenerate lockfile; commit |

## 5. Styling Implementation

No runtime dependency is permitted to provide CSS — all styling flows through MUI ThemeProvider per Theme Sovereignty invariant. No CSS-in-JS library other than MUI's emotion is permitted.

## 6. Interaction Design

No interaction design impact. Dependency safety is a build-time and review-time concern.

## 7. Accessibility Implementation

No accessibility impact from dependency choices directly. MUI peer dependency provides ARIA primitives — no additional accessibility library is permitted.

## 8. Error Handling

| Condition | Detection | Response |
|---|---|---|
| Unauthorized package import | Code review + `eslint-plugin-import` | Block PR; remove import |
| Vulnerability in `axios` | `npm audit` in CI | Patch or pin to safe version |
| Peer dep version mismatch | TypeScript error or runtime warning | Update peer dep range in `package.json` |
| Lockfile out of sync | CI lint step fails | Regenerate lockfile with `npm install --package-lock-only` |
| Duplicate package (two versions) | Bundle size alert or `npm ls` output | Align versions; add resolutions in `package.json` |

## 9. Performance Considerations

- Every runtime dependency increases bundle size — evaluate alternatives before adding
- `axios` (~13KB gzipped) is the largest Astra runtime dep; justified by error normalization layer
- Peer deps are not bundled — no bundle impact from react or MUI
- Tree-shaking eliminates unused MUI components — import from `@mui/material/Button`, not `@mui/material`
- Dev deps never reach production bundle — verify with `npm pack` audit

## 10. Integration Points

| Integration | Mechanism | File |
|---|---|---|
| Dependency declaration | `package.json` `dependencies`, `devDependencies`, `peerDependencies` | Root `package.json` |
| Lockfile | `package-lock.json` / `pnpm-lock.yaml` — committed to repo | Root |
| Vulnerability scan | `npm audit` — run in CI on every PR | CI pipeline |
| Bundle analysis | `vite-bundle-analyzer` or `rollup-plugin-visualizer` | Build config |
| Import enforcement | `eslint-plugin-import` `no-extraneous-dependencies` rule | `.eslintrc` |

## 11. Open Questions

- Should Astra migrate from `axios` to `fetch` (native) to eliminate the only runtime dependency?
- Should `eslint-plugin-import` `no-extraneous-dependencies` be enforced in CI?
- Should a bundle size budget be enforced via Lighthouse CI or bundlesize?

## 12. Authorization

**Visibility:** Public — dependency policy is a development governance document. No authentication or role requirement.
