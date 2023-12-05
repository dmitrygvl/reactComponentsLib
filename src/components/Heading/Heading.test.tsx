import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders heading with correct level and title", () => {
    const { getByText } = render(<Heading level={1} title="Hello, World!" />);
    const headingElement = getByText("Hello, World!");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H1");
  });

  it("renders heading with level 3 and different title", () => {
    const { getByText } = render(
      <Heading level={3} title="Testing React Components" />,
    );
    const headingElement = getByText("Testing React Components");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H3");
  });
});
