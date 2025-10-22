import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "~/components/ui/accordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  args: {
    allowsMultipleExpanded: false,
    className: "w-96",
    isDisabled: false,
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    allowsMultipleExpanded: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
  component: Accordion.Root,
  title: "Components/Accordion",
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: [
      <Accordion.Item key="1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>,
      <Accordion.Item key="2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </Accordion.Content>
      </Accordion.Item>,
      <Accordion.Item key="3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>,
    ],
  },
};
