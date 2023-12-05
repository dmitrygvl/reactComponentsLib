import React from "react";
import { render, screen } from "@testing-library/react";
import { Details } from "./Details";

describe("Details component", () => {
  it("renders details with specified title and text", () => {
    const testTitle = "Test Details";
    const testText = "This is a test details component";
    render(<Details title={testTitle} text={testText} />);

    const summaryElement = screen.getByText(testTitle);
    expect(summaryElement).toBeInTheDocument();

    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
  });
});
