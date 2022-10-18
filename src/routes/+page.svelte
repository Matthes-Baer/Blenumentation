<script lang="ts">
	import TestComponent from '../components/comp.svelte';
	import type { listItemInterface } from '../utils/interfaces';

	export let name: string;
	name = 'Matthes';

	export let listItems: listItemInterface[] = [
		{ id: 1, name: 'item1' },
		{ id: 2, name: 'item2' },
		{ id: 3, name: 'item3' }
	];

	const nameChanger = (event: CustomEvent<any>) => {
		const { id, name } = event.detail;
		let currentItemIndex = listItems.findIndex((e: listItemInterface) => e.id === id);
		let currentItem = listItems[currentItemIndex];

		listItems = listItems.map((e: listItemInterface) => {
			if (e.id - 1 === currentItemIndex) {
				return { ...currentItem, name: currentItem.name + currentItem.id };
			} else {
				return { ...e };
			}
		});
	};
</script>

<h1>Welcome to SvelteKit, {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Here is the TestComponent:</h2>
<TestComponent name={'TestComponentPropName'} list={listItems} on:nameReducer={nameChanger} />
