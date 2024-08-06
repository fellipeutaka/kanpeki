import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@kanpeki/ui/scroll-area";
import { cn } from "@kanpeki/utils/cn";
import type { NpmCommands } from "~/@types/unist";
import {
  CopyButton,
  type CopyButtonProps,
  CopyNpmButton,
  type CopyNpmButtonProps,
} from "./copy-button";

interface PreProps extends React.ComponentProps<"pre">, NpmCommands {
  "data-language"?: string;
  __rawString__: string;
  __src__?: string;
}

export function Pre({
  className,
  title,
  "data-language": language,
  __rawString__,
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
  __src__,
  ...props
}: PreProps) {
  const commands = (
    __npmCommand__
      ? {
          __npmCommand__,
          __yarnCommand__,
          __pnpmCommand__,
          __bunCommand__,
        }
      : null
  ) as Required<NpmCommands> | null;

  return (
    <ScrollAreaRoot>
      <CopyBtn
        text={__rawString__}
        commands={commands}
        className="absolute top-2.5 right-4 z-10"
      />

      <ScrollAreaViewport className="max-h-[40rem]">
        <pre className={cn("py-4", className)} {...props} tabIndex={-1} />
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  );
}

type CopyBtnProps = CopyButtonProps &
  Omit<CopyNpmButtonProps, "commands"> & {
    commands: Required<NpmCommands> | null;
  };

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
