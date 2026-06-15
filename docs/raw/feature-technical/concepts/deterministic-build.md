# Deterministic Build: Feature Technical

## 1. Technical Overview

A deterministic build produces identical output given identical input — same source, same lockfile, same output bytes. Astra enforces determinism through: committed lockfiles (no floating version resolution), `sideEffects: false` annotation (enables full tree-shaking), ESM-first output (preserves named export identity), and zero dynamic imports or runtime code generation. The build system is Vite. The output is a dual ESM + CJS bundle in `dist/`. See `docs/raw/architecture/core/build.md`.

## 2. Architecture Realization

**Build pipeline:**

```
src/lib.ts (entry)
  ↓ vite build (library mode)
  ↓ rollup tree-shaking (dead code elimination)
  ↓ TypeScript compilation (tsc --emitDeclarationOnly for .d.ts)
  ↓
dist/
  ├── index.es.js     (ESM — tree-shakeable)
  ├── index.cjs.js    (CJS — for CommonJS consumers)
  └── index.d.ts      (TypeScript declaration)
```

**Determinism invariants:**

| Invariant | Mechanism |
|---|---|
| Locked dependency versions | `package-lock.json` committed; CI uses `npm ci` not `npm install` |
| No floating imports | All imports resolve to pinned versions via lockfile |
| `sideEffects: false` in `package.json` | Tree-shaker eliminates all unused code paths |
| No dynamic imports | No `import()` calls — static analysis is complete |
| No runtime code generation | No `eval`, no `new Function`, no template literal tag abuse |
| Stable export names | Symbol names match between source and output |

## 3. Data Flow

```
Developer runs: npm ci && npm run build
  → npm ci: installs exact lockfile versions (no resolution)
  → vite build: entry src/lib.ts → resolve → tree-shake → emit
  → Output: dist/ with deterministic content hash names
```

**CI build verification:**
```
git checkout → npm ci → npm run build → npm run test → npm pack → audit dist/
```

## 4. State Management

No runtime state. Build configuration (`vite.config.ts`) is static. The build output hash changes when source or dependency content changes — this is determinism, not randomness.

## 5. Styling Implementation

MUI emotion styles are injected at runtime by the consumer app — not bundled in Astra's `dist/`. Theme tokens are bundled as pure JavaScript objects in `dist/`. No CSS files are emitted — styling is entirely runtime-MUI-managed.

## 6. Interaction Design

No interaction design impact. Build determinism is a CI/CD concern.

## 7. Accessibility Implementation

No accessibility impact. Build determinism ensures the accessibility attributes in source (ARIA roles, labels) are faithfully emitted in the production bundle without mangling.

## 8. Error Handling

| Condition | Detection | Response |
|---|---|---|
| Non-deterministic output | Two builds from same input produce different hash | Investigate dynamic imports or floating deps |
| `sideEffects` misconfiguration | Bundle size larger than expected; unused components not tree-shaken | Audit `package.json` `sideEffects` field |
| Lockfile drift | CI `npm ci` fails or installs different versions than local | Commit updated lockfile; never `npm install` in CI |
| TypeScript error in build | `tsc` exits non-zero | Fix type errors before committing |
| Circular dependency | Rollup warning: `circular dependency` | Refactor to break cycle; never suppress warning |

## 9. Performance Considerations

- `npm ci` is faster than `npm install` — uses lockfile directly, skips resolution
- `vite build` with library mode produces optimized rollup output
- `sideEffects: false` enables maximum tree-shaking — consumers only pay for what they import
- Dual ESM+CJS output doubles dist size but has no consumer runtime impact
- Declaration files (`*.d.ts`) are generated separately — no impact on JS bundle size

## 10. Integration Points

| Integration | Mechanism | File |
|---|---|---|
| Build tool | Vite (library mode) | `vite.config.ts` |
| TypeScript | `tsc` for declaration emit only | `tsconfig.json` |
| Lockfile | `package-lock.json` committed | Root |
| CI build step | `npm ci && npm run build && npm run test` | `.github/workflows/` |
| Tree-shaking config | `sideEffects: false` in `package.json` | `package.json` |
| Entry point | `src/lib.ts` → `dist/index.es.js` | `package.json` `main`/`module` fields |

## 11. Open Questions

- Should a content-hash check be added to CI to fail if the build output changes unexpectedly?
- Should `npm pack` output be diffed between PRs to catch accidental public API surface changes?
- Should bundle size be tracked per-PR with a regression alert threshold?

## 12. Authorization

**Visibility:** Public — build configuration is a development governance document. No authentication or role requirement.
