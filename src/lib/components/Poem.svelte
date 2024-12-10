<script lang="ts">
	import type { Snippet } from 'svelte'

	let { children, title, number }: { title?: string; number?: string; children: Snippet } = $props()
</script>

<section class="flow">
	{#if title}
		<h3>{title}</h3>
	{/if}
	{#if number}
		<h4>{number}</h4>
	{/if}
	<div>
		{@render children()}
	</div>
</section>

<style>
	section {
		flex-grow: 1;
		display: grid;
		justify-content: center;
		flex-basis: 20rem;
	}
	h3,
	h4 {
		text-align: center;
		max-width: 40ch;
	}
	h4 {
		font-size: var(--step-0);
	}
	h3 {
		font-size: var(--step-1);
	}
</style>
