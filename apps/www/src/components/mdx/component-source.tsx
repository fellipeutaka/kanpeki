"use client";

import { useState } from "react";
import { cx } from "~/lib/cva";
import { Button } from "../ui/button";
import { Collapsible } from "../ui/collapsible";

interface ComponentSourceProps {
  children: React.ReactElement;
}

export function ComponentSource({ children }: ComponentSourceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root
      className="group/collapsible relative overflow-hidden"
      isExpanded={isOpen}
      onExpandedChange={setIsOpen}
    >
      <Collapsible.Content className="[content-visibility:visible] aria-hidden:h-40">
        {children}
        <div
          className={cx(
            "pointer-events-none absolute inset-x-0 bottom-0 flex justify-center",
            !isOpen && "bg-linear-to-b from-transparent to-bg/90"
          )}
        >
          <Button
            className="pointer-events-auto mb-4"
            onPress={() => setIsOpen((state) => !state)}
            size="sm"
            variant="secondary"
          >
            {isOpen ? "Collapse" : "Expand"}
          </Button>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
