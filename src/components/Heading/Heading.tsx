import React, { FC } from "react";
import "./Heading.css";
export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
}

export const Heading: FC<HeadingProps> = ({ level, title }) => {
  const Tag = `h${level}` as `h${typeof level}`;

  return (
    <>
      <div className="heading">
        <Tag>{title}</Tag>
      </div>
    </>
  );
};
