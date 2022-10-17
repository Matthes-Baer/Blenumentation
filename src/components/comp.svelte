<script lang="ts">
	export let name: string;

	let counter: number = 0;

	function handleClick(): void {
		counter++;
	}
</script>

<h1>Hello {name} (inside the TestComponent)</h1>

<button on:click={handleClick}>Button was pressed {counter} times</button>
