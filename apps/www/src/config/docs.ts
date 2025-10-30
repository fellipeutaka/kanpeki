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
          href: "/docs/kanpeki-json",
          title: "kanpeki.json",
        },
        {
          href: "/docs/dark-mode",
          title: "Dark Mode",
        },
        {
          href: "/docs/cli",
          title: "CLI",
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
          label: "Planned",
          title: "Carousel",
        },
        {
          disabled: true,
          href: "/docs/components/chart",
          label: "Planned",
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
          label: "Planned",
          title: "Combobox",
        },
        {
          href: "/docs/components/command",
          label: "Improved",
          title: "Command",
        },
        {
          disabled: true,
          href: "/docs/components/context-menu",
          label: "Planned",
          title: "Context Menu",
        },
        {
          disabled: true,
          href: "/docs/components/data-table",
          label: "Planned",
          title: "Data Table",
        },
        {
          href: "/docs/components/date-field",
          label: "New",
          title: "Date Field",
        },
        {
          disabled: true,
          href: "/docs/components/date-picker",
          label: "Planned",
          title: "Date Picker",
        },
        {
          href: "/docs/components/dialog",
          title: "Dialog",
        },
        {
          href: "/docs/components/dropdown-menu",
          title: "Dropdown Menu",
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
          disabled: true,
          href: "/docs/components/pagination",
          label: "Planned",
          title: "Pagination",
        },
        {
          href: "/docs/components/popover",
          title: "Popover",
        },
        {
          disabled: true,
          href: "/docs/components/progress",
          label: "Planned",
          title: "Progress",
        },
        {
          href: "/docs/components/radio-group",
          label: "New",
          title: "Radio Group",
        },
        {
          disabled: true,
          href: "/docs/components/resizable",
          label: "Planned",
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
          label: "Planned",
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
