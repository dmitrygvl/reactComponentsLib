import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";
import { headingExample } from "../../helpers/constatns";

export default {
  title: "Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  level: 1,
  title: headingExample,
};
