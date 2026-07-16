import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { SERVICE_PAGES, SERVICE_AREA_PAGES } from "@/lib/constants";

const baseUrl = "https://www.illyrianplumber.com";
const appDir = path.join(process.cwd(), "src/app");

// Folders that never produce a public route.
const EXCLUDED_DIR_NAMES = new Set(["api"]);

// A handful of one-off utility pages that don't fit the services/service-areas/blog
// patterns below. This list should rarely change - new services, locations, and blog
// posts are discovered automatically from the filesystem, not registered here.
const STATIC_PAGE_OVERRIDES: Record<
  string,
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }
> = {
  "/": { priority: 1.0, changeFrequency: "weekly" },
  "/about-us": { priority: 0.8, changeFrequency: "monthly" },
  "/contact-us": { priority: 0.8, changeFrequency: "monthly" },
  "/faq": { priority: 0.7, changeFrequency: "monthly" },
  "/sitemap-page": { priority: 0.3, changeFrequency: "monthly" },
  "/privacy-policy": { priority: 0.3, changeFrequency: "yearly" },
  "/terms-of-service": { priority: 0.3, changeFrequency: "yearly" },
  "/services": { priority: 0.9, changeFrequency: "weekly" },
  "/service-areas": { priority: 0.9, changeFrequency: "weekly" },
  "/blog": { priority: 0.9, changeFrequency: "weekly" },
};

function walkPages(dir: string, routeSegments: string[] = []): { route: string; filePath: string }[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results: { route: string; filePath: string }[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;

    if (entry.isDirectory()) {
      if (EXCLUDED_DIR_NAMES.has(entry.name)) continue;
      if (entry.name.startsWith("[")) continue; // no dynamic routes on this site today
      // Route groups like (marketing) organize files without adding a URL segment.
      const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      const nextSegments = isRouteGroup ? routeSegments : [...routeSegments, entry.name];
      results.push(...walkPages(path.join(dir, entry.name), nextSegments));
    } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      results.push({ route: "/" + routeSegments.join("/"), filePath: path.join(dir, entry.name) });
    }
  }

  return results;
}

function getLastModified(filePath: string): Date {
  try {
    const isoDate = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (isoDate) return new Date(isoDate);
  } catch {
    // git unavailable, or file not yet committed - fall through to filesystem mtime.
  }

  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return new Date();
  }
}

function classify(
  route: string
): { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] } {
  const override = STATIC_PAGE_OVERRIDES[route];
  if (override) return override;

  if (route.startsWith("/services/")) {
    const isFeatured = SERVICE_PAGES.featured.some((s) => s.href === route);
    return isFeatured
      ? { priority: 0.95, changeFrequency: "weekly" }
      : { priority: 0.85, changeFrequency: "monthly" };
  }

  if (route.startsWith("/service-areas/")) {
    const areaPage = SERVICE_AREA_PAGES.find((p) => `/service-areas/${p.slug}` === route);
    return areaPage?.isHub
      ? { priority: 0.85, changeFrequency: "monthly" }
      : { priority: 0.8, changeFrequency: "monthly" };
  }

  if (route.startsWith("/blog/")) {
    return { priority: 0.75, changeFrequency: "monthly" };
  }

  // Combo pages (/{service}-{location}, e.g. /emergency-plumber-east-brunswick) -
  // flat top-level routes, high commercial intent, treated like a featured service.
  if (route.startsWith("/emergency-plumber-")) {
    return { priority: 0.9, changeFrequency: "weekly" };
  }

  // Unclassified static page - safe, low-attention default.
  return { priority: 0.6, changeFrequency: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = walkPages(appDir);

  return pages
    .map(({ route, filePath }) => {
      const { priority, changeFrequency } = classify(route);
      return {
        url: `${baseUrl}${route}`,
        lastModified: getLastModified(filePath),
        changeFrequency,
        priority,
      };
    })
    .sort((a, b) => b.priority - a.priority);
}
