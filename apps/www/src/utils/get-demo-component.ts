import { cache } from "react";

export const getComponentDemo = cache(async (name: string) => {
  return await import(`~/demos/${name}`);
});
