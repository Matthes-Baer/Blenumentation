<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let testString: string;
	export const mockFunction = (): void => {
		// dispatch logic to access function in the parent (event forwarding is used) route
		dispatch('pageFunction', { id: 'Hello' });
	};
</script>

<div style="margin-top: 100px;">
	<h1>This is the grandchild.svelte component</h1>
	<h2 data-testid="testVariableTestID">{testString}</h2>
	<button type="submit" on:click={mockFunction}>A button</button>
	For event forwarding, you don't have to recreate any bubbling effects - just put "on:dispatchname"
	on the component in between to hand it out to the further corresponding parent component.
</div>
