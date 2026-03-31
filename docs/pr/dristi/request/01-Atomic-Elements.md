# 01 Atomic Elements

> Request snapshot (2026-03-31).
> Paths in this file represent current candidate locations in `src/common/components/`.

## Goal
Small, composable primitives that remain workflow-agnostic, stateless from business perspective, and safe for Astra promotion.

## Promotion Rule
Atomic candidate must satisfy all:
- Pure render from props.
- No route/session orchestration.
- No app-specific service calls.
- Domain-neutral naming or clearly documented rename path.

---

## ScrollProgress

Path: `src/common/components/ScrollProgress.tsx`

User story:
As a viewer, I need a vertical progress indicator so I can track my scroll position through multiple content sections.

Current state contract:
- Fully stateless. Pure render from props.
- Uses only MUI theme tokens for styling.

Current API:
```ts
interface ScrollProgressProps {
    activeIndex: number;
    totalSteps: number;
    sx?: SxProps<Theme>;
}
```

Astra promotion notes:
- No changes needed. Component is fully domain-neutral.
- Accepts standard MUI `sx` override for positioning.

Promotion decision:
- **Lane A (Promote now)** — zero coupling, zero risk.

---

## FlowStep

Path: `src/common/components/FlowStep.tsx`

User story:
As a viewer, I need an interactive step indicator in a multi-step flow so I can navigate between stages.

Current state contract:
- Fully stateless. Props-driven with click callback.
- Uses only MUI theme tokens.

Current API:
```ts
interface FlowStepProps {
    label: string;
    description: string;
    Icon: LucideIcon;
    isActive: boolean;
    onClick: () => void;
    index: number;
}
```

Astra promotion notes:
- No changes needed.
- `Icon` is a Lucide component reference; Astra may generalize to `React.ComponentType<{ size: number }>`.

Promotion decision:
- **Lane A (Promote now)** — zero coupling, zero risk.

---

## HeritageLetter

Path: `src/common/components/HeritageLetter.tsx`

User story:
As a viewer, I need animated hero characters with parallax motion and hover-reveal details for immersive landing experiences.

Current state contract:
- Stateless. Uses framer-motion `MotionValue` for parallax (no internal state).
- Translation function `t` is caller-injected.

Current API:
```ts
interface Props {
    char: string;
    person?: string;
    value?: string;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    index: number;
    zIndex: number;
    t: (key: string) => string;
}
```

Astra promotion notes:
- Rename candidate: `HeritageLetter` → generic `AnimatedCharacterHero` or similar.
- `MotionValue` dependency on framer-motion is acceptable for Astra (already a peer dep).
- `t` prop pattern matches Astra stateless contract for localization.

Promotion decision:
- **Lane A (Promote now)** with optional rename.

---

## ThemeToggle

Path: `src/common/components/ThemeToggle.tsx`

User story:
As a user, I need a dark/light mode toggle button.

Current state contract:
- Stateless. Already imports `useTheme` from Astra.

Current API:
```ts
// No props — uses Astra useTheme hook directly
const ThemeToggle: FC = () => { ... }
```

Astra promotion notes:
- Run duplicate check. Astra may already have an equivalent toggle.
- If not present, promote directly.

Promotion decision:
- **Lane C (Duplicate check in Astra)**.

---

## Atomic Exit Criteria
1. No business state inside component.
2. No app-brand-specific text hardcoded.
3. Public props are domain-neutral.
4. Typecheck and smoke checks pass in Drishti after common extraction.
