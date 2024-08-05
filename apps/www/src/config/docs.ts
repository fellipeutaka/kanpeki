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
        {
          title: "Dark Mode",
          href: "/docs/dark-mode",
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
          title: "Breadcrumb",
          href: "/docs/components/breadcrumb",
          disabled: true,
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
          disabled: true,
        },
        {
          title: "Table",
          href: "/docs/components/table",
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          disabled: true,
        },
        {
          title: "TextArea",
          href: "/docs/components/text-area",
        },
        {
          title: "TextField",
          href: "/docs/components/text-field",
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
  label?: string;
};
