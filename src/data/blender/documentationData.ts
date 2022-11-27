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
		keystroke: 'M'
	},
	{ name: 'Pan View', description: 'Freely move the camera around', keystroke: 'Shift + MMB' },
	{ name: 'Move view to an object', description: 'Click on an object', keystroke: '.' },
	{
		name: 'Switch between different Shading modes',
		description: 'Switch between "Rendered", "Solid", "Material Preview", and "Wireframe"',
		keystroke: 'Z'
	},
	{
		name: 'Enter Edit Mode',
		description:
			'Change edges, vertices and faces of an object. This also helps with not changing the origin point (Pivot point) (for different rotations).',
		keystroke: 'Tab'
	},
	{
		name: 'Receive specific location data for an object',
		description:
			'Click on an object and press the corresponding key on the keyboard. It Opens the menu for "Item", "Tool", "View", "Edit"',
		keystroke: 'N'
	},
	{
		name: 'Loop Select',
		description: 'Click on an Edge, Vertex or face with Edit Mode on (Tab)',
		keystroke: 'Alt'
	},
	{
		name: 'Shortest Path Selection Tool',
		description:
			'Click on an Edge, Vertex or face with Edit Mode on (Tab), then click on another one',
		keystroke: 'Strg'
	},
	{
		name: 'Proportional Editing Mode',
		description: 'Click on the object',
		keystroke: 'O'
	},
	{
		name: 'Select the whole object in Edit Mode',
		description: 'Click on the object and be within the Edit Mode (Tab)',
		keystroke: 'A'
	},
	{
		name: 'Cursor to selected',
		description:
			'Adjust the origin point (Pivot point). Especially helpful when being in Edit Mode (Tab), for example to put the origin on an edge',
		keystroke: 'Shift + S'
	},
	{
		name: 'Reset Pivot Point',
		description: 'Brings back the Pivot point to the starting position',
		keystroke: 'Shift + C'
	}
];

// alphabetical sort function
export const sortedDocumentationData = documentationData.sort(
	(a: documentationDataInterface, b: documentationDataInterface): any => {
		const upperCaseA = a.name.toUpperCase().split('');
		const upperCaseB = b.name.toUpperCase().split('');

		for (let i = 0; i < Math.max(upperCaseA.length, upperCaseB.length); i++) {
			if (upperCaseA[i] == upperCaseB[i]) {
				continue;
			}
			return upperCaseA.join('').charCodeAt(i) - upperCaseB.join('').charCodeAt(i) || 0;
		}
	}
);
