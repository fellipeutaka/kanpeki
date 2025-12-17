import { cva } from "~/registry/lib/cva";

export const FieldStyles = {
  Set: cva({
    base: [
      "flex flex-col gap-6",
      "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
    ],
  }),
  Legend: cva({
    base: ["mb-3 font-medium"],
    variants: {
      variant: {
        legend: "text-base",
        label: "text-sm",
      },
    },
    defaultVariants: {
      variant: "legend",
    },
  }),
  Group: cva({
    base: [
      "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
    ],
  }),
  Root: cva({
    base: "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",

    variants: {
      orientation: {
        vertical: ["flex-col *:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "*:data-[slot=field-label]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "@md/field-group:flex-row flex-col @md/field-group:items-center *:w-full @md/field-group:*:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:*:data-[slot=field-label]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }),
  Content: cva({
    base: ["group/field-content flex flex-1 flex-col gap-1.5 leading-snug"],
  }),
  Label: cva({
    base: [
      "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
      "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
      "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
    ],
  }),
  Title: cva({
    base: [
      "flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50",
    ],
  }),
  Description: cva({
    base: [
      "font-normal text-muted-foreground text-sm leading-normal group-has-orientation-horizontal/field:text-balance",
      "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
      "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
    ],
  }),
  Separator: cva({
    base: [
      "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
    ],
  }),
  Error: cva({
    base: ["font-normal text-destructive text-sm"],
  }),
};
