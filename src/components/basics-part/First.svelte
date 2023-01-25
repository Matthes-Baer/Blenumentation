<script lang="ts">
	let text: string = 'First';
	import { onEnter } from '../../utils/LocalStorageHelper';
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';

	// https://www.npmjs.com/package/svelte-inview - auch lazy image loading möglich
	import { inview, type Options, type ObserverEventDetails } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let progressBarVisible = false;

	// So könnte man es womöglich machen, um den Flackereffect beim Neuladen zu umgehen?
	onMount(() => {
		const timeout = setTimeout(() => {
			progressBarVisible = true;
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	});
	let isInView: boolean;
	const options: Options = {};
</script>

<h1 use:inview={options} on:enter={(event) => onEnter(event, 'First')} style="margin-top: 500px;">
	{text}
	<button on:click={() => ($basicsPartProgressStore.First = !$basicsPartProgressStore.First)}
		>Click here</button
	>
	{#if progressBarVisible}
		<h2 in:fly|local={{ duration: 2000, y: 200 }}>
			{$basicsPartProgressStore.First}
		</h2>
	{/if}
</h1>

<style lang="scss">
	h1 {
		height: 2000px;
		background-color: rgba(100, 100, 100, 0.25);
	}
</style>
