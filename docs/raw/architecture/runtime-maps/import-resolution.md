# Runtime Map: Import Resolution

Maps how consumer imports resolve to source files at runtime.

```
Consumer Import                  Resolution Path
──────────────                   ────────────────
import { ThemeProvider }         src/lib.ts
  from "astra"                     → src/common/index.ts
                                     → src/common/theme/index.ts
                                       → src/common/theme/ThemeProvider.tsx

import { spacing }
  from "astra"                     → src/theme/index.ts
                                     → src/theme/tokens/spacing.ts

import { Card }
  from "astra/components"          → package.json exports → src/common/components/index.ts
                                     → src/common/components/molecules/Card.tsx

import { useDataState }
  from "astra"                     → src/lib.ts
                                     → src/common/hooks/useDataState.ts
```

## Subpath Exports

Package.json declares the subpath mapping:

```json
{
  "exports": {
    ".": "./src/lib.ts",
    "./theme": "./src/theme/index.ts",
    "./components": "./src/common/components/index.ts"
  }
}
```

## Internal Imports

Internal modules import from relative paths, never from the public barrel:

```typescript
// ✅ Correct internal import
import { spacing } from '../../theme/tokens/spacing';

// ❌ Wrong — would create circular dependency
import { spacing } from 'astra';
```

## Aligned Documents

| Document | Role |
|----------|------|
| `invariants/public-api-stability.md` | Only declared entry points are public |
| `core/api-surface.md` | Entry point definitions and import rules |
