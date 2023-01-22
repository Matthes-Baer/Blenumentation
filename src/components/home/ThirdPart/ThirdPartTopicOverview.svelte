<script lang="ts">
	import SingleTile from './SingleTile.svelte';
	import { DATA } from '../../../data/blender/ThirdPartSingleTileData';
</script>

<section>
	<div class="d-flex flex-column">
		{#each DATA as DATA_ENTRY (DATA_ENTRY)}
			<SingleTile
				layer={DATA_ENTRY.id}
				direction={DATA_ENTRY.id % 2 === 0 ? 'end' : 'start'}
				PNG={DATA_ENTRY.png}
			/>
		{/each}
	</div>
</section>
