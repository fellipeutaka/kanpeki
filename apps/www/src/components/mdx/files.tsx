import { cn } from "@kanpeki/utils/cn";
import { tv } from "tailwind-variants";
import { LanguageIcon } from "../language-icon";

type FilesProps = React.ComponentProps<"div">;

export function Files({ children, className, ...props }: FilesProps) {
  return (
    <div {...props} className={cn("rounded-md border bg-card p-2", className)}>
      {children}
    </div>
  );
}

export const FileStyles = tv({
  base: [
    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
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
