<script lang="ts">
	import type { listItemInterface } from '../utils/interfaces';

	export let name: string;
	export let list: listItemInterface[];

	let counter: number = 0;

	function handleClick(): void {
		counter++;
	}
</script>

<h1>Hello {name} (inside the TestComponent)</h1>

<button on:click={handleClick}>Button was pressed {counter} times</button>

{#each list as listItem}
	<ol data-testid="listItem">
		<li>id: {listItem.id}</li>
		<li>name: {listItem.name}</li>
	</ol>
{/each}
