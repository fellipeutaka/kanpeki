"use client";

import { Button } from "@kanpeki/ui/button";
import { Collapsible } from "@kanpeki/ui/collapsible";
import { cn } from "@kanpeki/utils/cn";
import { useState } from "react";

interface ComponentSourceProps {
  children: React.ReactElement;
}

export function ComponentSource({ children }: ComponentSourceProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="relative overflow-hidden"
    >
      <Collapsible.Content
        forceMount
        className={cn(!isOpen && "max-h-40")}
        style={{ animationFillMode: "both" }}
      >
        {children}
        <div
          className={cn(
            "absolute flex items-center justify-center bg-gradient-to-b from-transparent to-zinc-950/90 p-2",
            isOpen ? "inset-x-0 bottom-8 h-12" : "inset-0 mt-12"
          )}
        >
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
