"use client";

import { Suspense } from "react";
import { cn } from "~/utils/cn";
import { Tabs } from "../ui/tabs";
import { CopyButton } from "./copy-button";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  name: string;
  align?: "center" | "start" | "end";
}

export function ComponentPreview({
  className,
  align = "center",
  ...props
}: ComponentPreviewProps) {
  const codeString = "";

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
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                text={codeString}
                variant="outline"
                className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
              />
            </div>
          </div>
          <div
            className={cn(
              "preview flex min-h-[350px] w-full justify-center p-10",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              },
            )}
          >
            <Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-muted-foreground text-sm">
                  {/* <Icons.Loader className="mr-2 h-4 w-4 animate-spin" /> */}
                  Loading...
                </div>
              }
            >
              {/* {Preview} */}
            </Suspense>
          </div>
        </Tabs.Content>
        <Tabs.Content value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {/* {Code} */}
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
