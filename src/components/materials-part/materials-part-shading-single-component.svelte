<script lang="ts">
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { materialsPartProgressStore } from '../../stores/LocalStorageStores';
	import type { MaterialsPartProgressStoreInterface } from '../../utils/interfaces';

	export let title: string;
	export let png: string;
	export let webp: string;
	export let description: string;
	export let marginTop: string;

	const options: Options = { threshold: 1 };
	let adjustedTitle: string = title.replaceAll(' ', '');

	const onEnterReadHandler = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		($materialsPartProgressStore as MaterialsPartProgressStoreInterface)[adjustedTitle] = true;
	};
</script>

<div
	class="row mx-auto"
	style:margin-top={marginTop}
	use:inview={options}
	on:enter={onEnterReadHandler}
>
	<h3 class="col-lg-12 title">{title}</h3>
	<div class="d-flex justify-content-evenly align-items-center image-description-container">
		<div class="image-container">
			<img class="image" alt={title} src={webp} />
		</div>

		<div class="text">
			{description}
		</div>
	</div>
</div>

<style lang="scss">
	.image-container {
		margin-right: 15px;
		width: 50%;
	}
	.title {
		margin-top: 0;
	}

	.text {
		text-align: justify;
		width: 75%;
	}

	* {
		font-size: 35px;
	}

	.image {
		width: 100%;
		height: auto;
		min-width: 300px;
		max-width: 600px;
	}

	@media only screen and (max-width: 900px) {
		.image-description-container {
			flex-direction: column;
			justify-content: center;
		}

		.image-container {
			margin-right: 0;
		}

		.title {
			text-align: center;
		}
	}
</style>
