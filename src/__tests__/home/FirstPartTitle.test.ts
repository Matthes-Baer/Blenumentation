import { render, screen } from '@testing-library/svelte';
import FirstPart__SvelteComponent_ from '../../components/home/FirstPartTitle.svelte';

describe('FirstPartTile.svelte Testing', () => {
	test('Heading renders', () => {
		render(FirstPart__SvelteComponent_);
		const heading = screen.getByRole('heading', { name: 'Blenumentation' });
		expect(heading).toBeInTheDocument();
	});
});
