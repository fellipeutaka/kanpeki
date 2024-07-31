import { type IconProps, Icons } from "@kanpeki/ui/icons";
import { cn } from "@kanpeki/utils/cn";

interface LanguageIconProps extends IconProps {
  title: string;
  language: string;
}

const languageIconMap = new Map([
  ["js", Icons.JavaScript],
  ["ts", Icons.TypeScript],
  ["jsx", Icons.React],
  ["tsx", Icons.React],
  ["mdx", Icons.Mdx],
  ["bash", Icons.Terminal],
  ["sh", Icons.Terminal],
  ["shell", Icons.Terminal],
  ["zsh", Icons.Terminal],
  ["json", Icons.Json],
  ["css", Icons.Css],
]);

export function LanguageIcon({
  title,
  language,
  className,
  ...props
}: LanguageIconProps) {
  if (title.startsWith("tailwind.config")) {
    return (
      <Icons.TailwindCSS className={cn("size-3.5", className)} {...props} />
    );
  }

  const IconComponent = languageIconMap.get(language) || Icons.File;
  return <IconComponent className={cn("size-3.5", className)} {...props} />;
}
