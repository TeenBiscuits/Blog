export const LOCALES = ['es', 'en', 'gl'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'es'

export const LOCALE_LABELS: Record<Locale, string> = {
	es: 'ES',
	en: 'EN',
	gl: 'GL',
}

export function localeForDate(locale: Locale): string {
	const map: Record<Locale, string> = {
		es: 'es-ES',
		en: 'en-US',
		gl: 'gl-ES',
	}
	return map[locale] || 'es-ES'
}

export function formatDate(date: Date | null | undefined, locale: Locale): string | null {
	if (!date) return null
	return date.toLocaleDateString(localeForDate(locale), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

export function formatDateShort(date: Date | null | undefined, locale: Locale): string | null {
	if (!date) return null
	return date.toLocaleDateString(localeForDate(locale), {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}