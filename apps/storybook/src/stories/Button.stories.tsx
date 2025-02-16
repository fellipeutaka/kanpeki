import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, type ButtonProps } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { Spinner } from "~/components/ui/spinner";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isDisabled: { control: "boolean" },
    isPending: { control: "boolean" },
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
    size: {
      control: "select",
      options: ["default", "lg", "sm", "icon"] satisfies ButtonProps["size"][],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onPress: fn(),
    isDisabled: false,
    isPending: false,
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <Icons.ChevronRight className="size-4" />,
  },
  argTypes: {
    children: { control: { disable: true } },
  },
};

export const Disabled: Story = {
  args: {
    variant: "secondary",
    isDisabled: true,
    children: "Button",
  },
};

export const Pending: Story = {
  args: {
    variant: "default",
    isPending: true,
    children: [<Spinner key="spinner" className="mr-2" />, "Please wait"],
  },
  argTypes: {
    children: { control: { disable: true } },
  },
};
