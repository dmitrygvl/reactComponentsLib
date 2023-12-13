import React from "react";
import { render, screen } from "@testing-library/react";
import { HorizontalLine, LineType } from "./HorizontalLine";

const getLine = () => screen.getByTestId("hr");

describe("HorizontalLine component", () => {
  it("renders dashed horizontal line with solid-line type", () => {
    const solidType = LineType.Solid;
    const { getByTestId } = render(<HorizontalLine lineType={solidType} />);
    const hrElement = getByTestId("hr");
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).toHaveClass(solidType);
  });

  it("renders dashed horizontal line with double-line type", () => {
    const doubleType = LineType.Double;
    const { getByTestId } = render(<HorizontalLine lineType={doubleType} />);
    const hrElement = getByTestId("hr");
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).toHaveClass(doubleType);
  });
  it("renders dashed horizontal line with dashed-line type", () => {
    const dashedType = LineType.Dashed;
    const { getByTestId } = render(<HorizontalLine lineType={dashedType} />);
    const hrElement = getByTestId("hr");
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).toHaveClass(dashedType);
  });
});
