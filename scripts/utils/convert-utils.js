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
  randomize,
  verbose = false,
) {
  debugLog("ISSUE JSON", JSON.stringify(issue, null, 2), verbose);
  debugLog("TITLE", issue.title, verbose);
  debugLog("createdAt", createdAt(issue), verbose);
  debugLog(
    "AUTHOR URL LOGIN",
    issue.author.url + " " + issue.author.login,
    verbose,
  );
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

  if (randomize) {
    proto = randomizeTags(proto);
  }

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
 * randomizeTags adds tags randomly picked from the available hardcoded tags
 * which must match the slug values in *.md files from src/content/subdirectories
 *
 * gongfudev-website %  grep -rn --include="*.md" slug src/content
 * src/content/technos/astro.md:2:slug: astro
 * src/content/technos/vercel.md:2:slug: vercel
 * src/content/technos/lit.md:2:slug: lit
 * src/content/audiences/dev.md:2:slug: dev
 * src/content/audiences/design.md:2:slug: design
 * src/content/tracks/desktop.md:2:slug: desktop
 * src/content/tracks/web.md:2:slug: web
 * src/content/tracks/AstroContentCollections.md:2:slug: AstroContentCollections
 * src/content/tracks/AstroComponents.md:2:slug: AstroComponents
 * src/content/tracks/mobile.md:2:slug: mobile
 *
 * @param {*} proto
 * @returns {*} proto
 */
function randomizeTags(proto) {
  proto = proto.replace(
    /audiences:.*\n/,
    `audiences: ${randomPick(["dev", "design"])}\n`,
  );
  proto = proto.replace(
    /technos:.*\n/,
    `technos: ${randomPick(["astro", "vercel", "lit"])}\n`,
  );
  proto = proto.replace(
    /tracks:.*\n/,
    `tracks: ${randomPick(["AstroComponents", "AstroContentCollections", "web", "mobile", "desktop"])}\n`,
  );
  return proto;
}

/**
 * randomPick picks randomly 0 to length elements from input array
 *
 * @param {string[]} arr
 * @returns {string}
 */
function randomPick(arr) {
  const result = [];
  const length = Math.floor(Math.random() * (arr.length + 1));
  const copyArr = [...arr]; // Create a copy of the array to avoid mutating the original array

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * copyArr.length);
    result.push(copyArr[index]);
    copyArr.splice(index, 1); // Remove the selected element from the array
  }

  return JSON.stringify(result);
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
