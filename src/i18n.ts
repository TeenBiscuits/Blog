import { getCollection } from 'astro:content'
import { getRelativeLocaleUrl } from 'astro:i18n'
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './locales'

/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>
type LocaleConfig = {
	readonly label: string
	readonly emogi?: string
	readonly lang?: string
	readonly dir?: 'ltr' | 'rtl'
}

/**
 * Type for the language code
 * @example
 * "en" | "ja" | ...
 */
export type Lang = keyof typeof LOCALES

/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING as Lang

/**
 * Type for the multilingual object
 * @example
 * { en: "Hello", ja: "こんにちは", ... }
 */
export type Multilingual = { [key in Lang]?: string }

/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang: Lang) {
	return function t(multilingual: Multilingual | string): string {
		if (typeof multilingual === 'string') {
			return multilingual
		} else {
			return multilingual[lang] || multilingual[DEFAULT_LOCALE] || ''
		}
	}
}

/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths (async for post articles)
 */
export async function getLocalePaths(url: URL): Promise<LocalePath[]> {
	const pathParts = url.pathname.split('/')
	// Check if we're on a post article page: /lang/posts/slug
	const isPostArticle =
		pathParts[2] === 'posts' && pathParts.length > 3 && pathParts[3] !== ''

	if (isPostArticle) {
		// Get the current locale and post slug from the URL
		const currentLocale = pathParts[1]
		const currentSlug = pathParts[3]
		const pub = `${currentLocale}/${currentSlug}`

		// Fetch all blog posts
		const blog = await getCollection('blog')

		// Find the current post's pubId
		const currentPost = blog.find((post) => post.id === pub)
		const pubId = currentPost?.data.pubId

		// Build translation map: lang -> slug
		const translationMap: Record<string, string> = {}
		if (pubId) {
			const relatedPosts = blog.filter((post) => post.data.pubId === pubId)
			for (const post of relatedPosts) {
				const parts = post.id.split('/')
				const postLang = parts[0]
				const postSlug = parts[1]
				if (postLang && postSlug) {
					translationMap[postLang] = postSlug
				}
			}
		}

		// For post articles, use the translation map to get the correct slug for each language
		return Object.keys(LOCALES).map((lang) => {
			const translatedSlug = translationMap[lang]
			if (translatedSlug) {
				return {
					lang: lang as Lang,
					path: getRelativeLocaleUrl(lang, `/posts/${translatedSlug}`),
				}
			} else {
				// Fallback: if no translation exists for this language, use the current slug
				return {
					lang: lang as Lang,
					path: getRelativeLocaleUrl(lang, `/posts/${currentSlug}`),
				}
			}
		})
	}

	// For non-post pages, use the default behavior
	return Object.keys(LOCALES).map((lang) => ({
		lang: lang as Lang,
		path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, '')),
	}))
}
type LocalePath = {
	lang: Lang
	path: string
}

/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
	params: { lang },
}))
