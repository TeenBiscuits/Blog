import node from '@astrojs/node'
import react from '@astrojs/react'
import auditLog from '@emdash-cms/plugin-audit-log'
import { defineConfig, fontProviders } from 'astro/config'
import emdash, { local } from 'emdash/astro'
import { sqlite } from 'emdash/db'

export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'gl'],
		fallback: { en: 'es', gl: 'es' },
		routing: {
			prefixDefaultLocale: true,
		},
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: 'file:./data.db' }),
			storage: local({
				directory: './uploads',
				baseUrl: '/_emdash/api/media/file',
			}),
			plugins: [auditLog],
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Libre Baskerville',
			cssVariable: '--font-serif',
			weights: [400, 700],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Rubik',
			cssVariable: '--font-sans',
			weights: [300, 400, 500],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Cascadia Mono',
			cssVariable: '--font-mono',
			weights: [400],
			fallbacks: ['monospace'],
		},
	],
	devToolbar: { enabled: false },
})
