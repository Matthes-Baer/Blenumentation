<script lang="ts">
	import TestComponent from '../components/comp.svelte';

	export let name: string;
	name = 'Matthes';
</script>

<h1>Welcome to SvelteKit, {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Here is the TestComponent:</h2>
<TestComponent name={'TestComponentPropName'} />
