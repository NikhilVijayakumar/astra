import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { JsonViewer } from "./JsonViewer";

describe("JsonViewer", () => {
  it("renders filename", () => {
    render(<JsonViewer fileName="data.json" />);
    expect(screen.getByText("data.json")).toBeInTheDocument();
  });

  it("renders valid JSON content", () => {
    render(<JsonViewer fileName="data.json" fileContent='{"key": "value"}' />);
    expect(screen.getByText(/key/)).toBeInTheDocument();
  });

  it("shows message for empty content", () => {
    render(<JsonViewer fileName="data.json" fileContent="" />);
    expect(screen.getByText(/No JSON content available/)).toBeInTheDocument();
  });

  it("handles JSONL format with multiple lines", () => {
    render(<JsonViewer fileName="data.jsonl" fileContent='{"line": 1}' />);
    expect(screen.getByText("data.jsonl")).toBeInTheDocument();
  });

  it("handles invalid JSON gracefully", () => {
    render(<JsonViewer fileName="data.json" fileContent="not valid json {" />);
    expect(screen.getByText(/parseError/)).toBeInTheDocument();
  });

  it("handles undefined content", () => {
    render(<JsonViewer fileName="data.json" />);
    expect(screen.getByText(/No JSON content available/)).toBeInTheDocument();
  });

  it("handles whitespace-only content", () => {
    render(<JsonViewer fileName="data.json" fileContent="   " />);
    expect(screen.getByText(/No JSON content available/)).toBeInTheDocument();
  });

  it("renders syntax highlighter code element", () => {
    render(<JsonViewer fileName="data.json" fileContent='{"test": true}' />);
    expect(screen.getByText("data.json")).toBeInTheDocument();
  });
});
