<script lang="ts">
	import Footer from '../../components/footer.svelte';
	import { BASICS_PART_DATA } from '../../data/blender/basics-part-data';
	import BasicsPartNavigationSingleComponent from '../../components/basics-part/basics-part-navigation-single-component.svelte';
</script>

<main class="container-page mx-auto">
	<section class="container-start">
		<h1>Basics</h1>
		<div class="mb-3">
			Understanding how to navigate in Blender is extremely important to achieving results. While
			Blender provides a lot of valuable features to achieve stunning 3D objects, scenes,
			animations, and more, the beginning can be a little tedious since the user should be familiar
			with a lot of hotkeys and core principals in order to properly move around and achieve
			something.
		</div>
		<div>
			In this section, some basic information is provided. In combination with the hotkey section
			one is ready to work on some first projects within Blender.
		</div>
	</section>
	<section>
		{#each BASICS_PART_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
			<BasicsPartNavigationSingleComponent
				title={SINGLE_ENTRY.title}
				webp={SINGLE_ENTRY.webp}
				description={SINGLE_ENTRY.description}
				marginTop={SINGLE_ENTRY.id !== 13 ? '100px' : '0px'}
			/>{/each}
	</section>
</main>

<footer>
	<Footer />
</footer>

<style lang="scss">
	@import '../../styles/colors.scss';

	h1 {
		font-size: 50px;
	}

	.container {
		&-page {
			width: 95%;
			margin-top: 100px;
		}

		&-start {
			font-size: 35px;
			text-align: justify;
			margin-bottom: 200px;
		}
	}

	@media only screen and (max-width: 500px) {
		.container {
			&-page {
				margin-top: 150px;
			}
		}
	}

	:global(*) {
		background-color: var(--main-color);
		color: var(--font-color);
		font-family: 'Courier New', Courier, monospace;
		box-sizing: border-box;
		z-index: 9000;
	}
	:global(body) {
		overflow-x: hidden;
	}
</style>
