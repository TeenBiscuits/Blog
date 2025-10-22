// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from '@/i18n'

export const SITE_TITLE: string | Multilingual = {
	es: 'Blog de Pablo',
	gl: 'Blog de Pablo',
	en: `Pablo's Blog`,
}

export const SITE_DESCRIPTION: string | Multilingual = {
	es: 'mi blog personal en el que hablo de las cosas que aprendo o que simplemente me apetecen',
	gl: 'o meu blog persoal no que falo das cousas que aprendo ou que simplemente me apetece',
	en: 'my personal blog in which I talk about the things I learn or the things I just feel like',
}

export const X_ACCOUNT: string | Multilingual = '@PabloPortasL'

// Deprecated const from original blog theme https://github.com/yashjawale/saral-theme-astro/
export const SITE_BASE = ''

export const SocialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/TeenBiscuits',
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/pabloportaslopez/',
	},
	{
		name: 'X / Twitter',
		url: 'https://twitter.com/pabloportasl',
	},
	{
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
	{ name: { es: 'Artículos', gl: 'Artigos', en: 'Posts' }, url: 'posts' },
	{
		name: { es: 'Acerca de Mí', gl: 'Sobre Min', en: 'About Me' },
		url: 'about',
	},
]
