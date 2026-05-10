# Composition Map Architecture Generator

> Generates the UI + MVVM sovereignty map for Astra.
>
> This is **zoning law for complexity** — defines what composes what, where complexity belongs, and what authority each layer has.
>
> Success chain: features &rarr; invariants &rarr; **composition-map** &rarr; runtime-map &rarr; audit-governance

---

## Role Definition

You are acting as:

- **Principal Architect** — defines composition and layering boundaries
- **UI Sovereignty Governor** — enforces layer authority and import discipline
- **Composition Boundary Inspector** — detects and prevents sovereignty violations
- **Atomic Design Authority** — governs the real meaning (complexity distribution) behind atomic tiers

---

## Mental Model

### Why Composition Maps Exist

Most frontend systems decay. Backend decays through state leakage, service coupling, and runtime ownership confusion. Frontend decays differently:

- uncontrolled composition
- UI abstraction collapse
- reusable component corruption
- business logic spreading everywhere

**Example of decay:**

Initially:
- Button, Card, Modal &mdash; clean

After 6 months:
- `CustomerBillingCardWithInvoiceDownloadAndRetryButton`

Now:
- atom contains business logic
- reusable components become product-specific
- complexity explodes everywhere

This is **composition collapse**. The composition map prevents it.

### What a Composition Map IS

A composition map defines:

- **what can compose what** &mdash; composition rules between layers
- **what complexity belongs where** &mdash; responsibility boundaries
- **what authority each layer has** &mdash; sovereign power limits

This is **NOT about folders**. It is about **complexity sovereignty**.

### Atomic Design Reinterpreted

Most people misunderstand Atomic Design. They think `atoms/` `molecules/` `organisms/` is just naming, folders, hierarchy. But Atomic Design is actually **complexity distribution governance**.

#### A. Atoms &mdash; Primitive Sovereign Units

Atoms are pure, reusable, context-independent.

**Atom Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Rendering | Orchestration |
| Basic interaction | Workflows |
| Styling | Persistence |

**Atom Rules:**
- cannot know domain logic
- cannot know app state
- cannot fetch data
- cannot orchestrate flows

Good: `<Button variant="primary" />`
Bad: `<Button customerId={id} onInvoiceRetry={...} />` &mdash; atom now knows business semantics, violates sovereignty.

#### B. Molecules &mdash; Functional Composition Units

Molecules combine atoms into small behaviors, local interactions.

**Molecule Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Local UI coordination | Application orchestration |
| Combined interactions | Domain workflows |

Example: `SearchBar` = `Input` + `Button`

#### C. Organisms &mdash; Complex UI Orchestration Units

Organisms coordinate multiple molecules and represent major UI sections.

**Organism Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Complex layout orchestration | Backend ownership |
| Multi-component coordination | Repository access |
| | Business domain authority |

#### D. Templates &mdash; Structural Layout Governance

Templates define page structure and layout composition.

**Template Rules:**
- must NOT own workflows
- must NOT own data
- must NOT own business state

#### E. ViewModel Hooks &mdash; State Orchestration Units

ViewModels orchestrate state between Model and View.

**ViewModel Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Use `useDataState` for async state | Import UI components |
| Coordinate data flow | Access DOM or rendering APIs |
| Transform data for presentation | Contain JSX or template logic |
| Manage feature-level UI logic | Persist data directly |
| Handle user event orchestration | |

#### F. Repositories &mdash; Data Access Abstractions

Repositories provide data access abstraction.

**Repository Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Make API calls | Import UI components or hooks |
| Handle response parsing and error mapping | Contain rendering logic |
| Provide typed response contracts | Manage UI state |
| Abstract data source implementation | Know about View or ViewModel structure |

#### G. Electron Runtime &mdash; Privileged System Layer

Electron provides privileged runtime access.

**Electron Authority:**

| Allowed | Forbidden |
|---------|-----------|
| IPC communication | UI rendering |
| Native OS APIs | Component composition |
| File system access | Business logic |
| Process management | |

### Composition Sovereignty Principle

Each layer has **sovereign authority boundaries**:

| Layer | Owns |
|-------|------|
| Atom | Primitive rendering |
| Molecule | Local interaction |
| Organism | Complex composition |
| Template | Layout structure |
| Hook | Orchestration |
| Repository | IO |
| Electron | Privileged runtime |

### Why Sovereignty Matters

Without sovereignty violations cascade:

- atoms become organisms
- hooks render UI
- repositories manage state
- templates contain workflows

Eventually: **everything depends on everything**. That is architectural collapse.

### Import Direction Rules

**Atoms:**
- may import: theme tokens, utility types
- may not import: organisms, repositories, Electron APIs

**Molecules:**
- may import: atoms, theme tokens
- may not import: organisms, templates, repositories

**Organisms:**
- may import: atoms, molecules, ViewModel hooks
- may not import: templates, repositories directly

**Templates:**
- may import: atoms, molecules, organisms
- may not import: business logic, data workflows, business state

**ViewModel Hooks:**
- may orchestrate: repositories, state transitions
- may not: render UI, access DOM directly, import UI components

**Repositories:**
- may import: API services, domain types
- may not: import UI components, import hooks, return presentation-formatted data

---

## Idempotency Logic

Before generating, check existence of output files:

```
IF docs/raw/architecture/composition-map/composition-governance.md EXISTS:
  read it
  read feature docs from docs/raw/feature/
  read source from src/
  diff: compare governance rules against BOTH feature specs AND actual source code
  IF feature docs changed OR source code changed:
    MERGE: update affected sections, preserve unchanged ones
    APPEND: new violations found, new layer entries needed
    RESOLVE: move fixed violations to "Resolved Violations" note
    FLAG: discrepancies between feature doc and implementation
    UPDATE: Last Reviewed date
  ELSE:
    skip &mdash; already up to date

IF docs/raw/architecture/composition-map/layer-catalog.md EXISTS:
  read it
  diff against feature docs AND component tiers in src/
  IF tiers changed (new components, changed interfaces, feature doc updates):
    merge update
  ELSE:
    skip

IF NEITHER EXISTS:
  fresh generation from scratch
```

---

## Update Requirements

When updating existing documents:

- preserve existing valid structure and section ordering
- preserve historical governance data when still valid
- update only changed implementation behavior or feature specs
- append new violations instead of replacing historical drift
- do NOT downgrade severity without code change evidence
- update Last Reviewed date on every pass
- if a previous violation is fixed, move it to a "Resolved Violations" note with the version it was fixed in
- if a discrepancy between feature doc and implementation is found, flag it in a "Feature-Implementation Discrepancies" section

---

## Input Files to Read

Read ALL of these before generating:

### Feature Documentation (What Astra promises)

1. `docs/raw/feature/README.md` &mdash; feature module index
2. `docs/raw/feature/components/README.md` &mdash; component library overview with tier mapping
3. `docs/raw/feature/components/atomic-design/README.md` &mdash; atomic design methodology, tier definitions, decision flowchart
4. `docs/raw/feature/components/atomic-design/atoms.md` &mdash; atom classification rules, allowed/forbidden patterns
5. `docs/raw/feature/components/atomic-design/molecules.md` &mdash; molecule classification rules, allowed/forbidden patterns
6. `docs/raw/feature/components/atomic-design/organisms.md` &mdash; organism classification rules, allowed/forbidden patterns
7. `docs/raw/feature/components/atomic-design/templates.md` &mdash; template classification rules, allowed/forbidden patterns
8. `docs/raw/feature/components/atoms/*.md` &mdash; individual atom component specs (StatusDot, SeverityBadge)
9. `docs/raw/feature/components/molecules/*.md` &mdash; individual molecule component specs (Card, Notification, TrendMetricCard, JsonViewer)
10. `docs/raw/feature/components/organisms/*.md` &mdash; individual organism component specs (CsvViewer, FileViewerRouter)
11. `docs/raw/feature/components/templates/*.md` &mdash; individual template component specs (HeroSection, PageHeader, SummaryPanel)
12. `docs/raw/feature/mvvm/README.md` &mdash; MVVM pattern overview
13. `docs/raw/feature/mvvm/pattern.md` &mdash; MVVM implementation pattern (useDataState, AppStateHandler, AppState)
14. `docs/raw/feature/mvvm/best-practices.md` &mdash; MVVM dos/don'ts, common pitfalls
15. `docs/raw/feature/state/useDataState.md` &mdash; useDataState hook API spec
16. `docs/raw/feature/state/AppStateHandler.md` &mdash; AppStateHandler component spec
17. `docs/raw/feature/repository/README.md` &mdash; repository layer overview
18. `docs/raw/feature/repository/api-service.md` &mdash; ApiService class spec

### Invariant Documents (Reference format)

19. `docs/raw/architecture/invariants/atomic-hierarchy.md` &mdash; reference format for allowed/forbidden patterns
20. `docs/raw/architecture/invariants/mvvm-separation.md` &mdash; reference format for MVVM boundaries

### Architecture Reference

21. `docs/raw/architecture/core/hooks.md` &mdash; existing hook patterns
22. `docs/raw/architecture/core/mvvm-pattern.md` &mdash; existing MVVM architecture docs

### Source Implementation (What Astra actually does)

23. `src/common/components/atoms/*.tsx` &mdash; atom implementations
24. `src/common/components/atoms/*.test.tsx` &mdash; atom tests for interface verification
25. `src/common/components/molecules/*.tsx` &mdash; molecule implementations
26. `src/common/components/molecules/*.test.tsx` &mdash; molecule tests for interface verification
27. `src/common/components/organisms/*.tsx` &mdash; organism implementations
28. `src/common/components/templates/*.tsx` &mdash; template implementations
29. `src/common/components/index.ts` &mdash; barrel exports
30. `src/common/hooks/useDataState.ts` &mdash; useDataState hook implementation

### Mental Model

31. `docs/raw/data/template/mental_model.md` &mdash; layer architecture model

---

## Cross-Validation: Feature Docs vs Implementation

Before generating governance rules, you MUST cross-validate feature documentation against actual implementation. This is critical because discrepancies between spec and code must be surfaced in the composition map.

### Tier Classification Validation

For every component in `src/common/components/{tier}/`, check:
- Does the feature doc for that component exist?
- Does the feature doc's frontmatter `tier:` field match the actual directory tier?
- Does the feature doc's classification criteria match what the component actually does?

**Known discrepancy example:**
- `docs/raw/feature/components/organisms/FileViewerRouter.md` has `tier: template` in frontmatter
- Actual file is at `src/common/components/organisms/FileViewerRouter.tsx`
- This is a tier mismatch that must be flagged

**What to check per tier:**

| Check | What to Verify |
|-------|---------------|
| Tier assignment | Does the component file location match its feature doc's declared tier? |
| Import boundaries | Does the component's actual imports violate tier rules? |
| Data lifecycle | Does the component fetch data when its tier forbids it? |
| Composition scope | Does the component compose from higher tiers? |
| Business logic | Does the component contain domain computations its tier should not own? |
| State management | Does the component manage state beyond its tier's authority? |

### MVVM Layer Validation

For every hook in `src/common/hooks/`, check:
- Does the feature doc's MVVM pattern match the actual implementation?
- Does the hook contain JSX or UI imports (ViewModel violation)?
- Does the hook access DOM or browser APIs directly?

For every repo-related file, check:
- Does it import from UI components or hooks (Repository violation)?
- Does it return presentation-formatted data (Repository violation)?

### Cross-Reference Output

When discrepancies are found, include them in a dedicated section of the output:

```
## Feature-Implementation Discrepancies

### {file path}
- **Issue:** {description of discrepancy}
- **Feature doc says:** {what feature doc specifies}
- **Implementation does:** {what source code actually does}
- **Severity:** {P0/P1/P2/P3}
- **Recommendation:** {should fix doc or fix code?}
```

---

## Output File 1: `composition-governance.md`

Write to: `docs/raw/architecture/composition-map/composition-governance.md`

You MUST follow the exact section structure below. Every section is required. Before writing each section, cross-reference BOTH the feature documentation AND actual source code.

### Section 1: Purpose

Define the Composition Map as Astra's UI + MVVM sovereignty map. State that it defines what composes what, where complexity belongs, and what authority each layer has. Reference that this is zoning law for complexity, not a folder structure. Reference the mental model's layer hierarchy.

### Section 2: Why Frontend Systems Decay

Describe the decay patterns from the mental model:
- uncontrolled composition
- UI abstraction collapse
- reusable component corruption
- business logic spreading everywhere

Use the `CustomerBillingCardWithInvoiceDownloadAndRetryButton` example. Explain that composition governance prevents this.

### Section 3: Sovereignty Per Layer

For each layer, define sovereign authority boundaries using the same format as invariant docs. Cross-reference against feature docs (`docs/raw/feature/components/atomic-design/`) to ensure the rules match what the feature docs specify.

Format per layer:
```
### {Layer Name}

{One-line description}

**Feature Doc Reference:** {path to relevant feature doc}

**Sovereign Authority:**
{what this layer owns}

**May:**
- {allowed responsibility 1}
- {allowed responsibility 2}

**May NOT:**
- {forbidden responsibility 1}
- {forbidden responsibility 2}
```

Layers to define in order:
1. Atom
2. Molecule
3. Organism
4. Template
5. ViewModel Hook
6. Repository
7. Electron Runtime

### Section 4: Allowed Patterns

Code examples showing correct sovereignty per layer. Verify each example against actual source code before including.

**Atom** &mdash; Pure primitive, props only:
```tsx
// atoms/StatusDot.tsx
interface StatusDotProps {
  status: 'online' | 'offline' | 'away';
}
function StatusDot({ status }: StatusDotProps) {
  const theme = useTheme();
  const colors = {
    online: theme.palette.success.main,
    offline: theme.palette.grey[400],
    away: theme.palette.warning.main,
  };
  return <span style={{ backgroundColor: colors[status] }} />;
}
```

**Molecule** &mdash; Local composition of atoms:
```tsx
// molecules/UserInfoCard.tsx
import { StatusDot } from '../atoms/StatusDot';
function UserInfoCard({ name, status }: { name: string; status: string }) {
  return (
    <div><StatusDot status={status} /><span>{name}</span></div>
  );
}
```

**Organism** &mdash; Complex composition with ViewModel:
```tsx
// organisms/UserList.tsx
import { useUserListViewModel } from './userViewModel';
import { UserInfoCard } from '../molecules/UserInfoCard';
function UserList() {
  const { users, isLoading } = useUserListViewModel();
  if (isLoading) return <LoadingSpinner />;
  return <div>{users?.map(u => <UserInfoCard key={u.id} name={u.name} status={u.status} />)}</div>;
}
```

**Template** &mdash; Page layout only:
```tsx
// templates/DashboardTemplate.tsx
function DashboardTemplate() {
  return (
    <div><PageHeader /><SummaryPanel /><UserList /></div>
  );
}
```

**ViewModel Hook** &mdash; State orchestration, no UI:
```tsx
// hooks/useUserListViewModel.ts
export function useUserListViewModel() {
  const [state, execute] = useDataState<User[]>();
  useEffect(() => { execute(() => UserRepo.getAll()); }, []);
  return { users: state.data ?? [], isLoading: state.state === StateType.LOADING };
}
```

**Repository** &mdash; Data access, raw responses:
```tsx
// repo/UserRepo.ts
export const UserRepo = {
  getAll: (): Promise<ServerResponse<User[]>> => api.get('/users'),
};
```

**Container** &mdash; ViewModel + View bridge:
```tsx
// UserListContainer.tsx
function UserListContainer() {
  const viewModel = useUserListViewModel();
  return <UserListView {...viewModel} />;
}
```

**AppStateHandler usage** &mdash; Consistent state routing:
```tsx
<AppStateHandler
  appState={userState}
  SuccessComponent={UserList}
  emptyCondition={(data) => data.length === 0}
/>
```

### Section 5: Forbidden Patterns

Code examples showing sovereignty violations. Cross-reference feature docs (`docs/raw/feature/mvvm/best-practices.md`, `docs/raw/feature/components/atomic-design/`) to align with documented anti-patterns.

**Atom with business logic** (P0):
```tsx
function StatusDot({ user }: { user: User }) {
  const status = user.lastActive > Date.now() - 300000 ? 'online' : 'offline';
  return <span className={status} />;
}
```
Violation: atom performs domain computation.

**Atom with business semantics in props** (P0):
```tsx
<Button customerId={id} onInvoiceRetry={...} />
```
Violation: atom knows business domain concepts.

**Molecule with data fetching** (P0):
```tsx
function UserInfoCard() {
  const [user, setUser] = useState<User>();
  useEffect(() => { fetch('/api/user').then(setUser); }, []);
  return <div>{user?.name}</div>;
}
```
Violation: molecule owns data lifecycle.

**Organism importing Template** (P0):
```tsx
import { DashboardTemplate } from '../../templates/DashboardTemplate';
```
Violation: organism creates circular tier dependency.

**Atom importing from higher tier** (P0):
```tsx
import { DataTable } from '../../organisms/DataTable';
```
Violation: lowest tier composes higher tier.

**ViewModel with JSX** (P0):
```tsx
function useViewModel() {
  return <div>...</div>;
}
```
Violation: ViewModel renders UI.

**ViewModel with UI imports** (P0):
```tsx
import { Button } from '../components/Button';
```
Violation: ViewModel couples to UI.

**View calling Repository directly** (P0):
```tsx
function UserListView() {
  useEffect(() => { UserRepo.getAll().then(setUsers); }, []);
}
```
Violation: View bypasses ViewModel.

**Repository returning display-ready data** (P1):
```tsx
const getUsers = () => api.get('/users').then(transformForDisplay);
```
Violation: Repository owns presentation transformation.

**ViewModel with DOM access** (P1):
```tsx
function useViewModel() {
  useEffect(() => { window.addEventListener('scroll', handler); }, []);
}
```
Violation: ViewModel owns browser API access.

**Molecule with repository import** (P1):
```tsx
import { NotificationRepo } from '../repo/NotificationRepo';
```
Violation: Repository access belongs to higher tiers.

**Organism with page-level layout** (P1):
```tsx
function UserList() {
  return (<Grid container><Grid item xs={12}>...</Grid></Grid>);
}
```
Violation: Layout responsibility belongs to Templates.

**Template containing business logic** (P0):
```tsx
function DashboardTemplate() {
  const [state, execute] = useDataState();
  useEffect(() => { execute(fetchData); }, []);
}
```
Violation: Template owns data lifecycle.

**Organisms doing too much** (P1):
```tsx
const Dashboard = () => {
  // User management, Settings, Notifications, File uploads, Analytics
  // This should be multiple organisms
};
```
Violation: Single organism with too many responsibilities. See `docs/raw/feature/components/atomic-design/organisms.md` anti-patterns.

### Section 6: Allowed and Forbidden Import Matrix

Present the import rules as a table. Cross-reference this against actual `import` statements found in `src/common/components/`.

| Layer | May Import | May NOT Import | May Compose |
|-------|------------|----------------|-------------|
| Atom | Theme tokens, utility types | Organisms, repositories, Electron APIs, domain logic, app state | HTML elements only |
| Molecule | Atoms, theme tokens | Organisms, templates, repositories, application orchestration, domain workflows | Atoms |
| Organism | Atoms, molecules, ViewModel hooks | Templates, repositories directly, backend ownership, business domain authority | Atoms, molecules |
| Template | Atoms, molecules, organisms | Business logic, data workflows, workflows, business state | All UI layers |
| ViewModel Hook | Repositories, domain logic, state utils, useDataState | UI components, JSX, DOM APIs, rendering | &mdash; (returns data + callbacks) |
| Repository | API services, domain types | UI components, hooks, views, presentation logic | &mdash; (returns typed responses) |
| Electron | Node APIs, OS APIs, IPC modules | UI components, hooks, business logic | &mdash; (provides IPC bridge) |

### Section 7: Detection Heuristics

Provide ripgrep patterns to detect sovereignty violations. These commands must be executable against the actual codebase at `src/`.

**Cross-tier imports (atoms importing molecules/organisms):**
```
rg "import.*from.*(?:molecules|organisms|templates)" src/common/components/atoms/
```

**Cross-tier imports (molecules importing organisms/templates):**
```
rg "import.*from.*(?:organisms|templates)" src/common/components/molecules/
```

**Cross-tier imports (organisms importing templates):**
```
rg "import.*from.*templates" src/common/components/organisms/
```

**Data fetching in atoms or molecules:**
```
rg "(?:useEffect|useState)\s*\([^)]*(?:fetch|axios|ApiService)" src/common/components/atoms/ src/common/components/molecules/
```

**Repository imports in atoms or molecules:**
```
rg "import.*Repo from" src/common/components/atoms/ src/common/components/molecules/
```

**JSX in hooks:**
```
rg "return\s*(?:<|\()" src/common/hooks/
```

**UI imports in repositories:**
```
rg "import.*from.*(?:components|hooks|views)" src/common/repo/
```

**Business logic in atoms:**
Detect domain computation patterns:
- calculations with domain objects
- conditional branching on domain data
- data transformation

```
rg "(?:\.reduce|\.filter|\.map)\s*\(" src/common/components/atoms/
```

**ViewModel with DOM access:**
```
rg "window\.|document\.|localStorage|sessionStorage" src/common/hooks/
```

**Direct Electron API access in UI:**
```
rg "(?:ipcRenderer|remote|require\s*\(|process\.)" src/common/components/
```

**Tier mismatch detection (feature doc vs actual path):**
Check each component's feature doc frontmatter `tier:` field against its actual directory in `src/`:
```
rg "^tier:" docs/raw/feature/components/*/*.md
```
Then compare against actual file paths.

### Section 8: Severity Levels

| Level | Meaning | Action Required |
|-------|---------|-----------------|
| P0 | Critical sovereignty violation &mdash; component belongs to wrong layer, or layer owns what it must not | Must fix before release |
| P1 | High sovereignty leakage &mdash; component exceeds its boundary in a contained way | Must migrate next release |
| P2 | Transitional &mdash; legacy mixed-layer component with documented migration plan | Allowed temporarily |
| P3 | Compliant &mdash; sovereignty boundaries respected | No action required |

**P0 examples:**
- business logic in atom
- atom importing from organism
- view calling repository directly
- molecule with data fetching
- ViewModel containing JSX
- template owning data lifecycle
- tier mismatch (feature doc says X, code is in Y)

**P1 examples:**
- molecule with repository import
- atom with domain computation
- organism with page-level layout assumptions
- ViewModel with DOM/browser access
- Repository returning display-formatted data
- feature doc missing for an existing component
- feature doc not updated to match implementation

**P2 examples:**
- container components with mixed View+ViewModel concerns
- legacy tier-ambiguous components with migration plan

**P3 examples:**
- cleanly separated layers with sovereign boundaries

### Section 9: Refactoring Guidance

**Move data fetching up one tier:**

BAD (molecule fetches data):
```tsx
function UserCard() {
  const [user, setUser] = useState();
  useEffect(() => { fetchUser().then(setUser); }, []);
  return <div>{user?.name}</div>;
}
```

GOOD (molecule is props-only, organism orchestrates):
```tsx
function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
// In organism:
function UserList() {
  const { users } = useUserListViewModel();
  return <div>{users?.map(u => <UserCard user={u} />)}</div>;
}
```

**Remove cross-tier imports:**

BAD:
```tsx
// atoms/Icon.tsx
import { DataTable } from '../../organisms/DataTable';
```

GOOD:
```tsx
// atoms/Icon.tsx &mdash; pure primitive
function Icon({ name }: { name: string }) {
  return <span class={`icon-${name}`} />;
}
```

**Extract layout from organisms to templates:**

BAD:
```tsx
function SummaryPanel() {
  return (<Grid container spacing={3}><Grid item xs={12} md={6}>...</Grid></Grid>);
}
```

GOOD:
```tsx
// organism &mdash; layout-agnostic
function SummaryPanel() { return <>...</>; }
// template &mdash; layout owner
<Grid container><Grid item xs={12}><SummaryPanel /></Grid></Grid>
```

**Move business logic out of atoms:**

BAD:
```tsx
function PriceDisplay({ amount, taxRate }: { amount: number; taxRate: number }) {
  const total = amount * (1 + taxRate);
  return <span>${total.toFixed(2)}</span>;
}
```

GOOD:
```tsx
function PriceDisplay({ value }: { value: number }) {
  return <span>${value.toFixed(2)}</span>;
}
// computation in domain/model layer
```

**Remove UI imports from ViewModel:**

BAD:
```tsx
// useViewModel.ts
import { Button } from '../components/Button';
```

GOOD:
```tsx
// useViewModel.ts &mdash; no UI imports
export function useViewModel() {
  return { handleAction: () => { /* logic */ } };
}
```

**Move data formatting from Repository to ViewModel:**

BAD:
```tsx
// Repo
const getUsers = () => api.get('/users').then(transformForDisplay);
```

GOOD:
```tsx
// Repo &mdash; returns raw data
const getUsers = () => api.get<User[]>('/users');
// ViewModel &mdash; transforms for display
const displayUsers = users.map(u => ({ displayName: `${u.firstName} ${u.lastName}` }));
```

**Fix tier mismatch (feature doc vs implementation):**

If a component is classified as one tier in its feature doc but exists in a different tier directory:
- Option A: Move the component file to match the feature doc tier
- Option B: Update the feature doc frontmatter to match the actual directory
- Decision depends on whether the code or the spec is correct

### Section 10: Library Impact

Violating composition sovereignty causes:

- untestable views (data coupling)
- non-reusable ViewModels (UI coupling)
- debugging ambiguity (fault spans multiple layers)
- data source changes requiring view edits
- presentation logic scattered across layers
- business logic embedded in render tree
- impossible to swap data sources without view changes
- testing complexity (mocking required for both layers)
- circular tier dependencies
- reusable primitive degradation (atoms become context-aware)
- layout leakage (organisms assuming page context)
- feature doc and implementation drift (docs say one thing, code does another)

Without Composition Sovereignty:
Astra becomes a monolithic view-data entanglement
instead of a testable, predictably composable component architecture.

### Section 11: Migration Notes

Transitional sovereignty violations must include:

```tsx
/**
 * @deprecated-sovereignty-violation
 * Layer: <atom|molecule|organism|template|viewmodel|repository>
 * Violation: <what crosses the sovereignty boundary>
 * Feature Doc: <path to relevant feature doc if discrepancy exists>
 * Migration: <how to extract>
 * Removal target: <version>
 */
```

Migration strategy:
1. Classify every component into exactly one layer with one sovereign authority
2. Cross-validate classification against feature docs (`docs/raw/feature/components/atomic-design/`)
3. Fix cross-layer imports (lower layers must not import higher)
4. Remove data fetching from atoms and molecules (move to ViewModel hooks)
5. Extract layout from organisms into templates
6. Move business logic to domain/model layer
7. Remove UI imports from ViewModels
8. Remove presentation formatting from Repositories
9. Fix tier mismatches between feature docs and implementation
10. Verify each layer is independently testable
11. Verify dependency direction is unidirectional (lower &rarr; higher never)

### Section 12: Feature Doc Validation Requirements

Cross-check each component against its feature documentation:

- [ ] Every component in `src/common/components/{tier}/` has a corresponding feature doc in `docs/raw/feature/components/{tier}/`
- [ ] Every component feature doc has a `tier:` frontmatter field matching its actual directory
- [ ] Every component's actual imports respect the tier rules defined in its feature doc
- [ ] Every component's actual behavior matches the classification rules in the feature doc's atomic design guide
- [ ] Every hook in `src/common/hooks/` has a corresponding feature doc in `docs/raw/feature/state/` or `docs/raw/feature/mvvm/`
- [ ] Feature doc examples match actual component APIs (props, types, behavior)

### Section 13: Validation Requirements

A component is compliant only if:

- [ ] belongs to exactly one sovereign layer
- [ ] imports only from same or lower layers
- [ ] does not fetch data if atom or molecule
- [ ] does not access repositories if atom or molecule
- [ ] does not contain business logic if atom or molecule
- [ ] does not define page-level layout if not a template
- [ ] does not contain JSX if ViewModel hook
- [ ] does not import UI components if ViewModel hook
- [ ] does not contain presentation formatting if Repository
- [ ] does not import UI components or hooks if Repository
- [ ] does not access Electron/Node APIs if not Electron layer
- [ ] is reusable without specific parent context
- [ ] has a feature doc that accurately reflects its tier and behavior
- [ ] feature doc tier matches actual implementation tier

### Section 14: Compliance Goal

Astra components must behave as:

- tier-disciplined UI elements with clear sovereign authority
- sovereignty-respecting composition units
- boundary-governed presentation layers
- predictably scalable design primitives
- independently testable MVVM layers
- feature-doc-accurate implementations (docs match code, code matches docs)

NOT:

- tier-ambiguous UI fragments
- sovereignty-violating data containers
- boundary-blurred entangled components
- layer-leaking presentation blobs
- everything-depends-on-everything monoliths
- doc-code mismatched drift

---

## Output File 2: `layer-catalog.md`

Write to: `docs/raw/architecture/composition-map/layer-catalog.md`

Generate a quick-reference sovereignty matrix:

### Layer Sovereignty Matrix

| Layer | Sovereign Authority | May Import | May NOT Import | May Compose | Owns Data? | Feature Doc |
|-------|--------------------|------------|----------------|-------------|-----------|-------------|
| Atom | Primitive rendering, basic interaction, styling | Theme tokens, utility types | Organisms, repos, Electron APIs, domain logic, app state | HTML elements only | No | `docs/raw/feature/components/atomic-design/atoms.md` |
| Molecule | Local UI coordination, combined interactions | Atoms, theme tokens | Organisms, templates, repos, application orchestration, domain workflows | Atoms | No | `docs/raw/feature/components/atomic-design/molecules.md` |
| Organism | Complex layout orchestration, multi-component coordination | Atoms, molecules, ViewModel hooks | Templates, repos directly, backend ownership, business domain authority | Atoms, molecules | Via ViewModel | `docs/raw/feature/components/atomic-design/organisms.md` |
| Template | Page structure, layout composition | Atoms, molecules, organisms | Business logic, data workflows, workflows, state | All UI layers | No | `docs/raw/feature/components/atomic-design/templates.md` |
| ViewModel Hook | State orchestration, data flow coordination | Repos, domain logic, state utils | UI components, JSX, DOM APIs, rendering | &mdash; | Transient | `docs/raw/feature/mvvm/pattern.md` |
| Repository | IO, data access, response parsing | API services, domain types | UI components, hooks, views, presentation logic | &mdash; | Source of truth | `docs/raw/feature/repository/api-service.md` |
| Electron | Privileged runtime, IPC, native modules | Node APIs, OS APIs | UI components, hooks, business logic | &mdash; | System state | &mdash; |

### Dependency Direction Diagram

Include a simple ASCII diagram showing dependency direction:

```
Layer 0: Foundation (Theme, Localization, Tokens)
    &uarr; imports from below only
Layer 1: Data (ViewModel Hooks, Repositories)
    &uarr; imports from below only
Layer 2: Presentation (Atoms, Molecules, Organisms, Templates)
    &uarr; imports from below only
Layer 3: Surface (Public exports, build config)
```

### Component Catalog (by tier)

For each tier, list every actual component found in `src/common/components/{tier}/` with:
- Component name
- File path
- Feature doc path (if exists) or **[MISSING DOC]** if none
- Tier match status: **[MATCH]** / **[MISMATCH]** / **[MISSING DOC]**

Example:

**Atoms:**
| Component | File | Feature Doc | Status |
|-----------|------|-------------|--------|
| StatusDot | `src/common/components/atoms/StatusDot.tsx` | `docs/raw/feature/components/atoms/StatusDot.md` | MATCH |
| SeverityBadge | `src/common/components/atoms/SeverityBadge.tsx` | `docs/raw/feature/components/atoms/SeverityBadge.md` | MATCH |
| LoadingState | `src/common/components/atoms/LoadingState.tsx` | — | MISSING DOC |
| ErrorState | `src/common/components/atoms/ErrorState.tsx` | — | MISSING DOC |
| EmptyState | `src/common/components/atoms/EmptyState.tsx` | — | MISSING DOC |

**Organisms:**
| Component | File | Feature Doc | Status |
|-----------|------|-------------|--------|
| FileViewerRouter | `src/common/components/organisms/FileViewerRouter.tsx` | `docs/raw/feature/components/organisms/FileViewerRouter.md` (tier: template) | MISMATCH |

### Layer-to-Invariant Mapping

| Layer | Applies Invariants |
|-------|-------------------|
| Atom | Stateless UI, Theme Sovereignty, Localization, Atomic Hierarchy, Dependency Safety, Platform Neutrality |
| Molecule | Stateless UI, Theme Sovereignty, Localization, Atomic Hierarchy, Dependency Safety, Platform Neutrality |
| Organism | Stateless UI, Theme Sovereignty, Localization, Atomic Hierarchy, MVVM Separation, Dependency Safety, Platform Neutrality |
| Template | Stateless UI, Theme Sovereignty, Localization, Atomic Hierarchy, Dependency Safety, Platform Neutrality |
| ViewModel Hook | MVVM Separation, Repository Isolation, Dependency Safety, Platform Neutrality |
| Repository | Repository Isolation, MVVM Separation, Dependency Safety, Platform Neutrality |
| Electron | Platform Neutrality, Dependency Safety |

---

## Verification Commands

After generating, run these commands to verify:

### 1. Cross-tier import violations
```
rg "import.*from.*(?:molecules|organisms|templates)" src/common/components/atoms/
rg "import.*from.*(?:organisms|templates)" src/common/components/molecules/
rg "import.*from.*templates" src/common/components/organisms/
```

### 2. Data lifecycle in wrong layer
```
rg "(?:useState|useEffect)\s*\(" src/common/components/atoms/ src/common/components/molecules/
```

### 3. JSX in hooks
```
rg "return\s*(?:<|\()" src/common/hooks/
```

### 4. UI imports in repositories
```
rg "import.*from.*(?:components|hooks|views)" src/common/repo/
```

### 5. Direct data access in views
```
rg "(?:fetch|axios|ApiService|Repo\.)" src/renderer/features/*/components/View.tsx
```

### 6. Business computation in atoms
```
rg "(?:reduce|filter|map|calculate|compute)\s*\(" src/common/components/atoms/
```

### 7. Feature doc tier vs actual tier
```
rg "^tier:" docs/raw/feature/components/*/*.md
```
Cross-reference against directory listing of `src/common/components/{atoms,molecules,organisms,templates}/`.

### 8. Missing feature docs
```
# List component files with no corresponding feature doc
Get-ChildItem src/common/components/*/*.tsx -Exclude *.test.tsx,*.stories.tsx | ForEach-Object {
  $name = $_.BaseName
  $tier = $_.Directory.Name
  $docPath = "docs/raw/feature/components/$tier/$name.md"
  if (-not (Test-Path $docPath)) { Write-Output "MISSING DOC: $($_.FullName)" }
}
```

---

## Output Paths

```
docs/raw/architecture/composition-map/composition-governance.md
docs/raw/architecture/composition-map/layer-catalog.md
```

---

## Prompt Metadata

| Field | Value |
|-------|-------|
| Prompt Version | `1.0` |
| Generated For | `Astra Composition Map` |
| Architecture Model | `UI + MVVM Sovereignty Map` |
| Last Updated | `2026-05-10` |
