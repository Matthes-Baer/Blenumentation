import { render, screen } from '@testing-library/svelte';
import SingleTile from '../../components/home/ThirdPart/SingleTile.svelte';

describe('ThirdPart SingleTile.svelte Testing', () => {
	test('Description renders', () => {
		render(SingleTile, {
			props: {
				layer: 1,
				direction: 'start',
				title: 'This is a title',
				webp: '/',
				description: 'This is a description.',
				link: '/'
			}
		});
		const descriptionContainer = screen.getByTestId('description-container');

		expect(descriptionContainer).toHaveTextContent('This is a description.');
	});
});
