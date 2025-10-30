// biome-ignore-all assist/source/useSortedKeys: For better organization

import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Icons } from "~/components/icons";
import { cn } from "~/registry/lib/cva";
import { Alert } from "~/registry/ui/alert";
import { Link } from "~/registry/ui/link/link";
import { LinkButton } from "~/registry/ui/link-button";
import { ScrollArea } from "~/registry/ui/scroll-area";
import { Code } from "./code";
import { CodeBlock, type NpmCommands } from "./code-block";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import { File, Files } from "./files";
import { Folder } from "./folder";
import { Heading } from "./heading";
import { LanguageIcon } from "./language-icon";
import { MdxTabs } from "./mdx-tabs";
import { Pre, type PreProps } from "./pre";
import { PropsTable } from "./props-table";
import { Step, Steps } from "./steps";

export const mdxComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="heading mt-2 scroll-m-20 font-bold text-4xl" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <Heading
      as="h2"
      className="heading mt-12 scroll-m-20 border-b pb-2 font-semibold text-2xl tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <Heading
      as="h3"
      className="heading mt-8 scroll-m-20 font-semibold text-xl tracking-tight"
      {...props}
    />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <Heading
      as="h4"
      className="heading mt-8 scroll-m-20 font-semibold text-lg tracking-tight"
      {...props}
    />
  ),
  h5: (props: React.ComponentProps<"h5">) => (
    <Heading
      as="h5"
      className="mt-8 scroll-m-20 font-semibold text-lg tracking-tight"
      {...props}
    />
  ),
  h6: (props: React.ComponentProps<"h6">) => (
    <Heading
      as="h6"
      className="mt-8 scroll-m-20 font-semibold tracking-tight"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  a: ({ className, href, ...props }: React.ComponentProps<"a">) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      href={href}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic *:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<typeof Image>) => (
    <Image
      {...props}
      alt={alt}
      className={cn("rounded-md border", className)}
    />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("not-first:mt-6 leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  pre: ({
    title,
    "data-language": language,
    "data-raw": rawText,
    "data-npm": npmCommand,
    "data-yarn": yarnCommand,
    "data-pnpm": pnpmCommand,
    "data-bun": bunCommand,
    ...props
  }: {
    "data-language": string;
    "data-raw": string;
    "data-npm"?: string;
    "data-yarn"?: string;
    "data-pnpm"?: string;
    "data-bun"?: string;
  } & PreProps) => {
    const commands = npmCommand
      ? ({
          bun: bunCommand,
          npm: npmCommand,
          pnpm: pnpmCommand,
          yarn: yarnCommand,
        } as NpmCommands)
      : null;

    return (
      <CodeBlock.Root>
        {title && (
          <CodeBlock.Header>
            <LanguageIcon language={language} title={title} />
            <CodeBlock.Title>{title}</CodeBlock.Title>
            <CodeBlock.CopyButton
              className="static"
              commands={commands}
              text={rawText}
            />
          </CodeBlock.Header>
        )}

        <ScrollArea.Root>
          {!title && (
            <CodeBlock.CopyButton commands={commands} text={rawText} />
          )}

          <ScrollArea.Viewport className="max-h-160">
            <Pre {...props} />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </CodeBlock.Root>
    );
  },
  code: Code,
  Code,

  Alert,
  Step,
  Steps,
  Tabs: MdxTabs,

  File,
  Files,
  Folder,
  PropsTable,
  Icons,
  Link,
  LinkButton,

  ComponentPreview,
  ComponentSource,
} as unknown as MDXComponents;
