# npm release

The intended package is `@nikhilvijayakumar/astra`. Confirm scope access, package availability and rights to license all included material before publication. The first publication needs an authenticated npm account; public package versions cannot be overwritten. Verify the archive and a clean consumer before publishing.

After initial publication, configure npm trusted publishing for GitHub owner `NikhilVijayakumar`, repository `astra`, workflow `publish.yml` and environment `npm`. Leave direct `npm publish` and `npm dist-tag` permissions disabled; staged publishing is allowed by default. Configure the GitHub `npm` environment according to repository policy. A new trusted publisher expires unless its first successful publish validates it within two days. See [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/).

Merge a reviewed version and matching lockfile into the default branch, then create and push the matching `v<version>` tag. The workflow checks the tag, installs, lints, tests, builds and stages the package using OIDC and npm 11.15.0. A successful job does not publish the version. Review it in npm's Staged Packages tab (or use `npm stage list`, `npm stage view <stage-id>`, and `npm stage download <stage-id>`). Approve on npm or with `npm stage approve <stage-id>` using 2FA. Verify the registry version and test a clean consumer after approval. Do not assume a workflow succeeded without checking.

Consumers can change imports to `@nikhilvijayakumar/astra`, or retain `astra` with `npm install astra@npm:@nikhilvijayakumar/astra`; commit the consumer lockfile.
