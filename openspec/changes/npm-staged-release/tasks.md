# Tasks

- [x] Record draft knowledge, requirements and nonvisual contract.
- [x] Configure package metadata, output, license, lockfile and staged workflows (ASTRA-PKG-001–002).
- [x] Document consumer migration and trusted setup (ASTRA-PKG-003).
- [x] Run verification, inspect the archive and test a clean consumer; record limitations.
- [ ] Configure npm and GitHub, stage and approve an actual release when authorized.

## Verification evidence

- Clean `npm ci`, TypeScript library check, build, and 55 tests passed. Lint passed with four existing React hook dependency warnings in examples. OKF verifier passed.
- Scoped archive contains ESM, CJS, declarations, README and license; clean local consumer resolved root and common subpaths, checked types without skipping library checks, and exercised state, response and IPC service exports. A browser smoke check rendered the state handler; the main architecture and hook behavior were covered by existing tests rather than inferred from that check.
- Registry ownership, first publication, actual GitHub workflows and trusted publisher are not verified. A staging run and npm maintainer approval are still required. Gherkin scenarios are specifications, not executed tests.
