import React from "react";
import { render } from "@testing-library/react";
import { Paragraph, ParagraphStyles } from "./Paragraph";

describe("Paragraph component", () => {
  test("renders paragraph with regular style", () => {
    const { getByText } = render(
      <Paragraph fontStyle={ParagraphStyles.Regular}>Hello, World!</Paragraph>,
    );
    const paragraphElement = getByText("Hello, World!");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveClass("regular");
  });

  test("renders paragraph with bold style and custom text", () => {
    const { getByText } = render(
      <Paragraph
        fontStyle={ParagraphStyles.Bold}
        text="This is a bold paragraph"
      />,
    );
    const paragraphElement = getByText("This is a bold paragraph");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveClass("bold");
  });
});
