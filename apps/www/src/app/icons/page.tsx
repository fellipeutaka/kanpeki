import { Icons } from "@kanpeki/ui/icons";
import {
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
} from "@kanpeki/ui/text-field";
import {
  getCollectionsGroupedByCategory,
  getIconifyCollections,
} from "~/lib/iconify";
import { IconifyCollectionsList } from "./_components/iconify-collections-list";

export default async function Page() {
  const collections = await getIconifyCollections();
  const collectionsGroupedByCategory =
    getCollectionsGroupedByCategory(collections);

  return (
    <main className="container pt-20 md:pt-40">
      <section className="space-y-2">
        <h1 className="scroll-m-20 font-bold text-3xl tracking-tight">Icons</h1>

        <TextFieldRoot>
          <TextFieldSlot>
            <Icons.Search className="size-4 text-muted-foreground" />
          </TextFieldSlot>
          <TextFieldInput autoCorrect="off" placeholder="Search category..." />
        </TextFieldRoot>
      </section>

      <IconifyCollectionsList collections={collectionsGroupedByCategory} />
    </main>
  );
}
