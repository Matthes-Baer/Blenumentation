<script lang="ts">
	import { onMount } from 'svelte';

	let x: number = 100;

	onMount(() => {
		const scrollEventListener = () => {
			if (window.pageYOffset > 100) {
				x = 50;
			} else {
				x = 100;
			}
		};
		window.addEventListener('scroll', scrollEventListener, false);

		return () => {
			window.removeEventListener('scroll', scrollEventListener, false);
		};
	});
</script>

<nav class="nav-container d-flex justify-content-end align-items-center" style="min-height: {x}px;">
	<a href="/" class="nav-title">
		Blenumentation
		<picture>
			<source srcset="images/icon-cube.webp" type="image/webp" width="50px" height="50px" />
			<img src="images/icon-cube.png" alt="icon cube in navbar" width="50px" height="50px" />
		</picture>
	</a>
	<a href="/basics-part" class="nav-element">Basics</a>
	<a href="/materials-part" class="nav-element">Materials</a>
	<a href="/hotkeys-part" class="nav-element">Hotkeys</a>
</nav>

<slot />

<style lang="scss">
	picture {
		background-color: transparent;
	}
	.nav {
		&-container {
			width: 100%;
			padding: 10px;
			position: -webkit-fixed;
			position: fixed;
			top: 0;
			transition: all 0.5s;
			z-index: 9001;
			overflow-y: hidden;
			background-color: rgba(40, 40, 40, 0.5);
		}

		&-title {
			margin-right: auto;
		}

		&-element {
			margin-right: 25px;
		}
	}

	a:hover {
		color: var(--secondary-color) !important;
	}

	a:visited {
		color: var(--font-color);
	}

	a {
		color: var(--font-color);
		text-decoration: none;
		transition: all 0.25s;
	}

	a,
	source,
	img {
		background-color: transparent;
	}

	@media only screen and (max-width: 500px) {
		.nav {
			&-container {
				flex-direction: column;
				align-items: center;
				text-align: center;
			}

			&-title {
				margin-right: 0;
			}

			&-element {
				margin: 0;
			}
		}
	}
</style>
