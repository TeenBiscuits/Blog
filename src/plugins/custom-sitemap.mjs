import sitemap from '@astrojs/sitemap'
import fs from 'fs'
import path from 'path'
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales'

// Inspired https://www.printezisn.com/blog/post/adding-accurate-lastmod-tags-to-your-astro-sitemap/

// Function that returns the latest modified date or the minDate if more recent
function getLatestArticleDate(item, site, distFolder, minDate) {
	const filePathSequence = item.url.replace(site, '').split('/').filter(Boolean)
	const filePath = path.join(
		import.meta.dirname,
		'..',
		'..',
		distFolder,
		...filePathSequence,
		'index.html'
	)

	const fileContent = fs.readFileSync(filePath).toString()
	const lastUpdateTime = fileContent.match(/data-last-update="(.+?)"/)?.[1]

	const lastmod = lastUpdateTime ? new Date(lastUpdateTime) : minDate
	return lastmod > minDate ? lastmod.toISOString() : minDate.toISOString()
}

const customSitemap = (site, distFolder, minDate) =>
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
		// Customize sitemap entries based on page type (no lastmod)
		serialize(item) {
			// Articles listing page - changes with each article upload
			if (item.url.endsWith('/posts/')) {
				return {
					...item,
					lastmod: getLatestArticleDate(item, site, distFolder, minDate), // latest article date
					changefreq: 'weekly',
					priority: 0.9,
				}
			}
			// Individual article page - rarely changes after publication
			if (item.url.split('/posts/')[1]) {
				return {
					...item,
					lastmod: getLatestArticleDate(item, site, distFolder, minDate),
					changefreq: 'monthly',
					priority: 0.7,
				}
			}
			// About page - does not change
			if (item.url.endsWith('/about/')) {
				return {
					...item,
					lastmod: getLatestArticleDate(item, site, distFolder, minDate), // last update about page
					changefreq: 'yearly',
					priority: 0.5,
				}
			}
			// Locale selector page - never changes
			if (item.url.endsWith('/locale/')) {
				return {
					...item,
					lastmod: minDate, // min update date
					changefreq: 'never',
					priority: 0.3,
				}
			}
			// Homepage - changes with each article upload
			if (item.url.endsWith('/')) {
				return {
					...item,
					lastmod: getLatestArticleDate(item, site, distFolder, minDate), // latest article date
					changefreq: 'weekly',
					priority: 1.0,
				}
			}
			return item
		},
	})

export default customSitemap
