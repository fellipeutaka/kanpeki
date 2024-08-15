import { getIconifyCollection } from "~/lib/iconify";
import { IconifyCollectionList } from "../_components/iconify-collection-list";

interface PageProps {
  params: {
    collection: string;
  };
}

export default async function Page({ params }: PageProps) {
  const collection = await getIconifyCollection({
    prefix: params.collection,
    info: true,
  });

  return (
    <main className="container pt-20 md:pt-40">
      <h1>Page</h1>

      <IconifyCollectionList
        prefix={params.collection}
        icons={collection.uncategorized}
      />

      {params.collection}
    </main>
  );
}
