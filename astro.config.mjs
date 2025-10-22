import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import icon from 'astro-icon'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'
import { rehypeLocalizedFootnotes } from './src/plugins/rehype-localized-footnotes.mjs'

import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales'

// https://astro.build/config
export default defineConfig({
	site: process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: 'https://blog.pablopl.dev',

	i18n: {
		defaultLocale: DEFAULT_LOCALE_SETTING,
		locales: Object.keys(LOCALES_SETTING),
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},

	integrations: [
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: DEFAULT_LOCALE_SETTING,
				locales: Object.fromEntries(
					Object.entries(LOCALES_SETTING).map(([key, value]) => [
						key,
						value.lang ?? key,
					])
				),
			},
		}),
		icon(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],

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
