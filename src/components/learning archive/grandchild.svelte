<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let testString: string;
	export const mockFunction = (): void => {
		// dispatch logic to access function in the parent (event forwarding is used) route
		dispatch('pageFunction', { id: 'Hello' });
	};

	let checker = 0;
</script>

<div style="margin-top: 100px;">
	<!-- Can also just be class:positive if the name of the class and the variable in the brackets is equal -->
	<h1 class:positive={checker > 0}>
		This is the grandchild.svelte component <button on:click={() => checker++}
			>Make it greenyellow</button
		>
	</h1>
	<h2 data-testid="testVariableTestID">{testString}</h2>
	<button type="submit" on:click={mockFunction}>A button</button>
	For event forwarding, you don't have to recreate any bubbling effects - just put "on:dispatchname"
	on the component in between to hand it out to the further corresponding parent component. This also
	works as attribute for elements (dispatch with the same name is output)
</div>

<style>
	.positive {
		background-color: greenyellow;
	}
</style>
