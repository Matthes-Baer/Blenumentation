<script lang="ts">
	let options: string[] = [];
</script>

<div class="d-flex align-items-center flex-column">
	<h2>What is your favourite activty?</h2>
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
</div>
