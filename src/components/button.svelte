<script lang="ts">
	// Testing around following youtube course
	import { tick } from 'svelte';
	let count: number = 2;
	$: reactivelVariable = count * 3;
	const tickFunction = async () => {
		count++;
		// is asynchronous / helps with showing the DOM update
		await tick();
		console.log(`Tick: ${reactivelVariable}`);

		// alternative to async/await logic
		// tick().then(() => {
		// 	console.log(`after Tick: ${reactivelVariable}`);
		// });
	};

	// this is necessary in order to access function which got sent as a prop to this component (event)
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let testString: string;
	export const mockFunction = (): void => {
		testString = 'new one';

		// dispatch logic to access function in the parent route
		dispatch('pageFunction', { id: 'Hello' });
	};
</script>

<div>
	<h1>This is a button:</h1>
	<h2 data-testid="testVariableTestID">{testString}</h2>
	<button type="submit" on:click={mockFunction}>A button</button>
	<button on:click={tickFunction}>reactive Variable and Tick Testing</button>
</div>
