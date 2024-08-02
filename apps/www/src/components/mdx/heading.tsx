import { Icons } from "@kanpeki/ui/icons";
import { cn } from "@kanpeki/utils/cn";

type Types = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps<T extends Types> = React.ComponentProps<T> & {
  as?: T;
};

export const Heading = <T extends Types = "h1">(props: HeadingProps<T>) => {
  const { as, className, children, id, ...rest } = props;
  const Component = as || "h1";

  return (
    <Component className={cn("scroll-m-20", className)} id={id} {...rest}>
      <a
        href={`#${id}`}
        className="group flex items-center gap-2 outline-none ring-ring ring-offset-2 ring-offset-background transition focus-visible:ring-2"
      >
        {children}
        <Icons.Link
          aria-label="Link to section"
          className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </a>
    </Component>
  );
};
