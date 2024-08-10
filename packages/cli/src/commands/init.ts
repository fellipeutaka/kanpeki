import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path, { extname, resolve } from "node:path";
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
import { getProjectConfig, preFlight } from "~/utils/get-project-info";
import { handleError } from "~/utils/handle-error";
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
    process.cwd(),
  )
  .action(async (options: InitOptions) => {
    try {
      if (!existsSync(options.cwd)) {
        throw new Error(
          `The path ${options.cwd} does not exist. Please try again.`,
        );
      }

      await preFlight(options.cwd);

      const projectConfig = await getProjectConfig(options.cwd);

      if (projectConfig) {
        // const config = await promptForMinimalConfig(
        //   options.cwd,
        //   projectConfig,
        //   opts.defaults
        // )
        // await runInit(options.cwd, config)
      } else {
        // Read config.
        const existingConfig = await getConfig(options.cwd);
        const config = await promptForConfig(
          options.cwd,
          existingConfig,
          options.yes,
        );
        // await runInit(options.cwd, config)
      }

      logger.info("");
      logger.info(
        `${picocolors.green(
          "Success!",
        )} Project initialization completed. You may now add components.`,
      );
      logger.info("");
    } catch (err) {
      handleError(err);
    }
  });

async function promptForConfig(
  cwd: string,
  defaultConfig: Config | null = null,
  skip = false,
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
          "tailwind prefix eg. tw-",
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

  // Write to file.
  logger.info("");
  const s = spinner();
  s.start("Writing kanpeki.json...");
  const targetPath = resolve(cwd, "components.json");
  await writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  s.stop("Configuration written.");

  return await resolveConfigPaths(cwd, config);
}

// async function promptForMinimalConfig(
//   cwd: string,
//   defaultConfig: Config,
//   defaults = false
// ) {
//   const highlight = (text: string) => chalk.cyan(text)
//   let style = defaultConfig.style
//   let baseColor = defaultConfig.tailwind.baseColor
//   let cssVariables = defaultConfig.tailwind.cssVariables

//   if (!defaults) {
//     const styles = await getRegistryStyles()
//     const baseColors = await getRegistryBaseColors()

//     const options = await prompts([
//       {
//         type: "select",
//         name: "style",
//         message: `Which ${highlight("style")} would you like to use?`,
//         choices: styles.map((style) => ({
//           title: style.label,
//           value: style.name,
//         })),
//       },
//       {
//         type: "select",
//         name: "tailwindBaseColor",
//         message: `Which color would you like to use as ${highlight(
//           "base color"
//         )}?`,
//         choices: baseColors.map((color) => ({
//           title: color.label,
//           value: color.name,
//         })),
//       },
//       {
//         type: "toggle",
//         name: "tailwindCssVariables",
//         message: `Would you like to use ${highlight(
//           "CSS variables"
//         )} for colors?`,
//         initial: defaultConfig?.tailwind.cssVariables,
//         active: "yes",
//         inactive: "no",
//       },
//     ])

//     style = options.style
//     baseColor = options.tailwindBaseColor
//     cssVariables = options.tailwindCssVariables
//   }

//   const config = rawConfigSchema.parse({
//     $schema: defaultConfig?.$schema,
//     style,
//     tailwind: {
//       ...defaultConfig?.tailwind,
//       baseColor,
//       cssVariables,
//     },
//     rsc: defaultConfig?.rsc,
//     tsx: defaultConfig?.tsx,
//     aliases: defaultConfig?.aliases,
//   })

//   // Write to file.
//   logger.info("")
//   const spinner = ora(`Writing components.json...`).start()
//   const targetPath = path.resolve(cwd, "components.json")
//   await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8")
//   spinner.succeed()

//   return await resolveConfigPaths(cwd, config)
// }

export async function runInit(cwd: string, config: ConfigWithResolvedPaths) {
  const s = spinner();
  s.start("Initializing project...");

  // Ensure all resolved paths directories exist.
  for (const [key, resolvedPath] of Object.entries(config.resolvedPaths)) {
    // Determine if the path is a file or directory.
    // TODO: is there a better way to do this?
    let dirname = extname(resolvedPath) ? dirname(resolvedPath) : resolvedPath;

    // If the utils alias is set to something like "@/lib/utils",
    // assume this is a file and remove the "utils" file name.
    // TODO: In future releases we should add support for individual utils.
    if (key === "utils" && resolvedPath.endsWith("/utils")) {
      // Remove /utils at the end.
      dirname = dirname.replace(/\/utils$/, "");
    }

    if (!existsSync(dirname)) {
      await fs.mkdir(dirname, { recursive: true });
    }
  }

  const extension = config.tsx ? "ts" : "js";

  const tailwindConfigExtension = path.extname(
    config.resolvedPaths.tailwindConfig,
  );

  let tailwindConfigTemplate: string;
  if (tailwindConfigExtension === ".ts") {
    tailwindConfigTemplate = config.tailwind.cssVariables
      ? templates.TAILWIND_CONFIG_TS_WITH_VARIABLES
      : templates.TAILWIND_CONFIG_TS;
  } else {
    tailwindConfigTemplate = config.tailwind.cssVariables
      ? templates.TAILWIND_CONFIG_WITH_VARIABLES
      : templates.TAILWIND_CONFIG;
  }

  // Write tailwind config.
  await fs.writeFile(
    config.resolvedPaths.tailwindConfig,
    template(tailwindConfigTemplate)({
      extension,
      prefix: config.tailwind.prefix,
    }),
    "utf8",
  );

  // Write css file.
  const baseColor = await getRegistryBaseColor(config.tailwind.baseColor);
  if (baseColor) {
    await fs.writeFile(
      config.resolvedPaths.tailwindCss,
      config.tailwind.cssVariables
        ? config.tailwind.prefix
          ? applyPrefixesCss(baseColor.cssVarsTemplate, config.tailwind.prefix)
          : baseColor.cssVarsTemplate
        : baseColor.inlineColorsTemplate,
      "utf8",
    );
  }

  // Write cn file.
  await fs.writeFile(
    `${config.resolvedPaths.utils}.${extension}`,
    extension === "ts" ? templates.UTILS : templates.UTILS_JS,
    "utf8",
  );

  spinner?.succeed();

  // Install dependencies.
  const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
  const packageManager = await getPackageManager(cwd);

  const deps = [
    ...PROJECT_DEPENDENCIES,
    config.style === "new-york" ? "@radix-ui/react-icons" : "lucide-react",
  ];

  await execa(
    packageManager,
    [packageManager === "npm" ? "install" : "add", ...deps],
    {
      cwd,
    },
  );
  dependenciesSpinner?.succeed();
}
