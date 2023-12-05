import React, { FC } from "react";
import { LineType, HorizontalLineProps } from "../../types/types";
import "./HorizontalLine.css";

const defaultProps: HorizontalLineProps = {
  lineType: LineType.Solid,
};

export const HorizontalLine: FC<HorizontalLineProps> = ({ lineType }) => {
  return <hr className={lineType} data-testid="hr" />;
};

HorizontalLine.defaultProps = defaultProps;
