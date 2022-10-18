/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor, within } from '@testing-library/svelte';
import { debug } from 'svelte/internal';
import Comp from '../components/comp.svelte';
import routeComp from '../routes/+page.svelte';
import type { listItemInterface } from '../utils/interfaces';

const listItems: listItemInterface[] = [
	{ id: 1, name: 'item1' },
	{ id: 2, name: 'item2' },
	{ id: 3, name: 'item3' }
];

describe('comp.svelte', () => {
	test('shows proper heading in component comp when rendered', () => {
		render(Comp, { name: 'World9000', list: listItems });
		const heading = screen.getByText(/World9000/i);
		expect(heading).toBeInTheDocument();
	});

	test('shows correct amount of listItems in Comp', () => {
		render(Comp, { name: '', list: listItems });
		const button: HTMLElement[] = screen.getAllByRole('button', {
			name: 'Click Here For a Change'
		});
		expect(button.length).toBe(3);
	});

	test('first render of listItems', async () => {
		const results = render(Comp, { name: '', list: listItems });
		// const button: HTMLElement[] = results.getAllByRole('button', {
		// 	name: 'Click Here For a Change'
		// });
		expect(results.getByText('name: item1')).toBeInTheDocument();

		// await fireEvent.click(button[0]);
		// console.log(listItems);
	});
});

describe('+page.svelte in /', () => {
	test('shows proper in route +page when rendered', () => {
		render(routeComp, { name: 'Matthes' });
		const heading = screen.getByText(/Matthes/i);
		expect(heading).toBeInTheDocument();
	});
});
