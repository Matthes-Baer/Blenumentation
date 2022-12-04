<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	// function used as a action event handler (important: remove eventListener on return (destroy))
	import InformationSection from '../components/home/informationSection.svelte';
	import TitleTextTop from '../components/home/titleTextTop.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main style="width: 95%;" class="mx-auto">
	Mit Farbverläufen und Cards arbeiten farblich? Shadows
	<TitleTextTop />
	<InformationSection />
</main>
<Footer />

<style>
	:global(:root) {
		--main-color: #002025;
		--secondary-color: #21454a;
		--header-footer-color: #d6ccc2;
	}
	:global(div, main, section, body) {
		background-color: var(--main-color);
		overflow-x: hidden;
		color: #ffffff;
	}
</style>
