export type Poem = {
	number: string
	title: string
	content: string
}

export const loadTexts = () => {
	const texts1 = import.meta.glob('/content/1857/*.txt', {
		query: '?raw',
		eager: true
	})

	const texts2 = import.meta.glob('/content/1861/*.txt', {
		query: '?raw',
		eager: true
	})

	let results: { [key: string]: { 1857?: Poem; 1861?: Poem } } = {}

	for (const key in texts1) {
		if (Object.prototype.hasOwnProperty.call(texts1, key)) {
			const element = texts1[key] as { default: string }
			const txt = element.default
			const fileName = key.split('/').at(-1)!.replace('.txt', '')
			if (results[fileName]) results[fileName][1857] = formatText(txt)
			else results[fileName] = { [1857]: formatText(txt) }
		}
	}
	for (const key in texts2) {
		if (Object.prototype.hasOwnProperty.call(texts2, key)) {
			const element = texts2[key] as { default: string }
			const txt = element.default
			const fileName = key.split('/').at(-1)!.replace('.txt', '')
			if (results[fileName]) results[fileName][1861] = formatText(txt)
			else results[fileName] = { [1861]: formatText(txt) }
		}
	}
	return results
}

export const formatText = (text: string) => {
	const [number, title] = getHeader(text)
	const content = text
		.replace(number, '')
		.replace(title, '')
		.replace(/^\n+/, '')
		.replace(/\n+$/, '')
	return { number, title, content }
}

const getHeader = (text: string): [string, string] => {
	const romanNumeralRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
	const header = text.match(/^([A-Z, ,’,É,È,Ê,Â,À,Ï,Œ,Û,Ô,-,Æ])+$/gm)
	if (!header) return ['', '']
	if (header?.length && header.length >= 2) return [header[0], header[1]]
	if (!romanNumeralRegex.test(header[0])) return ['', header[0]]
	return [header[0], '']
}
