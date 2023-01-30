<script lang="ts">
	import SingleTile from './SingleTile.svelte';
	import { DATA } from '../../../data/blender/ThirdPartSingleTileData';
</script>

<section class="main-div-container">
	{#each DATA as DATA_ENTRY (DATA_ENTRY)}
		<SingleTile
			layer={DATA_ENTRY.id}
			direction={DATA_ENTRY.id % 2 === 0 ? 'end' : 'start'}
			title={DATA_ENTRY.title}
			webp={DATA_ENTRY.webp}
			description={DATA_ENTRY.description}
			link={DATA_ENTRY.link}
		/>
	{/each}
</section>

<style>
	.main-div-container {
		display: flex;
		flex-direction: column;
	}
</style>
