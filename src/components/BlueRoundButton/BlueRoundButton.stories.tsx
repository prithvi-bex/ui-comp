import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BlueRoundButton from "./BlueRoundButton";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof BlueRoundButton> = {
  title: "Components/BlueRoundButton",
  component: BlueRoundButton,
  argTypes: {
  },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof BlueRoundButton>;

export const Primary: Story = {
  args: {
    label: "Primary 😃",
  },
};


