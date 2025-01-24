export async function getDocs() {
  const { docs } = await import("~:content");

  return docs;
}

export async function getDocBySlug(slug: string[]) {
  const docs = await getDocs();
  const doc = docs.find((doc) => doc.slugAsParams === slug?.join("/"));

  if (!doc) {
    return null;
  }

  return doc;
}

export type Doc = Awaited<ReturnType<typeof getDocs>>[number];

export interface TocEntry {
  /**
   * Title of the entry
   */
  title: string;
  /**
   * URL that can be used to reach
   * the content
   */
  url: string;
  /**
   * Nested items
   */
  items: TocEntry[];
}

export interface CoverImage {
  /**
   * public url of the image
   */
  src: string;
  /**
   * image width
   */
  width: number;
  /**
   * image height
   */
  height: number;
  /**
   * blurDataURL of the image
   */
  blurDataURL: string;
  /**
   * blur image width
   */
  blurWidth: number;
  /**
   * blur image height
   */
  blurHeight: number;
}
