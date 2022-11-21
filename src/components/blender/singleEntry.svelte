<script lang="ts">
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

		console.log(x, y);
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
>
	<h3 class="col-sm-3" id={name}>{name}:</h3>
	<div class="col-sm-7 row">
		<div class="col-sm-8 singleEntryDescription">
			{description}
		</div>
		<div class="col-sm-4 d-flex singleEntryKeystroke">
			{keystroke}
		</div>
	</div>

	{#if hovered}
		<div style="top: {y}px; left: {x}px;" class="modalTest text-center">
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

	.modalTest {
		position: absolute;
		width: 250px;
		border: 1px solid black;
	}
</style>
