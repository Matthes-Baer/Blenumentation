<script lang="ts">
	export let testString: string;

	export const mockFunction = (): void => {
		testString = 'new one';
	};
</script>

<div>
	<h1>This is a button:</h1>
	<h2 data-testid="testVariableTestID">{testString}</h2>
	<button type="submit" on:click={mockFunction}>A button</button>
</div>
