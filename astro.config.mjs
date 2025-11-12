import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeFigureTitle from 'rehype-figure-title'
import customSitemap from './src/plugins/custom-sitemap.mjs'
import { rehypeLocalizedFootnotes } from './src/plugins/rehype-localized-footnotes.mjs'
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales'

// Oldest date for lastmod of all website
const minDate = new Date('2025-01-01')

const siteUrl =
	process.env.VERCEL_ENV === 'production'
		? 'https://blog.pablopl.dev'
		: process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: 'http://localhost:4321'

// https://astro.build/config
export default defineConfig({
	site: siteUrl,

	i18n: {
		defaultLocale: DEFAULT_LOCALE_SETTING,
		locales: Object.keys(LOCALES_SETTING),
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},

	integrations: [mdx(), customSitemap(siteUrl, 'dist', minDate), icon()],

	vite: {
		plugins: [tailwindcss()],
	},

	markdown: {
		remarkPlugins: [remarkReadingTime, remarkModifiedTime],
		rehypePlugins: [
			rehypeFigureTitle,
			rehypeAccessibleEmojis,
			rehypeLocalizedFootnotes,
		],
	},

	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
})
