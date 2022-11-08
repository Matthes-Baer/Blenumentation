<script lang="ts">
	import Grandchild from './grandchild.svelte';
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

	export let testString: string;
</script>

<div style="margin-top: 100px;">
	<h1>This is a button:</h1>
	<h2 data-testid="testVariableTestID">{testString}</h2>
	<button on:click={tickFunction}>reactive Variable and Tick Testing</button>
	For event forwarding, you don't have to recreate any bubbling effects - just put "on:dispatchname"
	on the component in between to hand it out to the further corresponding parent component.
	<Grandchild on:pageFunction {testString} />
</div>
