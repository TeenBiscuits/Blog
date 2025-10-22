import { visit } from 'unist-util-visit'

/**
 * Rehype plugin to localize the footnotes section heading
 * This plugin finds the footnotes section heading and replaces it with a localized version
 */
export function rehypeLocalizedFootnotes() {
	return (tree, file) => {
		// Get the language from the file path
		// Assuming the path contains /blog/en/, /blog/es/, or /blog/gl/
		const filePath = file.history?.[0] || ''
		const lang = filePath.includes('/blog/en/')
			? 'en'
			: filePath.includes('/blog/gl/')
				? 'gl'
				: 'es'

		// Localized footnotes heading
		const footnoteHeadings = {
			en: 'Footnotes',
			es: 'Notas al pie',
			gl: 'Notas ao pé',
		}

		visit(tree, 'element', (node) => {
			// Find the footnotes section (it has class "footnotes" and data-footnotes attribute)
			if (
				node.tagName === 'section' &&
				node.properties?.className?.includes('footnotes') &&
				node.properties?.dataFootnotes === true
			) {
				// Find the heading inside the footnotes section
				visit(node, 'element', (headingNode) => {
					if (headingNode.tagName === 'h2') {
						// Replace the heading text
						if (headingNode.children && headingNode.children[0]) {
							headingNode.children[0].value = footnoteHeadings[lang]
						}
					}
				})
			}
		})
	}
}
