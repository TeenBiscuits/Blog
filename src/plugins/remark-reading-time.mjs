import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
	return function (tree, { data }) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		// readingTime.minutes will give us minutes read as a number
		data.astro.frontmatter.minutesRead = readingTime.minutes
	}
}
