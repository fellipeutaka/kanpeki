export async function getIconifyCollections(options?: RequestInit) {
  const response = await fetch(
    "https://api.iconify.design/collections",
    options,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Iconify collections");
  }

  return (await response.json()) as IconifyCollections;
}

export function getCollectionsGroupedByCategory(
  collections: IconifyCollections,
) {
  const groupedCollections: {
    category: string;
    collections: IconifyCollection[];
  }[] = [];

  for (const [name, collection] of Object.entries(collections)) {
    const category = collection.category;

    if (!category) {
      continue;
    }

    const group = groupedCollections.find(
      (group) => group.category === category,
    );

    if (group) {
      group.collections.push({
        ...collection,
        name,
        displayName: collection.name,
      });
    } else {
      groupedCollections.push({
        category,
        collections: [
          {
            ...collection,
            name,
            displayName: collection.name,
          },
        ],
      });
    }
  }

  return groupedCollections;
}

type IconifyCollection = {
  displayName: string;
  name: string;
  total: number;
  author: {
    name: string;
    url: string;
  };
  license: {
    title: string;
    spdx: string;
    url: string;
  };
  samples: string[];
  height: number;
  category: string;
  palette: boolean;
};

export type IconifyCollections = Record<string, IconifyCollection>;

interface GetIconifyCollectionProps {
  prefix: string;
  info?: boolean;
  chars?: boolean;
}

export async function getIconifyCollection<
  TProps extends GetIconifyCollectionProps,
>(props: TProps, options?: RequestInit) {
  const url = new URL("https://api.iconify.design/collection");
  url.searchParams.set("prefix", props.prefix);

  if (props.info) {
    url.searchParams.set("info", String(props.info));
  }
  if (props.chars) {
    url.searchParams.set("chars", String(props.chars));
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch Iconify collection");
  }

  return (await response.json()) as GetIconifyCollectionResponse<TProps>;
}

interface BaseGetIconifyCollectionResponse {
  prefix: string;
  total: number;
  title: string;
  uncategorized: string[];
  categories: Record<string, string[]>;
  hidden: string[];
  aliases: Record<string, string>;
}

interface GetIconifyCollectionResponseWithInfo
  extends BaseGetIconifyCollectionResponse {
  info: Omit<IconifyCollection, "displayName">;
}

interface GetIconifyCollectionResponseWithChars
  extends BaseGetIconifyCollectionResponse {
  chars: Record<string, string>;
}

export type GetIconifyCollectionResponse<
  TProps extends GetIconifyCollectionProps,
> = TProps extends { info: true; chars: true }
  ? GetIconifyCollectionResponseWithInfo & GetIconifyCollectionResponseWithChars
  : TProps extends { chars: true }
    ? GetIconifyCollectionResponseWithChars
    : TProps extends { info: true }
      ? GetIconifyCollectionResponseWithInfo
      : BaseGetIconifyCollectionResponse;
