/** Prefix a site-root path with Astro's configured `base`. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleaned = path.replace(/^\/+/, "");
  if (!cleaned) return base;
  return `${base}${cleaned}`;
}

export function absoluteUrl(path: string): string {
  const site = (import.meta.env.SITE || "").replace(/\/+$/, "");
  const prefixed = withBase(path);
  if (!site) return prefixed;
  return `${site}${prefixed}`;
}
