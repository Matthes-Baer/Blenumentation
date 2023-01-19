<script lang="ts">
	const layers: number[] = [1, 2, 3];

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<section class="row mt-5">
	<div class="col-lg-12 d-flex flex-column align-items-end">
		<h1 class="">Blenumentation</h1>
		<p class="ms-5 bounce-in-bottom align-self-start">A Blender documentation</p>
		<div style="height:100vh">TESTING</div>
		<div id="Test" style="height:100vh">TESTING ID</div>
	</div>
	{#each layers as layer}
		<div
			class="col-lg-12"
			style="border-bottom: 1px solid red; transform: translate(0, {(-y * layer) /
				(layers.length - 1)}px)"
		>
			This is layer: {layer}
		</div>
	{/each}
</section>

<style lang="scss">
	h1 {
		font-size: 10vw;
	}

	div {
		font-size: 5vw;
	}

	@media only screen and (max-width: 900px) {
	}
</style>
