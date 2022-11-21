<script>
	import { sortedDocumentationData } from '../../data/blender/documentationData';
	// Dahin gehend responsive machen, dass es beispielsweise bei 1000px verschwindet und man dann auf eine Schaltfläche drücken muss, um es erneut anzuzeigen.
	// Dann nicht mehr mit absolute arbeiten, sondern es so einstellen, dass es über die ganze Breite geht und es ganz oben am Anfang steht.
	// Man sollte es auch wieder einklappen können
</script>

<nav class="nav-container d-flex flex-column">
	{#each sortedDocumentationData as entry (entry.name)}
		<a href={`#${entry.name}`} class="nav-link-element">{entry.name}</a>
	{/each}
</nav>

<slot />

<style>
	.nav-container {
		width: 15%;
		height: 50%;
		padding: 15px;
		border-right: 1px solid black;
		position: absolute;
		top: 75px;
		transition: all 0.1s;
		overflow-y: scroll;
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

	/* This way the scroll bar disappears - https://www.geeksforgeeks.org/how-to-change-the-position-of-scrollbar-using-css/ */
	::-webkit-scrollbar {
		width: 0px;
	}

	@media only screen and (max-width: 1200px) {
		.nav-container {
			position: static;
			top: 75px;
			width: 100%;
			height: 200px;
			overflow-y: scroll;
		}
	}
</style>
