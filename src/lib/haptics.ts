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

/**
 * Attach a haptic click listener to an element, preventing duplicates.
 * Uses a data attribute to track whether a listener was already added,
 * which is essential for elements that persist across View Transitions.
 */
export function addHapticListener(
	el: Element,
	input: HapticInput = 'light'
): void {
	const key = `data-haptic-${input}`
	if (el.hasAttribute(key)) return
	el.setAttribute(key, '')
	el.addEventListener('click', () => triggerHaptic(input))
}
