import type { Registry } from "shadcn/schema";

import { examples } from "./examples/_registry";
import { hooks } from "./hooks/_registry";
import { lib } from "./lib/_registry";
import { styles } from "./styles/_registry";
import { ui } from "./ui/_registry";

export const registry = {
  name: "kanpeki",
  homepage: "https://kanpeki.vercel.app",
  items: [...ui, ...lib, ...hooks, ...examples, ...styles],
} satisfies Registry;
