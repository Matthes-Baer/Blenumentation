<script lang="ts">
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';
</script>

<h1>Materials Part {$basicsPartProgressStore.First}</h1>

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
