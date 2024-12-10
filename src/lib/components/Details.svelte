<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		title,
		children,
		open = false
	}: { title: Snippet; children: Snippet; open?: boolean } = $props()
</script>

<details bind:open>
	<summary
		>{@render title()}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			width=".8em"
			height=".8em"
			class:open
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
		</svg>
	</summary>
	<div class="content">
		{@render children()}
	</div>
</details>

<style>
	details + details {
		margin-block-start: var(--space-2xs);
	}
	summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		position: sticky;
		top: 0;
		padding-block: var(--space-3xs);
		background-color: white;
		/* font-size: var(--step-1); */
		font-weight: bold;
		cursor: pointer;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary svg {
		transition: transform 0.2s;
		&.open {
			transform: rotate(90deg);
		}
	}
	.content {
		padding-block: var(--space-3xs);
		padding-inline-start: var(--space-2xs);
	}
</style>
