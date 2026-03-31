# Drishti -> Astra Mapping Template

Fill one row per candidate returned by Astra.

| Old Component | New Component | Old Import | New Import | Status | Execution Phase | Priority | Effort | Breaking Prop Changes | Migration Notes |
|---|---|---|---|---|---|---|---|---|---|
| ScrollProgress |  | import { ScrollProgress } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | < 30 min |  |  |
| FlowStep |  | import { FlowStep } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | < 30 min |  |  |
| HeritageLetter |  | import { HeritageLetter } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | 30-45 min |  |  |
| SegmentCard |  | import { SegmentCard } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | 30-45 min |  |  |
| TrackCard |  | import { TrackCard } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | 30-45 min |  |  |
| PrincipleItem |  | import { PrincipleItem } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | 30-45 min |  |  |
| PersonaCard |  | import { PersonaCard } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | 30-60 min |  |  |
| TimelineNode |  | import { TimelineNode } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | LOW | 30-60 min |  |  |
| AudioPlayer |  | import { AudioPlayer } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | MEDIUM | 1-2 hrs |  |  |
| FlowVisualizer |  | import { FlowVisualizer } from 'drishti/common/components' | import {  } from 'astra/components' | mapped | A | MEDIUM | 1-2 hrs |  |  |
| ThemeToggle |  | import { ThemeToggle } from 'drishti/common/components' | import {  } from 'astra/components' | duplicate or mapped | C | LOW | < 30 min |  |  |

## Fill Instructions
- Old Import: exact import currently used in Drishti.
- New Import: exact Astra import path after promotion/mapping.
- Status values: mapped | duplicate | deferred | rejected | blocked.
- Execution phase:
  - A = rename-only
  - B = contract refactor
  - C = duplicate replacement
  - D = deferred/split-required
- Breaking Prop Changes: include renamed, removed, type-change, behavior-change entries.
- Migration Notes: include direct code-level replacement guidance.

## Required Metadata (Top of Returned Artifact)
- Astra package version:
- Astra commit/tag:
- Owner:
- Date:
- PR reference:
