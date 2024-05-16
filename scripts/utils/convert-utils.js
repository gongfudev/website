/**
 * This file contains utility functions for converting data to astro .md files.
 */

import { readFile, writeFile } from "fs/promises";

/**
 * convertProtoToMdFile converts the issue data to a markdown file,
 * with issue data replacing placeholders in the prototype
 *
 * @param {string} issue
 * @param {string} proto
 * @param {string} destDir
 * @param {boolean} verbose
 */
export async function convertProtoToMdFile(
  issue,
  proto,
  destDir,
  verbose = false,
) {
  debugLog("ISSUE JSON", JSON.stringify(issue, null, 2), verbose);
  debugLog("TITLE", issue.title, verbose);
  debugLog("createdAt", createdAt(issue), verbose);
  debugLog("AUTHOR URL LOGIN", issue.author.url + " " + issue.author.login, verbose);
  debugLog("BODY", issue.body, verbose);

  // Collect comments

  let comments = "";
  let commentMark = "";

  for (let i = 0; i < issue.comments.nodes.length; i++) {
    const node = issue.comments.nodes[i];
    debugLog(`COMMENT ${i} BODY`, node.body, verbose);
    debugLog(`COMMENT ${i} AUTHOR AT`, authorLoginAt(node), verbose);

    // Add a horizontal rule and the comment to the comments string
    // IMPORTANT: "\n\n" is required after "<hr/>" to separate the hr from the comment
    // otherwise the markdown in comment is rendered as text
    // and hrefs are not clickable
    comments += "<hr/>\n\n" + node.body + "\n\n" + authorLoginAt(node) + "\n\n";
    commentMark = " (c)";
  }

  // Replace placeholders in the prototype with issue data

  proto = proto
    .replace("<TITLE>", issue.title + commentMark)
    .replace("<CREATED_AT>", createdAt(issue))
    .replace("<BODY>", issue.body)
    .replace("<AUTHOR_LOGIN>", authorLoginAt(issue))
    .replace("<COMMENTS>", comments);

  // Make the filename from the issue title
  const filename = issue.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/-✼-/g, "-");
  const outfile = `${destDir}${filename}.md`;

  debugLog(`MD ${filename}`, proto, verbose);

  // Write to the outfile .md file
  try {
    await writeFile(outfile, proto, "utf8");
    console.error(`Successfully wrote to ${outfile}`);
  } catch (error) {
    console.error(`Failed to write to ${outfile}: ${error}`);
  }
}

function createdAt(issueOrNode) {
  return issueOrNode.createdAt.substring(0, 10);
}

function authorLoginAt(issueOrNode) {
  return `[${issueOrNode.author.login}](${issueOrNode.author.url}) | ${createdAt(issueOrNode)}`;
}

/**
 * wrappedInDiv wraps the content in a div with some styling
 * NOT useful when content contains markdown
 *
 * @param {string} content
 * @returns
 */
function wrappedInDiv(content) {
  // return `<div style="border: 1px solid black; padding: 10px;">${content}</div>`;
  return content;
}

/**
 * debugLog logs a string with a label if verbose
 *
 * @param {string} label
 * @param {string} string
 * @param {boolean} verbose
 */
function debugLog(label, string, verbose = false) {
  if (verbose) {
    console.error(
      `\n============================ ${label.toUpperCase()}:\n${string}\n============================\n`,
    );
  }
}
