import type { ThirdPartSingleTileDataInterface } from 'src/utils/interfaces';

export const DATA: Array<ThirdPartSingleTileDataInterface> = [
	{
		id: 1,
		title: 'Basics',
		png: `/images/blender-basics.PNG`,
		webp: `/images/blender-basics.webp`,
		description:
			"The Basics of Blender provide essential information on navigating and performing initial actions in this 3D software. This part serves as a foundational guide for users, offering key insights into managing the software's interface and getting started with basic operations.",
		link: '/basics-part'
	},
	{
		id: 2,
		title: 'Materials',
		png: '/images/blender-material.PNG',
		webp: '/images/blender-material.webp',
		description:
			'By acquiring a solid understanding of the fundamentals of Blender, users can progress towards applying materials and exploring advanced features like the Baking process, which is especially beneficial for those familiar with Three.js.',
		link: '/materials-part'
	},
	{
		id: 3,
		title: 'Hotkeys',
		png: '/images/blender-hotkeys.PNG',
		webp: '/images/blender-hotkeys.webp',
		description:
			'In addition to grasping the basics and materials, it is crucial to be familiar with essential hotkeys within Blender to enhance overall workflow efficiency. Mastering these hotkeys significantly contributes to a smooth and productive working experience.',
		link: '/hotkeys-part'
	}
];
