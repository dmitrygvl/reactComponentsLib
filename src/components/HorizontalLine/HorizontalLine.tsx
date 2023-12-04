// import React from "react";
// import { Component } from "react";

// export class Heading extends Component {
//   render() {
//     return <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fuga.</h1>;
//   }
// }

import React, { Component } from "react";
import { LineType } from "../../types/types";
import "./HorizontalLine.css";

export interface Props {
  lineType?: LineType;
}

const defaultProps: Props = {
  lineType: LineType.Solid,
};

export class HorizontalLine extends Component<Props> {
  static defaultProps = defaultProps;

  render() {
    const { lineType } = this.props;
    return <hr className={lineType} data-testid="hr" />;
  }
}
