import React from "react";
import { FC, useState } from "react";
import "./Details.css";
import { headingExample, textExapmle } from "../../helpers/constatns";

export interface DetailsProps {
  title?: string;
  text?: string;
  children?: React.ReactNode | null;
}

export const Details: FC<DetailsProps> = ({
  title = headingExample,
  text = "",
  children,
}) => {
  const [details, setDetails] = useState(false);

  return (
    <details data-testid="details">
      <summary onClick={() => setDetails(true)}>{title}</summary>
      {details && <div>{text || children}</div>}
    </details>
  );
};
