// import React from "react";
// import { Component } from "react";

// export class Heading extends Component {
//   render() {
//     return <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fuga.</h1>;
//   }
// }

import React, { FC } from "react";
import { LineType, HorizontalLineProps } from "../../types/types";
import "./HorizontalLine.css";

const defaultProps: HorizontalLineProps = {
  lineType: LineType.Solid,
};

// export class HorizontalLine extends Component<Props> {
//   static defaultProps = defaultProps;

//   render() {
//     const { lineType } = this.props;
//     return <hr className={lineType} data-testid="hr" />;
//   }
// }

export const HorizontalLine: FC<HorizontalLineProps> = ({ lineType }) => {
  return <hr className={lineType} data-testid="hr" />;
};

HorizontalLine.defaultProps = defaultProps;
