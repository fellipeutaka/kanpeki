"use client";

import { Icons } from "@kanpeki/ui/icons";
import { Children, Suspense, useMemo } from "react";
import { type RegistryDemo, RegistryDemos } from "~/registry/demos";
import { CopyButton } from "./copy-button";
import { Tabs } from "./tabs";

interface ComponentPreviewProps {
  name: RegistryDemo;
  children: React.ReactElement;
}

export function ComponentPreview({ children, name }: ComponentPreviewProps) {
  const Preview = RegistryDemos[name].component;

  const codeString = useMemo(() => {
    if (
      typeof children.props["data-rehype-pretty-code-figure"] !== "undefined"
    ) {
      const [, Button] = Children.toArray(
        children.props.children,
      ) as React.ReactElement[];

      return Button?.props?.text || Button?.props?.__rawString__ || null;
    }
  }, [children]);

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
        <CopyButton className="m-4 ml-auto flex" text={codeString} />
        <div className="preview grid aspect-video size-full place-content-center pt-10 pb-20">
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
