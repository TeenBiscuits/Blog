import { unified } from "@astrojs/markdown-remark";
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeFigureTitle from "rehype-figure-title";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import customSitemap from "./src/plugins/custom-sitemap.mjs";
import { rehypeLocalizedFootnotes } from "./src/plugins/rehype-localized-footnotes.mjs";
import { remarkModifiedTime } from "./src/plugins/remark-modified-time.mjs";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

import rehypeKatex from "rehype-katex";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/locales";

// Oldest date for lastmod of all website
const minDate = new Date("2025-11-17");

const siteUrl =
  process.env.VERCEL_ENV === "production"
    ? "https://blog.pablopl.dev"
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  trailingSlash: "never",

  image: {
    layout: "constrained",
    responsiveStyles: true,
    breakpoints: [320, 480, 640, 750, 828, 1080, 1280, 1668, 1920, 2048],
  },

  build: {
    inlineStylesheets: "always",
  },

  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [mdx(), customSitemap(siteUrl, "dist", minDate), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkMath,
        remarkGfm,
        remarkReadingTime,
        remarkModifiedTime,
      ],
      rehypePlugins: [
        rehypeKatex,
        rehypeFigureTitle,
        rehypeAccessibleEmojis,
        rehypeLocalizedFootnotes,
      ],
    }),
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      weights: ["300 900"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
      display: "swap",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Merriweather",
      cssVariable: "--font-merriweather",
      fallbacks: ["Georgia", "serif"],
      weights: ["700"],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cascadia Code",
      cssVariable: "--font-cascadia",
      fallbacks: ["ui-monospace", "monospace"],
      weights: ["200 700"],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
    },
  ],
});
