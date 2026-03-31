# Integration Workflow Summary

The Dristi UI component promotion is now complete on the Astra side. To complete the migration in Dristi, follow these steps:

1. **Pull Latest Astra:** Update your `astra` dependency to the latest commit.
2. **Review the Mapping Guide:** Check `Mapping-Dristi.md` to understand what old components map to which new ones.
3. **Execute Codemods:** Use `mapping-report.dristi.json` to script the renaming of your imports across your repository.
4. **Manual Prop Adjustment:**
    - `HeritageLetter` usage must update `person` to `title` and `value` to `subtitle`.
    - `SegmentCard` usage must update `targetAudience` to `tags`.
    - `PersonaCard` usage must update `ageGroup` to `primaryBadge` and `contentScope` to `secondaryMetadata`.
    - `TimelineNode` usage must update `isEducation` to `alignRight`, `ageGroup`/`genres` to `tags` and `track` to `category`.
    - `FlowVisualizer` usage must update `FlowSection` typed props to `WorkflowPhase`.
5. **Update ThemeToggle**: Point your ThemeToggle imports directly to `import { ThemeToggle } from 'astra/theme'`.
6. **Deploy & Validate:** Run a visual regression check on Dristi to ensure stylistic continuity.
