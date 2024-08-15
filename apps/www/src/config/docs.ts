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
    {
      title: "Icons",
      href: "/icons",
      disabled: true,
    },
    {
      title: "Examples",
      href: "/examples",
      disabled: true,
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
          title: "kanpeki.json",
          href: "/docs/kanpeki-json",
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
          title: "Accordion",
          href: "/docs/components/accordion",
          disabled: true,
          label: "Planned",
        },
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
          label: "Soon",
        },
        {
          title: "Button",
          href: "/docs/components/button",
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Card",
          href: "/docs/components/card",
        },
        {
          title: "Carousel",
          href: "/docs/components/carousel",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Chart",
          href: "/docs/components/chart",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          disabled: true,
          label: "Soon",
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Command",
          href: "/docs/components/command",
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          disabled: true,
          label: "Soon",
        },
        {
          title: "Form",
          href: "/docs/components/form",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Label",
          href: "/docs/components/label",
        },
        {
          title: "Pagination",
          href: "/docs/components/pagination",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Resizable",
          href: "/docs/components/resizable",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
        },
        {
          title: "Select",
          href: "/docs/components/select",
          disabled: true,
          label: "Planned",
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
          title: "Slider",
          href: "/docs/components/slider",
          disabled: true,
          label: "Planned",
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
          href: "/docs/components/text-area",
        },
        {
          title: "TextField",
          href: "/docs/components/text-field",
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          disabled: true,
          label: "Soon",
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Toggle Group",
          href: "/docs/components/toggle-group",
          disabled: true,
          label: "Planned",
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          disabled: true,
          label: "Planned",
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
