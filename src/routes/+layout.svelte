<script lang="ts">
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

	let x: number = 50;

	onMount(() => {
		const scrollEventListener = () => {
			if (window.pageYOffset > 100) {
				x = 100;
			} else {
				x = 50;
			}
		};
		window.addEventListener('scroll', scrollEventListener, false);

		return () => {
			window.removeEventListener('scroll', scrollEventListener, false);
		};
	});
</script>

<nav class="nav-container d-flex justify-content-end align-items-center" style="min-height: {x}px;">
	<div class="nav-title">
		Test
		<picture>
			<source srcset="images/icon-cube.webp" type="image/webp" width="50px" height="50px" />
			<img src="images/icon-cube.png" alt="icon cube in navbar" width="50px" height="50px" />
		</picture>
	</div>
	<a href="/" class="me-3">Home</a>
	<a href="/blender" class="me-3">Blender Hotkey Documentation</a>
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<a
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
	</a>
</nav>

<slot />

<style lang="scss">
	.nav {
		&-container {
			width: 100%;
			/* height: 75px; */
			padding: 10px;
			position: -webkit-fixed;
			position: fixed;
			top: 0;
			transition: all 0.5s;
			z-index: 9000;
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
