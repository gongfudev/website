#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile, writeFile } from "fs/promises";
import { convertProtoToMdFile } from "./utils/convert-utils.js";

// Handle CLI arguments

const argv = yargs(hideBin(process.argv))
  .usage("\nThis script converts GitHub issues to markdown files.")
  .option("i", {
    alias: "issue",
    describe: "Convert ith issue",
    type: "number",
    default: 0,
  })
  .option("n", {
    alias: "number",
    describe: "Convert first n issues",
    type: "number",
    default: 0,
  })
  .option("v", {
    alias: "verbose",
    describe: "Run with verbose logging",
    type: "boolean",
  })
  .help("h")
  .alias("h", "help").argv;

// console.error(`argv: ${JSON.stringify(argv, null, 2)}`);

// Prepare and perform the conversion

// config
const dataFile = "./src/data/issues.json";
const prototypeFile = "./scripts/utils/prototype.md";
const destDir = "./src/content/sessions/converted/";

// input data
const data = await readFile(dataFile, "utf8");
const issues = JSON.parse(data);
issues.reverse();
const prototype = await readFile(prototypeFile, "utf8");

// convert issues to markdown files

if (argv.i > 0) {
  console.error(`Converting ${getOrdinalSuffix(argv.i)} issue...`);
  if (argv.i <= issues.length) {
    // Convert the ith issue to a markdown file
    convertProtoToMdFile(issues[argv.i - 1], prototype, destDir, argv.v);
  }
} else if (argv.n > 0) {
  console.error(`Converting first ${argv.n} issues...`);
  // Convert the first n issues to markdown files
  issues.slice(0, argv.n).forEach((issue, index) => {
    convertProtoToMdFile(issue, prototype, destDir, argv.v);
  });
}

function getOrdinalSuffix(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = num % 100;

  return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}
