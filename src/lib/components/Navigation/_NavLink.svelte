<script lang="ts">
	import { page } from '$app/stores'
	import { onMount, type Snippet } from 'svelte'
	import { base } from '$app/paths'

	let { slug, children }: { slug: string; children: Snippet } = $props()

	let element: HTMLElement

	let isCurrent = $derived($page.url.toString().endsWith(slug))
	onMount(() => {
		if (isCurrent) element?.scrollIntoView()
	})
</script>

<a href={`${base}/poemes/${slug}`} aria-current={isCurrent ? 'page' : false} bind:this={element}
	>{@render children()}</a
>

<style>
	a {
		color: inherit;
		text-decoration: none;
		padding-inline: var(--space-3xs);
		padding-block: var(--space-3xs);
		display: block;
		scroll-margin-block-start: 20vh;

		&[aria-current='page'] {
			background-color: var(--blue-9);
			color: var(--gray-1);
			border-radius: 0.2rem;
		}
	}
</style>
