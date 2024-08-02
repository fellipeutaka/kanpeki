import type { Icons } from "@kanpeki/ui/icons";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs/introduction",
    },
    {
      title: "Components",
      href: "/docs/components",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Installation",
          href: "/docs/installation",
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
          disabled: true,
        },
        {
          title: "Command",
          href: "/docs/components/command",
          disabled: true,
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          disabled: true,
        },
        {
          title: "Label",
          href: "/docs/components/label",
          disabled: true,
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          disabled: true,
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          disabled: true,
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          disabled: true,
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          disabled: true,
        },
        {
          title: "Table",
          href: "/docs/components/table",
          disabled: true,
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          disabled: true,
        },
        {
          title: "TextArea",
          href: "/docs/components/textarea",
          disabled: true,
        },
        {
          title: "TextField",
          href: "/docs/components/toast",
          disabled: true,
        },
      ],
    },
  ],
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type NavLink = {
  title: string;
  href: string;
  disabled?: boolean;
};
