import { render, screen } from '@testing-library/svelte';
import HomePage from '../../routes/+page.svelte';
import Layout from '../../routes/+layout.svelte';

describe('Test home page', () => {
	test('render home page', () => {
		render(HomePage);
		const heading = screen.getByRole('heading', { name: 'Home - start information' });
		expect(heading).toBeInTheDocument();
	});
});

describe('Test main layout component', () => {
	test('render layout bar', () => {
		render(Layout);
		const layoutBarEntry = screen.getByText('Blender Hotkey Documentation');
		expect(layoutBarEntry).toBeInTheDocument();
	});
});
