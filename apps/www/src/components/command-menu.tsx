"use client";

import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { SortedResult } from "fumadocs-core/search";
import {
  FileIcon,
  FileTextIcon,
  HashIcon,
  LaptopIcon,
  Loader2Icon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  TextIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Collection } from "react-aria-components";
import type { NavItem, SidebarNavItem } from "~/config/docs";
import useDebouncedCallback from "~/hooks/use-debounced-callback";
import { Autocomplete } from "~/registry/ui/autocomplete";
import { Button } from "~/registry/ui/button";
import { Dialog } from "~/registry/ui/dialog";
import { InputGroup } from "~/registry/ui/input-group";
import { Keyboard } from "~/registry/ui/keyboard";
import { Menu } from "~/registry/ui/menu";
import { ScrollArea } from "~/registry/ui/scroll-area";
import { SearchField } from "~/registry/ui/search-field";
import { Separator } from "~/registry/ui/separator";

interface CommandMenuProps {
  mainNav: NavItem[];
  sidebarNav: SidebarNavItem[];
}

export function CommandMenu({ mainNav, sidebarNav }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const setDebouncedQuery = useDebouncedCallback(
    (value: string) => {
      setQuery(value);
    },
    1000 // 1 second of delay
  );

  const isQueryNonEmpty = query.trim() !== "";

  const searchQuery = useQuery<SortedResult[]>({
    queryKey: ["search", query],
    queryFn: async ({ signal }) => {
      const url = new URL("/api/search", window.location.origin);
      url.searchParams.append("query", query);
      const res = await fetch(url, { signal });
      return await res.json();
    },
    enabled: isQueryNonEmpty,
  });

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      "keydown",
      (e) => {
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
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, []);

  return (
    <Dialog.Root isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        className="relative h-8 w-full justify-start rounded-md bg-muted/50 font-normal text-muted-fg text-sm shadow-none sm:pr-12 md:w-40 lg:w-64"
        onPress={() => setIsOpen(true)}
        variant="outline"
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <Keyboard className="absolute top-[0.3rem] right-[0.3rem] hidden sm:flex">
          <span className="text-xs">⌘</span>K
        </Keyboard>
      </Button>
      <Dialog.Overlay>
        <Dialog.Modal className="rounded-lg p-0">
          <Dialog.Content className="gap-0">
            <Autocomplete
              defaultInputValue={query}
              disableVirtualFocus
              onInputChange={setDebouncedQuery}
            >
              <InputGroup.Root
                render={
                  <SearchField.Root
                    autoFocus
                    className="h-12 items-center gap-2 border-transparent dark:bg-transparent"
                  />
                }
              >
                <InputGroup.Addon>
                  {searchQuery.isLoading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <SearchIcon />
                  )}
                </InputGroup.Addon>
                <InputGroup.Input placeholder="Type a command or search..." />
                <InputGroup.Addon align="inline-end">
                  <SearchField.Button />
                </InputGroup.Addon>
              </InputGroup.Root>
              <Separator />
              <ScrollArea.Root>
                <ScrollArea.Viewport className="max-h-75">
                  <Menu.Content
                    className="border-none bg-transparent px-2 **:data-[slot=menu-item]:min-h-10 **:data-[slot=menu-item]:py-0"
                    onAction={() => setQuery("")}
                    renderEmptyState={() => (
                      <Menu.Empty>No results found.</Menu.Empty>
                    )}
                  >
                    <DefaultCommandMenuItems
                      mainNav={mainNav}
                      sidebarNav={sidebarNav}
                    />

                    <CommandMenuSearchItems searchQuery={searchQuery} />
                  </Menu.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </Autocomplete>
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}

function DefaultCommandMenuItems({ mainNav, sidebarNav }: CommandMenuProps) {
  const { setTheme } = useTheme();

  return (
    <>
      <Menu.Group>
        <Menu.Label>Links</Menu.Label>
        <Collection items={mainNav}>
          {(navItem) => (
            <Menu.Item
              href={navItem.disabled ? undefined : navItem.href}
              id={navItem.href}
              isDisabled={navItem.disabled}
              textValue={navItem.title}
            >
              <FileIcon className="size-5" />
              {navItem.title}
            </Menu.Item>
          )}
        </Collection>
      </Menu.Group>
      <Collection items={sidebarNav}>
        {(group) => (
          <Menu.Group id={group.title}>
            <Menu.Label>{group.title}</Menu.Label>
            {group.items?.map((navItem) => (
              <Menu.Item
                href={navItem.disabled ? undefined : navItem.href}
                isDisabled={navItem.disabled}
                key={navItem.href}
                textValue={navItem.title}
              >
                <FileTextIcon className="size-5" />
                {navItem.title}
              </Menu.Item>
            ))}
          </Menu.Group>
        )}
      </Collection>
      <Menu.Separator />
      <Menu.Group>
        <Menu.Label>Theme</Menu.Label>
        <Menu.Item onAction={() => setTheme("light")} textValue="Light">
          <SunIcon className="size-5" />
          Light
        </Menu.Item>
        <Menu.Item onAction={() => setTheme("dark")} textValue="Dark">
          <MoonIcon className="size-5" />
          Dark
        </Menu.Item>
        <Menu.Item onAction={() => setTheme("system")} textValue="System">
          <LaptopIcon className="size-5" />
          System
        </Menu.Item>
      </Menu.Group>
    </>
  );
}

interface CommandMenuSearchIconProps {
  type: SortedResult["type"];
}

function CommandMenuSearchIcon({ type }: CommandMenuSearchIconProps) {
  if (type === "page") {
    return <FileTextIcon className="size-5" />;
  }

  return (
    <>
      <div className="ms-2 h-full min-h-10 w-px bg-border" />
      {type === "heading" ? (
        <HashIcon className="size-5" />
      ) : (
        <TextIcon className="size-5" />
      )}
    </>
  );
}

interface CommandMenuSearchItemsProps {
  searchQuery: UseQueryResult<SortedResult<string>[], Error>;
}

function CommandMenuSearchItems({ searchQuery }: CommandMenuSearchItemsProps) {
  return (
    <Menu.Group>
      <Menu.Label>Search Results</Menu.Label>

      <Collection items={searchQuery.data ?? []}>
        {(item) => (
          <Menu.Item href={item.url} id={item.id} textValue={item.content}>
            <CommandMenuSearchIcon type={item.type} />
            <span className="w-0 flex-1 truncate">{item.content}</span>
          </Menu.Item>
        )}
      </Collection>
    </Menu.Group>
  );
}
