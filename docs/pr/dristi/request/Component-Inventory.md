# Component Inventory (Drishti -> Astra)

> Request snapshot (2026-03-31).
> This file records pre-handover candidate state.
> For post-response and current implementation status, see `docs/pr/astra/response/*`.

## Scope
Audit target: `src/common/components/`

Goal:
- Build a common-first promotion path in Drishti.
- Propose only reusable, atomic/stateless-capable components to Astra.
- Keep route orchestration, app wiring, and strongly domain-coupled UI in Drishti unless decomposed.

## Promotion Lanes
- **Lane A - Promote now**: already stateless or close to stateless; low coupling.
- **Lane B - Promote with refactor**: requires adapter/decomposition before Astra.
- **Lane C - Duplicate check in Astra**: map to existing Astra equivalent if present.
- **Lane D - Keep local / defer**: domain or orchestration coupling remains high.

## Master List

| # | Component | Layer Bucket | Path | Coupling | Promotion Lane | Risk | Effort | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | ScrollProgress | Atomic | src/common/components/ScrollProgress.tsx | None | Lane A | Low | < 30 min | Proposed |
| 2 | FlowStep | Atomic | src/common/components/FlowStep.tsx | None | Lane A | Low | < 30 min | Proposed |
| 3 | HeritageLetter | Atomic | src/common/components/HeritageLetter.tsx | None | Lane A | Low | 30–45 min | Proposed |
| 4 | SegmentCard | Molecular | src/common/components/SegmentCard.tsx | None | Lane A | Low | 30–45 min | Proposed |
| 5 | TrackCard | Molecular | src/common/components/TrackCard.tsx | None | Lane A | Low | 30–45 min | Proposed |
| 6 | PrincipleItem | Molecular | src/common/components/PrincipleItem.tsx | None | Lane A | Low | 30–45 min | Proposed |
| 7 | PersonaCard | Molecular | src/common/components/PersonaCard.tsx | None | Lane A | Low | 30–60 min | Proposed |
| 8 | TimelineNode | Molecular | src/common/components/TimelineNode.tsx | None | Lane A | Low | 30–60 min | Proposed |
| 9 | AudioPlayer | Organism | src/common/components/AudioPlayer.tsx | None | Lane A | Medium | 1–2 hrs | Proposed |
| 10 | FlowVisualizer | Organism | src/common/components/FlowVisualizer.tsx | None | Lane A | Medium | 1–2 hrs | Proposed |
| 11 | ThemeToggle | Atomic | src/common/components/ThemeToggle.tsx | Low (imports Astra useTheme) | Lane C | Low | < 30 min | Proposed — duplicate check |

## Coupling Validation Gates (Mandatory)
A candidate is eligible for Astra only if all checks pass:
1. No direct import from main-process services or app-specific repositories.
2. No route/session orchestration.
3. Public API uses domain-neutral nouns and types.
4. Business state is externalized; UI is stateless from business perspective.
5. Localization and labels are caller-injected via `t` prop or reusable contract-safe.
6. Styling uses MUI token-driven values.

## Pre-Handover Refactoring Completed
All 11 candidates were refactored in Drishti before this request:
- `useSettings()` hook removed from 6 components → replaced with `t: (key: string) => string` prop.
- Domain-specific types (`AudienceSegment`, `Principle`, `Persona`, `Milestone`, `TrackType`, `AudioTrack`) removed → replaced with neutral inline prop interfaces.
- Hardcoded icon maps removed from 3 components → `Icon` component accepted via props.
- `FlowVisualizer` hardcoded flow data (`EDUCATION_FLOW`, `FICTION_FLOW`) removed → accepts `FlowSection[]` via props.
- `AudioPlayer` internal playback state externalized → controlled via `isPlaying`/`onTogglePlay` props.
- All components relocated from feature-specific paths to `src/common/components/` with barrel export.
- All consuming containers/sections updated and build verified.

## PR Slice Mapping
- Atomic package details: `docs/pr/astra/request/01-Atomic-Elements.md`
- Molecular package details: `docs/pr/astra/request/02-Molecular-Layouts.md`
- Organism package details: `docs/pr/astra/request/03-Organism-Complex-UI.md`
- Handover and reimport contract: `docs/pr/astra/request/Handover-Contract.md`

## Validation Status
- All candidates have zero imports from Drishti domain/data/repo layers.
- Build verification: `tsc -b && vite build` passes.
- All candidates export stateless React components with neutral prop interfaces.
