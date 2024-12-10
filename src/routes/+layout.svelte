<script lang="ts">
	import './style/index.css'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<main>
	{@render children()}
</main>
