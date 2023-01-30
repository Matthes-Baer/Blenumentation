<script lang="ts">
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let adjustedTitle: string;
	export let id: number;
	export let length: number;
	export let title: string;
	let shortTitle: string;
	let borderBottom: string = '1px solid var(--secondary-color)';

	const shortTitleHandler: (a: string) => string = (input: string) => {
		const shortTitleArray: Array<string> = [];
		const shortInput = input.split(' ');

		for (let k of shortInput) {
			shortTitleArray.push(k[0]);
		}

		return shortTitleArray.join('');
	};

	onMount(() => {
		shortTitle = shortTitleHandler(title);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="container-main"
	style:border-bottom={id !== length ? borderBottom : null}
	on:click={$basicsPartProgressStore[adjustedTitle]
		? () => ($basicsPartProgressStore[adjustedTitle] = false)
		: null}
>
	<h4 class="title">{shortTitle}</h4>

	<div class="mx-auto container-circle">
		{#if $basicsPartProgressStore[adjustedTitle]}
			<div
				class="container-full"
				in:fly|local={{ duration: 2000, x: -100 }}
				out:fly|local={{ duration: 6000, x: -100 }}
			/>
		{/if}
	</div>
</div>

<style lang="scss">
	div {
		background-color: transparent;
	}

	.title {
		background-color: transparent;
		text-align: center;
		font-size: small;
	}
	.container {
		&-main {
			padding: 5px;
			background-color: transparent;
			width: 100%;
			cursor: pointer;
		}

		&-circle {
			width: 10px;
			height: 10px;
			background-color: var(--secondary-color);
			border-radius: 50%;
			overflow: hidden;
		}

		&-full {
			background-color: green;
			transition: all 1s;
			height: inherit;
			width: inherit;
		}
	}
</style>
