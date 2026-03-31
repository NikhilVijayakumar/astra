# 02 Molecular Layouts

> Request snapshot (2026-03-31).
> All components are stateless after pre-handover refactoring.

## Goal
Reusable grouped display blocks that combine primitives while keeping workflow orchestration in containers/viewmodels.

## Promotion Rule
Molecular candidate must satisfy all:
- Parent controls all data and business decisions.
- Component owns zero state (not even transient UI state).
- Domain-specific models have been replaced with neutral prop interfaces.

---

## SegmentCard

Path: `src/common/components/SegmentCard.tsx`

User story:
As a viewer, I need a card that displays a titled segment with an icon, subtitle, color accent, and a list of audience items.

Current state contract:
- Fully stateless. Zero internal state.
- Icon is caller-injected as a component prop.
- Translation function `t` is caller-injected.

Current API:
```ts
interface SegmentCardProps {
    title: string;
    subTitle: string;
    color: string;
    Icon: LucideIcon;
    targetAudience: string[];
    index: number;
    t: (key: string) => string;
}
```

Astra promotion notes:
- Rename candidate: `SegmentCard` → `CategoryCard` or `FeatureCard`.
- `Icon` prop could be generalized to `React.ComponentType<{ size: number; strokeWidth?: number }>`.

Promotion decision:
- **Lane A (Promote now)**.

---

## TrackCard

Path: `src/common/components/TrackCard.tsx`

User story:
As a viewer, I need a media card with cover image, title, artist, and play overlay for audio/video content browsing.

Current state contract:
- Fully stateless. Play state controlled by parent.
- Translation function `t` is caller-injected.

Current API:
```ts
interface TrackCardProps {
    title: string;
    artist?: string;
    category: string;
    duration: string;
    coverUrl: string;
    isPlaying: boolean;
    onPlay: () => void;
    t: (key: string) => string;
}
```

Astra promotion notes:
- Rename candidate: `TrackCard` → `MediaCard`.
- `onPlay` callback pattern is clean and parent-controlled.

Promotion decision:
- **Lane A (Promote now)**.

---

## PrincipleItem

Path: `src/common/components/PrincipleItem.tsx`

User story:
As a viewer, I need a list item with an icon, title, and description for displaying principles, values, or feature entries.

Current state contract:
- Fully stateless.
- Icon is caller-injected.
- Translation function `t` is caller-injected.

Current API:
```ts
interface PrincipleItemProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    index: number;
    t: (key: string) => string;
}
```

Astra promotion notes:
- Rename candidate: `PrincipleItem` → `IconListItem` or `FeatureListItem`.
- Generic enough for any icon + title + description list use case.

Promotion decision:
- **Lane A (Promote now)**.

---

## PersonaCard

Path: `src/common/components/PersonaCard.tsx`

User story:
As a viewer, I need an image-backed profile card with hover-reveal biography, role, age group, and content scope details.

Current state contract:
- Fully stateless. All data is caller-provided.
- Translation function `t` is caller-injected.

Current API:
```ts
interface PersonaCardProps {
    name: string;
    nameKey: string;
    role: string;
    bio: string;
    imageUrl: string;
    themeColor: string;
    ageGroup?: string;
    contentScope?: string;
    t: (key: string) => string;
}
```

Astra promotion notes:
- Rename candidate: `PersonaCard` → `ProfileCard` or `CharacterCard`.
- `nameKey` is a i18n key pattern — Astra may standardize to just `name` with pre-translated value.
- Audio button mock (voice preview) could be extracted or made optional.

Promotion decision:
- **Lane A (Promote now)** with optional rename.

---

## TimelineNode

Path: `src/common/components/TimelineNode.tsx`

User story:
As a viewer, I need a timeline entry card with phase label, status badge, description, genre tags, and alternating left/right layout for roadmap display.

Current state contract:
- Fully stateless. No domain enum imports.
- Layout alternation driven by `isEducation` boolean prop.
- Translation function `t` is caller-injected with params support.

Current API:
```ts
interface TimelineNodeProps {
    phase: string;
    title: string;
    description: string;
    track: string;
    status: string;
    ageGroup?: string;
    genres?: string[];
    isEducation: boolean;
    t: (key: string, params?: Record<string, string | number>) => string;
}
```

Astra promotion notes:
- Rename candidate: `TimelineNode` → `TimelineEntry` or `MilestoneCard`.
- `isEducation` could be generalized to `alignLeft: boolean` or `variant: 'left' | 'right'`.
- Status color mapping is internal but uses standard MUI chip colors.

Promotion decision:
- **Lane A (Promote now)** with rename and prop generalization.

---

## Molecular Exit Criteria
1. Business data model abstracted behind neutral props.
2. Zero local state.
3. Caller controls all side-effect actions via callbacks.
4. Localization keys are caller-injected, not hardwired to one namespace.
