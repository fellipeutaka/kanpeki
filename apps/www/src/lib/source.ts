import { loader } from "fumadocs-core/source";
import { docs } from "~:content/server";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
