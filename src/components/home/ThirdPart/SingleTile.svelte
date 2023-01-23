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

<div
	class="main-container d-flex flex-column"
	style="align-self: flex-{direction}; margin-top: {layer !== 1
		? '150px'
		: '0px'}; transform: translate(0, {(-y * layer) / 5 / (layersLength - 1)}px)"
>
	<h2 style="align-self: flex-{direction};" class="title">{title}</h2>
	<div
		class="description-picture-container"
		style="flex-direction: {direction === 'start' ? 'row-reverse' : 'row'}"
	>
		<p class="description">{description}</p>
		<picture>
			<source srcset={webp} />
			<img src={PNG} alt="something" />
		</picture>
	</div>
</div>

<!-- style="" -->

<!--  -->
<style>
	img,
	source {
		width: 100%;
		height: auto;
	}
	.description {
		font-size: 35px;
		padding: 15px;
		text-align: justify;
		border: 1px solid red;
	}
	.description-picture-container {
		display: flex;
		flex-direction: row;
	}
	@media only screen and (max-width: 900px) {
		.main-container {
			margin-left: auto;
			margin-right: auto;
			margin-top: 150px !important;
		}
		.description-picture-container {
			flex-direction: column !important;
		}
		.title {
			align-self: center !important;
		}
		.description {
			text-align: center;
		}
	}

	@media only screen and (max-width: 800px) {
	}
</style>
