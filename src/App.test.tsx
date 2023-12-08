// App.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders the main heading", () => {
    render(<App />);
    const headingElement = screen.getByText("React Component Library");
    expect(headingElement).toBeInTheDocument();
  });

  it("simulates click on all Details components", () => {
    render(<App />);
    const detailsComponents = screen.getAllByTestId("details");

    detailsComponents.forEach((component) => {
      fireEvent.click(component);
    });
  });

  it("renders horizontal lines, headings, details, paragraphs, and images", () => {
    render(<App />);

    const horizontalLines = screen.getAllByTestId("hr");
    const headings = screen.getAllByTestId("heading");
    const details = screen.getAllByTestId("details");

    expect(horizontalLines.length).toBe(5);
    expect(headings.length).toBe(1);
    expect(details.length).toBe(4);
  });
});
