# ASTRA Export Surface Gap (2026-03-25)

## Scope
- Dependency under validation: installed Git dependency `node_modules/astra`
- Validation method: DHI web typecheck during `npm run build`

## Finding

### Missing exports required by downstream app integration
Severity: High

Evidence:
- `node_modules/astra/dist/lib.d.ts` only re-exports `./common`, `./components`, and `./theme`
- DHI build fails with `TS2305` for these imports from `astra`:
  - `useOnboardingActionGate`
  - `OnboardingActionGate`
  - `useLifecycle`
  - `DynamicProfileRenderer`
  - `LifecycleGlobalSkill`
  - `LifecycleProfileDraft`
  - `getEmployeeAvatarPath`
  - `SkillEntry`
  - `SkillRepo`

Impact:
- Current Astra package surface is behind the APIs expected by the DHI app.
- Downstream apps cannot typecheck successfully against the installed dependency without a compatibility layer or an Astra release that restores/exports these symbols.

## Expected Upstream Remediation
- Publish or update Astra with the missing compatibility exports, or
- explicitly remove those symbols from downstream usage contracts and document the migration path.
