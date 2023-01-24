import type { ThirdPartSingleTileDataInterface } from 'src/utils/interfaces';

export const DATA: Array<ThirdPartSingleTileDataInterface> = [
	{
		id: 1,
		title: 'Basics',
		png: `/images/blender-basics.PNG`,
		webp: `/images/blender-basics.webp`,
		description:
			'The Basics of Blender cover some crucial information about how to navigate and manage some first actions within this 3D software.',
		link: '/basics-part'
	},
	{
		id: 2,
		title: 'Materials',
		png: '/images/blender-material.PNG',
		webp: '/images/blender-material.webp',
		description:
			'With knowledge about the basics of Blender one is able to move forwared to applying materials. Due to the familiarity to Three.js I am also mentioning the Baking process, for example.',
		link: '/materials-part'
	},
	{
		id: 3,
		title: 'Hotkeys',
		png: '/images/blender-hotkeys.PNG',
		webp: '/images/blender-hotkeys.webp',
		description:
			'While general knowledge about basics and materials is gold, it is key to be aware of some important hotkeys within Blender in order to achive a proper working effiency.',
		link: '/hotkeys-part'
	}
];
