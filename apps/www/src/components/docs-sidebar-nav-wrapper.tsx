import { ScrollArea } from "./ui/scroll-area";

interface DocsSidebarNavWrapperProps {
  children: React.ReactNode;
}

export function DocsSidebarNavWrapper({
  children,
}: DocsSidebarNavWrapperProps) {
  return (
    <ScrollArea.Root className="py-6 pr-6 lg:py-8">
      <ScrollArea.Viewport>{children}</ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
