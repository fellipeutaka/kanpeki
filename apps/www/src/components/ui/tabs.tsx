"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

export const TabsStyles = {
  List: tv({
    base: [
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
    ],
  }),
  Trigger: tv({
    base: [
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 font-medium text-sm outline-none",
      "ring-offset-2 ring-offset-background transition-all",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
    ],
  }),
  Content: tv({
    base: [
      "mt-2 outline-none ring-offset-2 ring-offset-background",
      "focus-visible:ring-2 focus-visible:ring-ring",
    ],
  }),
};

export const TabsRoot = Root;

export const TabsList = forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(({ className, ...props }, ref) => (
  <List ref={ref} className={TabsStyles.List({ className })} {...props} />
));
TabsList.displayName = List.displayName;

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...props }, ref) => (
  <Trigger ref={ref} className={TabsStyles.Trigger({ className })} {...props} />
));
TabsTrigger.displayName = Trigger.displayName;

export type TabsContentProps = React.ComponentPropsWithoutRef<typeof Content>;

export const TabsContent = forwardRef<
  React.ElementRef<typeof Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <Content ref={ref} className={TabsStyles.Content({ className })} {...props} />
));
TabsContent.displayName = Content.displayName;

export const Tabs = Object.assign(
  {},
  {
    Root: TabsRoot,
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
  },
);
