import { ExternalLinkIcon } from "lucide-react";
import { Icons } from "~/components/icons";
import type { source } from "~/lib/source";
import { BadgeStyles } from "~/registry/ui/badge/styles";
import { LinkButton } from "~/registry/ui/link-button";
import { DocsBreadcrumb } from "./docs-breadcrumb";

interface DocsHeaderProps {
  page: NonNullable<ReturnType<(typeof source)["getPage"]>>;
}

export function DocsHeader({ page }: DocsHeaderProps) {
  const { data, url } = page;

  return (
    <>
      <DocsBreadcrumb url={url} />
      <div className="space-y-2">
        <h1 className="wrap-break-word scroll-m-20 font-bold text-3xl tracking-tight">
          {data.title}
        </h1>
        <p className="text-balance text-base text-muted-foreground">
          {data.description}
        </p>
      </div>
      {data.links && (
        <div className="mt-4 flex items-center gap-x-2">
          {data.links?.docs && (
            <LinkButton
              className={BadgeStyles({
                className: "h-auto gap-1.5",
                variant: "secondary",
              })}
              href={data.links.docs}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DocsLinkIcon link={data.links.docs} />
              Docs
              <ExternalLinkIcon className="size-3" />
            </LinkButton>
          )}
          {data.links?.api && (
            <LinkButton
              className={BadgeStyles({
                className: "h-auto gap-1.5",
                variant: "secondary",
              })}
              href={data.links.api}
              rel="noopener noreferrer"
              target="_blank"
            >
              API Reference
              <ExternalLinkIcon className="size-3" />
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

  if (link.startsWith("https://www.radix-ui.com")) {
    return <Icons.RadixUI className="size-3" />;
  }

  return null;
}
