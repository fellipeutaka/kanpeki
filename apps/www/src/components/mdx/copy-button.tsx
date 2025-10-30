"use client";

import { cx } from "cva";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Icons } from "~/components/icons";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { Button, type ButtonProps } from "~/registry/ui/button";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";
import type { NpmCommands } from "./code-block";

export interface CopyButtonProps extends ButtonProps {
  text: string;
}

export function CopyButton({ text, className, ...props }: CopyButtonProps) {
  const [copy, isCopied] = useCopyToClipboard();

  return (
    <Button
      aria-label="Copy code to clipboard"
      className={cx(
        "size-8 bg-secondary opacity-0 hover:bg-background focus-visible:opacity-100 group-hover:opacity-100",
        className
      )}
      onPress={() => copy({ text })}
      size="icon"
      variant="outline"
      {...props}
    >
      <CopyIcon
        className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
        data-visible={isCopied}
      />
      <CheckIcon
        className="size-4 transition-transform data-[visible='false']:scale-0"
        data-visible={isCopied}
      />
    </Button>
  );
}

export interface CopyNpmButtonProps extends ButtonProps {
  commands: NonNullable<NpmCommands>;
}

export function CopyNpmButton({
  commands,
  className,
  ...props
}: CopyNpmButtonProps) {
  const [copy, isCopied] = useCopyToClipboard();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu.Root isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Copy code to clipboard"
        className={cx(
          "size-8 bg-secondary pointer-fine:opacity-0 hover:bg-background focus-visible:opacity-100 group-hover:opacity-100",
          isOpen && "bg-background opacity-100!",
          className
        )}
        size="icon"
        variant="outline"
        {...props}
      >
        <CopyIcon
          className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
          data-visible={isCopied}
        />
        <CheckIcon
          className="size-4 transition-transform data-[visible='false']:scale-0"
          data-visible={isCopied}
        />
      </Button>

      <Popover.Content className="min-w-32" placement="bottom end">
        <Menu.Content>
          <Menu.Item onAction={() => copy({ text: commands.npm })}>
            <Icons.Npm className="size-4" />
            npm
          </Menu.Item>
          <Menu.Item onAction={() => copy({ text: commands.yarn })}>
            <Icons.Yarn className="size-4" />
            yarn
          </Menu.Item>
          <Menu.Item onAction={() => copy({ text: commands.pnpm })}>
            <Icons.Pnpm className="size-4" />
            pnpm
          </Menu.Item>
          <Menu.Item onAction={() => copy({ text: commands.bun })}>
            <Icons.Bun className="size-4" />
            bun
          </Menu.Item>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}
