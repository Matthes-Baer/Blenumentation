<script lang="ts">
	import { onMount } from 'svelte';

	// Props:
	export let layer: number;
	export let direction: string;
	export let title: string;
	export let PNG: string;
	export let webp: string;
	export let description: string;

	const layersLength = 3;
	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div class="main-container" style="align-self: flex-{direction};">
	<h2>{title}</h2>
	<p>{description}</p>
	<picture>
		<source srcset={webp} />
		<img src={PNG} alt="something" />
	</picture>
</div>

<!-- style="border-bottom: 1px solid red; transform: translate(0, {(-y * layer) /
    (layersLength - 1)}px)" -->
<style>
	@media only screen and (max-width: 900px) {
		.main-container {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
