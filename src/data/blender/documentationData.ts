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
	},
	{
		name: 'Add Object to collection',
		description: 'Click on the object and select the respective collection',
		keystroke: 'm'
	},
	{ name: 'Pan View', description: 'Freely move the camera around', keystroke: 'Shift + MMB' },
	{ name: 'Move view to an object', description: 'Click on an object', keystroke: '.' }
];

// alphabetical sort function
export const sortedDocumentationData = documentationData.sort(
	(a: documentationDataInterface, b: documentationDataInterface): any => {
		const upperCaseA = a.name.toUpperCase().split('');
		const upperCaseB = b.name.toUpperCase().split('');

		for (let i = 0; i < Math.max(upperCaseA.length, upperCaseB.length); i++) {
			if (upperCaseA[i] == upperCaseB[i]) {
				continue;
			} else {
				return upperCaseA.join('').charCodeAt(i) - upperCaseB.join('').charCodeAt(i);
			}
		}
	}
);
