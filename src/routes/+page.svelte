<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	// function used as a action event handler (important: remove eventListener on return (destroy))
	import InformationSection from '../components/home/informationSection.svelte';
	import FirstPartTitle from '../components/home/FirstPartTitle.svelte';
	import Footer from '../components/footer.svelte';
	import SecondPartInformation from '../components/home/SecondPartInformation.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main style="width: 95%;" class="mx-auto">
	<FirstPartTitle />
	<SecondPartInformation />

	<!-- <InformationSection /> -->

	<!-- <picture>
		<source srcset="img_pink_flowers.webp" type="image/webp" />
		<source srcset="img_white_flower.jpg" type="image/jpeg" />
		<img src="img_orange_flowers.jpg" alt="Flowers" />
	  </picture> -->
</main>

<!-- <Footer /> -->
<style lang="scss">
	@import '../styles/animations.scss';
	@import '../styles/colors.scss';

	:global(*) {
		background-color: var(--main-color);
		color: var(--font-color);
		font-family: 'Courier New', Courier, monospace;
		box-sizing: border-box;
	}
	:global(body) {
		overflow-x: hidden;
	}
</style>
