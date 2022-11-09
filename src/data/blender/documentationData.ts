import type { documentationDataInterface } from '../../helper/interfaces';

const documentationData: documentationDataInterface[] = [
	{ name: 'Rotate', description: 'Click on the Mesh object', keystroke: 'R' },
	{ name: 'Grab', description: 'Click on the Mesh object', keystroke: 'G' },
	{ name: 'Scale', description: 'Click on the Mesh object', keystroke: 'S' },
	{ name: 'Global Location Reset', description: 'Click on the Mesh object', keystroke: 'Alt + G' }
];

export const sortedDocumentationData = documentationData.sort(
	(a: documentationDataInterface, b: documentationDataInterface) => {
		const upperCaseA = a.name.toUpperCase();
		const upperCaseB = b.name.toUpperCase();
		return upperCaseA.charCodeAt(0) - upperCaseB.charCodeAt(0);
	}
);
