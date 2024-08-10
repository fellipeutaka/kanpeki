#!/usr/bin/env node

import { Command } from "commander";
import { description, name, version } from "../package.json";
import { icon } from "./commands/icon";
import { init } from "./commands/init";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

const program = new Command()
  .name(name)
  .description(description)
  .version(version || "1.0.0", "-v, --version", "display the version number");

program.addCommand(init);
program.addCommand(icon);

program.parse();
