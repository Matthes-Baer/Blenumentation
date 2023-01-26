<script lang="ts">
	export let title: string;
	export let png: string;
	export let webp: string;
	export let description: string;
	export let marginTop: string;
</script>

<div class="row mx-auto" style:margin-top={marginTop}>
	<h3 class="col-lg-12 title">{title}</h3>
	<div class="d-flex justify-content-evenly align-items-center image-description-container">
		<div class="image-container">
			<picture>
				<source class="image" srcset={webp} />
				<img class="image" alt={title} src={png} />
			</picture>
		</div>

		<div class="text">
			{description}
		</div>
	</div>
</div>

<style lang="scss">
	.image-container {
		margin-right: 15px;
	}
	.title {
		margin-top: 0;
	}

	.text {
		text-align: justify;
	}

	* {
		font-size: 35px;
	}

	.image {
		width: 100%;
		height: auto;
		min-width: 300px;
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
