"use client";

import { Collapsible } from "@kanpeki/ui/collapsible";
import { Icons } from "@kanpeki/ui/icons";
import { cn } from "@kanpeki/utils/cn";
import { useState } from "react";
import { LanguageIcon } from "../language-icon";

type FilesProps = React.ComponentProps<"div">;

const itemStyles =
  "flex flex-row items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground";

export function Files({ children, className, ...props }: FilesProps) {
  return (
    <div className={cn("rounded-md border bg-card p-2", className)} {...props}>
      {children}
    </div>
  );
}

interface FileProps extends React.ComponentProps<"div"> {
  name: string;
  icon?: React.ReactNode;
}

export function File({ name, className, ...props }: FileProps) {
  return (
    <div className={cn(itemStyles, className)} {...props}>
      <LanguageIcon
        title={name}
        language={name.split(".").pop() || ""}
        className="size-4"
      />
      {name}
    </div>
  );
}

interface FolderProps extends React.ComponentProps<"div"> {
  name: string;
  defaultOpen?: boolean;
}

export function Folder({
  children,
  name,
  defaultOpen = false,
  ...rest
}: FolderProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} {...rest}>
      <Collapsible.Trigger className={cn(itemStyles, "w-full")}>
        {open ? (
          <Icons.FolderOpen className="size-4" />
        ) : (
          <Icons.Folder className="size-4" />
        )}
        {name}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="ml-2 flex flex-col border-l pl-2">{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
