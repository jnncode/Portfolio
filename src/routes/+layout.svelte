<script>
	import Navigation from './Navigation.svelte';
	import './styles.css';

	export const today = new Date();
</script>

<div class="app">
	<Navigation />
	<main>
		<slot />
	</main>
	<footer>
		&copy; {today.getFullYear()} J Nguyen. All rights reserved.
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 98vh;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		max-width: 64rem;
		margin: 0 auto;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
