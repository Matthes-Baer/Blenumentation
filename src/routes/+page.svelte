<script lang="ts">
	// Svelte provides out-of-the-box transitions like { fly } from 'svelte/transition'
	// Use $: for rerender/update purposes of states
	import TestComponent from '../components/comp.svelte';
	import StoreListComponent from '../components/store-list.svelte';
	import Button from '../components/button.svelte';
	import Form from '../components/form.svelte';
	import type { listItemInterface } from '../utils/interfaces';
	export let bindInputText: string;
	import { fly } from 'svelte/transition';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const count = writable(100);
	setContext('value', count);

	export let name: string;
	name = 'Matthes';

	export let visible: boolean = true;

	export let listItems: listItemInterface[] = [
		{ id: 1, name: 'item1' },
		{ id: 2, name: 'item2' },
		{ id: 3, name: 'item3' }
	];

	const nameChanger = (event: CustomEvent<any>) => {
		const { id, name } = event.detail;
		let currentItemIndex = listItems.findIndex((e: listItemInterface) => e.id === id);
		let currentItem = listItems[currentItemIndex];

		listItems = listItems.map((e: listItemInterface) => {
			if (e.id - 1 === currentItemIndex) {
				return { ...currentItem, name: bindInputText };
			} else {
				return { ...e };
			}
		});
	};

	$: pageVariable = 'Welcome';
	$: testString = 'start';
	// function which gets passed to a component and is accessed in that component via dispatch
	const pageFunction = (event: { detail: { id: string } }) => {
		console.log('a function which got passed to a component', event.detail.id);
		pageVariable = event.detail.id;
		testString = 'afterwards';
	};

	// function used as a action event handler (important: remove eventListener on return (destroy))
	function actionHandler(element: HTMLButtonElement) {
		function onClick() {
			console.log('clicked on by action event handler');
		}

		element.addEventListener('click', onClick);

		return {
			destroy() {
				element.removeEventListener('click', onClick);
			}
		};
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<h1>Home</h1>
	<p>
		This project is my first Svelte application. Besides some beginner information, there is also a
		hotkey documentation for Blender I created while learning Blender.
	</p>

	<section />
	<h3>How to install Svelte with SvelteKit</h3>
	<p>
		<b>npm init svelte@next</b>
		<a
			href="https://blog.stranianelli.com/test-sveltekit-app-with-jest-english/"
			alt="article on how to install Svelte and how to test Svelte applications with Jest"
			>(see here)</a
		>
	</p>
	<h3>How to add SCSS to a Svelte application</h3>
	<p>
		<b>npm i -D sass</b>
		<a
			href="https://blog.hao.dev/how-to-add-scss-or-sass-to-sveltekit"
			alt="article on how to add scss to a svelte application">(see here)</a
		>
	</p>
</main>

<!-- <button on:click={() => (visible = !visible)}>click for visible change</button> -->

<!-- {#if visible}
	<p transition:fly={{ x: 200, duration: 1000 }}>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
{/if} -->

<!-- <p>This is the current bindInputText: {bindInputText}</p>

<h2>Here is the TestComponent:</h2>
<TestComponent
	bind:bindInputText
	name={'TestComponentPropName'}
	list={listItems}
	on:nameChanger={nameChanger}
/>
<StoreListComponent />
<Button on:pageFunction={pageFunction} {testString} />

<button on:click={() => $count++}>+ für store (für setContext) - reactive</button>
<h3>{$count}</h3>
<button on:click={() => $count--}>- für store (für setContext) - reactive</button>
<button use:actionHandler>Action Event Handler on Click</button>
<Form /> -->
