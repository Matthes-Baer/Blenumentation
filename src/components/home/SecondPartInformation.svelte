<script lang="ts">
	import { slide } from 'svelte/transition';
	let visible: boolean = true;
</script>

<section>
	<div class="d-flex justify-content-center slide-button-container" style="width: inherit;">
		<button on:click={() => (visible = !visible)} class="slide-button"
			>{#if visible}
				True
			{:else}
				False
			{/if}
		</button>
	</div>

	<div class="slide-main">
		{#if visible}
			<div in:slide={{ duration: 2000 }} out:slide={{ duration: 2000 }} class="slide-input">
				This is Text Lurum Ipsum This is Text Lurum Ipsum This is Text Lurum Ipsum This is Text
				Lurum Ipsum This is Text Lurum Ipsum This is Text Lurum Ipsum This is Text Lurum Ipsum This
				is Text Lurum IpsumThis is Text Lurum Ipsum This is Text Lurum Ipsum This is Text Lurum
				IpsumThis is Text Lurum Ipsum
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	section {
		background-color: red;
	}

	div {
		background-color: transparent;
	}

	.slide {
		&-main {
			border-top: 2px solid var(--secondary-color);
			font-size: 45px;
			min-height: 750px;
		}
		&-input {
			height: inherit;
		}

		&-button {
			background-color: blue;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			&-container {
				background-color: yellow;
				height: 5px;
				position: relative;
			}
		}
	}

	@media only screen and (max-width: 900px) {
		.slide {
			&-main {
				min-height: 900px;
			}
		}
	}

	@media only screen and (max-width: 780px) {
		.slide {
			&-main {
				min-height: 1100px;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.slide {
			&-main {
				min-height: 1400px;
			}
		}
	}

	@media only screen and (max-width: 500px) {
		.slide {
			&-main {
				min-height: 1800px;
			}
		}
	}
</style>
