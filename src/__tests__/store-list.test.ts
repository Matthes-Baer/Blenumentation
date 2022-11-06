import { fireEvent, render, screen } from '@testing-library/svelte';
import Button from '../components/button.svelte';

describe('Button Comp', () => {
	test('find button', () => {
		render(Button);
		const button = screen.getByText('A button');

		expect(button).toBeInTheDocument();
	});

	test('find testString', () => {
		render(Button, { props: { testString: '123Hello' } });
		expect(screen.getByText('123Hello')).toBeInTheDocument();
	});

	test('text content does change on button click for testString', async () => {
		render(Button, { props: { testString: 'start' } });
		const button = screen.getByText('A button');
		const textContent = screen.getByTestId('testVariableTestID');

		expect(textContent).toHaveTextContent('start');
		await fireEvent.click(button);
		expect(textContent).toHaveTextContent('new one');
	});
});
