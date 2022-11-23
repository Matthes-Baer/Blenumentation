<script lang="ts">
	import Button from '../../components/home/button.svelte';

	let showStoreEntries: any;
</script>

<section class="row">
	<div class="col-md-12">
		<p>
			This project is my first Svelte application and is mainly used for learning purposes. Besides
			some beginner information and some sections where I tried out different Svelte features, there
			is also a hotkey documentation for Blender I created while learning Blender. In addition,
			there are some components that are included in the GitHub repository but are not implemented.
			These components solely serve the purpose of trying out some Svelte stuff in the background. I
			also worked on unit tests with Jest for learning purposes.
		</p>
	</div>

	<div class="col-md-4 text-center">
		<h3>How to install Svelte with SvelteKit</h3>
		<p>
			<b>npm init svelte@next</b>
			<a
				href="https://blog.stranianelli.com/test-sveltekit-app-with-jest-english/"
				alt="article on how to install Svelte and how to test Svelte applications with Jest"
				>(see here)</a
			>
		</p>
	</div>

	<div class="col-md-4 text-center">
		<h3>How to add SCSS to a Svelte application</h3>
		<p>
			<b>npm i -D sass</b>
			<a
				href="https://blog.hao.dev/how-to-add-scss-or-sass-to-sveltekit"
				alt="article on how to add scss to a svelte application">(see here)</a
			>
		</p>
	</div>

	<div class="col-md-4 text-center">
		<h3>YouTube Svelte Course</h3>
		<a
			href="https://www.youtube.com/watch?v=UGBJHYpHPvA&t"
			alt="Learn Svelte – Full Course for Beginners">Learn Svelte – Full Course for Beginners</a
		>
	</div>
	<div class="col-md-12 text-center mt-3">
		<div class="d-flex flex-column mb-3">
			<h3>Showing off store logic</h3>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label htmlfor="showStoreEntriesCheckbox">show/hide store entries</label>
			<input id="showStoreEntriesCheckbox" type="checkbox" bind:checked={showStoreEntries} />
		</div>
		<Button bind:showStoreEntries />
	</div>
</section>
