"use client";

import { use } from "react";
import { DisclosureStateContext } from "react-aria-components";
import { cn } from "~/lib/cva";
import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "../ui/scroll-area";
import {
  CopyButton,
  type CopyButtonProps,
  CopyNpmButton,
  type CopyNpmButtonProps,
} from "./copy-button";
import { LanguageIcon } from "./language-icon";

export type NpmCommands = {
  npm: string;
  yarn: string;
  pnpm: string;
  bun: string;
} | null;

interface PreProps extends React.ComponentProps<"pre"> {
  "data-language": string;
  "data-source": string;
  "data-npm"?: string;
  "data-yarn"?: string;
  "data-pnpm"?: string;
  "data-bun"?: string;
}

export function Pre({
  className,
  title,
  "data-language": language,
  "data-source": __rawString__,
  "data-npm": npmCommand,
  "data-yarn": yarnCommand,
  "data-pnpm": pnpmCommand,
  "data-bun": bunCommand,
  ...props
}: PreProps) {
  const state = use(DisclosureStateContext);

  const commands = npmCommand
    ? ({
        npm: npmCommand,
        yarn: yarnCommand,
        pnpm: pnpmCommand,
        bun: bunCommand,
      } as NpmCommands)
    : null;

  return (
    <figure
      className={cn(
        "group relative mt-6 overflow-hidden rounded-lg border text-sm",
        className
      )}
      data-figure="code"
      {...props}
    >
      {title ? (
        <figcaption
          className={cn(
            "flex items-center gap-2 border-b px-4 py-1.5",
            className
          )}
          {...props}
        >
          <LanguageIcon title={title} language={language} />
          <span className="flex-1 truncate text-muted-fg">{title}</span>
          <CopyButton text={__rawString__} />
        </figcaption>
      ) : null}

      <ScrollAreaRoot>
        {title ? null : (
          <CopyBtn
            text={__rawString__}
            commands={commands}
            className="absolute top-2.5 right-4 z-10 max-sm:group-has-[[data-state=visible]]:opacity-0"
          />
        )}

        <ScrollAreaViewport className="max-h-[40rem]">
          <pre className={cn("py-4", className)} {...props} tabIndex={-1} />
        </ScrollAreaViewport>
        {state && !state.isExpanded ? null : (
          <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        )}
        {state && !state.isExpanded ? null : (
          <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        )}
      </ScrollAreaRoot>
    </figure>
  );
}

interface CopyBtnProps
  extends CopyButtonProps,
    Omit<CopyNpmButtonProps, "commands"> {
  commands: NpmCommands;
}

function CopyBtn({ commands, text, ...props }: CopyBtnProps) {
  if (!(text || commands)) {
    return null;
  }

  return commands ? (
    <CopyNpmButton commands={commands} {...props} />
  ) : (
    <CopyButton text={text} {...props} />
  );
}
