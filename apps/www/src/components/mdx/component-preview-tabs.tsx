import { Suspense } from "react";
import { cn } from "~/registry/lib/cva";
import { Spinner } from "~/registry/ui/spinner";
import { Tabs, type TabsRootProps } from "~/registry/ui/tabs";

interface ComponentPreviewTabsProps extends Omit<TabsRootProps, "children"> {
  component: React.ReactNode;
  source: React.ReactNode;
}

export function ComponentPreviewTabs({
  className,
  component,
  source,
  ...props
}: ComponentPreviewTabsProps) {
  return (
    <Tabs.Root
      className={cn("mt-6", className)}
      defaultSelectedKey="preview"
      {...props}
    >
      <Tabs.List className="mb-3 orientation-horizontal:gap-x-0">
        <Tabs.Trigger className="px-4" id="preview">
          Preview
        </Tabs.Trigger>
        <Tabs.Trigger className="px-4" id="code">
          Code
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="group grid min-h-80 w-full max-w-full place-items-center rounded-md border p-10"
        id="preview"
      >
        <Suspense fallback={<Spinner className="size-5" />}>
          {component}
        </Suspense>
      </Tabs.Content>
      <Tabs.Content className="*:data-[figure=code]:mt-0!" id="code">
        {source}
      </Tabs.Content>
    </Tabs.Root>
  );
}
