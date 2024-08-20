"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
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

export type TabsRootProps = React.ComponentProps<typeof Root>;

export const TabsRoot = Root;

export type TabsListProps = React.ComponentProps<typeof List>;

export function TabsList({ className, ...props }: TabsListProps) {
  return <List {...props} className={TabsStyles.List({ className })} />;
}

export type TabsTriggerProps = React.ComponentProps<typeof Trigger>;

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return <Trigger {...props} className={TabsStyles.Trigger({ className })} />;
}

export type TabsContentProps = React.ComponentProps<typeof Content>;

export function TabsContent({ className, ...props }: TabsContentProps) {
  return <Content {...props} className={TabsStyles.Content({ className })} />;
}

export const Tabs = Object.assign(
  {},
  {
    Root: TabsRoot,
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
  }
);
