<script>
	import SingleEntry from '../../components/blender/singleEntry.svelte';
	import { sortedDocumentationData } from '../../data/blender/documentationData';
</script>

<div class="mainContainer">
	<h1>This is a blender documentation</h1>
	<div class="">
		{#each sortedDocumentationData as entry (entry.name)}
			<SingleEntry name={entry.name} description={entry.description} keystroke={entry.keystroke} />
		{/each}
	</div>
</div>

<style>
	.mainContainer {
		width: 90%;
		margin-left: 10%;
		background-color: green;
	}
</style>
