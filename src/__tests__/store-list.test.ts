import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import StoreListComponent from '../components/store-list.svelte';

describe('comp.svelte', () => {
	test('shows proper heading in component comp when rendered', () => {
		render(StoreListComponent);
		const heading = screen.getByRole('heading', { name: /Data accessed via store/i });
		expect(heading).toBeInTheDocument();
	});

	test('first render of initialValue of store', async () => {
		const results = render(StoreListComponent);
		// const button: HTMLElement[] = results.getAllByRole('button', {
		// 	name: 'Click Here For a Change'
		// });
		expect(results.getByText('name: firstTest')).toBeInTheDocument();

		// await fireEvent.click(button[0]);
		// console.log(listItems);
	});
});

// describe('+page.svelte in /', () => {
// 	test('shows proper in route +page when rendered', () => {
// 		render(routeComp, { name: 'Matthes' });
// 		const heading = screen.getByText(/Matthes/i);
// 		expect(heading).toBeInTheDocument();
// 	});
// });
