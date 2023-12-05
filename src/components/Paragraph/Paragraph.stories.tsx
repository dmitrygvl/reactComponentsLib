import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph, ParagraphStyles } from "./Paragraph";
import { textExapmle } from "../../helpers/constatns";

export default {
  title: "Paragraph",
  component: Paragraph,
  argTypes: {
    text: {
      type: {
        name: "string",
      },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});

export const Quote = Template.bind({});
Quote.args = {
  fontStyle: ParagraphStyles.Quote,
  text: textExapmle,
};

export const Bold = Template.bind({});
Bold.args = {
  fontStyle: ParagraphStyles.Bold,
  text: textExapmle,
};
