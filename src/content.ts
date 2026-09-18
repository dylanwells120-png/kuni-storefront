/**
 * Single source of truth for storefront copy, store links, and media paths.
 *
 * Edit this file to update the public site. Leave `steamUrl` empty until the
 * real Steam page exists — the buy/wishlist CTAs stay “Coming soon”.
 */

export const site = {
  /** Canonical public origin without trailing slash. Overridden by SITE_URL at build time for absolute URLs. */
  fallbackOrigin: "https://dylanwells120-png.github.io",
  language: "en",
  author: "Dylan Wells",
  copyrightYear: 2026,
  ogImage: "/og-image.svg",
  favicon: "/favicon.svg",
} as const;

export const game = {
  title: "Kuni",
  titleJa: "国",
  workingTitle: true,
  tagline: "Walk the provinces of Edo Japan.",
  pitch:
    "An independent exploration game about roads, weather, and the named kuni that once mapped the Japanese archipelago. Travel at a human pace. Read the land.",
  description:
    "Kuni is an independent Unity game by Dylan Wells: a quiet Edo-period journey through Japan’s historical provinces. Wishlist and trailer coming soon.",
  genre: "Exploration",
  engine: "Unity",
  platforms: ["PC"],
  priceLabel: "Price to be announced",
  /** Set only when a real store price is public. Do not invent a number. */
  price: "" as string,
  /**
   * Full Steam store URL, e.g. https://store.steampowered.com/app/xxxxx
   * Leave empty to keep every Steam CTA in the “Coming soon” state.
   */
  steamUrl: "" as string,
  trailerUrl: "" as string,
  trailerPoster: "/media/trailer-placeholder.svg",
  screenshots: [
    {
      src: "/media/placeholder-coast.svg",
      alt: "Placeholder atmosphere study: a dark coastal horizon with gold rule. Not gameplay footage.",
      caption: "Coast study",
    },
    {
      src: "/media/placeholder-pass.svg",
      alt: "Placeholder atmosphere study: layered mountain silhouettes. Not gameplay footage.",
      caption: "Pass study",
    },
    {
      src: "/media/placeholder-town.svg",
      alt: "Placeholder atmosphere study: a night post-town suggested with lantern light. Not gameplay footage.",
      caption: "Town study",
    },
    {
      src: "/media/placeholder-map.svg",
      alt: "Placeholder atmosphere study: a geometric province map fragment. Not gameplay footage.",
      caption: "Map study",
    },
  ],
} as const;

export const pillars = [
  {
    index: "01",
    title: "Provinces, not stages",
    body: "Move through named kuni — coasts, passes, and towns with their own weather — instead of a single corridor dressed as a country.",
  },
  {
    index: "02",
    title: "The Edo road",
    body: "The period is texture: checkpoints, inns, messengers, and the slow commerce of the highway. History is observed, not lectured.",
  },
  {
    index: "03",
    title: "Look, then linger",
    body: "Built for attention. Light, distance, and season matter more than a mission log. The pleasure is in arriving, not clearing a list.",
  },
  {
    index: "04",
    title: "A crafted PC release",
    body: "Made in Unity for keyboard, mouse, and gamepad. A focused independent game — not a live-service platform.",
  },
] as const;

export const about = {
  kicker: "The studio",
  title: "A quiet map, drawn by one person",
  paragraphs: [
    "Dylan Wells is building Kuni independently. The working title comes from 国 (kuni), the historical provinces that once divided the Japanese archipelago. The game is an invitation to travel that map at walking speed: Edo-period roads, weather, and the particular character of each region.",
    "This site will change as a Steam page, trailer, and captured footage exist. Until then, the media here is atmospheric placeholder work — not screenshots, not reviews, not a store listing.",
  ],
} as const;

export const nav = [
  { href: "/#game", label: "Game" },
  { href: "/#media", label: "Media" },
  { href: "/#about", label: "About" },
  { href: "/#wishlist", label: "Wishlist" },
] as const;

export const social = {
  note: "Social channels will be listed here when they go live.",
  links: [] as { label: string; href: string }[],
};

/** True only when a real https Steam URL has been configured in `game.steamUrl`. */
export function isSteamReady(): boolean {
  return /^https:\/\/store\.steampowered\.com\//i.test(game.steamUrl);
}

export function isTrailerReady(): boolean {
  return /^https:\/\//i.test(game.trailerUrl);
}

export function steamCtaLabel(): string {
  return isSteamReady() ? "Wishlist on Steam" : "Coming soon on Steam";
}
