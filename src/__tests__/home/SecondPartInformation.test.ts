import { fireEvent, render, screen } from '@testing-library/svelte';
import SecondPartInformation__SvelteComponent_ from '../../components/home/SecondPartInformation.svelte';

describe('SecondPartInformation.svelte Testing', () => {
	test('Text renders', async () => {
		render(SecondPartInformation__SvelteComponent_);
		const button = screen.getByTestId('visible-toggle-button');
		await fireEvent.click(button);
		const textContainer = screen.getByTestId('text-input-container');
		expect(textContainer).toHaveTextContent(
			'Blenumentation serves the purpose of being a personal, short documentation for some major functions of the 3D software called Blender. While focusing on basic functions as well as shading, for example, sculpting and other Blender features are not covered since these functions were not of interest to me at the time I created Blenumentation.'
		);
	});
});
