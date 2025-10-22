import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, type ButtonProps } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { Spinner } from "~/components/ui/spinner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    isDisabled: false,
    isPending: false,
    onPress: fn(),
    size: "default",
    variant: "default",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isDisabled: { control: "boolean" },
    isPending: { control: "boolean" },
    size: {
      control: "select",
      options: ["default", "lg", "sm", "icon"] satisfies ButtonProps["size"][],
    },
    variant: {
      control: "select",
      options: [
        "default",
        "success",
        "warning",
        "danger",
        "outline",
        "secondary",
        "ghost",
        "link",
        "unset",
      ] satisfies ButtonProps["variant"][],
    },
  },
  component: Button,
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Icon: Story = {
  args: {
    children: <Icons.ChevronRight className="size-4" />,
    size: "icon",
  },
  argTypes: {
    children: { control: { disable: true } },
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    isDisabled: true,
    variant: "secondary",
  },
};

export const Pending: Story = {
  args: {
    children: [<Spinner className="mr-2" key="spinner" />, "Please wait"],
    isPending: true,
    variant: "default",
  },
  argTypes: {
    children: { control: { disable: true } },
  },
};
