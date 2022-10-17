/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';
import Comp from '../components/comp.svelte';
import routeComp from '../routes/+page.svelte';

test('shows proper heading in component comp when rendered', () => {
	render(Comp, { name: 'World' });
	const heading = screen.getByText('Hello World!');
	expect(heading).toBeInTheDocument();
});

test('shows proper in route +page when rendered', () => {
	render(routeComp, { name: 'Matthes' });
	const heading = screen.getByText('Welcome to SvelteKit, Matthes');
	expect(heading).toBeInTheDocument();
});
