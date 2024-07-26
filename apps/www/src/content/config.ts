import { defineCollection, z } from "astro:content";

export const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
  type: "content",
});

export const collections = {
  docs: docsCollection,
};
