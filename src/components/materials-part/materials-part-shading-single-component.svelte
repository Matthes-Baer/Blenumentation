<script lang="ts">
	export let title: string;
	export let png: string;
	export let webp: string;
	export let description: string;
</script>

<div class="row mx-auto">
	<h3 class="col-lg-12 title">{title}</h3>
	<div class="d-flex justify-content-evenly align-items-center">
		<div class="me-5">
			<picture>
				<source class="image" srcset={webp} />
				<img class="image" alt={title} src={png} />
			</picture>
		</div>

		<div>
			{description}
		</div>
	</div>
</div>

<style lang="scss">
	.title {
		margin-top: 0;
	}

	* {
		font-size: 35px;
	}

	.image {
		width: 100%;
		height: auto;
	}
</style>
