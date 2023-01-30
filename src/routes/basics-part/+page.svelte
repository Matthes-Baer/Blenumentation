<script lang="ts">
	import Footer from '../../components/footer.svelte';
	import { BASICS_PART_DATA } from '../../data/blender/basics-part-data';
	import BasicsPartNavigationSingleComponent from '../../components/basics-part/basics-part-navigation-single-component.svelte';
</script>

<main>
	<section style="font-size: 50px;">
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
		Something Libus Narum
		<br />
	</section>
	<section class="container-material-properties" style="margin-bottom: 1000px;">
		<h1>Navigation</h1>
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
