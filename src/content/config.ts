import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
	schema: z.object({
		pubId: z.string(),
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
})

const about = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/about' }),
	schema: z.object({
		pubDate: z.coerce.date(),
	}),
})

export const collections = { blog, about }
