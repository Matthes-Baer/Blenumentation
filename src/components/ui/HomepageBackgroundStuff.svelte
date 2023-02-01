<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let layer: number;
	export let layersLength: number;

	let y: number;
	let randomNumber: number;

	onMount(() => {
		randomNumber = Math.floor(Math.random() * layersLength);
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
		in:fade|local={{ duration: 500 }}
	/>
{:else}
	<div
		class="container"
		style="top: {1750 + 3.5 ** layer}px;{layer % 2 === 0 ? `left: ${100}px` : `right: ${250}px`};"
		class:line={randomNumber === 0}
		class:square={randomNumber === 1}
		class:rectangle={randomNumber === 2}
		class:triangleHalf={randomNumber === 3}
		class:circle={randomNumber === 4}
		in:fade|local={{ duration: 500 }}
	/>
{/if}

<style lang="scss">
	.container {
		position: absolute;
		z-index: 0;
		opacity: 0;
		background-color: transparent;
	}
	.line {
		border-right: 4px double yellow;
		width: 25px;
		height: 750px;
		rotate: 135deg;
		opacity: 0.35;
		transition: opacity 1s;
	}

	.square {
		border: 1px solid var(--secondary-color);
		width: 300px;
		height: 300px;
		opacity: 0.35;
		rotate: -45deg;
		transition: opacity 1s;
	}
	.rectangle {
		border: 1px solid var(--secondary-color);
		width: 200px;
		height: 400px;
		opacity: 0.35;
		rotate: 15deg;
		border-radius: 5px;
		transition: opacity 1s;
		transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	.triangleHalf {
		border-top: 1px solid var(--third-color);
		border-right: 1px solid var(--third-color);
		width: 500px;
		height: 500px;
		rotate: 45deg;
		opacity: 0.8;
		border-top-right-radius: 25px;
		transition: opacity 1s;
	}

	.circle {
		border: 2px dashed yellow;
		border-radius: 50%;
		width: 500px;
		height: 500px;
		opacity: 0.25;
		transition: opacity 1s;
		transition-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
	}
</style>
