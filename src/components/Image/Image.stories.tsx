import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageProps, Image, Float, penguins, monkey, cat } from "./Image";
import { textExapmle } from "../../helpers/constatns";

export default {
  title: "Image",
  component: Image,
  argTypes: {
    float: {
      defaultValue: Float.None,
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: penguins,
  alt: "Picture with penguins",
  float: Float.Left,
  text: textExapmle,
};

export const Secondary = Template.bind({});
Secondary.args = {
  src: monkey,
  alt: "Picture with monkey",
  float: Float.Right,
  text: textExapmle,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  src: cat,
  alt: "Picture with cat",
  float: Float.None,
  text: textExapmle,
};
