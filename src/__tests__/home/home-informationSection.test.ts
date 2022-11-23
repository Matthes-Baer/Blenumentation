import { render, screen } from '@testing-library/svelte';
import InformationSection__SvelteComponent_ from '../../components/home/informationSection.svelte';

describe('information section component test', () => {
	test('render information section component', () => {
		render(InformationSection__SvelteComponent_);
		const informationText = screen.getByText(
			/This project is my first Svelte application and is mainly used for learning purposes/
		);
		expect(informationText).toBeInTheDocument();
	});
});
