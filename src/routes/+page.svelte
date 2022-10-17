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
</script>

<h1>Welcome to SvelteKit, {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Here is the TestComponent:</h2>
<TestComponent name={'TestComponentPropName'} list={listItems} />
