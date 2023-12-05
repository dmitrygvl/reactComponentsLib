import React, { FC } from "react";
import "./Paragraph.css";
import { textExapmle } from "../../helpers/constatns";

export enum ParagraphStyles {
  Regular = "regular",
  Quote = "quote",
  Bold = "bold",
}

export interface Props {
  fontStyle?: ParagraphStyles;
  children?: React.ReactNode;
  text?: string;
}

export const Paragraph: FC<Props> = ({ children, fontStyle, text }) => {
  return <p className={fontStyle}>{text || children}</p>;
};
