import React, { FC } from "react";
import "./HorizontalLine.css";

export enum LineType {
  Solid = "solid-line",
  Double = "double-line",
  Dashed = "dashed-line",
}

export interface HorizontalLineProps {
  lineType?: LineType;
}

const defaultProps: HorizontalLineProps = {
  lineType: LineType.Solid,
};

export const HorizontalLine: FC<HorizontalLineProps> = ({ lineType }) => {
  return <hr className={lineType} data-testid="hr" />;
};

HorizontalLine.defaultProps = defaultProps;
