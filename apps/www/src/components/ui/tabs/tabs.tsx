"use client";

import { LayoutGroup, motion } from "motion/react";
import { createContext, use, useId } from "react";
import {
  TabList as TabListPrimitive,
  TabPanel,
  Tab as TabPrimitive,
  Tabs as TabsPrimitive,
} from "react-aria-components";
import { TabsStyles } from "./styles";

export interface TabsRootProps
  extends React.ComponentProps<typeof TabsPrimitive> {
  variant?: "default" | "underline";
}

const TabsVariantContext = createContext<"default" | "underline">("default");
const useTabsVariant = () => use(TabsVariantContext);

export function TabsRoot({
  className,
  variant = "default",
  ...props
}: TabsRootProps) {
  return (
    <TabsVariantContext value={variant}>
      <TabsPrimitive
        {...props}
        className={(values) =>
          TabsStyles.Root({
            className:
              typeof className === "function" ? className(values) : className,
          })
        }
      />
    </TabsVariantContext>
  );
}

export interface TabsListProps<T extends object>
  extends React.ComponentProps<typeof TabListPrimitive<T>> {}

export function TabsList<T extends object>({
  className,
  ...props
}: TabsListProps<T>) {
  const id = useId();
  const variant = useTabsVariant();

  return (
    <LayoutGroup id={id}>
      <TabListPrimitive
        {...props}
        className={(values) =>
          TabsStyles.List({
            className:
              typeof className === "function" ? className(values) : className,
            variant,
          })
        }
      />
    </LayoutGroup>
  );
}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabPrimitive> {}

export function TabsTrigger({
  className,
  children,
  ...props
}: TabsTriggerProps) {
  const variant = useTabsVariant();

  return (
    <TabPrimitive
      {...props}
      className={(values) =>
        TabsStyles.Trigger({
          className:
            typeof className === "function" ? className(values) : className,
          variant,
        })
      }
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          {values.isSelected && (
            <motion.span
              className={TabsStyles.Indicator({
                variant,
              })}
              layoutId="current-selected"
              transition={{ damping: 40, stiffness: 500, type: "spring" }}
            />
          )}
        </>
      )}
    </TabPrimitive>
  );
}

export interface TabsContentProps
  extends React.ComponentProps<typeof TabPanel> {}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabPanel
      {...props}
      className={(values) =>
        TabsStyles.Content({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}
