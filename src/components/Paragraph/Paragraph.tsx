import React, { FC } from "react";
import "./Paragraph.css";

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

const defaultProps: Props = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id esse molestias facere fuga aut, voluptas commodi nam distinctio natus dolore ad laboriosam quidem ab impedit neque laudantium harum ea soluta saepe quia veritatis? Sapiente quas harum nulla inventore aliquid? Magni ullam obcaecati laboriosam deleniti ut! Sed reprehenderit architecto, aut porro voluptatem est quia voluptatibus corrupti deleniti illo numquam cum sequi consectetur asperiores dignissimos! Iste corrupti minima vitae ullam molestiae, rerum quasi fugiat dolorum similique corporis nesciunt minus assumenda, repellendus, nulla ea velit tempora alias eligendi voluptatem blanditiis! Est molestiae magnam veniam ducimus et ipsa eveniet assumenda laudantium praesentium modi!`,
  fontStyle: ParagraphStyles.Regular,
};

export const Paragraph: FC<Props> = ({ children, fontStyle, text }) => {
  return <p className={fontStyle}>{text || children}</p>;
};

Paragraph.defaultProps = defaultProps;
