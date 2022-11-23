<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	// function used as a action event handler (important: remove eventListener on return (destroy))
	import InformationSection from '../components/home/informationSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main style="width: 95%;" class="mx-auto">
	<h1>Home - start information</h1>
	<InformationSection />
</main>

<style>
	:global(div, main, section, body) {
		background-color: #edede9;
		overflow-x: hidden;
	}
</style>
