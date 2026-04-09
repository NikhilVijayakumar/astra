# Phase 4: Component Standards Enforcement - Context

**Gathered:** 2026-04-10
**Status:** Ready for planning

<domain>
## Phase Boundary

Audit and enforce component standards in `src/common/components/`:

1. **Theme Tokens**: All components use theme tokens (spacing, typography, colors) - no hardcoded values
2. **Stateless Components**: All data via props - no internal state that should come from parent
3. **No Hardcoded Strings**: Remove hardcoded strings (localization deferred)
4. **Exceptions**: Document in EXCEPTIONS.md with justification

</domain>

<decisions>
## Implementation Decisions

### Scope: Both Audit + Lint

- **D-01:** Comprehensive approach
- Audit existing components and fix violations
- Add lint rules to prevent future violations
- Start with atoms (smallest, foundation tier)

### Localization: Defer

- **D-02:** Localization already implemented via LanguageProvider
- Components should be stateless (data via props)
- Focus on removing hardcoded strings that exist
- i18n can be added as separate enhancement

### Exceptions: EXCEPTIONS.md

- **D-03:** Separate EXCEPTIONS.md file
- List all documented exceptions with justification
- Inline comments only for critical cases

### Priority: Atoms First

- **D-04:** Start with atoms tier
- StatusDot, SeverityBadge, LoadingState, ErrorState, EmptyState
- Then molecules, then organisms, then templates

</decisions>

<canonical_refs>

## Canonical References

### Theme System

- `src/theme/tokens/spacing.ts` - Spacing tokens
- `src/theme/tokens/typography.ts` - Typography tokens
- `src/theme/tokens/colors.ts` - Color tokens

### Localization (Existing)

- `src/common/localization/LanguageProvider.tsx` - Provider setup
- `src/common/localization/LanguageContext.tsx` - Context with translate()

### Component Structure

- `src/common/components/atoms/` - Atoms to audit first
- `src/common/components/molecules/` - Then molecules
- `src/common/components/organisms/` - Then organisms
- `src/common/components/templates/` - Finally templates

</canonical_refs>

<codebase_context>

## Atoms to Audit (5 components)

| Component     | Expected Pattern                         |
| ------------- | ---------------------------------------- |
| StatusDot     | spacing, theme colors via props          |
| SeverityBadge | spacing, theme colors via props          |
| LoadingState  | spacing, theme colors                    |
| ErrorState    | spacing, theme colors, message via props |
| EmptyState    | spacing, theme colors, message via props |

## Audit Checklist

For each component:

- [ ] Uses `spacing` token instead of hardcoded values (8, 16, 24, etc.)
- [ ] Uses `typography` token instead of hardcoded font sizes
- [ ] Uses theme colors (`theme.palette.*`) instead of hardcoded hex
- [ ] No hardcoded strings (except icons/labels that are intentional)
- [ ] Data comes from props, not internal state
- [ ] Internal state only for UI concerns (open/closed, hover, etc.)

</code_context>

<specifics>
## Specific Ideas

1. Create `EXCEPTIONS.md` listing all components with documented exceptions
2. Create ESLint/plugin to detect hardcoded values
3. Audit atoms first, then molecules, organisms, templates
4. Each component fix includes test verification

</specifics>

<deferred>
## Deferred Ideas

- Full i18n implementation (components stateless via props first)
- Storybook stories update (separate enhancement)
- Migrate all organisms (large effort, can be phased)

</deferred>

---

_Phase: 04-component-standards-enforcement_
_Context gathered: 2026-04-10_
