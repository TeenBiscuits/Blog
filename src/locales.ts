// locales settings for this theme
// Set the languages you want to support on your site.
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = 'es'

interface LocaleSetting {
	[key: Lowercase<string>]: {
		emogi?: string
		label: string
		lang?: string
		dir?: 'rtl' | 'ltr'
	}
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const LOCALES_SETTING: LocaleSetting = {
	es: {
		emogi: '🇪🇸',
		label: 'Español',
		lang: 'es-ES',
	},
	gl: {
		emogi: '🧜🏻‍♀️',
		label: 'Galego',
		lang: 'gl-ES',
	},
	en: {
		emogi: '🇬🇧',
		label: 'English',
		lang: 'en-GB',
	},
}
