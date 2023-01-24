<script lang="ts">
	import { onMount } from 'svelte';

	export let layer: number;
	export let layersLength: number;

	let y: number;
	let randomNumber: number;

	onMount(() => {
		randomNumber = Math.floor(Math.random() * layersLength);
		console.log(randomNumber);
	});
</script>

<svelte:window bind:scrollY={y} />

{#if layer < 4}
	<div
		class="container"
		style="top: {700 + 9 ** layer}px;{layer % 2 === 0
			? `left: ${10 ** layer}px`
			: `right: ${9 ** layer}px`}"
		class:diamond={randomNumber === 0}
		class:square={randomNumber === 1}
		class:rectangle={randomNumber === 2}
		class:triangle={randomNumber === 3}
		class:circle={randomNumber === 4}
	/>
{:else}
	<div
		class="container"
		style="top: {1750 + 3.5 ** layer}px;{layer % 2 === 0 ? `left: ${100}px` : `right: ${250}px`};"
		class:diamond={randomNumber === 0}
		class:square={randomNumber === 1}
		class:rectangle={randomNumber === 2}
		class:triangle={randomNumber === 3}
		class:circle={randomNumber === 4}
	/>
{/if}

<style>
	.container {
		position: absolute;
		width: 500px;
		height: 500px;
		z-index: 0;
	}
	.diamond {
		background-color: yellow;
	}

	.square {
		background-color: red;
	}
	.rectangle {
		background-color: purple;
	}
	.triangle {
		background-color: pink;
	}

	.circle {
		background-color: brown;
	}
</style>
