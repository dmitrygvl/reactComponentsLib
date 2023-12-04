import React, { FC } from "react";
import { HeaderProps, Levels } from "../../types/types";

// export interface Props {
//   level?: Levels;
//   title?: string;
// }

// const defaultProps: Props = {
//   level: "1",
//   title: "Heading",
// };

// export const Heading: FC<Props> = ({ level, title }) => {
//   const HeadingTag = h${level} as keyof JSX.IntrinsicElements; // определяем тип тега h1-h6

//   return <HeadingTag>{title}</HeadingTag>;
// };

// export interface Props {
//   level?: Levels;
//   title?: string;
// }

// const defaultProps: Props = {
//   level: "1",
//   title: "Heading",
// };

// export const Heading: FC<Props> = ({ level, title }) => {
//   switch (level) {
//     case "1":
//       return <h1>{title}</h1>;
//     case "2":
//       return <h2>{title}</h2>;
//     case "3":
//       return <h3>{title}</h3>;
//     case "4":
//       return <h4>{title}</h4>;
//     case "5":
//       return <h5>{title}</h5>;
//   }
//   return <h6>{title}</h6>;
// };

// Heading.defaultProps = defaultProps;

export const Heading: FC<HeaderProps> = ({ level, text}) => {
  return (
    <header>
      
    </header>
  )
}