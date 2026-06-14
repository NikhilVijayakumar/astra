# Architecture: Deterministic Build

Astra's build process must produce reproducible artifacts. See [Deterministic Build Invariant](../invariants/deterministic-build.md) for the authoritative rules.

## Lockfile

Commit your lockfile (`package-lock.json`) to version control. This ensures all environments install identical dependency trees:

```bash
# .gitignore must NOT exclude the lockfile
git add package-lock.json
```

## Dependency Pinning

Pin all direct dependencies to exact versions. Use `--save-exact` when installing:

```bash
npm install --save-exact axios@1.15.0
```

For peer dependencies (React, MUI), use a caret range to allow patch updates:

```json
{
  "peerDependencies": {
    "react": "^19.2.3"
  }
}
```

## Environment Variables

All build-time environment variables must have documented defaults in `.env.example`:

```env
# .env.example
VITE_API_BASE_URL=http://localhost:3000
VITE_DEFAULT_LANGUAGE=en
```

The build must not crash when environment variables are missing — fall back to defaults:

```typescript
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
```

## CI Configuration

Use a single lockfile across all CI environments. Avoid platform-specific overrides that could produce different outputs:

```yaml
# ci.yml — use same install command everywhere
- run: npm ci
```

## Build Scripts

Define standard build scripts in `package.json`:

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

Avoid non-deterministic steps (date stamps, random hashes, environment-sensitive paths) in the build pipeline.

## Verification

Verify determinism by building twice and comparing:

```bash
npm run build && mv dist dist1
npm run build && mv dist dist2
diff -r dist1 dist2  # must produce no output
```

## Related

- [Feature Structure](feature-structure.md)
- [Repository](repository.md)
- [Dependencies](dependencies.md)
