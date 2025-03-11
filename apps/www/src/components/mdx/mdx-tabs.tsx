import { cn } from "~/lib/cva";
import {
  TabsContent,
  TabsList,
  type TabsListProps,
  TabsRoot,
  type TabsRootProps,
  TabsTrigger,
  type TabsTriggerProps,
} from "../ui/tabs";

export const MdxTabs = Object.assign(
  {},
  {
    Root: ({ className, ...props }: TabsRootProps) => (
      <TabsRoot
        variant="underline"
        {...props}
        className={cn("mt-6", className)}
      />
    ),
    List: ({ className, ...props }: TabsListProps<object>) => (
      <TabsList
        {...props}
        className={cn("orientation-horizontal:gap-x-0", className)}
      />
    ),
    Trigger: ({ className, ...props }: TabsTriggerProps) => (
      <TabsTrigger {...props} className={cn("px-4", className)} />
    ),
    Content: TabsContent,
  }
);
