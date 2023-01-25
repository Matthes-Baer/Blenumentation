<script lang="ts">
	import First from '../../components/basics-part/First.svelte';
	import Second from '../../components/basics-part/Second.svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div>
	<First />
	<Second />
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
