export const mainNav = [
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Components",
    href: "/docs/components",
  },
] as const satisfies {
  title: string;
  href: string;
}[];

export const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Alert",
        href: "/docs/components/alert",
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
      },
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "Card",
        href: "/docs/components/card",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Command",
        href: "/docs/components/command",
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        title: "Label",
        href: "/docs/components/label",
      },
      {
        title: "Scroll Area",
        href: "/docs/components/scroll-area",
      },
      {
        title: "Separator",
        href: "/docs/components/separator",
      },
      {
        title: "Skeleton",
        href: "/docs/components/skeleton",
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
      },
      {
        title: "Table",
        href: "/docs/components/table",
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
      },
      {
        title: "TextArea",
        href: "/docs/components/textarea",
      },
      {
        title: "TextField",
        href: "/docs/components/toast",
      },
    ],
  },
] as const satisfies SidebarNav;

export type SidebarNav = {
  title: string;
  items: {
    title: string;
    href: string;
    label?: string;
  }[];
}[];
