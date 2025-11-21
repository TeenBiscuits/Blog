// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from '@/i18n'

export const SITE_TITLE: string | Multilingual = {
	es: 'Blog de Pablo',
	gl: 'Blog de Pablo',
	en: `Pablo's Blog`,
}

export const SITE_TITLE_SOCIAL: string | Multilingual = {
	es: 'Blog de Pablo | Tecnología y Opinión',
	gl: 'Blog de Pablo | Tecnoloxía e Opinión',
	en: `Pablo's Blog | Technology and Opinion`,
}

export const SITE_DESCRIPTION: string | Multilingual = {
	es: 'blog personal de Pablo Portas López, en el que hablo de las cosas que aprendo o que simplemente me apetecen',
	gl: 'blog persoal de Pablo Portas López, no que falo das cousas que aprendo ou que simplemente me apetece',
	en: 'personal blog of Pablo Portas López, where I talk about the things I learn or that I simply feel like',
}

export const SITE_KEYWORDS: string | Multilingual = {
	es: 'blog personal, artículos, tecnología, programación, tutoriales',
	gl: 'blog persoal, artigos, tecnoloxía, desenvolvemento web, programación, tutoriais',
	en: 'personal blog, articles, technology, programming, tutorials',
}

export const X_ACCOUNT: string | Multilingual = 'PabloPortasL'

export const SocialLinks = [
	{
		icon: 'github',
		name: 'GitHub',
		url: 'https://github.com/TeenBiscuits',
	},
	{
		icon: 'linkedin',
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/pabloportaslopez/',
	},
	{
		icon: 'twitter',
		name: 'X / Twitter',
		url: 'https://twitter.com/pabloportasl',
	},
	{
		icon: 'instagram',
		name: 'Instagram',
		url: 'https://instagram.com/pabloportasl',
	},
]

type WebLink = {
	name: Record<string, string>
	url: string
}

type WebLinks = WebLink[]

export const WebsiteLinks: WebLinks = [
	{ name: { es: 'Principal', gl: 'Principal', en: 'Home' }, url: '' },
	{ name: { es: 'Artículos', gl: 'Artigos', en: 'Posts' }, url: 'posts/' },
	{
		name: { es: 'Acerca de Mí', gl: 'Eu', en: 'About Me' },
		url: 'about/',
	},
]

export const LOCALE_SUGGEST_TEXT: string | Multilingual = {
	es: 'Ir a la versión en',
	gl: 'Ir á versión en',
	en: 'Go to the version in',
}
