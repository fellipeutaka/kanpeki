import { cva } from "~/registry/lib/cva";

export const AlertStyles = {
  Description: cva({
    base: [
      "col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
    ],
  }),
  Root: cva({
    base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
    defaultVariants: {
      variant: "default",
    },

    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
        warning:
          "bg-card text-amber-400 *:data-[slot=alert-description]:text-amber-400/90 [&>svg]:text-current",
      },
    },
  }),
  Title: cva({
    base: ["col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight"],
  }),
};
