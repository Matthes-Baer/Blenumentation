<script lang="ts">
	export let href: string;
	export let h3: string;
	export let text: string;
</script>

<a {href} class="col-lg-5 container-a mx-auto" target="_blank" rel="noreferrer">
	<h3 class="text-center">{h3}</h3>
	<div class="text-center">
		{text}
	</div>
</a>

<style lang="scss">
	div,
	h3 {
		background-color: transparent;
	}

	.container {
		&-a {
			background-color: transparent;
			transition: all 0.25s;
			padding: 15px;
			border-radius: 5px;

			&:hover {
				background-color: rgba(160, 160, 160, 0.25);
			}
		}
	}

	a {
		display: block;
		color: var(--font-color);
		text-decoration: none;

		&:visited {
			color: var(--font-color);
			text-decoration: none;
		}

		&:active {
			color: var(--font-color);
			text-decoration: none;
		}
	}
</style>
