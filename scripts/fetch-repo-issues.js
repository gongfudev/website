#! node

// -----------------------------
// Define the configuration data

const usage = "This script fetches issues from the specified github repo and saves them to a file or prints them to stdout, in JSON format."
const owner = "gongfudev";
const repo = "sessions";
const token = getGithubAccessTokenFromDotEnv();
const outfile = "src/data/issues.json";

// --------------------
// Handle CLI arguments

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .usage(usage)
  .option("c", {
    alias: "commented",
    description: "Fetch only commented issues",
    type: "boolean",
  })
  .option("i", {
    alias: "invert",
    description: "Invert the order of issues",
    type: "boolean",
  })
  .option("l", {
    alias: "log-rate",
    description: "Log rate limit data from GitHub API",
    type: "boolean",
  })
  .option("r", {
    alias: "repo",
    description: "Specify the repo",
    type: "string",
    default: `${repo}`,
  })
  .option("o", {
    alias: "owner",
    description: "Specify the repo owner",
    type: "string",
    default: `${owner}`,
  })
  .option("s", {
    alias: "save",
    description: `Save the fetched issues to ${outfile}`,
    type: "boolean",
  })
  .help("h")
  .alias("h", "help")
  .demandCommand(0, 0) // No positional arguments should be provided.
  .strict().argv; // Only the defined options are allowed.

if (argv.commented) {
  console.error("Fetching only commented issues...");
} else {
  console.error('Fetching all issues...');
}

// --------------------------------------------------------------------------------------
// Main script - fetch issues from gfio sessions repo and save to JSON or print to stdout

import {
  fetchAllIssues,
  fetchAllIssuesWithComments,
  getGithubAccessToken,
  getGithubAccessTokenFromDotEnv,
} from "./fetch-utils.js";



var issues = [];

if (argv.commented) {
  issues = await fetchAllIssuesWithComments(
    argv.owner,
    token,
    argv.repo,
    argv.logRate,
  );
} else {
  issues = await fetchAllIssues(argv.owner, token, argv.repo, argv.logRate);
}

if (argv.reversed) {
  issues.reverse();
}

import { writeFile } from 'fs/promises';

const issuesJSON = JSON.stringify(issues, null, 2);

if (argv.save) {
  try {
    await writeFile(outfile, issuesJSON);
    console.log(`Successfully wrote to ${outfile}`);
  } catch (error) {
    console.error(`Failed to write to ${outfile}: ${error}`);
  }
} else {
  console.log(issuesJSON);
}

console.error(
  `${issues.length} issues fetched from ${argv.owner} ${argv.repo} repo (${issuesJSON.length}) bytes`,
);
