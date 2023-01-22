<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	// function used as a action event handler (important: remove eventListener on return (destroy))
	import InformationSection from '../components/learning archive/informationSection.svelte';
	import FirstPartTitle from '../components/home/FirstPartTitle.svelte';
	import Footer from '../components/footer.svelte';
	import SecondPartInformation from '../components/home/SecondPartInformation.svelte';
	import ThirdPartTopicOverview from '../components/home/ThirdPart/ThirdPartTopicOverview.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="mx-auto main-container">
	<FirstPartTitle />
	<SecondPartInformation />
	<ThirdPartTopicOverview />
</main>

<!-- <Footer /> -->
<style lang="scss">
	@import '../styles/animations.scss';
	@import '../styles/colors.scss';

	.main-container {
		width: 95%;
		margin-top: 100px;
		transition: all 0.25s;
	}

	:global(*) {
		background-color: var(--main-color);
		color: var(--font-color);
		font-family: 'Courier New', Courier, monospace;
		box-sizing: border-box;
	}
	:global(body) {
		overflow-x: hidden;
	}

	@media only screen and (max-width: 400px) {
		.main-container {
			margin-top: 150px;
		}
	}
</style>
