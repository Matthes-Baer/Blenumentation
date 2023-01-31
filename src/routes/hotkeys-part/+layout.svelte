<script>
	import { sortedDocumentationData } from '../../data/blender/hotkeys-data';
	// Dahin gehend responsive machen, dass es beispielsweise bei 1000px verschwindet und man dann auf eine Schaltfläche drücken muss, um es erneut anzuzeigen.
	// Dann nicht mehr mit absolute arbeiten, sondern es so einstellen, dass es über die ganze Breite geht und es ganz oben am Anfang steht.
	// Man sollte es auch wieder einklappen können
</script>

<nav class="nav-container d-flex flex-column">
	{#each sortedDocumentationData as entry (entry.name)}
		<a href={`#${entry.name}`} class="nav-link-element text-center">{entry.name}</a>
	{/each}
</nav>

<slot />

<style lang="scss">
	.nav-container {
		width: 15%;
		height: 75%;
		padding: 15px;
		border-right: 1px solid var(--secondary-color);
		position: fixed;
		top: 85px;
		transition: all 0.1s;
		overflow-y: scroll;
		top: 50%;
		transform: translate(0px, -50%);
	}
	.nav-link-element {
		text-decoration: none;
		color: var(--font-color);
		font-size: 1.5vw;
		height: 100%;
		transition: all 0.25s;
		padding-bottom: 15px;
		padding-top: 15px;

		&:not(&:last-of-type) {
			border-bottom: 1px solid var(--secondary-color);
		}
	}

	.nav-link-element:hover {
		color: var(--secondary-color);
	}

	/* This way the scroll bar disappears - https://www.geeksforgeeks.org/how-to-change-the-position-of-scrollbar-using-css/ */
	::-webkit-scrollbar {
		width: 0px;
	}

	@media only screen and (max-width: 1200px) {
		.nav-container {
			position: static;
			margin-top: 125px;
			width: 100%;
			height: 400px;
			overflow-y: scroll;
			border-right: none;
			transform: none;
		}

		.nav-link-element {
			text-decoration: none;
			color: var(--font-color);
			font-size: 25px;
			height: 100%;
			transition: all 0.25s;
			padding-bottom: 15px;
			padding-top: 15px;
		}
	}
</style>
