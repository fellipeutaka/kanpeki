import type { Icons } from "~/components/icons";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: "/docs/introduction",
      title: "Docs",
    },
    {
      href: "/docs/components",
      title: "Components",
    },
    {
      href: "/storybook",
      title: "Storybook",
    },
    {
      disabled: true,
      href: "/icons",
      title: "Icons",
    },
    {
      disabled: true,
      href: "/examples",
      title: "Examples",
    },
  ],
  sidebarNav: [
    {
      items: [
        {
          href: "/docs/introduction",
          title: "Introduction",
        },
        {
          href: "/docs/installation",
          title: "Installation",
        },
        {
          href: "/docs/dark-mode",
          title: "Dark Mode",
        },
        {
          disabled: true,
          href: "/docs/changelog",
          title: "Changelog",
        },
        {
          href: "/docs/typography",
          title: "Typography",
        },
      ],
      title: "Getting Started",
    },
    {
      items: [
        {
          href: "/docs/components/accordion",
          title: "Accordion",
        },
        {
          href: "/docs/components/alert",
          title: "Alert",
        },
        {
          href: "/docs/components/avatar",
          title: "Avatar",
        },
        {
          href: "/docs/components/badge",
          title: "Badge",
        },
        {
          href: "/docs/components/breadcrumb",
          title: "Breadcrumb",
        },
        {
          href: "/docs/components/button",
          title: "Button",
        },
        {
          href: "/docs/components/calendar",
          title: "Calendar",
        },
        {
          href: "/docs/components/card",
          title: "Card",
        },
        {
          disabled: true,
          href: "/docs/components/carousel",
          title: "Carousel",
        },
        {
          disabled: true,
          href: "/docs/components/chart",
          title: "Chart",
        },
        {
          href: "/docs/components/checkbox",
          title: "Checkbox",
        },
        {
          href: "/docs/components/collapsible",
          title: "Collapsible",
        },
        {
          disabled: true,
          href: "/docs/components/combobox",
          title: "Combobox",
        },
        {
          href: "/docs/components/command",
          title: "Command",
        },
        {
          disabled: true,
          href: "/docs/components/context-menu",
          title: "Context Menu",
        },
        {
          disabled: true,
          href: "/docs/components/data-table",
          title: "Data Table",
        },
        {
          href: "/docs/components/date-field",
          title: "Date Field",
        },
        {
          disabled: true,
          href: "/docs/components/date-picker",
          title: "Date Picker",
        },
        {
          href: "/docs/components/dialog",
          title: "Dialog",
        },
        {
          href: "/docs/components/form",
          title: "Form",
        },
        {
          href: "/docs/components/tooltip#hover-card",
          title: "Hover Card",
        },
        {
          href: "/docs/components/label",
          title: "Label",
        },
        {
          href: "/docs/components/list-box",
          title: "List Box",
        },
        {
          href: "/docs/components/menu",
          title: "Menu",
        },
        {
          disabled: true,
          href: "/docs/components/pagination",
          title: "Pagination",
        },
        {
          href: "/docs/components/popover",
          title: "Popover",
        },
        {
          disabled: true,
          href: "/docs/components/progress",
          title: "Progress",
        },
        {
          href: "/docs/components/radio-group",
          title: "Radio Group",
        },
        {
          disabled: true,
          href: "/docs/components/resizable",
          title: "Resizable",
        },
        {
          href: "/docs/components/scroll-area",
          title: "Scroll Area",
        },
        {
          href: "/docs/components/select",
          title: "Select",
        },
        {
          href: "/docs/components/separator",
          title: "Separator",
        },
        {
          href: "/docs/components/skeleton",
          title: "Skeleton",
        },
        {
          href: "/docs/components/spinner",
          title: "Spinner",
        },
        {
          href: "/docs/components/slider",
          title: "Slider",
        },
        {
          href: "/docs/components/switch",
          title: "Switch",
        },
        {
          href: "/docs/components/table",
          title: "Table",
        },
        {
          href: "/docs/components/tabs",
          title: "Tabs",
        },
        {
          href: "/docs/components/textarea",
          title: "TextArea",
        },
        {
          href: "/docs/components/textfield",
          title: "TextField",
        },
        {
          href: "/docs/components/toast",
          title: "Toast",
        },
        {
          href: "/docs/components/toggle",
          title: "Toggle",
        },
        {
          disabled: true,
          href: "/docs/components/toggle-group",
          title: "Toggle Group",
        },
        {
          href: "/docs/components/tooltip",
          title: "Tooltip",
        },
      ],
      title: "Components",
    },
  ],
};

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

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

export interface NavLink {
  title: string;
  href: string;
  disabled?: boolean;
  label?: string;
}
