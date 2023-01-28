<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import LayoutShadingProgressTile from '../../components/materials-part/layout-shading-progress-tile.svelte';
	import { MATERIALS_PART_SHADING_DATA } from '../../data/blender/materials-part-data';

	// So könnte man es womöglich machen, um den Flackereffekt beim Neuladen zu umgehen?
	// onMount(() => {
	// 	const timeout = setTimeout(() => {
	// 		progressBarVisible = true;
	// 	}, 2000);

	// 	return () => {
	// 		clearTimeout(timeout);
	// 	};
	// });
	let progressBarVisible = false;

	const keydownHandler: (
		a: KeyboardEvent & {
			currentTarget: EventTarget & Window;
		}
	) => void = (
		event: KeyboardEvent & {
			currentTarget: EventTarget & Window;
		}
	) => {
		event.code == 'Digit1'
			? (progressBarVisible = true)
			: event.code == 'Digit2'
			? (progressBarVisible = false)
			: null;
	};

	const progressBarToggleHandler: (a: boolean) => void = (direction: boolean): void => {
		progressBarVisible = direction;
	};
</script>

<svelte:window on:keydown={keydownHandler} />

<div class="container-layout">
	{#if progressBarVisible}
		<div
			in:fly|local={{ duration: 2000, x: -100 }}
			out:fly|local={{ duration: 1000, x: -100 }}
			class="container-flex"
		>
			<h2>Read:</h2>
			{#each MATERIALS_PART_SHADING_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
				<LayoutShadingProgressTile adjustedTitle={SINGLE_ENTRY.title.replaceAll(' ', '')} />
			{/each}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="button button-close" on:click={() => progressBarToggleHandler(false)}>
				Close Read List
			</div>
		</div>
	{:else}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			in:fly|local={{ duration: 2000, x: -100 }}
			out:fly|local={{ duration: 1000, x: -100 }}
			on:click={() => progressBarToggleHandler(true)}
			class="button button-open"
		>
			Open Read List
		</div>
	{/if}
</div>

<slot />

<style lang="scss">
	.container {
		&-layout {
			width: 5%;
			position: fixed;
			top: 100px;
			left: 0px;
			z-index: 9001;

			background-color: transparent;
		}

		&-flex {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			background-color: transparent;
		}
	}

	h2 {
		background-color: transparent;
		text-align: center;
	}
	.button {
		background-color: transparent;
		text-align: center;
		&-open {
			position: absolute;
			top: 0px;
			left: 0px;
			border-right: 1px solid var(--secondary-color);
			border-top: 1px solid var(--secondary-color);
			border-bottom: 1px solid var(--secondary-color);
			background-color: var(--main-color);
		}
		&-close {
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
