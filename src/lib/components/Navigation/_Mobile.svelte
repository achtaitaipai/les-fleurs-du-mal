<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { fade } from 'svelte/transition'
	import Menu from './_Menu.svelte'

	let isOpen = $state(false)
	$effect(() => {
		document.body.classList.toggle('menu-open', isOpen)
	})

	afterNavigate(() => {
		isOpen = false
	})
</script>

<header>
	<button onclick={() => (isOpen = true)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			width="1em"
			height="1em"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>

		Sommaire</button
	>
</header>
{#if isOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="backdrop" onclick={() => (isOpen = false)} transition:fade></div>
	<aside transition:fade>
		<Menu />
	</aside>
{/if}

<style>
	:global {
		@media (width <= 45rem) {
			body.menu-open {
				overflow-y: hidden;
			}
		}
	}
	header {
		position: sticky;
		top: 0;
		padding-block: var(--space-2xs);
		padding-inline: var(--space-xs);
		border-block-end: 1px solid var(--gray-6);
		background-color: white;

		& > button {
			background-color: transparent;
			border: none;
			display: flex;
			align-items: center;
			gap: var(--space-2xs);
		}
	}
	.backdrop {
		background-color: var(--gray-12);
		opacity: 0.9;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 18rem;
		height: 100vh;
		height: 100dvh;
	}
	@media (width > 45rem) {
		header,
		aside,
		.backdrop {
			display: none;
		}
	}
</style>
