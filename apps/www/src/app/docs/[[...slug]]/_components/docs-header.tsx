import type { Docs as Doc } from "~:content";
import { BadgeStyles } from "@kanpeki/ui/badge";
import { Icons } from "@kanpeki/ui/icons";
import { LinkButton } from "@kanpeki/ui/link-button";
import { DocsBreadcrumb } from "./docs-breadcrumb";

interface DocsHeaderProps {
  doc: Doc;
}

export function DocsHeader({ doc }: DocsHeaderProps) {
  return (
    <>
      <DocsBreadcrumb doc={doc} />
      <div className="space-y-2">
        <h1 className="scroll-m-20 font-bold text-3xl tracking-tight">
          {doc.title}
        </h1>
        <p className="text-balance text-base text-muted-foreground">
          {doc.description}
        </p>
      </div>
      {doc.links && (
        <div className="mt-4 flex items-center gap-x-2">
          {doc.links?.docs && (
            <LinkButton
              href={doc.links.docs}
              target="_blank"
              rel="noreferrer"
              className={BadgeStyles({
                variant: "secondary",
                nativeFocus: false,
                className: "h-auto gap-1.5",
              })}
            >
              <DocsLinkIcon link={doc.links.docs} />
              Docs
              <Icons.ExternalLink className="size-3" />
            </LinkButton>
          )}
          {doc.links?.api && (
            <LinkButton
              href={doc.links.api}
              target="_blank"
              rel="noreferrer"
              className={BadgeStyles({
                variant: "secondary",
                nativeFocus: false,
                className: "h-auto gap-1.5",
              })}
            >
              API Reference
              <Icons.ExternalLink className="size-3" />
            </LinkButton>
          )}
        </div>
      )}
    </>
  );
}

interface DocsLinkIconProps {
  link: string;
}

function DocsLinkIcon({ link }: DocsLinkIconProps) {
  if (link.startsWith("https://react-spectrum.adobe.com")) {
    return <Icons.Adobe className="size-3" />;
  }

  return <Icons.RadixUI className="size-3" />;
}
