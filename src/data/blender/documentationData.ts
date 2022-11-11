import type { documentationDataInterface } from '../../helper/interfaces';

const documentationData: documentationDataInterface[] = [
	{ name: 'Rotate', description: 'Click on the Mesh object', keystroke: 'R' },
	{ name: 'Grab', description: 'Click on the Mesh object', keystroke: 'G' },
	{ name: 'Scale', description: 'Click on the Mesh object', keystroke: 'S' },
	{ name: 'Global Location Reset', description: 'Click on the Mesh object', keystroke: 'Alt + G' },
	{ name: 'Rotate Reset', description: 'Click on the Mesh object', keystroke: 'Alt + R' },
	{ name: 'Scale Reset', description: 'Click on the Mesh object', keystroke: 'Alt + S' },
	{ name: 'Add new Objects', description: 'Click somewhere', keystroke: 'Shift + A' },
	{
		name: 'Multi Select',
		description: 'Click on multiple objects to select them simultaneously',
		keystroke: 'Shift'
	},
	{
		name: 'Create a group with objects',
		description:
			'Click on multiple objects to group them together. It is important which object gets selected last since this decides where the main axis is for rotating the group, for example',
		keystroke: 'Strg + J'
	}
];

export const sortedDocumentationData = documentationData.sort(
	(a: documentationDataInterface, b: documentationDataInterface) => {
		const upperCaseA = a.name.toUpperCase();
		const upperCaseB = b.name.toUpperCase();
		return upperCaseA.charCodeAt(0) - upperCaseB.charCodeAt(0);
	}
);
