"use client";

import { cx, type VariantProps } from "cva";
import { PanelLeftIcon } from "lucide-react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { composeRenderProps, Link } from "react-aria-components";
import { useIsMobile } from "~/registry/hooks/use-is-mobile";
import { cn } from "~/registry/lib/cva";
import { Button, RACButton } from "~/registry/ui/button";
import { Input } from "~/registry/ui/input";
import { Separator } from "~/registry/ui/separator";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "~/registry/ui/sheet";
import { Skeleton } from "~/registry/ui/skeleton";
import { Tooltip, type TooltipContent } from "~/registry/ui/tooltip";
import { SidebarStyles } from "./styles";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextProps {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function useSidebar() {
  const context = use(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(
    () =>
      isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open),
    [isMobile, setOpen]
  );

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          toggleSidebar();
        }
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      state,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={SidebarStyles.Provider({ className })}
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export interface SidebarRootProps extends React.ComponentProps<"div"> {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}

export function SidebarRoot({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarRootProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={SidebarStyles.Root({ className, collapsible })}
        data-slot="sidebar"
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet.Root isOpen={openMobile} onOpenChange={setOpenMobile} {...props}>
        <Sheet.Overlay>
          <Sheet.Modal
            className="w-(--sidebar-width)"
            side={side}
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
          >
            <Sheet.Content
              className="bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
              data-mobile="true"
              data-sidebar="sidebar"
              data-slot="sidebar"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Sidebar</SheetTitle>
                <SheetDescription>
                  Displays the mobile sidebar.
                </SheetDescription>
              </SheetHeader>
              <div className="flex size-full flex-col">{children}</div>
            </Sheet.Content>
          </Sheet.Modal>
        </Sheet.Overlay>
      </Sheet.Root>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cx(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
        data-slot="sidebar-gap"
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        data-slot="sidebar-container"
        {...props}
      >
        <div
          className={SidebarStyles.Inner()}
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export interface SidebarTriggerProps
  extends React.ComponentProps<typeof Button> {}

export function SidebarTrigger({
  className,
  onPress,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className={cn("size-7", className)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onPress={(event) => {
        onPress?.(event);
        toggleSidebar();
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export interface SidebarRailProps
  extends React.ComponentProps<typeof RACButton> {}

export function SidebarRail({ className, ...props }: SidebarRailProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <RACButton
      aria-label="Toggle Sidebar"
      className={SidebarStyles.Rail({ className })}
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onPress={toggleSidebar}
      {...props}
    />
  );
}

export interface SidebarInsetProps extends React.ComponentProps<"main"> {}

export function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return (
    <main
      className={SidebarStyles.Inset({ className })}
      data-slot="sidebar-inset"
      {...props}
    />
  );
}

export interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

export function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      className={composeRenderProps(className, (className) =>
        SidebarStyles.Input({ className })
      )}
      data-sidebar="input"
      data-slot="sidebar-input"
      {...props}
    />
  );
}

export interface SidebarHeaderProps extends React.ComponentProps<"div"> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      className={SidebarStyles.Header({ className })}
      data-sidebar="header"
      data-slot="sidebar-header"
      {...props}
    />
  );
}

export interface SidebarFooterProps extends React.ComponentProps<"div"> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      className={SidebarStyles.Header({ className })}
      data-sidebar="footer"
      data-slot="sidebar-footer"
      {...props}
    />
  );
}

export interface SidebarSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function SidebarSeparator({
  className,
  ...props
}: SidebarSeparatorProps) {
  return (
    <Separator
      className={SidebarStyles.Separator({ className })}
      data-sidebar="separator"
      data-slot="sidebar-separator"
      {...props}
    />
  );
}

export interface SidebarContentProps extends React.ComponentProps<"div"> {}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return (
    <div
      className={SidebarStyles.Content({ className })}
      data-sidebar="content"
      data-slot="sidebar-content"
      {...props}
    />
  );
}

export interface SidebarGroupProps extends React.ComponentProps<"div"> {}

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return (
    <div
      className={SidebarStyles.Group({ className })}
      data-sidebar="group"
      data-slot="sidebar-group"
      {...props}
    />
  );
}

export interface SidebarGroupLabelProps extends React.ComponentProps<"div"> {}

export function SidebarGroupLabel({
  className,
  ...props
}: SidebarGroupLabelProps) {
  return (
    <div
      className={SidebarStyles.Label({ className })}
      data-sidebar="group-label"
      data-slot="sidebar-group-label"
      {...props}
    />
  );
}

export interface SidebarGroupActionProps
  extends React.ComponentProps<typeof RACButton> {}

export function SidebarGroupAction({
  className,
  ...props
}: SidebarGroupActionProps) {
  return (
    <RACButton
      className={composeRenderProps(className, (className) =>
        SidebarStyles.GroupAction({ className })
      )}
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      {...props}
    />
  );
}

export interface SidebarGroupContentProps extends React.ComponentProps<"div"> {}

export function SidebarGroupContent({
  className,
  ...props
}: SidebarGroupContentProps) {
  return (
    <div
      className={SidebarStyles.GroupContent({ className })}
      data-sidebar="group-content"
      data-slot="sidebar-group-content"
      {...props}
    />
  );
}

export interface SidebarMenuProps extends React.ComponentProps<"ul"> {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ul
      className={SidebarStyles.Menu({ className })}
      data-sidebar="menu"
      data-slot="sidebar-menu"
      {...props}
    />
  );
}

export interface SidebarMenuItemProps extends React.ComponentProps<"li"> {}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return (
    <li
      className={SidebarStyles.MenuItem({ className })}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      {...props}
    />
  );
}

export interface SidebarMenuButtonProps
  extends React.ComponentProps<typeof RACButton>,
    VariantProps<typeof SidebarStyles.MenuButton> {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

export function SidebarMenuButton({
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) {
  const { isMobile, state } = useSidebar();

  const button = (
    <RACButton
      className={composeRenderProps(className, (className) =>
        SidebarStyles.MenuButton({ className, size, variant })
      )}
      data-active={isActive}
      data-sidebar="menu-button"
      data-size={size}
      data-slot="sidebar-menu-button"
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip.Root isDisabled={state !== "collapsed" || isMobile}>
      {button}

      <Tooltip.Content placement="right" {...tooltip} />
    </Tooltip.Root>
  );
}

export interface SidebarMenuLinkProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof SidebarStyles.MenuButton> {
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

export function SidebarMenuLink({
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: SidebarMenuLinkProps) {
  const { isMobile, state } = useSidebar();

  const link = (
    <Link
      className={composeRenderProps(className, (className) =>
        SidebarStyles.MenuButton({ className, size, variant })
      )}
      data-active={isActive}
      data-sidebar="menu-link"
      data-size={size}
      data-slot="sidebar-menu-link"
      {...props}
    />
  );

  if (!tooltip) {
    return link;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip.Root isDisabled={state !== "collapsed" || isMobile}>
      {link}

      <Tooltip.Content placement="right" {...tooltip} />
    </Tooltip.Root>
  );
}

export interface SidebarMenuActionProps
  extends React.ComponentProps<typeof RACButton>,
    VariantProps<typeof SidebarStyles.MenuAction> {}

export function SidebarMenuAction({
  className,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  return (
    <RACButton
      className={composeRenderProps(className, (className) =>
        SidebarStyles.MenuAction({
          className,
          showOnHover,
        })
      )}
      data-sidebar="menu-action"
      data-slot="sidebar-menu-action"
      {...props}
    />
  );
}

export interface SidebarMenuBadgeProps extends React.ComponentProps<"div"> {}

export function SidebarMenuBadge({
  className,
  ...props
}: SidebarMenuBadgeProps) {
  return (
    <div
      className={SidebarStyles.MenuBadge({ className })}
      data-sidebar="menu-badge"
      data-slot="sidebar-menu-badge"
      {...props}
    />
  );
}

export interface SidebarMenuSkeletonProps extends React.ComponentProps<"div"> {
  showIcon?: boolean;
}

export function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  // Random width between 50 to 90%.
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);

  return (
    <div
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

export interface SidebarMenuSubProps extends React.ComponentProps<"ul"> {}

export function SidebarMenuSub({ className, ...props }: SidebarMenuSubProps) {
  return (
    <ul
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
      {...props}
    />
  );
}

export interface SidebarMenuSubItemProps extends React.ComponentProps<"li"> {}

export function SidebarMenuSubItem({
  className,
  ...props
}: SidebarMenuSubItemProps) {
  return (
    <li
      className={cn("group/menu-sub-item relative", className)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      {...props}
    />
  );
}

export interface SidebarMenuSubButtonProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof SidebarStyles.MenuSubButton> {
  isActive?: boolean;
}

export function SidebarMenuSubButton({
  size = "md",
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) {
  return (
    <Link
      className={SidebarStyles.MenuSubButton({
        className,
        size,
      })}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-slot="sidebar-menu-sub-button"
      {...props}
    />
  );
}
