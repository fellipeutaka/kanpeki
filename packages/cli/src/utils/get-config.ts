import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadConfig } from "tsconfig-paths";
import {
  type InferOutput,
  boolean,
  flatten,
  isValiError,
  optional,
  parseAsync,
  strictObject,
  string,
} from "valibot";
import { logger } from "./logger";
import { resolveImport } from "./resolve-import";

export const DEFAULT_JSON_SCHEMA = "https://kanpeki.vercel.app/schema.json";
export const DEFAULT_COMPONENTS = "~/components";
export const DEFAULT_UTILS = "~/utils";
export const DEFAULT_TAILWIND_CSS = "src/styles/globals.css";
export const DEFAULT_TAILWIND_CONFIG = "tailwind.config.ts";

export const configSchema = strictObject({
  $schema: optional(string()),
  rsc: boolean(),
  tailwind: strictObject({
    config: string(),
    css: string(),
    prefix: optional(string(), ""),
  }),
  aliases: strictObject({
    components: string(),
    utils: string(),
    ui: optional(string()),
  }),
});

export type Config = InferOutput<typeof configSchema>;

export async function getConfig(cwd: string) {
  const config = await getRawConfig(cwd);

  if (!config) {
    return null;
  }

  return await resolveConfigPaths(cwd, config);
}

export async function getRawConfig(cwd: string) {
  try {
    const configPath = resolve(cwd, "kanpeki.json");
    const config = await readFile(configPath, "utf8");

    return await parseAsync(configSchema, JSON.parse(config));
  } catch (err) {
    if (isValiError(err)) {
      logger.error(
        "There are issues with your configuration file. Please fix them before continuing.",
      );
      console.error(flatten(err.issues).nested);

      process.exit(1);
    }
  }
}

export async function resolveConfigPaths(cwd: string, config: Config) {
  // Read tsconfig.json.
  const tsConfig = loadConfig(cwd);

  if (tsConfig.resultType === "failed") {
    throw new Error(
      `Failed to load "tsconfig".json. ${tsConfig.message ?? ""}`.trim(),
    );
  }

  return {
    ...config,
    resolvedPaths: {
      tailwindConfig: resolve(cwd, config.tailwind.config),
      tailwindCss: resolve(cwd, config.tailwind.css),
      utils: await resolveImport(config.aliases.utils, tsConfig),
      components: await resolveImport(config.aliases.components, tsConfig),
      ui: config.aliases.ui
        ? await resolveImport(config.aliases.ui, tsConfig)
        : await resolveImport(config.aliases.components, tsConfig),
    },
  };
}

export type ConfigWithResolvedPaths = Awaited<
  ReturnType<typeof resolveConfigPaths>
>;