import React, { FC } from "react";
import "./Image.css";
import penguins from "../../assets/img/penguins.png";
import monkey from "../../assets/img/monkey.png";
import cat from "../../assets/img/cat.png";
import { textExapmle } from "../../helpers/constatns";

export { penguins, monkey, cat };

export enum Float {
  Left = "float-left",
  Right = "float-right",
  None = "None",
}

export interface ImageProps {
  alt?: string;
  src?: string;
  float?: Float;
  text?: string;
}

export const Image: FC<ImageProps> = ({
  alt = "Picture with penguins",
  src = penguins,
  float = Float.None,
  text = textExapmle,
}) => {
  return (
    <div data-testid="image">
      <img src={src} alt={alt} className={"image " + float} />
      <p>{text}</p>
    </div>
  );
};
