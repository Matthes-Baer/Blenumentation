<script lang="ts">
	import { animateScroll } from 'svelte-scrollto-element';
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
	<a href="/blender" class="me-3">Basic Hotkey Documentation</a>
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- <a
		on:click={() =>
			animateScroll.scrollTo({
				//@ts-ignore
				element: '#Test',
				duration: 250,
				delay: 50,
				onDone: function () {
					console.log('Scrolling done.');
				}
			})}
	>
		Testing Id div scroll
	</a> -->
</nav>

<slot />

<style lang="scss">
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
			background-color: var(--main-color);
		}

		&-title {
			margin-right: auto;
		}
	}

	a:hover {
		transform: translateY(5px);
	}

	a:visited {
		color: var(--font-color);
	}

	a {
		color: var(--font-color);
		text-decoration: none;
	}

	@media only screen and (max-width: 400px) {
		.nav {
			&-container {
				flex-direction: column;
				align-items: center;
				text-align: center;
			}

			&-title {
				margin-right: 0;
			}
		}
	}
</style>
