<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import LayoutShadingProgressTile from '../../components/materials-part/layout-shading-progress-tile.svelte';
	import { MATERIALS_PART_SHADING_DATA } from '../../data/blender/materials-part-data';

	// So könnte man es womöglich machen, um den Flackereffekt beim Neuladen zu umgehen?
	onMount(() => {
		const timeout = setTimeout(() => {
			progressBarVisible = true;
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	});
	let progressBarVisible = false;
</script>

<div class="container-layout">
	{#if progressBarVisible}
		<div in:fly|local={{ duration: 2000, y: 200 }} class="container-flex">
			{#each MATERIALS_PART_SHADING_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
				<LayoutShadingProgressTile adjustedTitle={SINGLE_ENTRY.title.replaceAll(' ', '')} />
			{/each}
		</div>
	{/if}
</div>

<slot />

<style lang="scss">
	.container {
		&-layout {
			width: 50%;
			position: fixed;
			bottom: 0px;
			left: 50%;
			z-index: 9001;
			transform: translate(-50%, 0);
			background-color: transparent;
		}

		&-flex {
			display: flex;
			justify-content: space-evenly;
			background-color: transparent;
		}
	}
</style>
