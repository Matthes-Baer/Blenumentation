import type { MaterialsPartAndBasicsPartDataInterface } from 'src/utils/interfaces';

export const BASICS_PART_DATA: MaterialsPartAndBasicsPartDataInterface[] = [
	{
		id: 1,
		title: 'Scene Collection',
		png: '/images/basics/png/scene-collection.png',
		webp: '/images/basics/webp/scene-collection.webp',
		description:
			'The Scene Collection in the main view provides access to all objects that have been created for this project. By following some sort of naming convention, this can be quite handy for more advanced projects with a lot of objects.'
	},
	{
		id: 2,
		title: 'Top Bar Options',
		png: '/images/basics/png/top-bar-options.png',
		webp: '/images/basics/webp/top-bar-options.webp',
		description:
			'At the top of the screen, there are some additional options regarding modes or orientations that can be used. There is also the option to snap or toggle proportional editing. At the top right corner, one can choose the different shading modes, which can help get an overview of what the objects would look like combined with light sources, for example.'
	},
	{
		id: 3,
		title: 'Hotkey Importance',
		png: '/images/basics/png/hotkey-importance.png',
		webp: '/images/basics/webp/hotkey-importance.webp',
		description:
			'In order to actually have some sort of working efficiency, it is actually mandatory to be familiar with some fundamental hotkeys. This will help a lot when working with objects of any shape or form.'
	},
	{
		id: 4,
		title: 'Properties',
		png: '/images/basics/png/properties.png',
		webp: '/images/basics/webp/properties.webp',
		description:
			'On the right of the screen, by default, one has access to different properties that can be adjusted, including material properties and render properties.'
	},
	{
		id: 5,
		title: 'Export',
		png: '/images/basics/png/export.png',
		webp: '/images/basics/webp/export.webp',
		description:
			'When exporting objects and scenes to Three.js, one has to make use of .glb or .gltf files. It is also important that all materials have been baked in order to import them successfully into Three.js code.'
	}
];
