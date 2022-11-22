import { render, screen } from '@testing-library/svelte';
import BlenderPage from '../../routes/blender/+page.svelte';

describe('Test blender page', () => {
	test('Render blender page', () => {
		render(BlenderPage);
		const heading = screen.getByRole('heading', { name: 'This is a blender documentation' });
		expect(heading).toBeInTheDocument();
	});
});
