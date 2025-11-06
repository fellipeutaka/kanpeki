"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Collection } from "react-aria-components";
import { Label } from "~/registry/ui/label";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";
import { Select } from "~/registry/ui/select";
import { Spinner } from "~/registry/ui/spinner";

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export function SelectInfiniteScrollDemo() {
  const query = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: async ({ pageParam, signal }) => {
      const { limit, offset } = pageParam;
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
        {
          signal,
        }
      );
      const data = (await res.json()) as PokemonListResponse;
      return data;
    },
    initialPageParam: {
      offset: 0,
      limit: 40,
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.next) {
        return {
          offset: lastPageParam.offset + lastPageParam.limit,
          limit: lastPageParam.limit,
        };
      }
    },
    getPreviousPageParam: (firstPage, _allPages, firstPageParam) => {
      if (firstPage.previous) {
        return {
          offset: firstPageParam.offset - firstPageParam.limit,
          limit: firstPageParam.limit,
        };
      }
    },
  });

  const items = query.data?.pages.flatMap((page) => page.results) || [];

  return (
    <Select.Root aria-label="Pokémons" placeholder="Select a Pokémon">
      <Label>Choose a Pokémon</Label>

      <Select.Trigger className="w-[180px]">
        <Select.Value className="capitalize" />
      </Select.Trigger>
      <Popover.Content>
        <Listbox.Root
          renderEmptyState={() => (
            <Listbox.Empty>
              {query.isFetched ? (
                "No Pokémons found."
              ) : (
                <>
                  <Spinner />
                  <span className="sr-only">Loading more...</span>
                </>
              )}
            </Listbox.Empty>
          )}
        >
          <Collection items={items}>
            {(item) => (
              <Listbox.Item className="capitalize" id={item.name}>
                {item.name}
              </Listbox.Item>
            )}
          </Collection>
          <Listbox.LoadMoreItem
            isLoading={query.isFetchingNextPage}
            onLoadMore={query.fetchNextPage}
          >
            <Spinner />
            <span className="sr-only">Loading more...</span>
          </Listbox.LoadMoreItem>
        </Listbox.Root>
      </Popover.Content>
    </Select.Root>
  );
}
