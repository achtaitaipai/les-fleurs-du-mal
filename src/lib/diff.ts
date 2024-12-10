import { diffWordsWithSpace, type Change } from 'diff'

export const diffFiles = (text1?: string, text2?: string) => {
	if (!text1) {
		return {
			added: prepareHtml(text2!, 'ins'),
			removed: ''
		}
	}
	if (!text2) {
		return {
			added: '',
			removed: prepareHtml(text1!, 'del')
		}
	}
	const diff = diffWordsWithSpace(text1 ?? '', text2 ?? '')
	const removed = concactDiff(diff.filter((el) => el.added === false)).reduce((acc, current) => {
		if (current.removed) return acc + `<del>${current.value}</del>`
		return acc + current.value
	}, '')
	const added = concactDiff(diff.filter((el) => el.removed === false)).reduce((acc, current) => {
		if (current.added) return acc + `<ins>${current.value}</ins>`
		return acc + current.value
	}, '')
	return { added: prepareHtml(added), removed: prepareHtml(removed) }
}

const concactDiff = (changes: Change[]) => {
	return changes.reduce<Change[]>((acc, current) => {
		const previous = acc.at(-2)
		const between = acc.at(-1)
		if (
			!previous ||
			!between ||
			between.value !== ' ' ||
			previous.added !== current.added ||
			previous.removed !== current.removed
		)
			return [...acc, current]
		acc.at(-2)!.value += ' ' + current.value
		acc.pop()
		return acc
	}, [])
}

const prepareHtml = (text: string, tag?: string) => {
	const before = tag ? `<p><${tag}>` : '<p>'
	const after = tag ? `</${tag}></p>` : '</p>'
	return text.replace(/^(?!\s*$).+/gm, `${before}$&${after}`).replace(/^\s*[\r\n]/gm, '<br/>')
}
