import { FileIcon, type LucideIcon, TerminalIcon } from "lucide-react";
import { type Icon, type IconProps, Icons } from "~/components/icons";
import { cn } from "~/registry/lib/cva";

const titleMap = new Map([
  ["tailwind.config.{js,cjs,mjs,ts}", Icons.TailwindCSS],
  ["next.config.{js,cjs,mjs,ts}", Icons.NextJS],
  ["postcss.config.{js,cjs,mjs}", Icons.PostCSS],
  ["package.json", Icons.Node],
  ["tsconfig.json", Icons.TSConfig],
]);

const extensionMap = new Map<string, Icon | LucideIcon>([
  ["cjs", Icons.JavaScript],
  ["js", Icons.JavaScript],
  ["ts", Icons.TypeScript],
  ["jsx", Icons.React],
  ["tsx", Icons.React],
  ["mdx", Icons.Mdx],
  ["bash", TerminalIcon],
  ["sh", TerminalIcon],
  ["shell", TerminalIcon],
  ["zsh", TerminalIcon],
  ["json", Icons.Json],
  ["css", Icons.Css],
  ["astro", Icons.Astro],
]);

function convertPatternToRegex(pattern: string): string {
  return pattern.replace(
    /{([^}]+)}/g,
    (_, group) => `(${group.replace(/,/g, "|")})`
  );
}

function getIconByTitle(title: string) {
  for (const [pattern, icon] of titleMap) {
    const regexPattern = convertPatternToRegex(pattern);
    const regex = new RegExp(`^${regexPattern}$`);
    if (regex.test(title)) {
      return icon;
    }
  }
  return null;
}

interface LanguageIconProps extends IconProps {
  title: string;
  language: string;
}

export function LanguageIcon({
  title,
  language,
  className,
  ...props
}: LanguageIconProps) {
  const IconComponent =
    getIconByTitle(title) || extensionMap.get(language) || FileIcon;

  return <IconComponent className={cn("size-3.5", className)} {...props} />;
}
