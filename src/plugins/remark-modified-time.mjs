import { execSync } from 'child_process'

export function remarkModifiedTime() {
	return function (_, file) {
		const filepath = file.history[0]
		const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`)
		file.data.astro.frontmatter.lastModified =
			result.toString() || '2025-01-01T00:00:00Z'
	}
}
