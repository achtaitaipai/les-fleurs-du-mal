<script lang="ts">
	import Navigation from '$lib/components/Navigation/Navigation.svelte'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<div class="wrapper">
	<Navigation />
	<main>
		{@render children()}
	</main>
</div>

<style>
	@media (width > 45rem) {
		.wrapper {
			display: grid;
			grid-template-columns: auto 1fr;
		}
	}
</style>
