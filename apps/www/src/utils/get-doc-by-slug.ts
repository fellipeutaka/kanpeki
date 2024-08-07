import { docs } from "~:content";

export function getDocBySlug(slug: string[] | undefined) {
  const doc = docs.find((doc) => doc.slugAsParams === slug?.join("/"));

  if (!doc) {
    return null;
  }

  return doc;
}
