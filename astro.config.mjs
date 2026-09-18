import { defineConfig } from "astro/config";

function normalizeBase(value) {
  if (!value || value === "/") return "/";
  return `/${String(value).replace(/^\/|\/$/g, "")}/`;
}

const site = process.env.SITE_URL || "https://dylanwells120-png.github.io";
const base = normalizeBase(process.env.BASE_PATH ?? "/");

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
