import { diffFiles } from '$lib/diff.js'
import { loadTexts } from '$lib/loadTexts.js'
import type { EntryGenerator, PageLoad } from './$types.js'

export const entries: EntryGenerator = () => {
	const texts = Object.keys(loadTexts())
	return texts.map((el) => ({ slug: el }))
}

export const load: PageLoad = async ({ params, parent }) => {
	const { slug } = params
	const texts = (await parent()).texts[slug]
	const diff = diffFiles(texts[1857]?.content, texts[1861]?.content)
	return { slug, texts, diff }
}
