import React from "react";
import { FC } from "react";
import "./Details.css";
import { headingExample, textExapmle } from "../../helpers/constatns";

export interface DetailsProps {
  title?: string;
  text?: string;
}

export const Details: FC<DetailsProps> = (title, text) => {
  return (
    <details>
      <summary>{headingExample}</summary>
      {textExapmle}
    </details>
  );
};
