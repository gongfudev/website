/* global fetch */
/* global console */

/**
 * This file contains utility functions for fetching data from GitHub.
 */

import fs from "fs";
import os from "os";
import path from "path";

/**
 * getGithubAccessToken gets the token string starting with ghp_ from ~/.netrc
 *
 * @returns {string} the token string
 */
export function getGithubAccessToken() {
  // Define the path to the .netrc file in the home directory.
  const netrcPath = path.join(os.homedir(), ".netrc");

  // Read the .netrc file synchronously.
  const netrc = fs.readFileSync(netrcPath, "utf8");

  // Split the file content into lines.
  const lines = netrc.split("\n");

  // Iterate over each line in the .netrc file.
  for (let line of lines) {
    // Trim leading and trailing whitespace from the line and split it into tokens.
    const tokens = line.trim().split(/\s+/);

    // Iterate over each token in the line.
    for (let i = 0; i < tokens.length; i++) {
      // If a token is "password", return the next token, which is assumed to be the GitHub access token.
      if (tokens[i] === "password") {
        return tokens[i + 1];
      }
    }
  }

  // If no GitHub access token is found, return null.
  return null;
}

import { readFileSync } from "fs";
import { exit } from "process";

/**
 * getGithubAccessTokenFromDotEnv reads the GitHub access token from the .env file in format
 *
 * `GITHUB_ACCESS_TOKEN=ghp_...`
 *
 * @returns {string} the token string
 */
export function getGithubAccessTokenFromDotEnv() {
  let data;
  try {
    data = readFileSync(".env", "utf8");
  } catch (error) {
    console.error(`Failed to read .env file: ${error}`);
    process.exit(1);
  }

  const lines = data.split("\n");
  for (let line of lines) {
    if (line.startsWith("GITHUB_ACCESS_TOKEN=")) {
      return line.split("=")[1];
    }
  }

  console.error("Failed to find GITHUB_ACCESS_TOKEN in .env file");
  process.exit(1);
}

/**
 * fetchAllIssuesWithComments fetches all issues and their comments from a GitHub repository using the GitHub GraphQL API.
 *
 * @param {*} owner
 * @param {*} token
 * @param {*} repo
 * @returns {array} issuesWithComments
 */
export async function fetchAllIssuesWithComments(
  owner,
  token,
  repo,
  logRateData = false,
) {
  const allIssues = await fetchAllIssues(owner, token, repo, logRateData);
  const issuesWithComments = allIssues.filter(
    (issue) => issue.comments.nodes.length > 0,
  );
  return issuesWithComments;
}

/**
 * fetchAllIssues fetches all issues and their comments from a GitHub repository using the GitHub GraphQL API.
 *
 * @param {*} owner
 * @param {*} token
 * @param {*} repo
 * @param {boolean} logRateData
 * @returns {array} issues
 */
export async function fetchAllIssues(owner, token, repo, logRateData = false) {
  // Initialize an array to store the issues.
  let issues = [];
  // Initialize a variable to store the end cursor for pagination.
  let endCursor = null;

  // Use a while loop to continuously fetch issues until there are no more pages.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // Define the GraphQL query. This query fetches the first 100 issues and their comments from the specified repository.
    // If an end cursor is provided, it fetches the issues after the issue at the end cursor.
    const query = `
      query {
        repository(owner:"${owner}", name:"${repo}") {
          issues(first:100, after:${endCursor ? `"${endCursor}"` : null}) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              title
              author {
                avatarUrl
                login
                url
              }
              createdAt
              body
              comments(first: 100) {
                nodes {
                  author {
                    avatarUrl
                    login
                    url
                  }
                  createdAt
                  body
                }
              }
            }
          }
        }
      }
    `;

    // Send a POST request to the GitHub GraphQL API with the query.
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    // Check if the response is successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response.
    const data = await response.json();

    // Add all issues to the issues array, regardless of whether they have comments or not.
    issues = issues.concat(data.data.repository.issues.nodes);

    // If there are no more pages, break the loop.
    if (!data.data.repository.issues.pageInfo.hasNextPage) {
      if (logRateData) {
        logRateLimits(response);
      }
      break;
    }

    // Check if the response contains errors.
    if (data.errors) {
      console.error(data.errors);
      throw new Error("GraphQL query execution errors");
    }

    // Update the end cursor with the end cursor from the response.
    endCursor = data.data.repository.issues.pageInfo.endCursor;
  }

  // Return the issues.
  return issues;
}

/**
 * logRateLimits logs the rate limit data from a fetched response to stderr
 *
 * @param {*} response
 */
function logRateLimits(response) {
  console.error("Rate limit:", response.headers.get("x-ratelimit-limit"));
  console.error("Rate limit used:", response.headers.get("x-ratelimit-used"));
  console.error(
    "Rate limit remaining:",
    response.headers.get("x-ratelimit-remaining"),
  );

  console.error(
    "Rate limit resource:",
    response.headers.get("x-ratelimit-resource"),
  );

  const epochSeconds = response.headers.get("x-ratelimit-reset");
  const date = new Date(epochSeconds * 1000);
  console.error("Rate limit reset:", date.toLocaleString());
}

import { readFile } from "fs/promises";

/**
 * getAllIssues gets the issue data from a local file
 *
 * @param {*} filepath
 * @returns {string} file content
 */
export async function getAllIssues(filepath) {
  const data = await readFile(filepath, "utf8");
  return data;
}
