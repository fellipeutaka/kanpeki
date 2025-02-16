import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "~/components/ui/accordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Accordion",
  component: (props) => (
    <Accordion.Root className="w-96" {...props}>
      <Accordion.Item>
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isDisabled: { control: "boolean" },
    allowsMultipleExpanded: { control: "boolean" },
  },
  args: {
    isDisabled: false,
    allowsMultipleExpanded: false,
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
