"use client";

import { Suspense } from "react";
import { type RegistryDemo, RegistryDemos } from "~/registry/demos";
import { cn } from "~/utils/cn";
import { Icons } from "../ui/icons";
import { Tabs } from "../ui/tabs";
import { CopyButton } from "./copy-button";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  name: RegistryDemo;
}

export function ComponentPreview({
  className,
  children,
  name,
  ...props
}: ComponentPreviewProps) {
  const Preview = RegistryDemos[name].component;

  return (
    <div
      {...props}
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
    >
      <Tabs.Root defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <Tabs.List className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <Tabs.Trigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </Tabs.Trigger>
          </Tabs.List>
        </div>
        <Tabs.Content value="preview" className="relative rounded-md border">
          <CopyButton className="m-4 ml-auto flex" text={""} />
          <div className="preview grid min-h-96 w-full place-content-center p-10">
            <Suspense
              fallback={
                <div className="grid place-items-center text-muted-foreground text-sm">
                  <Icons.Loader className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <Preview />
            </Suspense>
          </div>
        </Tabs.Content>
        <Tabs.Content value="code">{children}</Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
