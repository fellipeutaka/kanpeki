import { Command } from "commander";
import { format } from "./format";

export const icon = new Command("icon");

icon.addCommand(format);
