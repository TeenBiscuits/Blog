/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Umami Analytics https://umami.is/docs/tracker-functions
interface UmamiPayload {
	hostname?: string
	language?: string
	referrer?: string
	screen?: string
	title?: string
	url?: string
	website?: string
	[key: string]: any
}

interface UmamiEventData {
	[key: string]: string | number | boolean | null
}

interface Window {
	umami?: {
		/**
		 * Track a pageview with default properties
		 */
		track(): void
		/**
		 * Track a pageview with custom payload or transform function
		 */
		track(payload: UmamiPayload | ((props: UmamiPayload) => UmamiPayload)): void
		/**
		 * Track a custom event
		 */
		track(eventName: string): void
		/**
		 * Track a custom event with additional data
		 * - Numbers: max precision of 4
		 * - Strings: max 500 characters
		 * - Objects: max 50 properties
		 */
		track(eventName: string, eventData: UmamiEventData): void
		/**
		 * Identify a session with a unique ID
		 */
		identify(uniqueId: string): void
		/**
		 * Identify a session with a unique ID and additional data
		 */
		identify(uniqueId: string, data: UmamiEventData): void
		/**
		 * Identify a session with data only
		 */
		identify(data: UmamiEventData): void
	}
}
