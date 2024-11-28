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
      open={isOpen}
      onOpenChange={setIsOpen}
      className="group/collapsible relative overflow-hidden"
    >
      <Collapsible.Content
        forceMount
        className={cx(
          "grid transition-all",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[10rem]"
        )}
      >
        {children}
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-b from-transparent to-zinc-950/90 p-3">
          <Button
            onPress={() => setIsOpen((state) => !state)}
            variant="secondary"
            size="sm"
          >
            {isOpen ? "Collapse" : "Expand"}
          </Button>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
