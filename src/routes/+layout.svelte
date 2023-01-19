<script lang="ts">
	import { animateScroll } from 'svelte-scrollto-element';
	import { onMount } from 'svelte';

	let x: number = 50;
	let hovered: boolean = false;

	const hoverHandler = (e: any) => {
		let type = e.type;
		if (type === 'mouseenter') {
			x += 50;
			hovered = true;
		} else if (type === 'mouseleave') {
			x -= 50;
			hovered = false;
		}
	};
</script>

<nav
	class="nav-container d-flex flex-wrap justify-content-end align-items-center"
	style="height: {x}px;"
	on:mouseenter={hoverHandler}
	on:mouseleave={hoverHandler}
>
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
</style>
