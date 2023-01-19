import { render, screen } from '@testing-library/svelte';
import HomePage from '../../routes/+page.svelte';
import Layout from '../../routes/+layout.svelte';

describe('+layout.svelte Testing', () => {
	test('+layout.svelte with main navbar renders', () => {
		render(Layout);
		// const layoutBarEntry = screen.getByText('Blender Hotkey Documentation');
		// expect(layoutBarEntry).toBeInTheDocument();
	});
});
