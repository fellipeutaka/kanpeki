import { docs } from "~:content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "~/components/mdx";
import { TableOfContents } from "~/components/table-of-contents";
import { Icons } from "~/components/ui/icons";

async function getDocFromParams(params: PageProps["params"]) {
  const slug = params.slug?.join("/");
  const doc = docs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: doc.slug,
    },
  };
}

export async function generateStaticParams() {
  return docs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

interface PageProps {
  params: {
    slug?: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  const itemIds = doc.toc
    .flatMap((item) => [item.url, item.items?.map((item) => item.url)])
    .flat()
    .filter(Boolean)
    .map((id) => id?.split("#")[1]);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-muted-foreground text-sm leading-none">
          <div className="truncate">Docs</div>
          <Icons.ChevronRight className="size-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 font-bold text-3xl tracking-tight">
            {doc.title}
          </h1>
          <p className="text-balance text-base text-muted-foreground">
            {doc.description}
          </p>
        </div>
        <MDXContent code={doc.content} />
      </div>
      {doc.toc.length > 0 && (
        <div className="hidden text-sm xl:block">
          <TableOfContents toc={doc.toc} itemIds={itemIds} />
        </div>
      )}
    </main>
  );
}
