// biome-ignore lint/style/noNamespaceImport: This is needed for MDX to work
import * as runtime from "react/jsx-runtime";
import { cn } from "~/utils/cn";
import { ComponentPreview } from "./component-preview";
import { Heading } from "./heading";
import { InstallationTab, InstallationTabs } from "./installation-tabs-wrapper";
import { Pre } from "./pre";
import { Step, Steps } from "./steps";

const components = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="mt-2 font-bold text-4xl tracking-tight" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <Heading
      as="h2"
      className="mt-10 border-b pb-1 font-semibold text-3xl tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <Heading
      as="h3"
      className="mt-8 font-semibold text-2xl tracking-tight"
      {...props}
    />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <Heading
      as="h4"
      className="mt-8 font-semibold text-xl tracking-tight"
      {...props}
    />
  ),
  h5: (props: React.ComponentProps<"h5">) => (
    <Heading
      as="h5"
      className="mt-8 font-semibold text-lg tracking-tight"
      {...props}
    />
  ),
  h6: (props: React.ComponentProps<"h6">) => (
    <Heading
      as="h6"
      className="mt-8 font-semibold text-base tracking-tight"
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
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
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
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
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

  // Custom Components
  ComponentPreview,
  InstallationTabs,
  InstallationTab,
  Steps,
  Step,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
