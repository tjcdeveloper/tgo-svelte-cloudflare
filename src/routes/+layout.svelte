<script lang="ts">
	import Header from './Header.svelte';
	import Menu from './Menu.svelte';
	import './styles.css';
</script>

<div class="app container is-widescreen">
	<div class="columns is-gapless">
		<div class="column is-one-third-desktop is-one-fifth-fullhd menu">
			<Menu />
		</div>
		<div class="column">
			<Header />

			<main>
				<slot />
			</main>
		</div>
	</div>
	<footer class="has-text-centered">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
    @media screen and (max-width: 1023px) {
    }
    .menu {
        height: 100vh;
    }
</style>
