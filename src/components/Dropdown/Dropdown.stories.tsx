import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";
import { string } from "prop-types";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const FirstStory: Story = {
  args: {},
};
