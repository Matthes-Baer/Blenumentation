<script lang="ts">
	import { onMount } from 'svelte';

	export let layer: number;
	export let direction: string;
	export let PNG: string;
	const layersLength = 3;
	let y: number;

	// const PNGURL = new URL(PNG, import.meta.url).href;
	onMount(() => {
		// console.log(PNGURL);
		console.log(PNG);
	});
</script>

<svelte:window bind:scrollY={y} />

<div class="main-container" style="align-self: flex-{direction};">
	This is layer: {layer}
	<picture>
		<img src={PNG} alt="something" />
	</picture>
</div>

<!-- style="border-bottom: 1px solid red; transform: translate(0, {(-y * layer) /
    (layersLength - 1)}px)" -->
<style>
	.main-container {
	}
</style>
