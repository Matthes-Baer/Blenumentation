<script lang="ts">
	import type { storeListInterface } from '../../utils/interfaces';
	import { testStore } from '../../stores/testStore';

	let buttonInput: string = '';
	export let showStoreEntries: any;

	let alltestData: storeListInterface<string>[];
	let testStoreUnsub = testStore.subscribe((data) => (alltestData = data));
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	onMount(() => {
		console.log('Component mounted');
	});
	onDestroy(() => {
		testStoreUnsub();
	});
</script>

<button
	on:click={() =>
		testStore.addNewTestData({
			id: new Date().getMilliseconds() + 'y',
			name: new Date().getSeconds() + 'Da',
			significance: 23.5
		})}
>
	Add Entry
</button>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label htmlfor="buttonInputField">Name Change Input Field:</label>
<input id="buttonInputField" bind:value={buttonInput} />
<button on:click={() => testStore.changeFirstDataEntry(buttonInput)}>
	Change first name to {buttonInput}
</button>

<button on:click={() => testStore.deleteFirstEntry()}>deleteFirstEntry</button>

{#if showStoreEntries}
	<div class="d-flex flex-wrap">
		{#each alltestData as entry}
			<div>
				<h1 class="mt-5">name: {entry.name}</h1>
				<h1>id: {entry.id}</h1>
				<h1>significance: {entry.significance}</h1>
			</div>
		{/each}
	</div>
{/if}
