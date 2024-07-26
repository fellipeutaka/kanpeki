import { cn } from "~/utils/cn";
import { Icons } from "../ui/icons";

type Types = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps<T extends Types> = Omit<React.ComponentProps<T>, "as"> & {
  as?: T;
};

export const Heading = <T extends Types = "h1">(props: HeadingProps<T>) => {
  const { as, className, children, id, ...rest } = props;
  const Component = as || "h1";

  return (
    <Component className={cn("scroll-m-20", className)} id={id} {...rest}>
      <a href={`#${id}`} className="group">
        {children}
        <Icons.Link
          aria-label="Link to section"
          className="ml-2 inline size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
        />
      </a>
    </Component>
  );
};
