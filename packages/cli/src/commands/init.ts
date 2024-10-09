import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import {
  cancel,
  confirm,
  group,
  isCancel,
  spinner,
  text,
} from "@clack/prompts";
import { Command } from "commander";
import picocolors from "picocolors";
import { parseAsync } from "valibot";
import { cnTemplate } from "~/templates/cn";
import { cssGlobalsTemplate } from "~/templates/globals";
import { getTwTemplate } from "~/templates/tw-config";
import {
  type Config,
  type ConfigWithResolvedPaths,
  DEFAULT_COMPONENTS,
  DEFAULT_JSON_SCHEMA,
  DEFAULT_TAILWIND_CONFIG,
  DEFAULT_TAILWIND_CSS,
  DEFAULT_UTILS,
  configSchema,
  getConfig,
  resolveConfigPaths,
} from "~/utils/get-config";
import { getPkgManager } from "~/utils/get-pkg-manager";
import { getProjectConfig, preFlight } from "~/utils/get-project-info";
import { handleError } from "~/utils/handle-error";
import { installDeps } from "~/utils/install-deps";
import { logger } from "~/utils/logger";

const PROJECT_DEPENDENCIES = [
  "clsx",
  "tailwind-variants",
  "tailwindcss-animate",
];

interface InitOptions {
  yes: boolean;
  defaults: boolean;
  cwd: string;
}

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-d, --defaults,", "use default configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (options: InitOptions) => {
    try {
      if (!existsSync(options.cwd)) {
        throw new Error(
          `The path ${options.cwd} does not exist. Please try again.`
        );
      }

      await preFlight(options.cwd);

      const projectConfig = await getProjectConfig(options.cwd);

      if (projectConfig) {
        await writeConfig(options.cwd, projectConfig);
        await runInit(options.cwd, projectConfig);
      } else {
        const existingConfig = await getConfig(options.cwd);
        const config = await promptForConfig(
          options.cwd,
          existingConfig,
          options.yes
        );
        await runInit(options.cwd, config);
      }

      logger.info("");
      logger.info(
        `${picocolors.green(
          "Success!"
        )} Project initialization completed. You may now add components.`
      );
      logger.info("");
    } catch (err) {
      handleError(err);
    }
  });

async function promptForConfig(
  cwd: string,
  defaultConfig: Config | null = null,
  skip = false
) {
  const highlight = (text: string) => picocolors.cyan(text);

  const options = await group({
    rsc: () =>
      confirm({
        message: `Are you using ${highlight("React Server Components")}?`,
        initialValue: defaultConfig?.rsc ?? true,
      }),
    tailwindConfig: () =>
      text({
        message: `Where is your ${highlight("tailwind.config.ts")} located?`,
        initialValue: defaultConfig?.tailwind.config ?? DEFAULT_TAILWIND_CONFIG,
      }),
    tailwindCss: () =>
      text({
        message: `Where is your ${highlight("globals CSS")} file?`,
        initialValue: defaultConfig?.tailwind.css ?? DEFAULT_TAILWIND_CSS,
      }),
    tailwindPrefix: () =>
      text({
        message: `Are you using a custom ${highlight(
          "tailwind prefix eg. tw-"
        )}? (Leave blank if not)`,
        initialValue: "",
      }),
    components: () =>
      text({
        message: `Configure the import alias for ${highlight("components")}:`,
        initialValue: defaultConfig?.aliases.components ?? DEFAULT_COMPONENTS,
      }),
    utils: () =>
      text({
        message: `Configure the import alias for ${highlight("utils")}:`,
        initialValue: defaultConfig?.aliases.utils ?? DEFAULT_UTILS,
      }),
  });

  const config = await parseAsync(configSchema, {
    $schema: DEFAULT_JSON_SCHEMA,
    rsc: options.rsc,
    tailwind: {
      config: options.tailwindConfig,
      css: options.tailwindCss,
      prefix: options.tailwindPrefix,
    },
    aliases: {
      components: options.components,
      utils: options.utils,
    },
  } satisfies Config);

  if (!skip) {
    const proceed = await confirm({
      message: `Write configuration to ${highlight("kanpeki.json")}. Proceed?`,
      initialValue: true,
    });
    if (isCancel(proceed)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }
  }

  await writeConfig(cwd, config);

  return resolveConfigPaths(cwd, config);
}

async function writeConfig(cwd: string, config: Config) {
  logger.info("");
  const s = spinner();
  s.start("Writing kanpeki.json...");
  const targetPath = path.resolve(cwd, "kanpeki.json");
  await fs.writeFile(
    targetPath,
    JSON.stringify(
      {
        $schema: config.$schema,
        rsc: config.rsc,
        tailwind: config.tailwind,
        aliases: config.aliases,
      } satisfies Config,
      null,
      2
    ),
    "utf8"
  );
  s.stop("Configuration written.");
}

const UTILS_DIR_REGEX = /\/utils$/;

async function runInit(cwd: string, config: ConfigWithResolvedPaths) {
  const s = spinner();
  s.start("Initializing project...");

  // Ensure all resolved paths directories exist.
  for (const [key, resolvedPath] of Object.entries(config.resolvedPaths)) {
    // Determine if the path is a file or directory.
    let dirname = path.extname(resolvedPath ?? "")
      ? path.dirname(resolvedPath ?? "")
      : (resolvedPath ?? "");

    if (key === "utils" && resolvedPath?.endsWith("/utils")) {
      // Remove /utils at the end.
      dirname = dirname?.replace(UTILS_DIR_REGEX, "");
    }

    if (!existsSync(dirname)) {
      await fs.mkdir(dirname, { recursive: true });
    }
  }

  // Write tailwind config.
  await fs.writeFile(
    config.resolvedPaths.tailwindConfig,
    getTwTemplate({
      prefix: config.tailwind.prefix,
    }),
    "utf8"
  );

  // Write globals.css file
  await fs.writeFile(
    config.resolvedPaths.tailwindCss,
    cssGlobalsTemplate,
    "utf8"
  );

  // Write cn file.
  await fs.writeFile(`${config.resolvedPaths.utils}/cn.ts`, cnTemplate, "utf8");

  s.stop("Project initialized.");

  const packageManager = getPkgManager();

  const dependenciesSpinner = spinner();
  dependenciesSpinner.start(
    `Installing dependencies with ${packageManager}...`
  );

  await installDeps(packageManager, cwd, PROJECT_DEPENDENCIES, ["-D"]);

  dependenciesSpinner.stop("Dependencies installed.");
}
