import { sortedDocumentationData } from '../../data/blender/documentationData';
import { render, screen } from '@testing-library/svelte';
import SingleEntry__SvelteComponent_ from '../../components/blender/singleEntry.svelte';

describe('Testing singleEntry component', () => {
	const firstDataEntry = sortedDocumentationData.at(0);
	const lastDataEntry = sortedDocumentationData.at(-1);

	test('renders first data entry', async () => {
		render(SingleEntry__SvelteComponent_, {
			name: firstDataEntry?.name || 'TS-fallback',
			description: firstDataEntry?.description || 'TS-fallback',
			keystroke: firstDataEntry?.keystroke || 'TS-fallback'
		});
		const name = await screen.findByText(firstDataEntry?.name + ':' || 'TS-fallback');
		const description = await screen.findByText(firstDataEntry?.description || 'TS-fallback');
		const keystroke = await screen.findByText(firstDataEntry?.keystroke || 'TS-fallback');

		expect(name).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(keystroke).toBeInTheDocument();
	});
});
