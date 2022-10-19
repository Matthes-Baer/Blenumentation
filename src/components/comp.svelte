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
