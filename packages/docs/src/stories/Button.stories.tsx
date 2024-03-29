import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@ignit-iu/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
