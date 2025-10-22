import type { Meta, StoryObj } from "@storybook/react";
import { Alert, type AlertRootProps } from "~/components/ui/alert";
import { Icons } from "~/components/ui/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  args: {
    className: "w-lg",
    variant: "default",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
    variant: {
      control: "select",
      options: [
        "default",
        "warning",
        "danger",
      ] satisfies AlertRootProps["variant"][],
    },
  },
  component: Alert.Root,
  title: "Components/Alert",
} satisfies Meta<typeof Alert.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: [
      <Icons.Rocket className="size-4" key="icon" />,
      <Alert.Title key="title">Heads up!</Alert.Title>,
      <Alert.Description key="description">
        You can add components to your app using the cli.
      </Alert.Description>,
    ],
    variant: "default",
  },
};

export const Warning: Story = {
  args: {
    children: [
      <Icons.TriangleAlert className="size-4" key="icon" />,
      <Alert.Title key="title">Warning</Alert.Title>,
      <Alert.Description key="description">
        Your session will expire in 5 minutes. Please save your work.
      </Alert.Description>,
    ],
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: [
      <Icons.Ban className="size-4" key="icon" />,
      <Alert.Title key="title">Error</Alert.Title>,
      <Alert.Description key="description">
        Your session has expired. Please log in again.
      </Alert.Description>,
    ],
    variant: "danger",
  },
};
