# OpenSpec for Astra

Install the OpenSpec CLI separately. Create a change with `openspec new change "fe-<short-name>" --schema frontend`, inspect dependencies with `openspec status --change "fe-<short-name>"`, and validate with `openspec validate "fe-<short-name>"`. Check `openspec --help` for your installed version. Validate schema changes with `openspec schema validate frontend`.

The frontend schema includes a UI contract; explain when it does not apply. Change artifacts live in `changes/` and durable specifications in `specs/`. Start with relevant Astra knowledge and check documented claims against current code. The CLI is not bundled.
