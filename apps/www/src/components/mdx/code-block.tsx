import { cn, cva } from "~/registry/lib/cva";
import {
  CopyButton,
  type CopyButtonProps,
  CopyNpmButton,
  type CopyNpmButtonProps,
} from "./copy-button";

export interface CodeBlockRootProps extends React.ComponentProps<"figure"> {}

export function CodeBlockRoot({ className, ...props }: CodeBlockRootProps) {
  return (
    <figure
      className={cn(
        "group relative mt-6 w-full overflow-hidden rounded-lg border text-sm",
        className
      )}
      data-figure="code"
      data-slot="code-block-root"
      {...props}
    />
  );
}

export interface CodeBlockHeaderProps
  extends React.ComponentProps<"figcaption"> {}

export function CodeBlockHeader({ className, ...props }: CodeBlockHeaderProps) {
  return (
    <figcaption
      className={cn("flex items-center gap-2 border-b px-4 py-1.5", className)}
      data-slot="code-block-header"
      {...props}
    />
  );
}

export interface CodeBlockTitleProps extends React.ComponentProps<"span"> {}

export function CodeBlockTitle({ className, ...props }: CodeBlockTitleProps) {
  return (
    <span
      className={cn("flex-1 truncate text-muted-foreground", className)}
      data-slot="code-block-title"
      {...props}
    />
  );
}

export type NpmCommands = {
  npm: string;
  yarn: string;
  pnpm: string;
  bun: string;
} | null;

export interface CodeBlockCopyButtonProps
  extends CopyButtonProps,
    Omit<CopyNpmButtonProps, "commands"> {
  commands: NpmCommands;
}

const CodeBlockCopyButtonStyles = cva({
  base: [
    "absolute top-2.5 right-4 z-10",
    "max-sm:group-has-[data-state=visible]:opacity-0",
  ],
});

export function CodeBlockCopyButton({
  commands,
  text,
  className,
  ...props
}: CodeBlockCopyButtonProps) {
  if (!(text || commands)) {
    return null;
  }

  return commands ? (
    <CopyNpmButton
      className={CodeBlockCopyButtonStyles({ className })}
      commands={commands}
      {...props}
    />
  ) : (
    <CopyButton
      className={CodeBlockCopyButtonStyles({ className })}
      text={text}
      {...props}
    />
  );
}

export const CodeBlock = {
  CopyButton: CodeBlockCopyButton,
  Header: CodeBlockHeader,
  Root: CodeBlockRoot,
  Title: CodeBlockTitle,
};
