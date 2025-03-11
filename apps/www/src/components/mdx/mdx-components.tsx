import type { MDXComponents } from "mdx/types";
import { cn } from "~/lib/cva";
import { Alert } from "../ui/alert";
import { LinkButton } from "../ui/button";
import { Icons } from "../ui/icons";
import { Link } from "../ui/link/link";
import { Code } from "./code";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import { File, Files } from "./files";
import { Folder } from "./folder";
import { Heading } from "./heading";
import { MdxTabs } from "./mdx-tabs";
import { Pre } from "./pre";
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
  a: ({ className, ...props }: React.ComponentProps<"a">) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("not-first:mt-6 leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic *:text-muted-fg", className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    <img {...props} className={cn("rounded-md border", className)} alt={alt} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  Code: Code,
  code: Code,
  pre: Pre,
  Link,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Icons: Icons as any,
  LinkButton,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  Alert: Alert as any,
  Steps,
  Step,
  Files,
  File,
  Folder,
  ComponentPreview,
  ComponentSource,
  TabRoot: MdxTabs.Root,
  TabList: MdxTabs.List,
  TabTrigger: MdxTabs.Trigger,
  TabContent: MdxTabs.Content,
  PropsTable,
} satisfies MDXComponents;
