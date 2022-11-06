import { fireEvent, render, screen } from '@testing-library/svelte';
import mainPage from '../routes/+page.svelte';

describe('´main Page', () => {
	test('main page renders', () => {
		render(mainPage);
		expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
	});

	test('event function works', async () => {
		render(mainPage);
		const button = screen.getByRole('button', { name: 'A button' });

		await fireEvent.click(button);
		expect(screen.getByText(/Hello to SvelteKit/i)).toBeInTheDocument();
	});
});
