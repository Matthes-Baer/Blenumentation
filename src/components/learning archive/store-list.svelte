<script lang="ts">
	// import { createEventDispatcher } from 'svelte';
	// import type { listItemInterface } from '../utils/interfaces';
	import type { storeListInterface } from '../../utils/interfaces';
	// const dispatch = createEventDispatcher();

	import { testStore } from '../../stores/testStore';
	let alltestData: storeListInterface<string>[];
	let testStoreUnsub = testStore.subscribe((data) => (alltestData = data));
	import { onMount, onDestroy } from 'svelte';

	onMount(() => {
		console.log('Component mounted');
	});
	onDestroy(() => {
		testStoreUnsub();
	});

	// The following logic is supposed to add a new entry to the current testStore data (I'm using the allTestData from the subscribe to access the current store value)
	// In order to adjust the state, you can also add respective function within the store itself which can help to avoid DRY applications
	let bindStoreEntryString: string = '';
	// const createNewDataEntryInStore: (a: string) => void = (inputString: string): void => {
	// 	testStore.set([...alltestData, inputString]);
	// };
</script>

<h2>Data accessed via store:</h2>
{#each alltestData as singleData, i}
	<div>
		name: {singleData.name}
		<button on:click={() => {}}>Delete current data entry</button>
	</div>
{/each}

<input
	type="text"
	bind:value={bindStoreEntryString}
	class={bindStoreEntryString.length > 3 ? 'access' : 'deny'}
/>
<button on:click|preventDefault|once|self={() => {}}
	>Click in order to add {bindStoreEntryString} to the testStore data</button
>

<!-- <div on:click={() => console.log('parent div')}>
	parent
	<div on:click|stopPropagation={() => console.log('child div')}>child</div>
</div> -->
<style>
	:global(.deny) {
		color: red;
	}

	.access {
		color: black;
	}
</style>
