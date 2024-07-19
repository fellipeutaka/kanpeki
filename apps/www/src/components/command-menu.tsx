import { useEffect, useState } from "react";
import { mainNav, sidebarNav } from "~/config/docs";
import { Button } from "./ui/button";
import { Command } from "./ui/command";
import { Icons } from "./ui/icons";

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

  function setTheme(theme: string) {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onPress={() => setIsOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Command.Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
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
            <Command.Item onSelect={() => setTheme("light")}>
              <Icons.Sun className="mr-2 size-4" />
              Light
            </Command.Item>
            <Command.Item onSelect={() => setTheme("dark")}>
              <Icons.Moon className="mr-2 size-4" />
              Dark
            </Command.Item>
            <Command.Item onSelect={() => setTheme("system")}>
              <Icons.Laptop className="mr-2 size-4" />
              System
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
