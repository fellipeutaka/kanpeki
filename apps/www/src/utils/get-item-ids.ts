import type { Docs } from "~:content";

function getUrls(toc: Docs["toc"]): string[] {
  return toc.flatMap((item) => [
    item.url,
    ...(item.items ? getUrls(item.items) : []),
  ]);
}

export function getItemIds(toc: Docs["toc"]) {
  return getUrls(toc)
    .filter(Boolean)
    .map((id) => id.split("#")[1]);
}
