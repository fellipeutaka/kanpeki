import {
  type TabsContentProps,
  type TabsListProps,
  type TabsRootProps,
  type TabsTriggerProps,
  TabsContent as _TabsContent,
  TabsList as _TabsList,
  TabsRoot as _TabsRoot,
  TabsTrigger as _TabsTrigger,
} from "@kanpeki/ui/tabs";
import { tv } from "tailwind-variants";

const TabsStyles = {
  Root: tv({
    base: ["relative mt-6 w-full"],
  }),
  List: tv({
    base: ["w-full justify-start rounded-none border-b bg-transparent p-0"],
  }),
  Trigger: tv({
    base: [
      "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none",
      "data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
    ],
  }),
  Content: tv({
    base: ["relative"],
  }),
};

export function TabsRoot({ className, ...props }: TabsRootProps) {
  return <_TabsRoot {...props} className={TabsStyles.Root({ className })} />;
}

export function TabsList({ className, ...props }: TabsListProps) {
  return <_TabsList {...props} className={TabsStyles.List({ className })} />;
}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <_TabsTrigger {...props} className={TabsStyles.Trigger({ className })} />
  );
}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <_TabsContent {...props} className={TabsStyles.Content({ className })} />
  );
}

export const Tabs = Object.assign(
  {},
  {
    Root: TabsRoot,
    List: TabsList,
    Trigger: TabsTrigger,
    Content: TabsContent,
  },
);
