import { cn } from "~/utils/cn";
import { type IconProps, Icons } from "./ui/icons";

interface LanguageIconProps extends IconProps {
  lang: string;
}

export function LanguageIcon({ lang, className, ...props }: LanguageIconProps) {
  switch (lang) {
    case "js": {
      return (
        <Icons.JavaScript className={cn("size-3.5", className)} {...props} />
      );
    }

    case "ts": {
      return (
        <Icons.TypeScript className={cn("size-3.5", className)} {...props} />
      );
    }

    case "jsx":
    case "tsx": {
      return <Icons.React className={cn("size-3.5", className)} {...props} />;
    }

    case "mdx": {
      return <Icons.Mdx className={cn("size-3.5", className)} {...props} />;
    }

    case "bash":
    case "sh":
    case "shell":
    case "zsh": {
      return <Icons.Terminal className={cn("size-3.5", className)} />;
    }

    default: {
      return <Icons.File className={cn("size-3.5", className)} {...props} />;
    }
  }
}
