import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";
import { string } from "prop-types";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const FirstStory: Story = {
  args: {
    text: "Hover Over me",
  },
};
