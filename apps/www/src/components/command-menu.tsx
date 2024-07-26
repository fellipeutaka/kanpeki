import { useEffect, useState } from "react";
import { mainNav, sidebarNav } from "~/config/docs";
import { type Theme, setTheme } from "~/utils/theme";
import { Button } from "./ui/button";
import { Command } from "./ui/command";
import { Icons } from "./ui/icons";
import { ScrollArea } from "./ui/scroll-area";

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setIsOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleSetTheme(theme: Theme) {
    return () => {
      setIsOpen(false);
      setTheme(theme);
    };
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 font-normal text-muted-foreground text-sm shadow-none sm:pr-12 md:w-40 lg:w-64"
        onPress={() => setIsOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Command.Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <ScrollArea.Root>
          <ScrollArea.Viewport className="max-h-[18.75rem]">
            <Command.List className="max-h-full">
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Links">
                {mainNav.map((navItem) => (
                  <Command.Item
                    key={navItem.href}
                    value={navItem.title}
                    onSelect={() => {
                      setIsOpen(false);
                    }}
                    asChild
                  >
                    <a href={navItem.href}>
                      <Icons.File className="mr-2 size-4" />
                      {navItem.title}
                    </a>
                  </Command.Item>
                ))}
              </Command.Group>
              {sidebarNav.map((group) => (
                <Command.Group key={group.title} heading={group.title}>
                  {group.items.map((navItem) => (
                    <Command.Item
                      key={navItem.href}
                      value={navItem.title}
                      onSelect={() => {
                        setIsOpen(false);
                      }}
                      asChild
                    >
                      <a href={navItem.href}>
                        <div className="mr-2 flex size-4 items-center justify-center">
                          <Icons.Circle className="size-3" />
                        </div>
                        {navItem.title}
                      </a>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
              <Command.Separator />
              <Command.Group heading="Theme">
                <Command.Item onSelect={handleSetTheme("light")}>
                  <Icons.Sun className="mr-2 size-4" />
                  Light
                </Command.Item>
                <Command.Item onSelect={handleSetTheme("dark")}>
                  <Icons.Moon className="mr-2 size-4" />
                  Dark
                </Command.Item>
                <Command.Item onSelect={handleSetTheme("system")}>
                  <Icons.Laptop className="mr-2 size-4" />
                  System
                </Command.Item>
              </Command.Group>
            </Command.List>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Command.Dialog>
    </>
  );
}
