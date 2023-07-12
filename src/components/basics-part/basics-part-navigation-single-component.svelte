<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';
	import type { MaterialsPartAndBasicsPartProgressStoreInterface } from '../../utils/interfaces';
	import { fade } from 'svelte/transition';

	export let title: string;
	export let webp: string;
	export let description: string;
	export let marginTop: string;

	let modalView: boolean = false;

	const options: Options = { threshold: 0.5 };
	let adjustedTitle: string = title.replaceAll(' ', '');

	const onEnterReadHandler = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		($basicsPartProgressStore as MaterialsPartAndBasicsPartProgressStoreInterface)[adjustedTitle] =
			true;
	};

	const modalViewHandler: (a: boolean) => void = (direction: boolean): void => {
		modalView = direction;
	};

	const keydownHandler: (
		a: KeyboardEvent & {
			currentTarget: EventTarget & Window;
		}
	) => void = (
		event: KeyboardEvent & {
			currentTarget: EventTarget & Window;
		}
	) => {
		if (event.code == 'Escape') {
			modalView = false;
		}
	};
</script>

<svelte:window on:keydown={keydownHandler} />

<div
	class="row mx-auto"
	style:margin-top={marginTop}
	use:inview={options}
	on:enter={onEnterReadHandler}
>
	<h3 class="col-lg-12 title">{title}</h3>
	<div class="d-flex justify-content-evenly align-items-center image-description-container">
		<div class="image-container">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				class="image"
				alt={title}
				src={webp}
				on:click={() => modalViewHandler(true)}
				in:fade|local={{ duration: 500 }}
			/>
		</div>

		<div class="text">
			{description}
		</div>
	</div>
</div>

{#if modalView}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="modal-view-container"
		in:fade|local={{ duration: 500 }}
		out:fade|local={{ duration: 500 }}
		on:click={() => modalViewHandler(false)}
	>
		<img class="image-modal" alt={title} src={webp} id="canvas" />
	</div>
{/if}

<style lang="scss">
	.modal-view-container {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
		background-color: rgba(40, 40, 40, 0.75);
		z-index: 9001;
	}

	.image-container {
		margin-right: 15px;
		width: 50%;
		min-width: 300px;

		& > img {
			cursor: pointer;
		}
	}
	.title {
		margin-top: 0;
	}

	.text {
		text-align: justify;
		width: 75%;
		white-space: pre-wrap;
	}

	* {
		font-size: 35px;
	}

	.image {
		width: 100%;
		height: auto;
		min-width: 300px;
		max-width: 500px;

		&-modal {
			width: 50%;
			height: auto;
			max-height: 90%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			object-fit: contain;
		}
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
