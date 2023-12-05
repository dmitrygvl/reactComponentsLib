import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Details } from "./Details";
import { headingExample, textExapmle } from "../../helpers/constatns";

export default {
  title: "React Components Lib/Details",
  component: Details,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: headingExample,
  text: textExapmle,
};
