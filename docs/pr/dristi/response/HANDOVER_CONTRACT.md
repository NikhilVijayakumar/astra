# Dristi -> Astra Handover Contract

## 1. Astra Responsibilities (Completed)
- Ported 11 components from Dristi.
- Promoted 10 components to `astra/components` with domain-neutral names.
- Mapped 1 duplicate component to `astra/theme`.
- Provided a machine-readable mapping JSON for easy codemods.

## 2. Dristi Responsibilities (Next Steps)
- Update all imports in `Dristi` to point to the new Astra exports using the mapping provided.
- Apply structural prop changes. This includes updating `HeritageLetter` -> `AnimatedHeroCharacter`, mapping props like `person` to `title`.
- Integrate the JSON map into your automated codemod tasks if applicable.

## 3. Maintenance & Support
- Astra team will maintain the base structural and theme-token stability going forward.
- If additional variants or feature sets are required on these base components, please submit an issue to Astra.
