<script lang="ts">
	import type { PageData } from './$types.js'
	import Poem from '$lib/components/Poem.svelte'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
</script>

<div class="content">
	<Poem {...data.texts[1857]}>
		{@html data.diff.removed}
	</Poem>
	<Poem {...data.texts[1861]}>
		{@html data.diff.added}
	</Poem>
</div>

<style>
	.content {
		padding-block: var(--space-m);
		padding-inline: var(--space-xs);
		display: flex;
		justify-content: center;
		align-items: start;
		flex-wrap: wrap;
		column-gap: var(--space-l);
		row-gap: var(--space-3xl);
	}
</style>
