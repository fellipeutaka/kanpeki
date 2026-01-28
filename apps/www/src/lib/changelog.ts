import { source } from "~/lib/source";

export type ChangelogPage = ReturnType<typeof source.getPages>[number] & {
  date: Date | null;
};

/**
 * Safely parse a date from frontmatter.
 * Returns null if the date is invalid or not provided.
 */
function parseDate(date: unknown): Date | null {
  if (!date) {
    return null;
  }
  const parsed = date instanceof Date ? date : new Date(date as string);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Gets all changelog pages sorted by date descending.
 * Filters pages that are in the changelog directory and have more than 1 slug segment.
 */
export function getChangelogPages(): ChangelogPage[] {
  return source
    .getPages()
    .filter((page) => page.slugs[0] === "changelog" && page.slugs.length > 1)
    .map((page) => ({
      ...page,
      date: parseDate(page.data.date),
    }))
    .sort((a, b) => {
      const dateA = a.date?.getTime() ?? 0;
      const dateB = b.date?.getTime() ?? 0;
      return dateB - dateA;
    });
}
