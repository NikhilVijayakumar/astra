# FileViewerRouter

Automatically selects and renders the correct file viewer based on file extension.

## Overview

A smart routing component that inspects the file extension and delegates rendering to the appropriate specialized viewer: CSV files go to the CSV viewer, Markdown and text files to the Markdown viewer, images to the image viewer, and JSON/JSONL to the JSON viewer. Unknown file types show an unsupported file message.

## Responsibilities

- Route to the correct viewer component based on file extension
- Support CSV, Markdown, text, image, and JSON/JSONL file types
- Display an unsupported file message for unknown extensions
- Pass encoding and MIME type metadata through to the image viewer

## Non-Responsibilities

- Does not load file content from disk or network
- Does not transform or convert file formats
- Does not validate file integrity or encoding
- Does not handle streaming or partial content

## Core Concepts

- **Router/dispatcher pattern:** Maps file extensions to sub-viewer components — a central decision point that coordinates which viewer renders based on file type metadata.
- **Delegation to sub-viewers:** Each file type routes to a dedicated viewer — the router itself has no rendering logic beyond the fallback unsupported state.
- **Extension-based routing logic:** The file extension is extracted from the file name — this is a metadata-level decision that doesn't require reading file content, enabling early routing.
- **Metadata pass-through:** Encoding and MIME type are forwarded only to the image viewer; other viewers ignore them.

## States

- **Idle** — Recognized file extension with content; delegates to appropriate sub-viewer
- **Unsupported** — File extension does not match any known viewer; renders unsupported file message
- **Empty** — No content provided; passes undefined to sub-viewer (each handles it independently)

## Edge Cases

- No file extension: Falls through to unsupported file case
- File name without extension (e.g., "Makefile"): Falls through to unsupported
- Unknown or unsupported extension: Renders unsupported file fallback with the extension displayed
- No content provided: Delegates to sub-viewer; each handles missing content independently
- Encoding and MIME type only passed through to image viewer; other viewers ignore them

## Error Conditions

- Unknown extension — Renders unsupported file fallback
- Missing content — Delegated to sub-viewer
- Sub-viewer crash — No error boundary; error propagates to parent

## Future Enhancements

- Additional file types (PDF, XML, YAML, log files)
- Drag-and-drop file loading for inline previews
- Fallback text-viewer mode for unknown text-based files
- Custom viewer registration via a plugin or mapping prop

## Open Questions

- How should binary files larger than 50 MB be handled?
- Should accessibility announcements differ per sub-viewer?
