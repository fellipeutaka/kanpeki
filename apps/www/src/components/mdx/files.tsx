import { cn, cva } from "~/lib/cva";
import { LanguageIcon } from "./language-icon";

interface FilesProps extends React.ComponentProps<"div"> {}

export function Files({ children, className, ...props }: FilesProps) {
  return (
    <div {...props} className={cn("rounded-md border bg-card p-2", className)}>
      {children}
    </div>
  );
}

export const FileStyles = cva({
  base: [
    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-fg",
  ],
});

interface FileProps extends React.ComponentProps<"div"> {
  name: string;
  icon?: React.ReactNode;
}

export function File({ name, className, ...props }: FileProps) {
  return (
    <div {...props} className={FileStyles({ className })}>
      <LanguageIcon
        title={name}
        language={name.split(".").pop() || ""}
        className="size-4"
      />
      {name}
    </div>
  );
}
