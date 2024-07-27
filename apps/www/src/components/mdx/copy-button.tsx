import { PressResponder } from "@react-aria/interactions";
import { useState } from "react";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import type { Commands } from "~/lib/rehype-command";
import { cn } from "~/utils/cn";
import { Button, type ButtonProps } from "../ui/button";
import { DropdownMenu } from "../ui/dropdown-menu";
import { Icons } from "../ui/icons";

export interface CopyButtonProps extends ButtonProps {
  text: string;
}

export function CopyButton({ text, className, ...props }: CopyButtonProps) {
  const [copy, isCopied] = useCopyToClipboard();

  return (
    <Button
      className={cn(
        "size-8 bg-secondary opacity-0 hover:bg-background group-hover:opacity-100",
        className,
      )}
      size="icon"
      variant="outline"
      onPress={() => copy({ text })}
      aria-label="Copy code to clipboard"
      {...props}
    >
      <Icons.Copy
        data-visible={isCopied}
        className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
      />
      <Icons.Check
        data-visible={isCopied}
        className="size-4 transition-transform data-[visible='false']:scale-0"
      />
    </Button>
  );
}

export interface CopyNpmButtonProps extends ButtonProps {
  commands: Commands;
}

export function CopyNpmButton({
  commands,
  className,
  ...props
}: CopyNpmButtonProps) {
  const [copy, isCopied] = useCopyToClipboard();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <PressResponder>
          <Button
            className={cn(
              "size-8 bg-secondary opacity-0 hover:bg-background group-hover:opacity-100",
              isOpen && "bg-background opacity-100",
              className,
            )}
            size="icon"
            variant="outline"
            aria-label="Copy code to clipboard"
            {...props}
          >
            <Icons.Copy
              data-visible={isCopied}
              className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
            />
            <Icons.Check
              data-visible={isCopied}
              className="size-4 transition-transform data-[visible='false']:scale-0"
            />
          </Button>
        </PressResponder>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onSelect={() => copy({ text: commands.npm })}>
          <Icons.Npm className="mr-2 size-4" />
          npm
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => copy({ text: commands.yarn })}>
          <Icons.Yarn className="mr-2 size-4" />
          yarn
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => copy({ text: commands.pnpm })}>
          <Icons.Pnpm className="mr-2 size-4" />
          pnpm
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => copy({ text: commands.bun })}>
          <Icons.Bun className="mr-2 size-4" />
          bun
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
