import { type IconProps, Icons } from "@kanpeki/ui/icons";
import { cn } from "@kanpeki/utils/cn";

const folderNameMap = new Map([
  ["src", [Icons.SrcFolder, Icons.SrcFolderOpen]],
  ["app", [Icons.AppFolder, Icons.AppFolderOpen]],
  ["components", [Icons.ComponentsFolder, Icons.ComponentsFolderOpen]],
  ["config", [Icons.ConfigFolder, Icons.ConfigFolderOpen]],
  ["hooks", [Icons.HookFolder, Icons.HookFolderOpen]],
  ["styles", [Icons.CssFolder, Icons.CssFolderOpen]],
  ["utils", [Icons.UtilsFolder, Icons.UtilsFolderOpen]],
  ["ui", [Icons.ThemeFolder, Icons.ThemeFolderOpen]],
]);

interface FolderIconProps extends IconProps {
  title: string;
  isOpen: boolean;
}

export function FolderIcon({
  title,
  isOpen,
  className,
  ...props
}: FolderIconProps) {
  const Icon = folderNameMap.get(title);

  if (!Icon) {
    return isOpen ? (
      <Icons.FolderOpen className={cn("size-4", className)} {...props} />
    ) : (
      <Icons.Folder className={cn("size-4", className)} {...props} />
    );
  }

  const [FolderIcon, FolderIconOpen] = Icon;

  return isOpen ? (
    <FolderIconOpen className={cn("size-4", className)} {...props} />
  ) : (
    <FolderIcon className={cn("size-4", className)} {...props} />
  );
}
