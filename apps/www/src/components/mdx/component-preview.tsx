"use client";

import { Icons } from "@kanpeki/ui/icons";
import { Suspense } from "react";
import { type RegistryDemo, RegistryDemos } from "~/registry/demos";
import { CopyButton } from "./copy-button";
import { Tabs } from "./tabs";

interface ComponentPreviewProps {
  name: RegistryDemo;
  children: React.ReactElement;
}

function getCodeString(children: React.ReactElement) {
  if (typeof children.props["data-rehype-pretty-code-figure"] === "string") {
    return (
      (children.props?.children?.props?.children[0]?.props?.text as string) ||
      ""
    );
  }

  return "";
}

export function ComponentPreview({ children, name }: ComponentPreviewProps) {
  const Preview = RegistryDemos[name].component;

  return (
    <Tabs.Root defaultValue="preview">
      <Tabs.List className="mb-3">
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="preview"
        className="group rounded-md border"
        tabIndex={-1}
      >
        <CopyButton
          className="m-4 ml-auto flex"
          text={getCodeString(children)}
        />
        <div className="grid min-h-80 w-full place-items-center p-10">
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
  );
}
