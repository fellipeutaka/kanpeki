import { createReadStream, createWriteStream, existsSync } from "node:fs";
import { rename, rm } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { Command } from "commander";
import { handleError } from "~/utils/handle-error";
import { logger } from "~/utils/logger";

const ICONS_START = "export const Icons = {";
const ICONS_END = "} as const satisfies Record<string, Icon>;";

interface FormatOptions {
  new: boolean;
  cwd: string;
}

export const format = new Command()
  .name("format")
  .description("Format your icons")
  .option("-o, --new", "Create a new file with the formatted icons", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .action(async (options: FormatOptions) => {
    try {
      const start = performance.now();

      if (!existsSync(options.cwd)) {
        throw new Error(
          `The path ${options.cwd} does not exist. Please try again.`,
        );
      }

      // const config = await getConfig(options.cwd);
      // console.log(config);

      const iconsFilePath = new URL(
        "../../components/ui/src/icons.tsx",
        import.meta.url,
      );
      const readStream = createReadStream(iconsFilePath, "utf8");

      const outputFilePath = new URL(
        "../../components/ui/src/icons.sorted.tsx",
        import.meta.url,
      );
      const writeStream = createWriteStream(outputFilePath, "utf8");

      const rl = createInterface({
        input: readStream,
        crlfDelay: Number.POSITIVE_INFINITY,
      });

      let isInIconsBlock = false;
      let currentEntry = "";
      const entries: string[] = [];

      rl.on("line", (line) => {
        if (line.includes(ICONS_START)) {
          writeStream.write(`${line}\n`);
          isInIconsBlock = true;
          return;
        }

        if (isInIconsBlock) {
          if (line.includes(ICONS_END)) {
            currentEntry = handleIconsEnd(
              line,
              writeStream,
              entries,
              currentEntry,
            );
            isInIconsBlock = false;
            return;
          }

          if (line.trim() === "") {
            return;
          }

          currentEntry = handleIconEntry(line, entries, currentEntry);
          return;
        }

        writeStream.write(`${line}\n`);
      });

      rl.on("close", async () => {
        if (!options.new) {
          await rm(iconsFilePath);
          await rename(outputFilePath, iconsFilePath);
        }

        const end = performance.now();

        logger.success(`File formatted in ${(end - start).toFixed(3)}ms`);
      });
    } catch (err) {
      handleError(err);
    }
  });

function handleIconsEnd(
  line: string,
  writeStream: NodeJS.WritableStream,
  entries: string[],
  currentEntry: string,
) {
  if (currentEntry.trim()) {
    entries.push(currentEntry);
  }
  writeSortedEntries(entries, writeStream);
  writeStream.write(`${line}\n`);
  entries.length = 0;
  return "";
}

function handleIconEntry(
  line: string,
  entries: string[],
  currentEntry: string,
) {
  if (line.trim().endsWith("),")) {
    entries.push(`${currentEntry}${line}\n`);
    return "";
  }

  return `${currentEntry}${line}\n`;
}

function writeSortedEntries(
  entries: string[],
  writeStream: NodeJS.WritableStream,
) {
  entries.sort((a, b) => {
    const nameA = a.split(":")[0].trim();
    const nameB = b.split(":")[0].trim();
    return nameA.localeCompare(nameB);
  });

  for (const entry of entries) {
    const firstLine = entry.split("\n")[0];
    const indentation = firstLine.match(/^\s*/)?.[0] || "";
    writeStream.write(`${indentation + entry.trim()}\n`);
  }
}
