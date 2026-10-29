# Tasks

- [x] Inventory eligible raw Markdown files and exclude PR, report and prompt/template material from requirements sources.
- [x] Create draft knowledge topics and revision-pinned source references.
- [x] Record draft requirements, evidence and unresolved conflicts.
- [x] Add an Astra documentation audit skill adapted from the raw audit approach.
- [x] Record selected corresponding OpenSpec contracts and non-applicable UI design.
- [x] Validate knowledge and run focused existing tests; record limitations.

## Verification

- `python scripts/verify_knowledge.py`: passed with six concepts and no errors or warnings.
- Focused Vitest run for the hook, handler, HTTP, IPC and public exports: five files, 51 tests passed. This is not exhaustive verification of all raw claims or Gherkin scenarios.
- Source-to-topic inventory covers 38 eligible Markdown files; a file mapping does not imply claim-level completeness.
- Human decisions remain open for concurrency, lockfile policy, error callbacks and consumer obligations; see `docs/requirements/raw-inventory.md`.
