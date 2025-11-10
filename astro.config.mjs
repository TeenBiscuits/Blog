import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeLocalizedFootnotes } from './src/plugins/rehype-localized-footnotes.mjs'
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales'

// https://astro.build/config
export default defineConfig({
	site:
		process.env.VERCEL_ENV === 'production'
			? 'https://blog.pablopl.dev'
			: process.env.VERCEL_URL
				? `https://${process.env.VERCEL_URL}`
				: 'http://localhost:4321',

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
