"use client";

import type { Commands } from "~/lib/rehype-command";
import { cn } from "~/utils/cn";
import { LanguageIcon } from "../language-icon";
import { ScrollArea } from "../ui/scroll-area";
import {
  CopyButton,
  type CopyButtonProps,
  CopyNpmButton,
  type CopyNpmButtonProps,
} from "./copy-button";

interface PreProps extends React.ComponentProps<"pre"> {
  "data-lang"?: string;
  rawString: string;
  npmCommand: string;
  yarnCommand: string;
  pnpmCommand: string;
  bunCommand: string;
}

export function Pre({
  className,
  title,
  "data-lang": language,
  children,
  rawString,
  npmCommand,
  yarnCommand,
  pnpmCommand,
  bunCommand,
  ...props
}: PreProps) {
  const commands = npmCommand
    ? {
        npm: npmCommand,
        yarn: yarnCommand,
        pnpm: pnpmCommand,
        bun: bunCommand,
      }
    : null;

  return (
    <figure className="group relative my-6 max-w-[calc(100vw-4rem)] overflow-hidden rounded-lg border text-sm">
      {title ? (
        <div className="flex flex-row items-center gap-2 border-b px-4 py-1.5">
          {language && <LanguageIcon title={title} language={language} />}
          <figcaption className="flex-1 truncate text-muted-foreground">
            {title}
          </figcaption>
          <CopyBtn text={rawString} commands={commands} />
        </div>
      ) : (
        <CopyBtn
          className="absolute top-2.5 right-4 z-10"
          text={rawString}
          commands={commands}
        />
      )}

      <ScrollArea.Root>
        <ScrollArea.Viewport className="max-h-[40rem]">
          <pre className={cn("py-4", className)} {...props}>
            {children}
          </pre>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </figure>
  );
}

type CopyBtnProps = CopyButtonProps &
  Omit<CopyNpmButtonProps, "commands"> & { commands: Commands | null };

function CopyBtn({ commands, text, ...props }: CopyBtnProps) {
  return commands ? (
    <CopyNpmButton commands={commands} {...props} />
  ) : (
    <CopyButton text={text} {...props} />
  );
}
