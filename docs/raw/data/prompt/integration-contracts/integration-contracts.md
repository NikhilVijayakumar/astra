# Platform/Runtime Boundary Contract Generator

> Generates and enforces integration contracts for Astra's runtime boundaries.
>
> This is **border security for runtimes** — defines what runtime can access what authority, what trust boundaries exist between runtimes, and what contracts govern cross-runtime communication.
>
> Success chain: features &rarr; invariants &rarr; integration-contracts &rarr; audit-security

---

## Role Definition

You are acting as:

- **Runtime Sovereignty Architect** — defines authority boundaries between runtimes
- **Border Security Governor** — enforces trust boundaries and IPC contract discipline
- **Integration Contract Inspector** — detects and prevents privilege escalation across runtimes
- **Cross-Runtime Auditor** — validates that runtime boundaries are respected in implementation

---

## Mental Model

### Why Integration Contracts Exist

Most Electron applications are vulnerable because they lack runtime boundary contracts. The core insight:

```
Electron combines multiple runtimes sharing trust boundaries:
  Runtime       Privilege
  Renderer      untrusted UI
  Preload       controlled bridge
  Main Process  full system access
```

Without contracts, developers do `nodeIntegration: true` and the renderer gets filesystem access, process access, shell execution. If XSS occurs, the attacker owns the machine.

**Integration contracts prevent this by defining:**

- **Runtime Sovereignty** — each runtime gets explicit authority, explicit boundaries, explicit contracts
- **Border Security** — protecting trust boundaries between runtimes
- **IPC Contracts** — validated, scoped communication channels

### What an Integration Contract IS

An integration contract defines:

- **what runtime can access what authority** — sovereignty declaration
- **what trust boundaries exist between runtimes** — trust model
- **what communication is allowed across boundaries** — IPC contract
- **what each runtime explicitly may NOT do** — forbidden authority

This is **NOT about setup instructions**. It is about **runtime security guarantees**.

### The Three-Runtime Model

```
Renderer (untrusted UI)
    |  only approved IPC methods via preload
    v
Preload (controlled bridge)
    |  validated IPC to main
    v
Main Process (full system access)
```

#### A. Renderer Contract

Renderer is untrusted UI. It runs user-facing code.

**Renderer Authority:**

| Allowed | Forbidden |
|---------|-----------|
| UI rendering | Filesystem access |
| User interaction | OS APIs |
| Approved IPC methods | Shell execution |
| Network requests to allowed origins | Raw Electron APIs |

#### B. Preload Contract

Preload acts as controlled bridge between renderer and main.

**Preload Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Expose approved IPC methods | Expose raw Electron APIs |
| Validate IPC payloads | Expose unrestricted filesystem |
| Transform data for renderer | Bypass context isolation |

#### C. Main Process Contract

Main owns privileged system access.

**Main Authority:**

| Allowed | Forbidden |
|---------|-----------|
| Filesystem access | Trust renderer input without validation |
| Native APIs | Expose raw system APIs to renderer |
| Process management | Skip IPC validation |
| Privileged execution | Bypass preload bridge |

### Why This Is Called "Border Security"

Frontend security is mostly boundary security. Most Electron compromises happen because:

- renderer crosses privilege boundary
- preload exposes too much authority
- IPC lacks validation

Without contracts: privileged APIs leak everywhere.
With contracts: authority remains compartmentalized.

### This Is Similar To

- OS kernel/user mode
- browser sandboxing
- microservice trust zones

but applied to frontend runtimes.

---

## Idempotency Logic

Before generating, check existence of output files:

```
FOR EACH FILE in docs/raw/architecture/integration-contracts/:
  read it
  read relevant feature docs
  read source code from src/
  diff: compare contract rules against BOTH feature docs AND source code
  IF concept drift (docs are setup guides, not contract documents):
    RESTRUCTURE: reframe around runtime sovereignty and border security
    PRESERVE: valid setup steps, code examples, configuration snippets
    REPLACE: generic guidance with contract-based architecture
    OPTIMIZE: merge duplicate content, remove outdated patterns
    APPEND: new contract sections, sovereignty tables, IPC validation
    FLAG: security gaps, missing contract definitions, violated boundaries
    UPDATE: Last Reviewed date
  ELSE:
    partial update &mdash; apply only changed sections

IF NEITHER EXISTS:
  fresh generation from scratch
```

---

## Update Requirements

When updating existing documents:

- preserve valid setup instructions and code examples — they are useful reference
- reframe generic guidance through the lens of runtime sovereignty and border security
- add contract tables (allowed/forbidden per runtime) to every integration document
- append IPC validation patterns where only raw IPC examples exist
- do NOT remove working configuration snippets — annotate them with contract context
- update Last Reviewed date on every pass
- if a previous contract was weak (e.g., no validation), replace with contract-strong equivalent
- if a security gap is found (e.g., raw IPC without validation), flag it in a "Security Gaps" section

---

## Input Files to Read

Read ALL of these before generating:

### Existing Architecture Documents (to improve)

1. `docs/raw/architecture/integration-contracts/getting-started.md` — existing general setup guide
2. `docs/raw/architecture/integration-contracts/react.md` — existing React integration guide
3. `docs/raw/architecture/integration-contracts/electron.md` — existing Electron integration guide

### Invariant Documents (boundary rules)

4. `docs/raw/architecture/invariants/platform-neutrality.md` — platform assumption rules
5. `docs/raw/architecture/invariants/dependency-safety.md` — dependency boundary rules
6. `docs/raw/architecture/invariants/public-api-stability.md` — public surface stability

### Feature Documentation (what Astra promises)

7. `docs/raw/feature/README.md` — feature module index
8. `docs/raw/feature/components/README.md` — component library overview
9. `docs/raw/feature/mvvm/README.md` — MVVM pattern overview

### Source Implementation (what Astra actually does)

10. `src/main/` — Electron main process source (if exists)
11. `src/preload/` — preload bridge source (if exists)
12. `src/common/components/` — UI component implementations
13. `src/common/hooks/` — hook implementations
14. `src/common/repo/` — repository implementations

### Architecture Reference

15. `docs/raw/data/template/mental_model.md` — layer architecture model

---

## Cross-Validation: Feature Docs vs Implementation vs Contract

Before generating contracts, you MUST cross-validate feature documentation against actual implementation AND contract definitions. Discrepancies must be surfaced.

### Runtime Boundary Validation

For every runtime (renderer/preload/main), check:

| Check | What to Verify |
|-------|---------------|
| Sovereignty declaration | Does the document define what this runtime owns? |
| Allowed authority | Does the document list what this runtime may access? |
| Forbidden authority | Does the document list what this runtime may NOT access? |
| IPC contract | Does the document define validated IPC channels? |
| Trust boundary | Does the document document the trust model between runtimes? |
| Security gap | Does the document flag risks of boundary violations? |

### IPC Channel Validation

For every IPC channel defined in source or docs, check:

- Is the channel validated in the preload bridge?
- Is the payload schema defined?
- Is there an allowlist or is everything permitted?
- Does the main process trust the renderer input without validation?

### Cross-Reference Output

When discrepancies are found, include them in a dedicated section:

```
## Contract-Implementation Discrepancies

### {file path}
- **Issue:** {description of discrepancy}
- **Contract says:** {what the integration contract specifies}
- **Implementation does:** {what source code actually does}
- **Severity:** {P0/P1/P2/P3}
- **Recommendation:** {fix contract or fix code?}
```

---

## Output File 1: `runtime-contracts.md`

Write to: `docs/raw/architecture/integration-contracts/runtime-contracts.md`

This is the **core contract framework** — the canonical reference for runtime sovereignty in Astra. Create this file if it doesn't exist. If it exists, read and merge updates.

You MUST follow the exact section structure below. Every section is required.

### Section 1: Purpose

Define Integration Contracts as Astra's runtime boundary sovereignty system. State that they define what runtime can access what authority, what trust boundaries exist, and what contracts govern cross-runtime communication. Reference that this is border security for runtimes.

### Section 2: The Three-Runtime Model

Describe the three-runtime model:

```
Renderer (untrusted UI) → Preload (controlled bridge) → Main Process (full system access)
```

Explain why this matters: Electron combines multiple runtimes sharing trust boundaries. Without contracts, the renderer has filesystem access via `nodeIntegration: true`. If XSS occurs, the attacker owns the machine.

### Section 3: Runtime Sovereignty per Runtime

For each runtime, define sovereign authority boundaries.

**Renderer Contract:**

| Allowed | Forbidden |
|---------|-----------|
| UI rendering | Filesystem access |
| User interaction | OS APIs |
| Approved IPC methods | Shell execution |
| Network to allowed origins | Raw Electron APIs |

Add prose: the renderer is the untrusted surface. It must never have direct system access. All privileged operations go through validated IPC.

**Preload Contract:**

| Allowed | Forbidden |
|---------|-----------|
| Expose approved IPC methods | Expose raw Electron APIs |
| Validate IPC payloads | Expose unrestricted filesystem |
| Transform data for renderer | Bypass context isolation |

Add prose: the preload is the controlled bridge. It must validate every payload crossing the boundary. It must never leak the raw IPC or Electron objects to the renderer.

**Main Process Contract:**

| Allowed | Forbidden |
|---------|-----------|
| Filesystem access | Trust renderer input without validation |
| Native APIs | Expose raw system APIs to renderer |
| Process management | Skip IPC validation |
| Privileged execution | Bypass preload bridge |

Add prose: the main process owns system authority. It must validate every IPC request before acting. It must never expose its raw capabilities to the renderer.

### Section 4: IPC Contract Format

Define the standard format for IPC channel contracts:

```ts
interface IpcContract {
  channel: string;
  direction: 'renderer-to-main' | 'main-to-renderer' | 'bidirectional';
  payload: {
    schema: Record<string, string>; // field name → type
    required: string[];             // mandatory fields
    validation: string;             // validation logic reference
  };
  response: {
    schema: Record<string, string>;
    error: string;                  // error type returned on failure
  };
  authority: string;                // what authority this IPC grants
  risk: 'low' | 'medium' | 'high'; // security risk level
}
```

### Section 5: Contract Violation Severity

| Level | Meaning | Action Required |
|-------|---------|-----------------|
| P0 | Critical boundary violation — renderer has system access, preload leaks raw APIs, IPC lacks validation | Must fix before release |
| P1 | High boundary leakage — IPC payload not validated, preload exposes more than needed | Must fix next release |
| P2 | Transitional — legacy direct access pattern with documented migration | Allowed temporarily |
| P3 | Compliant — runtime boundaries respected, IPC validated | No action required |

**P0 examples:**
- `nodeIntegration: true` in any Electron configuration
- Preload exposing `ipcRenderer` directly
- IPC handler accepting arbitrary input without validation
- Renderer accessing `fs` or `process`
- Context isolation disabled

**P1 examples:**
- IPC payload type loosely defined (e.g., `any` or untyped)
- Preload exposes approved but unnecessary methods
- Main process trusts renderer input without sanitization
- No payload validation on IPC receive
- Missing error handling on IPC failures

**P2 examples:**
- Preload exposes more methods than currently used but are documented
- IPC channels missing formal contract documentation

**P3 examples:**
- Clean runtime separation with validated IPC
- Preload only exposes minimal, typed methods
- All IPC payloads validated before processing

### Section 6: Detection Heuristics

Provide ripgrep patterns to detect contract violations. These commands must be executable against the actual codebase.

**nodeIntegration enabled:**
```
rg "nodeIntegration.*true" src/ electron/
```

**contextIsolation disabled:**
```
rg "contextIsolation.*false" src/ electron/
```

**Preload exposing raw Electron APIs:**
```
rg "contextBridge\.exposeInMainWorld.*(?:ipcRenderer|remote|shell|fs)" src/preload/
```

**Renderer accessing Node APIs directly:**
```
rg "(?:require\s*\(|process\.|fs\.|child_process)" src/renderer/
```

**IPC without validation (untyped channels):**
```
rg "ipcMain\.(?:on|handle)\s*\(['\"`].*['\"`]" src/main/ | grep -v "interface\|type\|validation"
```

**No payload schema on IPC:**
```
rg "ipcMain\.handle\s*\([^)]*,\s*(?:async\s*)?\((?:event|_event)" src/main/
```

**Missing error handling on IPC:**
```
rg "ipcRenderer\.invoke\s*\(" src/renderer/ | grep -v "\.catch\|try\|await"
```

**Renderer importing from main-preambles or main-only modules:**
```
rg "from.*electron" src/common/components/
```

**Direct filesystem access in renderer components:**
```
rg "import.*fs from\|import.*path from" src/common/components/
```

### Section 7: Refactoring Guidance

**Add context isolation:**
```ts
// BAD — renderer has system access
webPreferences: { nodeIntegration: true }

// GOOD — isolated renderer via preload
webPreferences: {
  nodeIntegration: false,
  contextIsolation: true,
  preload: path.join(__dirname, "preload.js")
}
```

**Scope preload exposure:**
```ts
// BAD — exposes raw ipcRenderer, unlimited access
contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: ipcRenderer
});

// GOOD — exposes only approved, typed methods
contextBridge.exposeInMainWorld("electronAPI", {
  getAppVersion: () => ipcRenderer.invoke("app-version"),
  minimizeWindow: () => ipcRenderer.send("window-minimize")
});
```

**Validate IPC payloads:**
```ts
// BAD — trusts renderer input directly
ipcMain.handle("write-file", async (_event, path, content) => {
  fs.writeFileSync(path, content); // paths not validated
});

// GOOD — validates before acting
ipcMain.handle("write-file", async (_event, path, content) => {
  const allowedDir = app.getPath("userData");
  if (!path.startsWith(allowedDir)) {
    throw new Error("Access denied: path outside allowed directory");
  }
  if (typeof content !== "string") {
    throw new Error("Access denied: invalid content type");
  }
  fs.writeFileSync(path, content);
});
```

### Section 8: Contract Compliance Goal

Astra's integration contracts must ensure:

- Each runtime has explicit, documented sovereignty
- Trust boundaries are respected across all runtimes
- IPC channels are validated, typed, and scoped
- Preload exposes only approved methods
- Renderer has zero system access
- Main process validates all IPC input
- No runtime can escalate its privilege without crossing a validated boundary

NOT:

- Renderer with nodeIntegration
- Preload leaking raw Electron APIs
- IPC without payload validation
- Untrusted input trusted by main process
- Missing contract documentation
- Boundary violations undetected

---

## Output File 2: `electron.md`

Read the existing file at `docs/raw/architecture/integration-contracts/electron.md`. Restructure it around the integration contracts concept. **Preserve all valid setup steps, code examples, and configuration snippets** — annotate them with contract context rather than removing them.

### Restructured Section Layout

#### Section 1: Electron Runtime Sovereignty

Replace the generic intro with the contract model:

```
# Electron Integration Contracts

Electron combines three runtimes sharing trust boundaries:
- **Renderer** (untrusted UI)
- **Preload** (controlled bridge)
- **Main Process** (full system access)

Integration contracts define what each runtime can access.
```

Include the sovereignty table from runtime-contracts.md reference.

#### Section 2: Prerequisites & Setup

**Preserve** existing content (Prerequisites, Initialize Electron with Vite, Configure Vite). Add contract annotations:

> **Contract note:** This configuration ensures `nodeIntegration: false` and `contextIsolation: true` by default. The preload script is the only bridge between renderer and main.

#### Section 3: Main Process Contract

Restructure the "Electron Main Process" section. Keep the setup code. Add:

- **Main Process Sovereignty Table:** what main owns, what it must validate
- **IPC Handler Contract:** every `ipcMain.handle` must validate input
- **Forbidden Patterns:** what main must never do (trust renderer input, expose raw APIs)

#### Section 4: Preload Bridge Contract

Restructure "Context Bridge Integration". Keep the preload code. Add:

- **Preload Sovereignty Table:** what preload may/may not expose
- **Bridge Contract Declaration:** documented API surface with type contracts
- **Validation Requirements:** what preload must validate before forwarding
- **Forbidden Exposures:** raw `ipcRenderer`, `remote`, `fs`, `process`

#### Section 5: Renderer Contract

Restructure "Use in Renderer". Keep the React component code. Add:

- **Renderer Sovereignty Table:** what renderer may/may not access
- **Type Declaration Contract:** the `Window.electronAPI` interface is the renderer's contract
- **Communication Contract:** renderer only calls preload-exposed methods

#### Section 6: IPC Communication Contracts

Restructure "IPC Communication Patterns". Keep the 3 patterns. Add:

- **IPC Contract Format:** each channel should declare its contract (direction, payload schema, response type, validation)
- **Channel Inventory Table:**

| Channel | Direction | Payload | Response | Validated? | Risk |
|---------|-----------|---------|----------|------------|------|
| `app-version` | renderer→main | `void` | `string` | Yes (no payload) | Low |
| `window-minimize` | renderer→main | `void` | `void` | Yes (no payload) | Low |
| `menu-action` | main→renderer | `string` | `void` | Yes | Low |

- **Validation Patterns for High-Risk Channels:** file access, database operations, shell commands

#### Section 7: Full Example App Structure

**Preserve** the directory structure and App.tsx code. Add contract annotations noting which runtimes each directory belongs to.

#### Section 8: Running & Building

**Preserve** the dev and build commands as-is. Add a note about contract verification in CI.

#### Section 9: Contract Violation Prevention

Replace the generic "Best Practices" list with contract-driven practices:

1. **Enable Context Isolation** — This is your first line of border security
2. **Scope Preload Exposure** — Expose only approved, typed IPC methods
3. **Validate Every IPC Payload** — Never trust renderer input
4. **Declare Channel Contracts** — Every IPC channel needs a documented contract
5. **Use Contract Verification** — Run detection heuristics in CI
6. **Apply Least Privilege** — Each runtime gets minimum authority needed
7. **Audit Cross-Runtime Calls** — Review all IPC channels regularly

---

## Output File 3: `react.md`

Read the existing file at `docs/raw/architecture/integration-contracts/react.md`. Restructure it around React's runtime boundaries. **Preserve valid content** (setup, MVVM, component architecture).

### Restructured Section Layout

#### Section 1: React Runtime Boundaries

Replace the generic intro:

```
# React Runtime Contracts

React runs in the renderer process. It operates within strict boundaries:
- **May:** render UI, handle user interaction, call approved APIs
- **May NOT:** access filesystem, access OS APIs, execute shell commands, import Electron modules
```

#### Section 2: Framework Setup (Vite / Next.js / CRA)

**Preserve** all setup sections (Vite Setup, Next.js Setup, CRA Setup). Add:

- **Contract Note per Framework:** what boundaries each framework imposes
- Next.js: client/server boundary contract (what runs where, `"use client"` separation)
- Vite: dev server vs production boundary

#### Section 3: Provider Composition Contract

**Preserve** the Provider Composition section. Reframe as:

- ThemeProvider contract: provides theme tokens, manages light/dark mode
- LanguageProvider contract: provides translations, manages locale
- Combined: these are the foundation layer contracts — they don't cross runtime boundaries

#### Section 4: MVVM Data Flow Contract

**Preserve** the Feature Module Structure, Repository Pattern, ViewModel Hook, View Component sections. Reframe as:

- **Repository Contract:** data access boundary — does not import UI, does not access DOM
- **ViewModel Contract:** orchestration boundary — does not render JSX, does not access DOM
- **View Contract:** presentation boundary — does not fetch data directly, does not access repositories

Add IPC Contract for Electron context:

```tsx
// In Electron, ViewModel calls preload bridge, not raw APIs
const version = await window.electronAPI?.getAppVersion();
// This is a contract: renderer → preload → main
```

#### Section 5: Component Architecture Contract

**Preserve** the Atomic Design rationales. Reframe as:

- Components belong to the renderer runtime
- Atoms/Molecules/Organisms must not import Electron APIs
- Templates must not cross runtime boundaries
- The component well is the renderer's sovereign territory

#### Section 6: Cross-Runtime Communication Patterns

Add a new section showing how React components communicate across runtime boundaries:

- **Via Preload Bridge:** window.electronAPI.* calls
- **Via IPC Contracts:** typed, validated channels
- **Via MVVM layer:** ViewModel acts as boundary, not the View

```tsx
// CORRECT: ViewModel delegates to preload contract
function useAppVersion() {
  const [version, setVersion] = useState<string>();
  useEffect(() => {
    window.electronAPI?.getAppVersion().then(setVersion);
  }, []);
  return version;
}

// WRONG: View accesses Electron directly
function useAppVersion() {
  const [version, setVersion] = useState<string>();
  useEffect(() => {
    const { ipcRenderer } = window.require('electron'); // violates contract
  }, []);
}
```

---

## Output File 4: `getting-started.md`

Read the existing file at `docs/raw/architecture/integration-contracts/getting-started.md`. Restructure it. **Preserve** installation instructions, first component usage, export surface, and component architecture.

### Restructured Section Layout

#### Section 1: What Are Integration Contracts?

Add a new introductory section:

```
# Getting Started with Astra Integration Contracts

Integration contracts define what each runtime can access, what trust boundaries exist, and how runtimes communicate. They are border security for your application.
```

Link to the detailed runtime-contracts.md and electron.md.

#### Section 2: Installation

**Preserve** as-is (npm, GitHub package, local file). The installation is the first contract — you're agreeing to Astra's dependency graph and API surface.

#### Section 3: Basic Provider Contracts

**Preserve** Theme Provider, Language Provider, Combined Providers. Reframe as foundational contract declarations:

- ThemeProvider contract: provides themed environment
- LanguageProvider contract: provides i18n environment
- Combined: these are the root-layer contracts every app needs

#### Section 4: Component Usage Contracts

**Preserve** First Component Usage, MVVM Pattern, AppStateHandler. Add contract annotations:

- HeroSection contract: props-only, no data fetching
- useDataState contract: manages async lifecycle, returns typed state
- AppStateHandler contract: routes LOADING/ERROR/EMPTY/SUCCESS automatically

#### Section 5: Export Surface as Contract Surface

**Preserve** the export tables and import styles. Reframe as:

- The export surface IS the public contract
- What's exported is what you're allowed to use
- Deep imports violate the public API contract

#### Section 6: Next Steps

**Preserve** the next steps links. Add contract-focused links:

- [Runtime Contracts](runtime-contracts.md) — Full contract framework
- [React Runtime Contracts](react.md) — React-specific boundaries
- [Electron Runtime Contracts](electron.md) — Electron-specific boundaries

---

## Verification Commands

After generating, run these commands to verify:

### 1. Runtime boundary violations (nodeIntegration, contextIsolation)
```
rg "nodeIntegration.*true" electron/ src/ 2>$null
rg "contextIsolation.*false" electron/ src/ 2>$null
```

### 2. Preload leaking raw Electron APIs
```
rg "contextBridge\.exposeInMainWorld" src/preload/
```

### 3. Renderer accessing Node APIs
```
rg "(?:require\s*\(['\"`]electron['\"`]|process\.|fs\.)" src/
```

### 4. IPC without validation
```
rg "ipcMain\.handle\s*\([^)]*,\s*(?:async\s*)?\((?:event|_event)[^,]*," src/
```

### 5. Hardcoded token hex values leaking
```
rg "'#[0-9a-fA-F]{6}'" docs/raw/architecture/integration-contracts/
```

### 6. Cross-runtime imports in the wrong layer
```
rg "from.*electron" src/common/components/
rg "from.*main" src/renderer/
```

### 7. Contract documentation coverage
```
# Verify every IPC channel has a documented contract
Get-ChildItem docs/raw/architecture/integration-contracts/*.md | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  if ($content -notmatch "ipc|contract|runtime sovereignty|authority") {
    Write-Output "MISSING CONTRACT FOCUS: $($_.Name)"
  }
}
```

---

## Output Paths

```
docs/raw/architecture/integration-contracts/runtime-contracts.md  (create)
docs/raw/architecture/integration-contracts/electron.md            (restructure)
docs/raw/architecture/integration-contracts/react.md               (restructure)
docs/raw/architecture/integration-contracts/getting-started.md     (restructure)
```

---

## Prompt Metadata

| Field | Value |
|-------|-------|
| Prompt Version | `1.0` |
| Generated For | `Astra Integration Contracts` |
| Architecture Model | `Platform/Runtime Boundary Contracts` |
| Architecture Concept | `Three-Runtime Model + Border Security` |
| Mental Model | `docs/raw/data/template/mental_model.md` |
| Last Updated | `2026-05-10` |
