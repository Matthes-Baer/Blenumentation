<script lang="ts">
	export let name: string;
	export let description: string;
	export let keystroke: string;

	let hovered: boolean = false;
	let x: number;
	let y: number;

	function mouseOver(event: { pageX: number; pageY: number }) {
		hovered = true;
		x = event.pageX + 10;
		y = event.pageY + 10;
	}

	function mouseMove(event: { pageX: number; pageY: number }) {
		x = event.pageX + 10;
		y = event.pageY + 10;
	}

	function mouseLeave() {
		hovered = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove} class="row">
	<h3 class="col-sm-3" id={name}>{name}:</h3>
	<div class="col-sm-7 row" style="background-color: blue ;">
		<div class="col-sm-8">
			{description}
		</div>
		<div class="col-sm-4">
			{keystroke}
		</div>
	</div>

	{#if hovered}
		<div style="top: {y}px; left: {x}px;" class="modalTest text-center">
			<h1>{keystroke}</h1>
		</div>
	{/if}
</div>

<style>
	.modalTest {
		position: absolute;
		width: 250px;
		background-color: antiquewhite;
		border: 1px solid black;
	}
</style>
