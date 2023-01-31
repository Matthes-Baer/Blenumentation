<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import BasicsPartLayoutProgressTile from '../../components/basics-part/basics-part-layout-progress-tile.svelte';
	import { BASICS_PART_DATA } from '../../data/blender/basics-part-data';

	let progressBarVisible = false;
	let backgroundColor = 'rgba(40,40,40,0.75)';

	const keydownHandler: (
		a: KeyboardEvent & {
			currentTarget: EventTarget & Window;
		}
	) => void = (
		event: KeyboardEvent & {
			currentTarget: EventTarget & Window;
		}
	) => {
		if (event.code == 'Digit1') {
			progressBarVisible = true;
		} else if (event.code == 'Digit2') {
			progressBarVisible = false;
		}
	};

	const progressBarToggleHandler: (a: boolean) => void = (direction: boolean): void => {
		progressBarVisible = direction;
	};
</script>

<svelte:window on:keydown={keydownHandler} />

<div class="container-layout" style:background-color={progressBarVisible ? backgroundColor : null}>
	{#if progressBarVisible}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="button button-close"
			on:click={() => progressBarToggleHandler(false)}
			in:fade|local={{ duration: 1000 }}
			out:fade|local={{ duration: 500 }}
		>
			<i class="fa-solid fa-xmark" />
		</div>
		<div
			in:fly|local={{ duration: 2000, x: -100 }}
			out:fly|local={{ duration: 1000, x: -100 }}
			class="container-flex"
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->

			{#each BASICS_PART_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
				<BasicsPartLayoutProgressTile
					adjustedTitle={SINGLE_ENTRY.title.replaceAll(' ', '')}
					title={SINGLE_ENTRY.title}
					id={SINGLE_ENTRY.id}
					length={BASICS_PART_DATA.length}
				/>
			{/each}
		</div>
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			in:fly|local={{ duration: 2000, x: -100 }}
			out:fly|local={{ duration: 1000, x: -100 }}
			on:click={() => progressBarToggleHandler(true)}
			class="button button-open"
		>
			<div class="button-open-content">
				<i class="fa-solid fa-square-up-right" />
				<p style="background-color: transparent;" class="d-flex flex-column align-items-center">
					<span>Read</span><span>List</span>
				</p>
			</div>
		</div>
	{/if}
</div>

<slot />

<style lang="scss">
	i {
		background-color: transparent;
	}
	.container {
		&-layout {
			width: 5%;
			min-width: 85px;
			position: fixed;
			top: 100px;
			left: 0px;
			z-index: 9001;
			background-color: transparent;
			height: 265px;
			overflow: scroll;
			overflow-x: hidden;
			transition: all 0.25s;
			transform: translateX(-25px);

			&:hover {
				transform: translateX(0px);
			}

			&::-webkit-scrollbar {
				width: 0px; /* width of the entire scrollbar */
			}

			&::-webkit-scrollbar-track {
				background: orange; /* color of the tracking area */
			}

			&::-webkit-scrollbar-thumb {
				background-color: blue; /* color of the scroll thumb */
				border-radius: 20px; /* roundness of the scroll thumb */
				border: 3px solid orange; /* creates padding around scroll thumb */
			}
		}

		&-flex {
			display: flex;
			flex-direction: column;
			background-color: transparent;
			width: 50px;
			margin-left: auto;
			margin-right: auto;
			margin-top: 15px;
		}
	}

	.button {
		background-color: transparent;
		text-align: center;
		cursor: pointer;
		&-open {
			position: absolute;
			top: 0px;
			left: 0px;
			border-right: 1px solid var(--secondary-color);
			border-top: 1px solid var(--secondary-color);
			border-bottom: 1px solid var(--secondary-color);
			background-color: var(--main-color);

			&-content {
				margin-top: 15px;
				padding: 7.5px;
			}
		}
		&-close {
			position: absolute;
			top: 0px;
			right: 7.5px;
		}
	}

	@media only screen and (max-width: 1200px) {
		.container {
			&-layout {
				transform: translateX(-45px);
			}
		}
	}

	@media only screen and (max-width: 400px) {
		.container {
			&-layout {
				top: 200px;
			}
		}
	}
</style>
