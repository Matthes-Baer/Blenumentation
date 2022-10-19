<script lang="ts">
	// dispatch action as forward to parent element (to the element where the state sits)
	// Forwards between are not needed - just add the on:... logic and Svelte automatically passes it
	import { createEventDispatcher } from 'svelte';
	import type { listItemInterface } from '../utils/interfaces';
	export let name: string;
	export let list: listItemInterface[];
	export let bindInputText: string;

	// To access states more efficiently, the concept of stores is used
	// The initial state is declared in the testStore.ts file
	// While you can define functions within the respective store to adjust the state,
	// you would have to subscribe to this store in the corresponding file in order to have access to the store data (or pass it down)
	import { testStore } from '../stores/testStore';
	let alltestData: string[];
	let testStoreUnsub = testStore.subscribe((data) => (alltestData = data));
	import { onMount, onDestroy } from 'svelte';

	// The unsubscribe (onDestroy) is important so the application stays efficient and fast
	onMount(() => {
		console.log('Component mounted');
	});
	onDestroy(() => {
		testStoreUnsub();
	});

	// The following logic is supposed to add a new entry to the current testStore data (I'm using the allTestData from the subscribe to access the current store value)
	// In order to adjust the state, you can also add respective function within the store itself which can help to avoid DRY applications
	let bindStoreEntryString: string;
	// const createNewDataEntryInStore: (a: string) => void = (inputString: string): void => {
	// 	testStore.set([...alltestData, inputString]);
	// };

	let counter: number = 0;
	function handleClick(): void {
		counter++;
	}
	const dispatch = createEventDispatcher();
	const eventClick: <T, U>(id: T, name: U) => void = (id, name) => {
		dispatch('nameReducer', {
			id,
			name
		});
	};
</script>

<h1>Hello {name} (inside the TestComponent)</h1>

<button on:click={handleClick}>Button was pressed {counter} times</button>
<input
	data-testid="bindInputTextField"
	bind:value={bindInputText}
	placeholder="two-way bind with bindInputText..."
/>

{#each list as listItem}
	<ol data-testid={listItem.id + 'itemID'}>
		<li>id: {listItem.id}</li>
		<li>name: {listItem.name}</li>
		<li>
			<button on:click={() => eventClick(listItem.id, listItem.name)}
				>Click Here For a Change</button
			>
		</li>
	</ol>
{/each}

<h2>Data accessed via store:</h2>
{#each alltestData as singleData}
	<div>
		{singleData}
	</div>
{/each}

<input type="text" bind:value={bindStoreEntryString} />
<button on:click={() => testStore.addNewTestData(bindStoreEntryString)}
	>Click in order to add {bindStoreEntryString} to the testStore data</button
>
