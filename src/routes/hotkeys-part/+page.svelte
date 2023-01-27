<script>
	import SingleEntry from '../../components/hotkeys-part/singleEntry.svelte';
	import { sortedDocumentationData } from '../../data/blender/hotkeys-data';
</script>

<svelte:head>
	<title>Blender Hotkey Documentation</title>
</svelte:head>

<div class="mainContainer">
	<div data-aos="fade-up" style="margin-bottom: 50px;">
		{#each sortedDocumentationData as entry (entry.name)}
			<SingleEntry name={entry.name} description={entry.description} keystroke={entry.keystroke} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../styles/animations.scss';
	@import '../../styles/colors.scss';
	.mainContainer {
		width: 85%;
		margin-left: 15%;
		margin-top: 125px;
		transition: all 0.25s;
		max-height: 500px;
	}

	@media only screen and (max-width: 1200px) {
		.mainContainer {
			width: 100%;
			margin-left: 0;
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
