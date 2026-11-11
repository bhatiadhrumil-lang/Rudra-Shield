import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const configuredUrl = (process.env.SITE_URL ?? "").trim();
const siteUrl = (configuredUrl || "https://rudrashield.example").replace(/\/+$/, "");
const distDir = resolve(process.cwd(), "dist");

if (!configuredUrl) {
  console.warn(
    "[seo] SITE_URL is not set. Generated SEO URLs use https://rudrashield.example.",
  );
}

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/programs", priority: "0.9", changefreq: "monthly" },
  { path: "/labs", priority: "0.8", changefreq: "monthly" },
  { path: "/learning-framework", priority: "0.8", changefreq: "monthly" },
  { path: "/partnerships", priority: "0.9", changefreq: "monthly" },
  { path: "/careers", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
];

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(distDir, { recursive: true });
writeFileSync(resolve(distDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(distDir, "robots.txt"), robots, "utf8");

const indexPath = resolve(distDir, "index.html");
let html = readFileSync(indexPath, "utf8");
const ogImage = `${siteUrl}/brand/og-image.jpg`;
const logo = `${siteUrl}/brand/logo-emblem.webp`;

html = html
  .replace(/(<meta property="og:image" content=")\/brand\/og-image\.jpg(" \/>)/, `$1${ogImage}$2`)
  .replace(/(<meta name="twitter:image" content=")\/brand\/og-image\.jpg(" \/>)/, `$1${ogImage}$2`)
  .replace(
    '"logo": "/brand/logo-emblem.webp"',
    `"logo": ${JSON.stringify(logo)}, "url": ${JSON.stringify(`${siteUrl}/`)}`,
  );

writeFileSync(indexPath, html, "utf8");
console.log(`[seo] Generated sitemap.xml, robots.txt and absolute social metadata for ${siteUrl}`);
