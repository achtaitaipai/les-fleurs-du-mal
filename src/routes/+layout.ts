import { loadTexts } from '$lib/loadTexts'
import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = () => {
	const texts = loadTexts()
	return { texts }
}
