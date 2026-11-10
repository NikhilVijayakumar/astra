# Design

Use a scoped npm package and keep existing export keys, peer ranges, ES and CommonJS formats. Emit the UMD CommonJS bundle with `.cjs` under `type: module`; include distribution files and MIT license. Include a lockfile for `npm ci` and allow only workflow files through the existing GitHub ignore rule. CI runs on the actual default branch `master`; a matching version tag runs validation and uses GitHub OIDC with npm 11.15.0 to stage the package. A maintainer must approve on npm. Registry access, trust and environment setup are external prerequisites and failures block release. No ADR is needed for applying the established staged release pattern.

Knowledge: `knowledge/architecture/public-api-build.md`; requirements ASTRA-PKG-001–003.

The build explicitly selects `vite.config.ts` because a stale tracked JavaScript configuration otherwise takes precedence. Type-only imports and enum compiler settings are corrected for declaration generation; the referenced API types must remain in the archive. Existing lint errors are corrected without suppressing rules.
