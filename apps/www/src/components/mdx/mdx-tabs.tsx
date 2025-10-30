import { cn } from "~/registry/lib/cva";
import {
  TabsContent,
  TabsList,
  type TabsListProps,
  TabsRoot,
  type TabsRootProps,
  TabsTrigger,
  type TabsTriggerProps,
} from "~/registry/ui/tabs";

export const MdxTabs = {
  Content: TabsContent,
  List: ({ className, ...props }: TabsListProps<object>) => (
    <TabsList
      {...props}
      className={cn("orientation-horizontal:gap-x-0", className)}
    />
  ),
  Root: ({ className, ...props }: TabsRootProps) => (
    <TabsRoot {...props} className={cn("mt-6", className)} />
  ),
  Trigger: ({ className, ...props }: TabsTriggerProps) => (
    <TabsTrigger {...props} className={cn("px-4", className)} />
  ),
};
