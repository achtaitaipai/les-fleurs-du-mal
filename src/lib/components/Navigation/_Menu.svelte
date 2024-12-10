<script lang="ts">
	import { links } from './links'
	import Nav from './_Nav.svelte'

	let tabs = [
		{ title: '1857', links: links[1857] },
		{ title: '1861', links: links[1861] }
	]

	let current = $state(0)
</script>

<div class="wrapper">
	<header>
		{#each tabs as { title }, index}
			<button onclick={() => (current = index)} aria-current={current === index}>{title}</button>
		{/each}
	</header>
	<div class="content">
		{#each tabs as { links }, index}
			{#if index === current}
				<Nav {links} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.wrapper {
		background-color: white;
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100vh;
		height: 100dvh;
		border-inline-end: 1px solid var(--gray-6);
	}
	header {
		height: var(--header-height);
		padding-inline: var(--space-xs);
		padding-block-start: var(--space-xs);
		border-block-end: 1px solid var(--gray-6);

		& > button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			padding-inline: var(--space-xs);
			padding-block: var(--space-3xs);
			color: var(--gray-10);

			&:hover,
			&:focus-visible {
				color: var(--gray-12);
			}

			&[aria-current='true'] {
				border-block-end: 1px solid var(--blue-10);
				color: var(--gray-12);
			}
		}

		& > button + button {
			border-inline-start: 1px solid var(--gray-6);
		}
	}
	.content {
		padding-inline: var(--space-s);
		height: 100%;
		overflow: auto;
	}
</style>
