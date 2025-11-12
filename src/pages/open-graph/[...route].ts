import { OGImageRoute } from 'astro-og-canvas'
import { getCollection } from 'astro:content'

const collectionEntries = await getCollection('blog')

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(
	collectionEntries.map(({ id, data }) => [id, data])
)

export const { getStaticPaths, GET } = OGImageRoute({
	// Tell us the name of your dynamic route segment.
	// In this case it’s `route`, because the file is named `[...route].ts`.
	param: 'route',

	// A collection of pages to generate images for.
	// The keys of this object are used to generate the path for that image.
	// In this example, we generate one image at `/open-graph/example.png`.
	pages: pages,

	// For each page, this callback will be used to customize the OpenGraph image.
	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		logo: {
			path: './public/favicon-96x96.png',
		},
		bgImage: {
			path: './src/assets/og-background.png',
		},
		font: {
			title: {
				families: ['Merriweather', 'serif'],
				color: [18, 15, 7],
			},
			description: {
				families: ['Rubik', 'sans-serif'],
				color: [18, 15, 7],
				size: 32,
			},
		},
		fonts: [
			'https://cdn.jsdelivr.net/fontsource/fonts/rubik@latest/latin-400-normal.ttf',
			'https://cdn.jsdelivr.net/fontsource/fonts/merriweather@latest/latin-400-normal.ttf',
		],
	}),
})
