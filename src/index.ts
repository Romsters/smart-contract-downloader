#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import * as fs from "fs-extra";
import * as path from "path";
import fetcher from "./lib/fetcher";

const program = new Command();

console.log(figlet.textSync("Smart contract downloader"));

const handler = async (options: any) => {
  const { network, address } = options;
  const sources = await fetcher.fetchContractInfo(network, address);
  if (!sources) {
    return;
  }
  for (const filePath in sources) {
    console.log(`Saving ${filePath}`);
    await fs.outputFile(path.join(process.cwd(), filePath), sources[filePath]);
  }
  console.log("DONE");
}

program
  .version("1.0.1")
  .description("Smart contract downloader")
  .requiredOption("-n, --network <value>", "Selected network")
  .requiredOption("-a, --address <value>", "Contract address")
  .action(handler)
  .parse(process.argv);
