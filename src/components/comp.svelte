<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { listItemInterface } from '../utils/interfaces';

	export let name: string;
	export let list: listItemInterface[];

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

{#each list as listItem}
	<ol data-testid="listItem">
		<li>id: {listItem.id}</li>
		<li>name: {listItem.name}</li>
		<li>
			<button on:click={() => eventClick(listItem.id, listItem.name)}
				>Click Here For a Change</button
			>
		</li>
	</ol>
{/each}
