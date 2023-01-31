<script>
	import SingleEntry from '../../components/hotkeys-part/singleEntry.svelte';
	import { sortedDocumentationData } from '../../data/blender/hotkeys-data';
	import Footer from '../../components/footer.svelte';
</script>

<svelte:head>
	<title>Blender Hotkey Documentation</title>
</svelte:head>

<main class="mainContainer">
	<h1>Hotkeys</h1>
	<section style="margin-bottom: 50px;">
		{#each sortedDocumentationData as entry (entry.name)}
			<SingleEntry name={entry.name} description={entry.description} keystroke={entry.keystroke} />
		{/each}
	</section>
</main>
<footer>
	<Footer />
</footer>

<style lang="scss">
	@import '../../styles/animations.scss';
	@import '../../styles/colors.scss';

	h1 {
		margin-left: 20px;
		font-size: 50px;
	}
	.mainContainer {
		width: 85%;
		margin-left: 15%;
		margin-top: 125px;
		transition: all 0.25s;
	}

	@media only screen and (max-width: 1200px) {
		.mainContainer {
			width: 100%;
			margin-left: 0;
			margin-top: 125px;
		}
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
</style>
