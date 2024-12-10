<script lang="ts">
	import Menu from './_Menu.svelte'
	import Mobile from './_Mobile.svelte'
</script>

<aside class="desktop">
	<Menu />
</aside>
<Mobile />

<style>
	aside {
		position: sticky;
		top: 0;
		width: 18rem;
		height: 100vh;
		height: 100dvh;
		@media (width <= 45rem) {
			display: none;
		}
	}
</style>
