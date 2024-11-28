import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "~/components/mdx/mdx-content";
import { getItemIds } from "~/utils/get-item-ids";
import { getDocBySlug, getDocs } from "~/utils/mdx";
import { Contribute } from "./_components/contribute";
import { DocsHeader } from "./_components/docs-header";
import { DocsPager } from "./_components/docs-pager";
import { TableOfContents } from "./_components/table-of-contents";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

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
  const docs = await getDocs();

  return docs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const itemIds = getItemIds(doc.toc);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsHeader doc={doc} />
        <div className="mdx flex w-full max-w-full flex-col pt-8 pb-12">
          <MDXContent code={doc.content} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc.length > 0 && (
        <div className="hidden text-sm xl:block">
          <TableOfContents toc={doc.toc} itemIds={itemIds}>
            <Contribute doc={doc} />
          </TableOfContents>
        </div>
      )}
    </main>
  );
}
