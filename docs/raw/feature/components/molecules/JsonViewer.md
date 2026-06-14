# JsonViewer

Displays JSON data with syntax highlighting and handles JSONL line-by-line.

## Overview

A specialized viewer for JSON and JSONL files. Parses JSON content and renders it with syntax highlighting in a dark code theme. Handles invalid JSON gracefully by showing a structured error object alongside the raw content. JSONL files are parsed line-by-line, so a single malformed line doesn't break the entire file.

## Responsibilities

- Render JSON data with syntax highlighting
- Format JSON with proper indentation and monospace font
- Parse JSONL files line-by-line, handling each line independently
- Show a structured error state for invalid JSON with raw content fallback

## Non-Responsibilities

- Does not load file content from disk or network
- Does not validate JSON schema or structure
- Does not provide search, filter, or tree-view navigation
- Does not support editing or saving JSON content
- Does not handle binary or non-UTF-8 encoded content

## Core Concepts

- **Parse-and-render pipeline:** Raw JSON string is parsed into structured data, then syntax-highlighted into styled HTML — errors in parsing produce a structured error object rather than crashing.
- **Graceful error recovery:** Invalid JSON produces a structured error object showing both the error context and the raw content — the component stays mounted and usable.
- **JSONL line-by-line parsing:** Each line of a JSONL file is parsed independently; a single malformed line produces an error object for that line only, preserving valid data from other lines.
- **Lazy-loaded syntax highlighter:** The syntax highlighting library is loaded asynchronously, showing a loading fallback on first render to keep initial bundle size small.

## States

- **Loaded** — Valid JSON; syntax-highlighted formatted output displayed
- **Empty** — No content; fallback message shown
- **Error** — Invalid JSON; structured error object with raw content displayed
- **Loading** — Syntax highlighter lazily loading; loading fallback shown
- **JSONL parsing** — Lines parsed independently; each line may be in loaded or error state

## Edge Cases

- No content or empty content: Displays a fallback message as a JSON object
- Invalid JSON: Renders a structured error object with the raw content
- JSONL files: Parsed line-by-line; parse failures produce per-line error objects
- Very large JSON: Syntax highlighting may cause performance issues
- Non-object JSON values: Strings, numbers, arrays, and booleans handled normally
- Missing localization key: Uses hardcoded fallback string

## Error Conditions

- Missing required value (file name) — Required value must be provided
- Invalid JSON — Structured error object rendered with raw content fallback
- JSONL parse failures — Failed lines produce error objects in output
- Very large JSON — Performance may degrade; no virtualization
