import React, { FC } from "react";
import "./Image.css";

import penguins from "../../assets/img/penguins.png";
import monkey from "../../assets/img/monkey.png";
import cat from "../../assets/img/cat.png";

export { penguins, monkey, cat };

export enum Float {
  Left = "float-left",
  Right = "float-right",
  None = "",
}

export interface ImageProps {
  alt?: string;
  src?: string;
  float?: Float;
  text?: string;
}

// const defaultProps: ImageProps = {
//   float: Float.None,
//   src: penguins || monkey || cat,
//   alt: "There should be a picture here",
// };

export const Image: FC<ImageProps> = ({ alt, src, float, text }) => {
  return (
    <>
      <img src={src} alt={alt} className={"image " + float} />
      <p>{text}</p>
    </>
  );
};