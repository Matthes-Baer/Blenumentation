<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	const layers: number[] = [1, 2, 3];
	let visible: boolean = false;

	function typewriter(node: any) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (1 * 0.01);

		return {
			duration,
			tick: (t: any) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	let y: number;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:window bind:scrollY={y} />

<section class="row mt-5">
	<div class="col-lg-12 d-flex flex-column div-container">
		<h1>Blenumentation</h1>
		<div class="align-self-start subtitle">
			{#if visible}
				<p class="text-center" transition:typewriter>A Personal Blender Documentation</p>
			{/if}
		</div>

		<!-- <div style="height:100vh">TESTING</div> -->
		<!-- <div id="Test" style="height:100vh">TESTING ID</div> -->
	</div>
	<!-- {#each layers as layer}
		<div
			class="col-lg-12"
			style="border-bottom: 1px solid red; transform: translate(0, {(-y * layer) /
				(layers.length - 1)}px)"
		>
			This is layer: {layer}
		</div>
	{/each}

	<label>
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>

	{#if visible}
		<p transition:typewriter>The quick brown fox jumps over the lazy dog</p>
	{/if} -->
</section>

<style lang="scss">
	.div-container {
		& h1 {
			font-size: 10vw;
		}
		align-items: flex-end;
	}
	.subtitle {
		font-size: 2.5vw;
	}

	@media only screen and (max-width: 900px) {
		.subtitle {
			font-size: 25px;
			align-items: center;
		}
	}

	@media only screen and (max-width: 600px) {
		.div-container {
			align-items: center;
		}
	}
</style>
