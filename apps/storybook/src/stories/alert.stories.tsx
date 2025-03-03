import type { Meta, StoryObj } from "@storybook/react";
import { Alert, type AlertRootProps } from "~/components/ui/alert";
import { Icons } from "~/components/ui/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Alert",
  component: Alert.Root,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "warning",
        "danger",
      ] satisfies AlertRootProps["variant"][],
    },
    children: {
      control: { disable: true },
    },
    className: {
      control: { disable: true },
    },
  },
  args: {
    variant: "default",
    className: "w-lg",
  },
} satisfies Meta<typeof Alert.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: [
      <Icons.Rocket className="size-4" key="icon" />,
      <Alert.Title key="title">Heads up!</Alert.Title>,
      <Alert.Description key="description">
        You can add components to your app using the cli.
      </Alert.Description>,
    ],
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: [
      <Icons.TriangleAlert className="size-4" key="icon" />,
      <Alert.Title key="title">Warning</Alert.Title>,
      <Alert.Description key="description">
        Your session will expire in 5 minutes. Please save your work.
      </Alert.Description>,
    ],
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: [
      <Icons.Ban className="size-4" key="icon" />,
      <Alert.Title key="title">Error</Alert.Title>,
      <Alert.Description key="description">
        Your session has expired. Please log in again.
      </Alert.Description>,
    ],
  },
};
