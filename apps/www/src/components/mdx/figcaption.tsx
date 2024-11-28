import { cn } from "~/lib/cva";
import { CopyButton } from "./copy-button";
import { LanguageIcon } from "./language-icon";

interface FigcaptionProps extends React.ComponentProps<"figcaption"> {
  "data-language": string;
  __rawString__: string;
  children: string;
}

export function Figcaption({
  className,
  children,
  "data-language": language,
  __rawString__,
  ...props
}: FigcaptionProps) {
  return (
    <figcaption
      className={cn("flex items-center gap-2 border-b px-4 py-1.5", className)}
      {...props}
    >
      <LanguageIcon title={children} language={language} />
      <span className="flex-1 truncate text-muted-fg">{children}</span>
      <CopyButton text={__rawString__} />
    </figcaption>
  );
}
