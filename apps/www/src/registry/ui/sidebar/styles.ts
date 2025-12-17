import { cva } from "~/registry/lib/cva";

export const SidebarStyles = {
  Content: cva({
    base: [
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
    ],
  }),
  Group: cva({
    base: ["relative flex w-full min-w-0 flex-col p-2"],
  }),
  GroupAction: cva({
    base: [
      "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 md:after:hidden",
      "group-data-[collapsible=icon]:hidden",
    ],
  }),
  GroupContent: cva({
    base: ["w-full text-sm"],
  }),
  Header: cva({
    base: ["flex flex-col gap-2 p-2"],
  }),
  Inner: cva({
    base: [
      "flex size-full flex-col bg-sidebar",
      "group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border",
      "group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
    ],
  }),
  Input: cva({
    base: ["h-8 w-full bg-background shadow-none"],
  }),
  Inset: cva({
    base: [
      "relative flex w-full flex-1 flex-col bg-background",
      "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0",
      "md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
    ],
  }),
  Label: cva({
    base: [
      "flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
    ],
  }),
  Menu: cva({
    base: ["flex w-full min-w-0 flex-col gap-1"],
  }),
  MenuAction: cva({
    base: [
      "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 md:after:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
    ],
    defaultVariants: {
      showOnHover: false,
    },
    variants: {
      showOnHover: {
        true: [
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        ],
      },
    },
  }),
  MenuBadge: cva({
    base: [
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
    ],
  }),
  MenuButton: cva({
    base: [
      "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding,color,background-color] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    ],
    defaultVariants: {
      size: "default",
      variant: "default",
    },

    variants: {
      size: {
        default: "h-8 text-sm",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
        sm: "h-7 text-xs",
      },
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
    },
  }),
  MenuItem: cva({
    base: ["group/menu-item relative"],
  }),
  MenuSubButton: cva({
    base: [
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring",
      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      "focus-visible:ring-2",
      "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
      "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      "group-data-[collapsible=icon]:hidden",
    ],
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        md: "text-sm",
        sm: "text-xs",
      },
    },
  }),
  Provider: cva({
    base: [
      "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
    ],
  }),
  Rail: cva({
    base: [
      "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4",
      "after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex",
      "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
      "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
      "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full",
      "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
      "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
    ],
  }),
  Root: cva({
    variants: {
      collapsible: {
        none: [
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
        ],
      },
    },
  }),
  Separator: cva({
    base: ["mx-2 w-auto bg-sidebar-border"],
  }),
};
