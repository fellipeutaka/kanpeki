import { cache } from "react";

export const getComponentDemo = cache(
  async (name: string) => await import(`~/demos/${name}`)
);
