import { cn } from "~/utils/cn";
import { Icons } from "../ui/icons";
import { LinkButton } from "../ui/link-button";
import { ComponentPreview } from "./component-preview";
import { Figcaption } from "./figcaption";
import { Heading } from "./heading";
import { Pre } from "./pre";
import { Step, Steps } from "./steps";
import { Table } from "./table";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./tabs";

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
    <p className={cn("mt-6 leading-7 first:mt-0", className)} {...props} />
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
        "mt-6 border-l-2 pl-6 italic *:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    <img {...props} className={cn("rounded-md border", className)} alt={alt} />
  ),
  hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
    <hr className={cn("my-4 md:my-8", className)} {...props} />
  ),
  table: Table,
  thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
    <thead className={cn("bg-muted", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr className={cn("m-0 border-t p-0 text-sm", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "border px-2 py-2 text-left font-bold sm:px-4 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "border px-2 py-2 text-left sm:px-4 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ComponentProps<"code">) => (
    <code
      className={cn(
        "relative rounded px-1 py-0.5 font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  pre: Pre,
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => (
    <figure
      className={cn(
        "group relative my-6 overflow-hidden rounded-lg border text-sm",
        className,
      )}
      {...props}
    />
  ),
  figcaption: Figcaption,

  // Custom Components
  ComponentPreview,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  Steps,
  Step,
  LinkButton,
  Icons,
};
