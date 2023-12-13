import React, { FC } from "react";
import "./Heading.css";
import { headingExample } from "../../helpers/constatns";
export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title?: string;
}

export const Heading: FC<HeadingProps> = ({
  level = 1,
  title = headingExample,
}) => {
  const Tag = `h${level}` as `h${typeof level}`;

  return (
    <>
      <div data-testid="heading" className="heading">
        <Tag>{title}</Tag>
      </div>
    </>
  );
};
