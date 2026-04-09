import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CsvViewer } from "./CsvViewer";

describe("CsvViewer", () => {
  it("renders filename", () => {
    render(<CsvViewer fileName="data.csv" />);
    expect(screen.getByText("data.csv")).toBeInTheDocument();
  });

  it("renders headers from CSV content", () => {
    render(<CsvViewer fileName="data.csv" fileContent="Name,Age,City" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("City")).toBeInTheDocument();
  });

  it("shows message for empty content", () => {
    render(<CsvViewer fileName="data.csv" fileContent="" />);
    expect(
      screen.getByText("No CSV content available for preview."),
    ).toBeInTheDocument();
  });

  it("shows message for undefined content", () => {
    render(<CsvViewer fileName="data.csv" />);
    expect(
      screen.getByText("No CSV content available for preview."),
    ).toBeInTheDocument();
  });

  it("renders table element", () => {
    render(<CsvViewer fileName="data.csv" fileContent="Name,Age\nJohn,30" />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders pagination", () => {
    render(<CsvViewer fileName="data.csv" fileContent="Name,Age\nJohn,30" />);
    expect(screen.getByText(/Rows per page:/i)).toBeInTheDocument();
  });
});
