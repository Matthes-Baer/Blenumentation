<script lang="ts">
	// dispatch action as forward to parent element (to the element where the state sits)
	// Forwards between are not needed - just add the on:... logic and Svelte automatically passes it
	import { createEventDispatcher } from 'svelte';
	import type { listItemInterface } from '../utils/interfaces';
	import type { storeListInterface } from '../utils/interfaces';
	export let name: string;
	export let list: listItemInterface[];
	export let bindInputText: string;
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// this would be a reactive declaration template (every time the parameter (a value, for example) changes, this gets reinitialized/computed again/rerendered):
	// $: function(parameter)

	// To access states more efficiently, the concept of stores is used
	// The initial state is declared in the testStore.ts file
	// While you can define functions within the respective store to adjust the state,
	// you would have to subscribe to this store in the corresponding file in order to have access to the store data (or pass it down)
	import { testStore } from '../stores/testStore';
	let alltestData: storeListInterface<string>[];
	let testStoreUnsub = testStore.subscribe((data) => (alltestData = data));
	import { onMount, onDestroy } from 'svelte';

	// The unsubscribe (onDestroy) is important so the application stays efficient and fast
	onMount(() => {
		// onMount can be helpful when one would fetch the initial value of the store data from a database, for example. This way the store will be populated "onMount".
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
		// With the dispatch I have access to a function I declared in the parent component
		dispatch('nameChanger', {
			id,
			name
		});
	};

	let value = tweened(0, { duration: 5000, easing: cubicOut });
</script>

<button on:click={handleClick}>Button was pressed {counter} times</button>
<button
	on:click={() => {
		$value = 10;
	}}>+</button
>
<button
	on:click={() => {
		$value = -10;
	}}>-</button
>
<h3>{$value}</h3>
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
