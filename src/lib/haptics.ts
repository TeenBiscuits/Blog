import type { HapticInput } from 'web-haptics'
import { WebHaptics } from 'web-haptics'

let instance: WebHaptics | null = null

function getInstance(): WebHaptics {
	if (!instance) {
		instance = new WebHaptics({
			debug: import.meta.env.DEV,
		})
	}
	return instance
}

export function triggerHaptic(input: HapticInput = 'light'): void {
	if (typeof window === 'undefined') return
	getInstance().trigger(input)
}
