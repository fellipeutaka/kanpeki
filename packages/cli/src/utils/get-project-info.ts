import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import fg from "fast-glob";
import { loadConfig } from "tsconfig-paths";
import {
  type Config,
  DEFAULT_JSON_SCHEMA,
  getConfig,
  resolveConfigPaths,
} from "./get-config";

// TODO: Add support for more frameworks.
// We'll start with Next.js for now.
const PROJECT_TYPES = [
  "next-app",
  "next-app-src",
  "next-pages",
  "next-pages-src",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];

const PROJECT_SHARED_IGNORE = [
  "**/node_modules/**",
  ".next",
  "public",
  "dist",
  "build",
];

export async function getProjectInfo() {
  const info = {
    tsconfig: null,
    srcDir: false,
    appDir: false,
    srcComponentsUiDir: false,
    componentsUiDir: false,
  };

  try {
    const tsconfig = await getTsConfig();

    return {
      tsconfig,
      srcDir: existsSync(resolve("./src")),
      appDir: existsSync(resolve("./app")) || existsSync(resolve("./src/app")),
      srcComponentsUiDir: existsSync(resolve("./src/components/ui")),
      componentsUiDir: existsSync(resolve("./components/ui")),
    };
  } catch {
    return info;
  }
}

export async function getTsConfig() {
  try {
    const tsconfigPath = join("tsconfig.json");
    const tsconfig = JSON.parse(await readFile(tsconfigPath, "utf8"));

    if (!tsconfig) {
      throw new Error("tsconfig.json is missing");
    }

    return tsconfig;
  } catch {
    return null;
  }
}

export async function getProjectConfig(cwd: string) {
  // Check for existing component config.
  const existingConfig = await getConfig(cwd);
  if (existingConfig) {
    return existingConfig;
  }

  const projectType = await getProjectType(cwd);
  const tailwindCssFile = await getTailwindCssFile(cwd);
  const tsConfigAliasPrefix = getTsConfigAliasPrefix(cwd);

  if (!(projectType && tailwindCssFile && tsConfigAliasPrefix)) {
    return null;
  }

  const config: Config = {
    $schema: DEFAULT_JSON_SCHEMA,
    rsc: new Set<ProjectType>(["next-app", "next-app-src"]).has(projectType),
    tailwind: {
      config: "tailwind.config.ts",
      css: tailwindCssFile,
      prefix: "",
    },
    aliases: {
      components: `${tsConfigAliasPrefix}/components`,
      utils: `${tsConfigAliasPrefix}/utils`,
    },
  };

  return await resolveConfigPaths(cwd, config);
}

export async function getProjectType(cwd: string): Promise<ProjectType | null> {
  const files = await fg.glob("**/*", {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  const isNextProject = files.find((file) => file.startsWith("next.config."));
  if (!isNextProject) {
    return null;
  }

  const isUsingSrcDir = existsSync(resolve(cwd, "src"));
  const isUsingAppDir = existsSync(
    resolve(cwd, `${isUsingSrcDir ? "src/" : ""}app`),
  );

  if (isUsingAppDir) {
    return isUsingSrcDir ? "next-app-src" : "next-app";
  }

  return isUsingSrcDir ? "next-pages-src" : "next-pages";
}

export async function getTailwindCssFile(cwd: string) {
  const files = await fg.glob("**/*.css", {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  if (!files.length) {
    return null;
  }

  for (const file of files) {
    const contents = await readFile(resolve(cwd, file), "utf8");
    // Assume that if the file contains `@tailwind base` it's the main css file.
    if (contents.includes("@tailwind base")) {
      return file;
    }
  }

  return null;
}

export function getTsConfigAliasPrefix(cwd: string) {
  const tsConfig = loadConfig(cwd);

  if (tsConfig?.resultType === "failed" || !tsConfig?.paths) {
    return null;
  }

  // This assume that the first alias is the prefix.
  for (const [alias, paths] of Object.entries(tsConfig.paths)) {
    if (paths.includes("./*") || paths.includes("./src/*")) {
      return alias.at(0);
    }
  }

  return null;
}

export async function preFlight(cwd: string) {
  const tailwindConfig = await fg.glob("tailwind.config.*", {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  if (!tailwindConfig.length) {
    throw new Error(
      "Tailwind CSS is not installed. Visit https://tailwindcss.com/docs/installation to get started.",
    );
  }
}
