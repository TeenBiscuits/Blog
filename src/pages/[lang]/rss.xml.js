import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts'
import { localeParams } from '@/i18n'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const parser = new MarkdownIt()

export const getStaticPaths = () => localeParams

export async function GET(context) {
	const locale = context.params.lang

	const localeTitle =
		typeof SITE_TITLE === 'string' ? SITE_TITLE : SITE_TITLE[locale]
	const localeDescription =
		typeof SITE_DESCRIPTION === 'string'
			? SITE_DESCRIPTION
			: SITE_DESCRIPTION[locale]

	const posts = await getCollection(
		'blog',
		({ id }) => id.split('/')[0] === locale
	)
	posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

	return rss({
		title: localeTitle,
		description: localeDescription,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			content: post.body
				? sanitizeHtml(parser.render(post.body), {
						allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
					})
				: undefined,
			link: `/${locale}/posts/${post.id.split('/')[1]}`,
			customData: `<updated>${
				post.data.updatedDate ? post.data.updatedDate : ''
			}</updated>`,
		})),
		trailingSlash: false,
		stylesheet: `/${locale}/rss-styles.xsl`,
	})
}
