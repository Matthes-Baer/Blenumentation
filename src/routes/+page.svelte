<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	// function used as a action event handler (important: remove eventListener on return (destroy))
	import InformationSection from '../components/home/informationSection.svelte';
	import FirstPart from '../components/home/FirstPart.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main style="width: 95%;" class="mx-auto">
	<FirstPart />
	<!-- <InformationSection /> -->
</main>
<Footer />

<style>
	/* Import of custom font-family: */
	@font-face {
		font-family: 'ContrailOne';
		font-style: normal;
		font-weight: 400;
		src: local('ContrailOne Regular'), local('ContrailOne-Regular'),
			url('../../static/fonts/ContrailOne-Regular.ttf') format('ttf');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	:global(:root) {
		--main-color: rgb(40, 40, 40);
	}
	:global(div, main, section, body) {
		background-color: var(--main-color);
		overflow-x: hidden;
		color: #ffffff;
	}

	:global(*) {
		font-family: ContrailOne;
	}
</style>
