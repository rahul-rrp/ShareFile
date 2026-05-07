import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const appDir = join(process.cwd(), "app");
const routeFileNames = new Set([
  "page.tsx",
  "page.ts",
  "page.jsx",
  "page.js",
  "route.ts",
  "route.js",
]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (routeFileNames.has(entry)) {
      files.push(fullPath);
    }
  }

  return files;
}

function segmentToRoutePart(segment) {
  if (segment.startsWith("(") && segment.endsWith(")")) {
    return "";
  }

  if (segment.startsWith("@") || segment.startsWith("_")) {
    return "";
  }

  return segment;
}

function fileToRoute(filePath) {
  const rel = relative(appDir, filePath);
  const parts = rel.split(sep).slice(0, -1).map(segmentToRoutePart).filter(Boolean);
  return `/${parts.join("/")}`.replace(/\/+/g, "/");
}

function hasDefaultExport(filePath) {
  const source = readFileSync(filePath, "utf8");
  return /export\s+default\s+/.test(source);
}

function validateRouteShape(filePath) {
  const rel = relative(appDir, filePath);
  const parts = rel.split(sep).slice(0, -1);
  const warnings = [];

  for (const part of parts) {
    if (part.startsWith("(") && part.endsWith(")")) {
      continue;
    }

    if (part.includes(".tsx") || part.includes(".jsx") || part.includes(".ts") || part.includes(".js")) {
      warnings.push(`Segment "${part}" looks like a file name. Use a folder name instead.`);
    }

    if (/[A-Z]/.test(part)) {
      warnings.push(`Segment "${part}" contains uppercase letters. Prefer lowercase URL segments.`);
    }

    if (/\s/.test(part)) {
      warnings.push(`Segment "${part}" contains spaces. Prefer hyphenated URL segments.`);
    }
  }

  return warnings;
}

async function checkHttp(route, baseUrl) {
  const response = await fetch(new URL(route, baseUrl), { redirect: "manual" });
  return {
    ok: response.status >= 200 && response.status < 400,
    status: response.status,
  };
}

async function main() {
  if (!existsSync(appDir)) {
    console.error("Missing app directory.");
    process.exit(1);
  }

  const routeFiles = walk(appDir);
  const routes = new Map();
  let failures = 0;

  for (const file of routeFiles) {
    const route = fileToRoute(file);
    const existing = routes.get(route) ?? [];
    existing.push(file);
    routes.set(route, existing);
  }

  console.log("Discovered routes:");

  for (const [route, files] of [...routes.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`  ${route}`);

    for (const file of files) {
      const rel = relative(process.cwd(), file);
      console.log(`    - ${rel}`);

      if (file.endsWith(`${sep}page.tsx`) || file.endsWith(`${sep}page.ts`) || file.endsWith(`${sep}page.jsx`) || file.endsWith(`${sep}page.js`)) {
        if (!hasDefaultExport(file)) {
          failures += 1;
          console.error(`      ERROR: page file is missing a default export.`);
        }
      }

      for (const warning of validateRouteShape(file)) {
        console.warn(`      WARN: ${warning}`);
      }
    }

    if (files.length > 1) {
      failures += 1;
      console.error(`      ERROR: duplicate route "${route}" is defined by multiple files.`);
    }
  }

  const baseUrl = process.env.ROUTE_CHECK_BASE_URL;

  if (baseUrl) {
    console.log(`\nHTTP checks against ${baseUrl}:`);

    for (const route of [...routes.keys()].sort()) {
      const result = await checkHttp(route, baseUrl);
      const marker = result.ok ? "OK" : "FAIL";
      console.log(`  ${marker} ${route} -> ${result.status}`);

      if (!result.ok) {
        failures += 1;
      }
    }
  } else {
    console.log("\nSet ROUTE_CHECK_BASE_URL=http://localhost:3000 to also check live HTTP status codes.");
  }

  if (failures > 0) {
    console.error(`\nRoute check failed with ${failures} issue(s).`);
    process.exit(1);
  }

  console.log("\nRoute check passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
