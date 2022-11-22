import { render, screen } from '@testing-library/svelte';
import HomePage from '../../routes/+page.svelte';

describe('Test home page', () => {
	test('render home page', () => {
		render(HomePage);
		const heading = screen.getByRole('heading', { name: 'Home - start information' });
		expect(heading).toBeInTheDocument();
	});
});
