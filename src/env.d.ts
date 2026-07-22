/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Rybbit Analytics https://rybbit.com/es/docs/track-events
interface Rybbit {
	pageview: () => void
	event: (name: string, properties?: Record<string, unknown>) => void
	identify: (userId: string, traits?: Record<string, unknown>) => void
	setTraits: (traits: Record<string, unknown>) => void
	clearUserId: () => void
	getUserId: () => string | null
	trackOutbound: (url: string, text?: string, target?: string) => void
	flag: <T = unknown>(key: string, fallback?: T) => T
	flagPayload: <T = unknown>(key: string, fallback?: T) => T
	flags: () => Record<string, unknown>
	flagPayloads: () => Record<string, unknown>
	onReady: (callback: (rybbit: Rybbit) => void) => void
}

interface Window {
	rybbit?: Rybbit
}
