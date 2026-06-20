# Architecture: Dependencies

Astra is a production UI library with a controlled dependency surface. See [Dependency Safety Invariant](../invariants/dependency-safety.md) for the authoritative rules.

## Dependency Classification

Dependencies fall into three categories:

| Category | Examples | Placement |
|----------|----------|-----------|
| **Runtime** | `axios`, `@mui/material` | `dependencies` |
| **Peer** | `react`, `react-dom` | `peerDependencies` |
| **Dev** | `typescript`, `vite`, `@types/*` | `devDependencies` |

## Runtime Dependencies

Minimize runtime dependencies. Each must be:

- actively maintained (commits within last 12 months)
- MIT, Apache 2.0, or BSD licensed
- pinned to an exact version
- the minimal dependency needed (no bundled extras)

```json
{
  "dependencies": {
    "@mui/material": "7.0.2",
    "@mui/icons-material": "7.0.2",
    "@emotion/react": "11.14.0",
    "axios": "1.15.0"
  }
}
```

## Peer Dependencies

Peer dependencies are provided by the consumer. They must use a caret range to allow patch updates:

```json
{
  "peerDependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  }
}
```

Peer dependencies must never appear in `dependencies` — doing so causes duplicate instances.

## Dev Dependencies

Type definitions and build tooling belong in `devDependencies`:

```json
{
  "devDependencies": {
    "@types/react": "^19.2.3",
    "@types/react-dom": "^19.2.3",
    "@types/uuid": "^10.0.0",
    "typescript": "5.8.3",
    "vite": "6.3.2"
  }
}
```

Never place `@types/*` packages in `dependencies` — they are build-time only.

## Beta Dependencies

Beta or pre-release dependencies must not appear in runtime `dependencies`. If a beta is required, document the rationale and timeline for stable migration:

```json
{
  "dependencies": {
    "@mui/lab": "7.0.0-beta.14"
  }
}
```

> ⚠ Beta — track MUI v7 stable release and migrate before shipping.

## Audit Policy

Run security audits regularly:

```bash
npm audit            # check for vulnerabilities
npm audit --fix      # auto-fix where possible
```

High-severity CVEs must be resolved before release. If a fix is unavailable, document the risk and mitigation in a security advisory.

## Lockfile

The lockfile must be committed to version control for reproducible installs. Never add `package-lock.json` to `.gitignore`.

## Related

- [Build](build.md)
- [Public API Surface](api-surface.md)
- [Platform Abstraction](platform-abstraction.md)
