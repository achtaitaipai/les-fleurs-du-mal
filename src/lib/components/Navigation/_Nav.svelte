<script lang="ts">
	import Details from '../Details.svelte'
	import NavLink from './_NavLink.svelte'
	import { page } from '$app/stores'

	type Props = {
		links: Record<string, { label: string; slug: string }[]>
	}

	let { links }: Props = $props()

	const containCurrent = (items: { slug: string }[]) =>
		items.some((el) => $page.url.toString().endsWith(el.slug))
</script>

<nav>
	{#each Object.entries(links) as [section, items]}
		<Details open={containCurrent(items)}>
			{#snippet title()}
				{section}
			{/snippet}
			<ul role="list">
				{#each items as { label, slug }}
					<li><NavLink {slug}>{label}</NavLink></li>
				{/each}
			</ul>
		</Details>
	{/each}
</nav>

<style>
	nav {
		padding-block: var(--space-s);
	}
	ul {
		border-inline-start: 1px solid var(--gray-6);
		padding-inline-start: var(--space-3xs);
	}

	li + li {
		margin-block-start: var(--space-3xs);
	}
</style>
