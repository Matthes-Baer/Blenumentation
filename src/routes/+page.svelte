<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	import TestComponent from '../components/comp.svelte';
	import StoreListComponent from '../components/store-list.svelte';
	import type { listItemInterface } from '../utils/interfaces';
	export let bindInputText: string;
	import { fly } from 'svelte/transition';

	export let name: string;
	name = 'Matthes';

	export let visible: boolean = true;

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
				return { ...currentItem, name: bindInputText };
			} else {
				return { ...e };
			}
		});
	};
</script>

<h1>Welcome to SvelteKit, {name}</h1>
<button on:click={() => (visible = !visible)}>click for visible change</button>
{#if visible}
	<p transition:fly={{ x: 200, duration: 1000 }}>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
{/if}

<p>This is the current bindInputText: {bindInputText}</p>
<h2>Here is the TestComponent:</h2>
<TestComponent
	bind:bindInputText
	name={'TestComponentPropName'}
	list={listItems}
	on:nameChanger={nameChanger}
/>
<StoreListComponent />
