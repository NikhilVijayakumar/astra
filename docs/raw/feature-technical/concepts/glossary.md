# Feature Ownership Glossary: Feature Technical

## 1. Technical Overview

The glossary defines single-ownership for every concept in the system. Each concept has exactly one owning feature doc. The owning doc is authoritative — other docs may reference but not redefine. Architecture docs (`docs/raw/architecture/`) own the HOW (implementation mechanisms), while feature docs own the WHAT (behavioral contracts). Feature specifications must not reference implementation names (hooks, providers, classes) — they describe capability, not mechanism.

## 2. Architecture Realization

| Feature Spec Concept | Architecture Implementation |
|---|---|
| Single owning doc per concept | Each row in ownership table maps to exactly one feature spec file |
| Concept-to-feature map | Canonical table: |Concept| → |Owning Feature| → |File| |
| Architecture owns HOW | `docs/raw/architecture/core/*` define mechanisms (hooks, providers, patterns) |
| Feature owns WHAT | `docs/raw/feature/*` define behavioral contracts |
| Implementation name isolation | Behavioral feature specs (`docs/raw/feature/*`) use capability language, not `useTheme()`, `useDataState`, etc. Feature-technical docs (`docs/raw/feature-technical/*`) are implementation references and are explicitly permitted to name hooks, providers, and classes. |

**Ownership resolution flow:**

```
Developer looks up "theme persistence"
       ↓
Glossary: Theming System → docs/raw/feature/theming/README.md
       ↓
Feature doc describes WHAT: "Persist theme preference across sessions"
       ↓
Architecture doc: docs/raw/architecture/invariants/stateless-ui.md
       ↓
Describes HOW: "@stateless-exception" in ThemeProvider via localStorage
```

## 3. Data Flow

```
Developer references a concept in feature spec
       ↓
Glossary resolves to owning feature doc
       ↓
Feature doc describes behavioral contract
       ↓
Architecture doc describes implementation mechanism
       ↓
Code implements the mechanism
```

**Reverse flow (debugging):**

```
Bug found in useDataState behavior
       ↓
Architecture doc: core/hooks.md describes mechanism
       ↓
Glossary: "Async state lifecycle" → State Management → docs/raw/feature/state/README.md
       ↓
Feature doc describes expected behavior
       ↓
Bug fix aligns behavior with feature spec contract
```

## 4. State Management

The glossary itself is static — no runtime state. It is a documentation artifact that defines ownership boundaries. However, the ownership model has states:

| State | Description |
|---|---|
| Complete | Every concept has exactly one owning feature doc |
| Duplicated | Concept appears in multiple feature docs — ownership ambiguous |
| Orphaned | Concept referenced but no owning doc exists |
| Deprecated | Concept owned by doc marked for removal — reassignment needed |

## 5. Styling Implementation

No styling impact. The glossary is purely a documentation and governance tool. It enforces separation of concerns at the specification level, which indirectly drives styling ownership — visual styling is owned by Theming System and Design Tokens feature docs.

## 6. Interaction Design

No user interaction. The glossary is a developer reference tool accessed during feature spec authoring, code review, and architecture discussions. The ownership table provides navigation paths for all system capabilities.

## 7. Accessibility Implementation

No direct accessibility impact. The glossary ensures that accessibility-related concepts (contrast, focus, ARIA labels) have clear ownership — accessibility behavior is specified in each feature doc, not as a separate cross-cutting concern.

## 8. Error Handling

| Condition | Behavior | Resolution |
|---|---|---|
| Concept referenced in multiple feature docs | Ownership ambiguity — conflicting specs possible | Audit glossary, designate single owner |
| Concept referenced but not in glossary | Orphaned — no authoritative behavior definition | Add entry to glossary with owning doc |
| Implementation name in feature spec | Isolation violation — spec leaks architecture | Replace with capability language |
| Feature doc references another feature's mechanism | Cross-feature coupling | Reference concept, not implementation |

## 9. Performance Considerations

- The glossary has no runtime footprint — documentation-only artifact
- Ownership resolution is a manual process during spec authoring
- No build-time or runtime checks enforce glossary compliance (convention-only)

## 10. Integration Points

| Integration | Mechanism |
|---|---|
| Feature specs → Glossary | Each feature doc listed in glossary ownership table |
| Architecture docs → Glossary | Architecture concepts listed in "Referenced Architecture Concepts" section |
| Glossary → Feature spec authoring | Developers consult glossary before writing new feature docs |
| Glossary → Code review | Reviewers verify concept ownership against glossary entries |
| Component ownership | Component table maps atomic design tier → component file → owning doc |

## 11. Open Questions

- Should glossary compliance be verified by automated tooling (e.g., lint rule for orphaned concepts)?
- How should versioned concepts be handled when ownership changes across releases?
- Should the glossary include deprecated/removed concepts with migration targets?

## 12. Authorization

**Visibility:** Public — stateless Astra library component/primitive. No authentication or role requirement enforced by Astra. Authorization enforcement is consumer-managed at the application layer.
