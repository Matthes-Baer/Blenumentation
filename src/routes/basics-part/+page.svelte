<script lang="ts">
	import { onMount } from 'svelte';
	import GeneralNavigation from '../../components/basics-part/GeneralNavigation.svelte';
	import Modifiers from '../../components/basics-part/Modifiers.svelte';
</script>

<div>
	<GeneralNavigation />
	<Modifiers />
</div>

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
