import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FileViewerRouter } from "./FileViewerRouter";

vi.mock("./CsvViewer", () => ({
  CsvViewer: () => <div data-testid="csv-viewer">CSV</div>,
}));

vi.mock("./MdViewer", () => ({
  MdViewer: () => <div data-testid="md-viewer">MD</div>,
}));

vi.mock("./ImageViewer", () => ({
  ImageViewer: () => <div data-testid="image-viewer">Image</div>,
}));

vi.mock("./JsonViewer", () => ({
  JsonViewer: () => <div data-testid="json-viewer">JSON</div>,
}));

describe("FileViewerRouter", () => {
  it("renders CsvViewer for .csv files", () => {
    render(<FileViewerRouter fileName="data.csv" />);
    expect(screen.getByTestId("csv-viewer")).toBeInTheDocument();
  });

  it("renders JsonViewer for .json files", () => {
    render(<FileViewerRouter fileName="data.json" />);
    expect(screen.getByTestId("json-viewer")).toBeInTheDocument();
  });

  it("renders JsonViewer for .jsonl files", () => {
    render(<FileViewerRouter fileName="data.jsonl" />);
    expect(screen.getByTestId("json-viewer")).toBeInTheDocument();
  });

  it("renders MdViewer for .md files", () => {
    render(<FileViewerRouter fileName="readme.md" />);
    expect(screen.getByTestId("md-viewer")).toBeInTheDocument();
  });

  it("renders MdViewer for .markdown files", () => {
    render(<FileViewerRouter fileName="readme.markdown" />);
    expect(screen.getByTestId("md-viewer")).toBeInTheDocument();
  });

  it("renders MdViewer for .txt files", () => {
    render(<FileViewerRouter fileName="notes.txt" />);
    expect(screen.getByTestId("md-viewer")).toBeInTheDocument();
  });

  it("renders ImageViewer for .jpg files", () => {
    render(<FileViewerRouter fileName="photo.jpg" />);
    expect(screen.getByTestId("image-viewer")).toBeInTheDocument();
  });

  it("renders ImageViewer for .png files", () => {
    render(<FileViewerRouter fileName="photo.png" />);
    expect(screen.getByTestId("image-viewer")).toBeInTheDocument();
  });

  it("renders unsupported message for unknown extensions", () => {
    render(<FileViewerRouter fileName="file.exe" />);
    expect(screen.getByText("Binary / Unsupported File")).toBeInTheDocument();
  });

  it("handles uppercase extension", () => {
    render(<FileViewerRouter fileName="data.CSV" />);
    expect(screen.getByTestId("csv-viewer")).toBeInTheDocument();
  });
});
