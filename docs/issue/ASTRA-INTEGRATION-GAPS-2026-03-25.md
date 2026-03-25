# Astra Integration Gap Log for Prana (2026-03-25)

Purpose:
- Capture verified integration gaps between Prana and Astra so Astra team can close packaging/export/typing issues.
- Track concrete evidence, impact, and acceptance criteria.

Scope:
- Workspace: `E:/Python/prana`
- Astra dependency: `github:NikhilVijayakumar/astra` (installed package version `0.0.7`)
- Date: 2026-03-25

## Summary

Current state:
- Astra is installed and available as a dependency.
- Root import surface is present (`astra` export works).
- Prana UI has been migrated to root imports from `astra` (no deep `@astra/...` imports remain).

Observed impact in Prana:
- Deep import resolution failures are removed from Prana after migration.
- Remaining `typecheck:web` errors (if any) are unrelated to Astra deep import paths.

## Evidence

### E-001: Astra package exports only root entry
- File: `node_modules/astra/package.json`
- Key observation:
  - `exports` defines only `"."` (root export).
  - No subpath exports such as `"./theme/*"` or `"./components/*"`.

Consequence:
- Any deep import path is outside official Node/TypeScript export contract.

### E-002: Types and modules exist under `dist`, but subpaths are not exported
- Files:
  - `node_modules/astra/dist/lib.d.ts`
  - `node_modules/astra/dist/theme/index.d.ts`
  - `node_modules/astra/dist/theme/tokens/spacing.d.ts`
  - `node_modules/astra/dist/components/index.d.ts`
  - `node_modules/astra/dist/components/ui/HeroSection.d.ts`

Key observation:
- Astra does provide the symbols in `dist`, but consumers are expected to use root barrel imports unless subpath exports are explicitly declared.

### E-003: Prana migration status (resolved in Prana)
- Search result in Prana UI source: `0` `@astra/...` import sites.
- Replaced with root imports from `astra`.
- Typical migrated forms:
  - `import { spacing } from 'astra'`
  - `import { HeroSection } from 'astra'`

Consequence:
- Prana no longer depends on unsupported Astra deep paths.

## Gap Register

### GAP-ASTRA-001: Missing subpath export contract
Type: Packaging/API Surface Gap
Status: RESOLVED (Astra package)

Problem:
- Astra does not export deep subpaths in `package.json` `exports`.

Impact:
- Consumer teams that still use deep imports may fail typecheck/build.
- Integration remains fragile across bundlers/TS resolvers without explicit contract guidance.

Implemented fix (Astra):
- Added explicit subpath exports in `package.json` for `./common`, `./components`, `./theme`, and wildcard variants.
- Kept root export stable for backward compatibility.

Acceptance criteria:
- `npm run typecheck:web` in Prana resolves Astra imports without local alias hacks. (Achieved in Prana)
- Astra package contract clearly documents supported import styles.

### GAP-ASTRA-002: Public import strategy not documented for consumers
Type: Documentation Gap
Status: RESOLVED

Problem:
- No explicit consumer guidance clarifies whether deep imports are supported or forbidden.

Impact:
- Consumer repos implement inconsistent import styles.
- Frequent breakage when moving between tooling modes.

Implemented fix (Astra):
- Added a "Consumption Contract" section in Astra README documenting:
  - supported root and subpath import styles
  - unsupported `dist` internal imports
  - migration guidance for older consumers

Acceptance criteria:
- New consumers can integrate Astra without trial-and-error on import paths.

### GAP-ASTRA-003: Type surface discoverability for selective imports
Type: DX Gap
Status: RESOLVED

Problem:
- Type declarations exist in `dist`, but due to root-only exports, consumers cannot safely deep-import typed modules unless Astra exposes those subpaths.

Impact:
- Teams use non-portable path alias workarounds.
- Increased maintenance burden for downstream apps.

Implemented fix (Astra):
- Runtime export contract now declares supported subpaths.
- Type entry remains aligned via package export map and generated declarations.

Acceptance criteria:
- TS path resolution works with package exports only (without repository-specific alias rewrites).

## Reproduction (Prana)

Historical issue reproduction (pre-migration):
1. Use a commit where Prana imports `@astra/...` deep paths.
2. Install dependencies.
3. Run: `npm run typecheck:web`
4. Observe unresolved module errors for deep Astra import paths.

Current verification (post-migration):
1. Search Prana UI source for `from '@astra/`.
2. Confirm no matches.
3. Run: `npm run typecheck:web` and verify Astra deep-path module errors do not appear.

## Temporary workarounds in Prana

Implemented workaround in Prana:
- Migrated to root imports from `astra` where symbols are exported.

Not recommended:
- Local aliasing to Astra `dist` internals.

Preferred long-term resolution:
- Resolve in Astra package contract so all consumers have a stable import strategy.

## Handoff to Astra Team

Resolution (2026-03-25):
- Decision: support root imports and declared subpath imports.
- Export contract and consumer guidance have been added in Astra.
- Build verification succeeded locally after updates.

Requested response from Astra team:
- Decision: support deep imports or enforce root-only imports.
- If deep imports supported: provide subpath exports in next release.
- If root-only enforced: provide migration matrix for consumers.

Release notes checklist for Astra:
- Mention import contract explicitly.
- Mention any breaking changes to import paths.
- Include examples for `theme`, `components`, and `file-viewers` imports.
