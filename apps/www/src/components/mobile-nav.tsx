"use client";

import { Button } from "@kanpeki/ui/button";
import { Dialog } from "@kanpeki/ui/dialog";
import { Icons } from "@kanpeki/ui/icons";
import { ScrollArea } from "@kanpeki/ui/scroll-area";
import { cn } from "@kanpeki/utils/cn";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { docsConfig } from "~/config/docs";
import { siteConfig } from "~/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root isOpen={open} onOpenChange={setOpen} sheet>
      <Button
        variant="outline"
        size="icon"
        className="mr-2 size-8 rounded-full md:hidden"
        aria-label="Toggle Menu"
        onPress={() => setOpen((open) => !open)}
      >
        <div
          className={cn(
            "-translate-y-1 absolute h-0.5 w-3.5 transform-gpu bg-muted-foreground transition-transform",
            open && "translate-y-0 rotate-45",
          )}
          aria-hidden
        />
        <div
          className={cn(
            "absolute h-0.5 w-3.5 translate-y-1 transform-gpu bg-muted-foreground transition-transform",
            open && "-rotate-45 translate-y-0",
          )}
          aria-hidden
        />
      </Button>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content side="left">
          <Dialog.Close>
            <Icons.X className="size-4" />
          </Dialog.Close>
          <MobileLink
            href="/"
            className="flex w-max items-center"
            onOpenChange={setOpen}
          >
            <Icons.Logo className="mr-2 size-4" />
            <span className="font-bold">{siteConfig.name}</span>
          </MobileLink>
          <ScrollArea.Root className="my-4 h-[calc(100dvh-8rem)] pb-10 pl-6 [mask-image:linear-gradient(black_80%,transparent)]">
            <ScrollArea.Viewport>
              <div className="flex flex-col space-y-3">
                {docsConfig.mainNav?.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ))}
              </div>
              <div className="space-y-2">
                {docsConfig.sidebarNav.map((item) => (
                  <div key={item.title} className="flex flex-col gap-3 pt-6">
                    <h4 className="font-medium">{item.title}</h4>
                    {item?.items?.length &&
                      item.items.map((item) => (
                        <Fragment key={item.href}>
                          {!item.disabled &&
                            (item.href ? (
                              <MobileLink
                                href={item.href}
                                onOpenChange={setOpen}
                                className="text-muted-foreground"
                              >
                                {item.title}
                                {item.label && (
                                  <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-[#000000] text-xs leading-none no-underline group-hover:no-underline">
                                    {item.label}
                                  </span>
                                )}
                              </MobileLink>
                            ) : (
                              item.title
                            ))}
                        </Fragment>
                      ))}
                  </div>
                ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
