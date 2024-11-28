import { cn } from "~/lib/cva";
import { Alert } from "../ui/alert";
import { LinkButton } from "../ui/button";
import { Icons } from "../ui/icons";
import { Link } from "../ui/link";
import {
  TabsContent,
  TabsList,
  type TabsListProps,
  TabsRoot,
  type TabsRootProps,
  TabsTrigger,
  type TabsTriggerProps,
} from "../ui/tabs";
import { Code } from "./code";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import { Figcaption } from "./figcaption";
import { File, Files } from "./files";
import { Folder } from "./folder";
import { Heading } from "./heading";
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
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
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
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-fg",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    <img {...props} className={cn("rounded-md border", className)} alt={alt} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,

  code: Code,
  Code,
  pre: Pre,
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => (
    <figure
      className={cn(
        "group relative mt-6 overflow-hidden rounded-lg border text-sm",
        className
      )}
      {...props}
    />
  ),
  figcaption: Figcaption,
  Link,
  Icons,
  LinkButton,
  Alert,
  Steps,
  Step,
  Files,
  File,
  Folder,
  ComponentPreview,
  ComponentSource,
  TabRoot: ({ className, ...props }: TabsRootProps) => (
    <TabsRoot
      variant="underline"
      {...props}
      className={cn("mt-6", className)}
    />
  ),
  TabList: ({ className, ...props }: TabsListProps<object>) => (
    <TabsList
      {...props}
      className={cn("orientation-horizontal:gap-x-0", className)}
    />
  ),
  TabTrigger: ({ className, ...props }: TabsTriggerProps) => (
    <TabsTrigger {...props} className={cn("px-4", className)} />
  ),
  TabContent: TabsContent,
  PropsTable,
} satisfies Record<string, SAFE_ANY>;

// biome-ignore lint/suspicious/noExplicitAny: This is a type alias for any
type SAFE_ANY = any;
