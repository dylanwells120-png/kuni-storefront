import type { APIRoute } from "astro";
import { absoluteUrl } from "../lib/paths";

export const GET: APIRoute = () => {
  const sitemap = absoluteUrl("sitemap.xml");
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
