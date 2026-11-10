---
type: Concept
title: "HTTP and IPC transports"
description: "Draft overview of http and ipc transports."
status: draft
generated: { by: openai/codex, at: "2026-10-30T00:00:00Z" }
sources:
  - id: source-1
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/architecture/core/repository.md
  - id: source-2
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature/repository.md
  - id: source-3
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature/ipc-service.md
  - id: source-4
    resource: https://github.com/NikhilVijayakumar/astra/blob/4a4579e064e2ee1240ba897c1db52e72ba5ad591/docs/raw/feature-technical/repository.md
---

# HTTP and IPC transports

ApiService wraps Axios operations in ServerResponse objects, mapping response errors to their status, network failures to 0 and unexpected errors to 500. Its optional error callback can itself throw. getApiService caches by base URL, so later configuration for the same URL is not applied. IpcService wraps invoke results, exposes fire-and-forget send and a receive unsubscribe; the Electron preload bridge is consumer infrastructure. Verify bridge error and callback behavior for the specific runtime.

## Responses and transport limitations

ServerResponse.success sets success flags, status, message and data; ServerResponse.error sets error flags, status and message. getStatusMessage maps known status codes to literal keys; an unknown status returns an empty string, whereas a missing matching key can produce undefined at runtime. HTTP methods construct URLs with base URL, a slash and the supplied path without normalization. The first configuration for a cached base URL wins.

HTTP request options are spread into the Axios configuration before the service sets its URL and method, so those two fields cannot be overridden by per-request options. POST and PUT also set their data argument after spreading options.

IPC invoke passes through a ServerResponse instance and wraps other returned values as success with status 200. An object merely shaped like a response is not necessarily an instance after crossing an Electron context bridge; verify serialization before assuming error flags survive. Send suppresses exceptions. Receive returns the bridge unsubscribe function, or a no-op if the bridge is absent in a browser window; consumer callbacks and receive registration exceptions are not suppressed. Access without a window has different behavior and is not a server-side rendering guarantee.
