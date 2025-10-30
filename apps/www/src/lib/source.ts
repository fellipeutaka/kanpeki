import { loader } from "fumadocs-core/source";
import { docs } from "~:content";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
