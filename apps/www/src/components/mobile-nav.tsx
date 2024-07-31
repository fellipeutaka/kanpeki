"use client";

import { useState } from "react";
import { cn } from "~/utils/cn";
import { Button } from "./ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Button
      variant="outline"
      size="icon"
      className="mr-2 size-8 rounded-full md:hidden"
      aria-label="Toggle Menu"
    >
      <div
        className={cn(
          "-translate-y-1 absolute h-0.5 w-3.5 transform-gpu bg-muted-foreground transition-transform",
          open && "translate-y-0 rotate-45",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute h-0.5 w-3.5 translate-y-1 transform-gpu bg-muted-foreground transition-transform",
          open && "-rotate-45 translate-y-0",
        )}
        aria-hidden
      />
    </Button>
  );
}
