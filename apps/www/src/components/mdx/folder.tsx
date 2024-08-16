"use client";

import { Collapsible } from "@kanpeki/ui/collapsible";
import { useState } from "react";
import { FileStyles } from "./files";
import { FolderIcon } from "./folder-icon";

interface FolderProps extends React.ComponentProps<"div"> {
  name: string;
  defaultOpen?: boolean;
}

export function Folder({
  children,
  name,
  defaultOpen = false,
  className,
  ...rest
}: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen} {...rest}>
      <Collapsible.Trigger className={FileStyles({ className })}>
        <FolderIcon title={name} isOpen={isOpen} />
        {name}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="ml-2 flex flex-col border-l pl-2">{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
