<script lang="ts">
	import { materialsPartProgressStore } from '../../stores/LocalStorageStores';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	// So könnte man es womöglich machen, um den Flackereffekt beim Neuladen zu umgehen?
	onMount(() => {
		const timeout = setTimeout(() => {
			progressBarVisible = true;
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	});
	let progressBarVisible = false;
</script>

<div
	style=" width: 15%; position: fixed; background-color: blue; bottom: 0px; right: 0px; z-index: 9001"
>
	{#if progressBarVisible}
		<div in:fly|local={{ duration: 2000, y: 200 }} class="row mx-auto">
			<div class="col-lg-12 mx-auto">
				<div class="circle-container mx-auto">
					{#if $materialsPartProgressStore.ShadingWorkspaceSelection}
						<div
							class="circle-full"
							in:fly|local={{ duration: 500, y: 200 }}
							out:fly|local={{ duration: 500, y: 200 }}
						/>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>

<slot />

<style lang="scss">
	div {
		background-color: transparent;
	}
	.circle {
		&-container {
			width: 150px;
			height: 150px;
			background-color: red;
			border-radius: 50%;
			overflow: hidden;
		}

		&-full {
			content: '';
			background-color: green;
			transition: all 1s;
			border-radius: inherit;
			height: inherit;
			width: inherit;
		}
	}
</style>
