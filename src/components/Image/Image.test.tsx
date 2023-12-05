import React from "react";
import { render } from "@testing-library/react";
import { Image, Float, penguins, monkey } from "./Image";

describe("Image", () => {
  it("renders image with the correct attributes", () => {
    const altText = "A penguin";
    const { getByAltText, getByText } = render(
      <Image
        src={penguins}
        alt={altText}
        float={Float.Right}
        text="Cute penguin"
      />,
    );

    const imageElement = getByAltText(altText);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", penguins);

    const textElement = getByText("Cute penguin");
    expect(textElement).toBeInTheDocument();
  });

  it("renders image without text", () => {
    const altText = "A monkey";
    const { queryByText } = render(
      <Image src={monkey} alt={altText} float={Float.Left} />,
    );

    const textElement = queryByText("Cute penguin");
    expect(textElement).toBeNull();
  });
});
