<script lang="ts">
	import { onMount } from 'svelte';
	import { slide, fade, fly } from 'svelte/transition';

	let visible: boolean = false;
	let clicked: boolean = false;
	const text: string = `Blenumentation serves the purpose of being a personal short documentation for some major functions of the 3D software called Blender. While focusing on basic functions as well as shading, for example, sculpting isn't covered since this function area was not of interested for me by the time I created Blenumentation.`;
	const textArr: Array<string> = text.split(' ');
	let word: string;
	let x: number;
	let y: number;

	const clickHandler = (event: { pageY: number; pageX: number }) => {
		if (clicked) {
			clicked = false;
		} else {
			word = textArr[Math.floor(Math.random() * textArr.length)];
			clicked = true;
			x = event.pageX - 250;
			y = event.pageY + 15;

			if (x < 0) {
				x = 0;
			}
		}
	};

	const mouseMoveClickedHandler = () => {
		clicked = false;
	};

	onMount(() => {
		const visibleTimeout = setTimeout(() => {
			visible = true;
		}, 1500);

		return () => {
			clearTimeout(visibleTimeout);
		};
	});
</script>

<svelte:head
	><link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
	/></svelte:head
>

<section>
	<div class="d-flex justify-content-center slide-button-container" style="width: inherit;">
		<button on:click={() => (visible = !visible)} class="slide-button"
			>{#if visible}
				<i
					class="fa-solid fa-lock-open slide-button-icon"
					in:fly|local={{ y: -25, duration: 750 }}
					out:fly|local={{ y: 25, duration: 750 }}
				/>
			{:else}
				<i
					class="fa-solid fa-lock slide-button-icon"
					in:fly|local={{ y: -25, duration: 750 }}
					out:fly|local={{ y: 25, duration: 750 }}
				/>
			{/if}
		</button>
	</div>

	<div class="slide-main">
		{#if visible}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				in:slide|local={{ duration: 2000 }}
				out:slide|local={{ duration: 2000 }}
				class="slide-input"
				on:click={clickHandler}
				on:mouseleave={mouseMoveClickedHandler}
			>
				{text}

				{#if clicked}
					<div
						style="position: absolute; left: {x}px; top: {y}px"
						in:fade|local
						out:fade|local
						class="click-effect-word"
					>
						{word}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	div {
		background-color: transparent;
	}

	.click-effect-word {
		// --main-color as rgba
		background-color: rgba(40, 40, 40, 0.85);
		padding: 15px;
		border: 1px solid var(--font-color);
		border-radius: 10px;
	}

	.slide {
		&-main {
			border-top: 4px solid var(--secondary-color);
			font-size: 45px;
			min-height: 750px;
			font-size: 35px;
		}
		&-input {
			height: inherit;
			cursor: pointer;
			text-align: justify;
			margin-top: 50px;
		}

		&-button {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 25px;
			border: none;

			&-icon {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			&-container {
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
