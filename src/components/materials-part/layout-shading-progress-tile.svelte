<script lang="ts">
	import { materialsPartProgressStore } from '../../stores/LocalStorageStores';
	import { fly } from 'svelte/transition';

	export let adjustedTitle: string;
</script>

<div class="mx-auto circle-container">
	{#if $materialsPartProgressStore[adjustedTitle]}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="circle-full"
			in:fly|local={{ duration: 500, y: 200 }}
			out:fly|local={{ duration: 500, y: 200 }}
			on:click={() => ($materialsPartProgressStore[adjustedTitle] = false)}
		/>
	{/if}
</div>

<style lang="scss">
	div {
		background-color: transparent;
	}
	.circle {
		&-container {
			width: 50px;
			height: 50px;
			background-color: red;
			border-radius: 50%;
			overflow: hidden;
		}

		&-full {
			background-color: green;
			transition: all 1s;
			border-radius: inherit;
			height: inherit;
			width: inherit;
		}
	}
</style>
