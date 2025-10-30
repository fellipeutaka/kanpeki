"use client";

import {
  composeRenderProps,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "react-aria-components";
import { TabsStyle } from "./styles";

export interface TabsRootProps extends React.ComponentProps<typeof Tabs> {}

export function TabsRoot({ className, ...props }: TabsRootProps) {
  return (
    <Tabs
      className={composeRenderProps(className, (className) =>
        TabsStyle.Root({ className })
      )}
      data-slot="tabs-root"
      {...props}
    />
  );
}

export interface TabsListProps<T extends object>
  extends React.ComponentProps<typeof TabList<T>> {}

export function TabsList<T extends object>({
  className,
  ...props
}: TabsListProps<T>) {
  return (
    <TabList
      className={composeRenderProps(className, (className) =>
        TabsStyle.List({ className })
      )}
      data-slot="tabs-list"
      {...props}
    />
  );
}

export interface TabsTriggerProps extends React.ComponentProps<typeof Tab> {}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <Tab
      className={composeRenderProps(className, (className) =>
        TabsStyle.Trigger({ className })
      )}
      data-slot="tabs-trigger"
      {...props}
    />
  );
}

export interface TabsContentProps
  extends React.ComponentProps<typeof TabPanel> {}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabPanel
      className={composeRenderProps(className, (className) =>
        TabsStyle.Content({ className })
      )}
      data-slot="tabs-content"
      {...props}
    />
  );
}
