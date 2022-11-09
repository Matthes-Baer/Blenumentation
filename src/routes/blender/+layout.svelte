<script>
	import { sortedDocumentationData } from '../../data/blender/documentationData';
</script>

<nav class="nav-container d-flex flex-column">
	{#each sortedDocumentationData as entry}
		<a href={`#${entry.name}`} class="nav-link-element">{entry.name}</a>
	{/each}
</nav>

<slot />

<style>
	.nav-container {
		width: 10%;
		height: 500px;
		padding: 15px;
		border: 1px solid black;
		background-color: aliceblue;
		position: absolute;
		top: 75px;
	}
	.nav-link-element {
		margin-left: 10px;
		margin-right: 10px;
		text-decoration: none;
		color: #252525;
		font-size: 15px;
		padding: 10px;
		border-bottom: 1px solid black;
		transition: all 0.1s;
	}

	.nav-link-element:hover {
		font-weight: bold;
	}
</style>
