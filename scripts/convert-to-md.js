#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile, writeFile } from "fs/promises";
import { convertProtoToMdFile } from "./utils/convert-utils.js";

// Handle CLI arguments

const argv = yargs(hideBin(process.argv))
  .usage("\nThis script converts GitHub issues to markdown files.")
  .option("i", {
    alias: "index",
    describe: "Convert starting with ith issue",
    type: "number",
    default: 0,
  })
  .option("n", {
    alias: "number",
    describe: "Convert n issues",
    type: "number",
    default: 0,
    demandOption: true,
  })
  .option("r", {
    alias: "randomize",
    describe: "Randomize tags in generated files",
    type: "boolean",
  })
  .option("v", {
    alias: "verbose",
    describe: "Run with verbose logging",
    type: "boolean",
  })

  .help("h")
  .alias("h", "help").argv;


// Reject negative values for i and n
if (argv.i < 0 || argv.n < 0) {
  console.error("Invalid arguments: i and n must be positive integers.");
  process.exit(1);
}

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

// Convert issues to markdown files in range [fromIdx, toIdx)

argv.index = Math.min(argv.index, issues.length - 1);
const fromIdx = argv.index;

const toIdx = Math.min(fromIdx + argv.number, issues.length);

console.error(`Converting ${toIdx - fromIdx} issues starting with ${fromIdx}...`);

issues.slice(fromIdx, toIdx).forEach((issue, index) => {
  convertProtoToMdFile(issue, prototype, destDir, argv.randomize, argv.verbose);
});

/**
 *
 * @param {number} num
 * @returns {string} ordinal suffix for a number
 */
function getOrdinalSuffix(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = num % 100;

  return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}
