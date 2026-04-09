import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HeroSection } from "./HeroSection";

const mockButton = vi.fn();
vi.mock("@mui/material", async () => {
  const actual = await vi.importActual("@mui/material");
  return {
    ...actual,
    Button: vi.fn(() => <button onClick={mockButton}>Mocked Button</button>),
  };
});

describe("HeroSection", () => {
  it("renders headline", () => {
    render(<HeroSection headline="Test Headline" />);
    expect(screen.getByText("Test Headline")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<HeroSection headline="Headline" description="Test Description" />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("does not render description when not provided", () => {
    render(<HeroSection headline="Headline" />);
    expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
  });

  it("renders children when provided", () => {
    render(
      <HeroSection headline="Headline">
        <div data-testid="children">Child Content</div>
      </HeroSection>,
    );
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("does not render children when not provided", () => {
    const { container } = render(<HeroSection headline="Headline" />);
    expect(container.querySelector("[data-testid]")).not.toBeInTheDocument();
  });
});
