<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide, fly, scale } from 'svelte/transition';

	export let name: string;
	export let description: string;
	export let keystroke: string;

	let hovered: boolean = false;
	let x: number;
	let y: number;

	function mouseOver(event: { pageX: number; pageY: number }) {
		hovered = true;
		x = event.pageX - 250;
		y = event.pageY + 15;

		if (x < 0) {
			x = 0;
		}
	}

	function mouseMove(event: { pageX: number; pageY: number }) {
		x = event.pageX - 250;
		y = event.pageY + 15;

		if (x < 0) {
			x = 0;
		}
	}

	function mouseLeave() {
		hovered = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	class="row p-2 ms-1 singleEntry"
	data-aos="fade-up"
>
	<h3 class="col-sm-3" id={name} data-testid="data-entry-name">{name}:</h3>
	<div class="col-sm-7 row">
		<div class="col-sm-8 singleEntryDescription" data-testid="data-entry-description">
			{description}
		</div>
		<div class="col-sm-4 d-flex singleEntryKeystroke" data-testid="data-entry-keystroke">
			{keystroke}
		</div>
	</div>

	{#if hovered}
		<div in:scale out:scale style="top: {y}px; left: {x}px;" class="hover-text text-center">
			<h1>{keystroke}</h1>
		</div>
	{/if}
</div>

<style lang="scss">
	.single {
		&Entry {
			border-bottom: 1px solid #252525;

			&Description {
				font-size: 25px;
				border-right: 1px solid #252525;
			}

			&Keystroke {
				margin-top: auto;
				margin-bottom: auto;
				font-size: 30px;
				font-weight: 700;
			}
		}
	}

	.hover-text {
		position: absolute;
		width: 300px;
		padding: 25px;
		border: 1px solid black;
		z-index: 9001;
	}

	// Siehe Youtube-Kurs ca. 20:19:00
	// @media (prefers-reduced-motion: reduce) {
	// 	* {
	// 		animation-duration: 0 !important;
	// 	}
	// }
</style>
