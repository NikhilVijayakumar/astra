# 03 Organism Complex UI

> Request snapshot (2026-03-31).
> All components are stateless after pre-handover refactoring.

## Goal
Higher-composition components that remain reusable because domain orchestration has been fully externalized.

## Promotion Rule
Organism candidate must satisfy all:
- No direct workflow orchestration.
- No direct window/main-process coupling.
- Public props must be stable and domain-neutral.
- Any stateful behavior must be controllable from parent for Astra portability.

---

## AudioPlayer

Path: `src/common/components/AudioPlayer.tsx`

User story:
As a viewer, I need a fixed-bottom audio player bar with play/pause controls, track info, and volume slider for background audio playback.

Current state contract:
- Controlled component. Playback state managed by parent via `isPlaying`/`onTogglePlay`.
- Internal `audioRef` retained for DOM `<audio>` element control only (not business state).
- All track metadata is flat string props.

Current API:
```ts
interface AudioPlayerProps {
    title: string;
    category: string;
    duration: string;
    coverUrl: string;
    audioUrl: string;
    isPlaying: boolean;
    onTogglePlay: () => void;
}
```

Pre-handover refactoring completed:
- Removed internal `useState` for `isPlaying` → moved to controlled prop.
- Removed `AudioTrack` domain type → flat string props.
- Removed null-track guard (parent decides rendering).

Astra promotion notes:
- Rename candidate: `AudioPlayer` → `MediaPlayerBar` or `AudioControlBar`.
- Volume control is currently a static slider (not wired to audioRef). Astra may want to add `volume`/`onVolumeChange` props.
- Skip forward/back buttons are non-functional placeholders — Astra may want `onSkipNext`/`onSkipPrev` callbacks.

Promotion decision:
- **Lane A (Promote now)** with optional callback enrichment.

---

## FlowVisualizer

Path: `src/common/components/FlowVisualizer.tsx`

User story:
As a viewer, I need a multi-section step-flow diagram with interactive step selection and animated detail panels for process/workflow visualization.

Current state contract:
- Controlled component. Active step managed by parent via `activeStepId`/`onStepChange`.
- Flow data (sections and steps) provided entirely via `flows` prop.
- Translation function `t` is caller-injected.
- Uses `FlowStep` (atomic) as a sub-component internally.

Current API:
```ts
interface FlowStepData {
    id: string;
    label: string;
    description: string;
    Icon: LucideIcon;
}

interface FlowSection {
    titleKey: string;
    steps: FlowStepData[];
}

interface FlowVisualizerProps {
    flows: FlowSection[];
    activeStepId: string | null;
    onStepChange: (id: string) => void;
    t: (key: string) => string;
}
```

Pre-handover refactoring completed:
- Removed hardcoded `EDUCATION_FLOW` and `FICTION_FLOW` domain data imports.
- Removed `useSettings()` → `t` prop.
- Icons are pre-resolved by caller and passed as component references.

Astra promotion notes:
- Rename candidate: `FlowVisualizer` → `StepFlowDiagram` or `ProcessVisualizer`.
- `FlowSection` and `FlowStepData` types should be exported from Astra for consumer use.
- Internal `FlowStep` dependency must also be promoted (it's in the Atomic package).

Promotion decision:
- **Lane A (Promote now)** — depends on `FlowStep` being co-promoted.

---

## Organism Exit Criteria
1. No direct main-process bridge calls.
2. No route/session orchestration in promoted component.
3. State contracts are fully controlled when needed.
4. Component can be mounted in another app without Drishti constants/modules.
