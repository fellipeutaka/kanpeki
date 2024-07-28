import { docs } from "~:content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "~/components/mdx/mdx-content";
import { DocsHeader } from "./_components/docs-header";
import { DocsPager } from "./_components/docs-pager";
import { TableOfContents } from "./_components/table-of-contents";

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
        <DocsHeader doc={doc} />
        <div className="mdx pt-8 pb-12">
          <MDXContent code={doc.content} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc.length > 0 && (
        <div className="hidden text-sm xl:block">
          <TableOfContents toc={doc.toc} itemIds={itemIds} />
        </div>
      )}
    </main>
  );
}
