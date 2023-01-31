<script lang="ts">
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
	class="row p-2 ms-1 mb-4 mt-4 singleEntry"
	id={name}
>
	<h3 class="col-sm-3" data-testid="data-entry-name">{name}:</h3>
	<div class="col-sm-9 row">
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
	* {
		align-items: center;
	}
	.single {
		&Entry {
			&Description {
				font-size: 25px;
				text-align: justify;
			}

			&Keystroke {
				margin-top: auto;
				margin-bottom: auto;
				font-size: 30px;
				font-weight: 700;
				justify-content: center;
				text-align: center;
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

	@media only screen and (max-width: 1200px) {
		* {
			text-align: center;
			justify-content: center;
			align-items: center;
		}

		.singleEntryDescription {
			text-align: justify;
		}
	}

	@media only screen and (max-width: 576px) {
		.singleEntryDescription {
			text-align: center;
		}
	}

	// Siehe Youtube-Kurs ca. 20:19:00
	// @media (prefers-reduced-motion: reduce) {
	// 	* {
	// 		animation-duration: 0 !important;
	// 	}
	// }
</style>
