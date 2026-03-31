# Dristi -> Astra Mapping (Response)

Status: Completed  
Date: 2026-03-31

| Old Component | New Astra Component | Old Import | New Import | Status | Phase | Priority | Effort | Breaking Prop Changes | Migration Notes |
|---|---|---|---|---|---|---|---|---|---|
| ScrollProgress | VerticalStepIndicator | import { ScrollProgress } from 'common/components/ScrollProgress' | import { VerticalStepIndicator } from 'astra/components' | mapped | A | LOW | < 30 min | Renamed component | Just update import path and name |
| FlowStep | InteractiveStepNode | import { FlowStep } from 'common/components/FlowStep' | import { InteractiveStepNode } from 'astra/components' | mapped | A | LOW | < 30 min | Renamed component | Just update import path and name |
| HeritageLetter | AnimatedHeroCharacter | import { HeritageLetter } from 'common/components/HeritageLetter' | import { AnimatedHeroCharacter } from 'astra/components' | mapped | A | MEDIUM | 30-60 min | `person` -> `title`, `value` -> `subtitle` | Update the props to generic titles |
| ThemeToggle | ThemeToggle | import ThemeToggle from 'common/components/ThemeToggle' | import { ThemeToggle } from 'astra/theme' | duplicate | C | LOW | < 30 min | N/A | Adopt Astra's native theme toggle from `astra/theme` |
| SegmentCard | FeatureSegmentCard | import { SegmentCard } from 'common/components/SegmentCard' | import { FeatureSegmentCard } from 'astra/components' | mapped | A | LOW | < 30 min | `targetAudience` -> `tags` | Map generic tags instead of audience |
| TrackCard | PlayableMediaCard | import { TrackCard } from 'common/components/TrackCard' | import { PlayableMediaCard } from 'astra/components' | mapped | A | LOW | < 30 min | Renamed component | Just update import path and name |
| PrincipleItem | IconDescriptionListItem | import { PrincipleItem } from 'common/components/PrincipleItem' | import { IconDescriptionListItem } from 'astra/components' | mapped | A | LOW | < 30 min | Renamed component | Just update import path and name |
| PersonaCard | ProfileRevealCard | import { PersonaCard } from 'common/components/PersonaCard' | import { ProfileRevealCard } from 'astra/components' | mapped | A | MEDIUM | 30-45 min | `ageGroup` -> `primaryBadge`, `contentScope` -> `secondaryMetadata` | Update the prop names |
| TimelineNode | TimelineNode | import { TimelineNode } from 'common/components/TimelineNode' | import { TimelineNode } from 'astra/components' | mapped | B | HIGH | 1-2 hrs | `isEducation` -> `alignRight`, `ageGroup`/`genres` -> `tags`, `track` -> `category` | Complete API overhaul to decouple from education domain |
| AudioPlayer | AudioPlayerBar | import { AudioPlayer } from 'common/components/AudioPlayer' | import { AudioPlayerBar } from 'astra/components' | mapped | A | MEDIUM | 30-60 min | Renamed component | Just update import path and name |
| FlowVisualizer | MultiPhaseWorkflowDiagram | import { FlowVisualizer } from 'common/components/FlowVisualizer' | import { MultiPhaseWorkflowDiagram } from 'astra/components' | mapped | A | MEDIUM | 30-60 min | Expects `WorkflowPhase` instead of `FlowSection` | Update the typed props to the new `WorkflowPhase` interface |

## Duplicate Rejection Notes

- `ThemeToggle` proposal is rejected as a new shared component because Astra already exports `ThemeToggle` from `astra/theme`.

## New Export Surface Added

- VerticalStepIndicator
- InteractiveStepNode
- AnimatedHeroCharacter
- FeatureSegmentCard
- PlayableMediaCard
- IconDescriptionListItem
- ProfileRevealCard
- TimelineNode
- AudioPlayerBar
- MultiPhaseWorkflowDiagram
