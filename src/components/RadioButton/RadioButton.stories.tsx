import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "./RadioButton";
import { string } from "prop-types";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const FirstStory: Story = {
  args: {},
};
