import type { documentationDataInterface } from '../../utils/interfaces';

const documentationData: documentationDataInterface[] = [
	{
		name: 'Rotate',
		description: 'Click on the mesh object to rotate it along its x, y, or z axis.',
		keystroke: 'R'
	},
	{ name: 'Grab', description: 'Click on the mesh object to move it around.', keystroke: 'G' },
	{ name: 'Scale', description: 'Click on the mesh object to scale it.', keystroke: 'S' },
	{
		name: 'Global Location Reset',
		description: 'Click on the mesh object to reset its position to the global starting point.',
		keystroke: 'Alt + G'
	},
	{
		name: 'Rotate Reset',
		description: 'Click on the mesh object to reset its rotation.',
		keystroke: 'Alt + R'
	},
	{
		name: 'Scale Reset',
		description: 'Click on the mesh object to reset its scaling.',
		keystroke: 'Alt + S'
	},
	{
		name: 'Add new Objects',
		description: 'Add new objects from the list that are available.',
		keystroke: 'Shift + A'
	},
	{
		name: 'Multi Select',
		description: 'Click on multiple objects to select them simultaneously.',
		keystroke: 'Shift'
	},
	{
		name: 'Create a group with objects',
		description:
			'Click on multiple objects to group them together. It is important which object gets selected last since this determines where the main axis is for rotating the group, for example.',
		keystroke: 'Strg + J'
	},
	{
		name: 'Add Object to collection',
		description: 'Click on the object and select the respective collection to add it to it.',
		keystroke: 'M'
	},
	{ name: 'Pan View', description: 'Freely move the camera around.', keystroke: 'Shift + MMB' },
	{
		name: 'Move view to an object',
		description: 'Click on an object to change the view of the working camera to it.',
		keystroke: '.'
	},
	{
		name: 'Switch between different Shading modes',
		description: 'Switch between "Rendered", "Solid", "Material Preview", and "Wireframe".',
		keystroke: 'Z'
	},
	{
		name: 'Enter Edit Mode',
		description:
			'Change the edges, vertices, and faces of an object. This also helps with not changing the origin point (the pivot point) for different rotations.',
		keystroke: 'Tab'
	},
	{
		name: 'Receive specific location data for an object',
		description: 'This opens the menu for "Item", "Tool", "View", "Edit".',
		keystroke: 'N'
	},
	{
		name: 'Loop Select',
		description: 'Click on an edge, vertex, or face with Edit Mode on (Tab).',
		keystroke: 'Alt'
	},
	{
		name: 'Shortest Path Selection Tool',
		description:
			'Click on an edge, vertex, or face with Edit Mode on (Tab), then click on another one to create the shortes path between them.',
		keystroke: 'Strg'
	},
	{
		name: 'Proportional Editing Mode',
		description:
			'Click on the object to enter the corresponding editing mode. Scrolling the mouse wheel will adjust the radius of the circle for scaling, for example.',
		keystroke: 'O'
	},
	{
		name: 'Select the whole object in Edit Mode',
		description: 'Click on the object and be within the Edit Mode (Tab).',
		keystroke: 'A'
	},
	{
		name: 'Cursor to selected',
		description:
			'Adjust the pivot point (the origin point), when in Edit Mode (Tab), for example, to place the origin on an edge.',
		keystroke: 'Shift + S'
	},
	{
		name: 'Reset Pivot Point',
		description: 'Returns the pivot point to the original position.',
		keystroke: 'Shift + C'
	},
	{
		name: 'Select everything that is linked in Edit Mode',
		description:
			'Click on the face, edge, or vertex while in Edit Mode (Tab), then use the corresponding keystroke to select the whole object.',
		keystroke: 'L'
	},
	{
		name: 'Extrude',
		description:
			'Click on the face, vertex, or edge to extrude another face, vertex, or edge from it.',
		keystroke: 'E'
	},
	{
		name: 'Merge',
		description: 'Select multiple faces, vertices, or edges and merge them together.',
		keystroke: 'M'
	},
	{
		name: 'Delete Mode',
		description: 'Select object (with or without Edit Mode) to delete it.',
		keystroke: 'X'
	},
	{
		name: 'Fill',
		description:
			'By selecting two edges or multiple vertices, this will fill in the "gap" between them. If the face is provided, by clicking on the corresponding edge, it will copy it.',
		keystroke: 'F'
	},
	{
		name: 'Join',
		description:
			'For example, it will try to join two vertices together and divide respective faces along the way.',
		keystroke: 'J'
	},
	{
		name: 'Loop Cut',
		description:
			'Can be used while being in Edit Mode. With scrolling the number of loops is increased/decreased.',
		keystroke: 'Strg + R'
	},
	{
		name: 'Subdivide',
		description:
			'While being in Edit Mode: Choose Subdivide from the appearing list. Works on edges, multiple vertices, and faces.',
		keystroke: 'Right Mouse Button'
	},
	{
		name: 'Bevel',
		description: 'While being in Edit Mode: Works on edges, multiple vertices, and faces.',
		keystroke: 'Strg + B'
	},
	{
		name: 'Inset',
		description:
			'While being in Edit Mode: Works on faces. Would also be achievable by using E + S in Edit Mode. This can be applied on the whole object with the individual mode of inset being activated.',
		keystroke: 'I'
	},
	{
		name: 'Toggle Snap on/off',
		description: 'The snap mode makes it easier to stay in the grid.',
		keystroke: 'Shift + Tab'
	},
	{
		name: 'Get in/off local view',
		description: 'Makes all the other objects disappear except the one that is selected.',
		keystroke: 'NumpadSlash'
	},
	{
		name: 'Separate',
		description:
			'While in Edit Mode the Separate function is responsible for unlinking the selected face, for example, from the overall grid that was selected.',
		keystroke: 'P'
	},
	{
		name: 'Repeat previous command',
		description:
			'Repeats the previous command. This can be helpful when trying to perform symmetrical actions on an object on different faces, for example.',
		keystroke: 'Shift + R'
	},
	{
		name: 'Reset Vectors',
		description:
			'This is a helpful technique if the shading of an object goes kind of funky as soon as it is edited to be smooth, for example when beveling or modyfing a lot.',
		keystroke: 'Alt + N -> Reset Vectors'
	},
	{
		name: 'Knife',
		description:
			'Basically similar to loop cuts but with more control to it. Hit "Enter" to confirm the selection.',
		keystroke: 'K'
	},
	{
		name: 'Biset',
		description:
			'Basically similar to loop cuts or Knife but with more control to it. Can be found in the menu that pops up.',
		keystroke: 'Spacebar + Shift'
	},
	{
		name: 'Toggle Toolbar',
		description: 'The toolbar gives access to multiple tools without accessing them via hotkeys.',
		keystroke: 'T'
	},
	{
		name: 'Spin',
		description:
			'Gives access to create duplicates in a circle shape. Can be found in the menu that pops up. Also includes the Spin Duplicates function.',
		keystroke: 'Spacebar + Shift'
	},
	{
		name: 'Smooth',
		description:
			'Flatten angles of selected vertices. Can be found in the menu that pops up. Also includes the Randomize function.',
		keystroke: 'Spacebar + Shift'
	},
	{
		name: 'Poly Build',
		description:
			'Basically gives access to execute the same actions as with Grabbing, for example, but with just the mouse. While pressing Shift one can also delete faces, for example. Can be found in the menu that pops up.',
		keystroke: 'Spacebar + Shift'
	},
	{
		name: 'Shear',
		description:
			'Shear selected items along the horizontal screen axis. Can be found in the menu that pops up. Also includes the To Sphere function.',
		keystroke: 'Spacebar + Shift'
	},
	{
		name: 'Rip Region',
		description:
			'Rip polygons and move the result. Use it in Vertex Select. Can be found in the menu that pops up. Also includes the Rip Edge function.',
		keystroke: 'Spacebar + Shift'
	},
	{
		name: 'Jump To Active Camera',
		description: 'Jump into the view of the chosen active camera.',
		keystroke: 'Strg + Numpad 0'
	},
	{
		name: 'Expand Selected View',
		description:
			'Hover over a specific view, for example, the scene collection, in order to expand it. Undo the action with the same hotkey combination.',
		keystroke: 'Strg + Leertaste'
	}
];

//? alphabetical sort function:
export const sortedDocumentationData = documentationData.sort(
	(a: documentationDataInterface, b: documentationDataInterface): number => {
		const upperCaseA = a.name.toUpperCase().split('');
		const upperCaseB = b.name.toUpperCase().split('');

		for (let i = 0; i < Math.max(upperCaseA.length, upperCaseB.length); i++) {
			if (upperCaseA[i] == upperCaseB[i]) {
				continue;
			}
			return upperCaseA.join('').charCodeAt(i) - upperCaseB.join('').charCodeAt(i) || 0;
		}
		throw new Error();
	}
);
