<script lang="ts">
	import { getContext } from 'svelte';

	const count = getContext('value');

	let options: string[] = [];
	let textInput: { value: string };
</script>

<div class="d-flex align-items-center flex-column">
	<h2>What is your favourite activty? bind:group testing</h2>
	<!-- Zwar Fehlermeldung im Editor, aber es funktioniert -->
	<h3>{$count}</h3>
	<label>
		<input type="checkbox" name="sports" value="sports" bind:group={options} />
		sports
	</label>

	<label>
		<input type="checkbox" name="studying" value="studying" bind:group={options} />
		studying
	</label>

	<label>
		<input type="checkbox" name="eating" value="eating" bind:group={options} />
		eating
	</label>

	<label>
		<input type="checkbox" name="drawing" value="drawing" bind:group={options} />
		drawing
	</label>

	<h3>{options.join(', ')}</h3>

	<h2>bind:this testing</h2>
	<!-- This works both for elements and for components -->
	<!-- Provides a reference one can reach out to -->
	<label>
		<input type="text" name="textInput" value="" bind:this={textInput} />
	</label>
	<button on:click={() => (textInput.value = '')}>reset textInput via bind:this</button>
</div>
