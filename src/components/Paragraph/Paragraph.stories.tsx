import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from "./Paragraph";
import { ParagraphStyles } from "./Paragraph";

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
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id esse molestias facere fuga aut, voluptas commodi nam distinctio natus dolore ad laboriosam quidem ab impedit neque laudantium harum ea soluta saepe quia veritatis? Sapiente quas harum nulla inventore aliquid? Magni ullam obcaecati laboriosam deleniti ut! Sed reprehenderit architecto, aut porro voluptatem est quia voluptatibus corrupti deleniti illo numquam cum sequi consectetur asperiores dignissimos! Iste corrupti minima vitae ullam molestiae, rerum quasi fugiat dolorum similique corporis nesciunt minus assumenda, repellendus, nulla ea velit tempora alias eligendi voluptatem blanditiis! Est molestiae magnam veniam ducimus et ipsa eveniet assumenda laudantium praesentium modi!",
};

export const Bold = Template.bind({});
Bold.args = {
  fontStyle: ParagraphStyles.Bold,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id esse molestias facere fuga aut, voluptas commodi nam distinctio natus dolore ad laboriosam quidem ab impedit neque laudantium harum ea soluta saepe quia veritatis? Sapiente quas harum nulla inventore aliquid? Magni ullam obcaecati laboriosam deleniti ut! Sed reprehenderit architecto, aut porro voluptatem est quia voluptatibus corrupti deleniti illo numquam cum sequi consectetur asperiores dignissimos! Iste corrupti minima vitae ullam molestiae, rerum quasi fugiat dolorum similique corporis nesciunt minus assumenda, repellendus, nulla ea velit tempora alias eligendi voluptatem blanditiis! Est molestiae magnam veniam ducimus et ipsa eveniet assumenda laudantium praesentium modi!",
};
