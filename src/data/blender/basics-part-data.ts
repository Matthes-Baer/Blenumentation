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
	},
	{
		id: 6,
		title: 'Blender in Threejs',
		png: '/images/basics/png/blender-in-threejs.png',
		webp: '/images/basics/webp/blender-in-threejs.webp',
		description:
			'When it comes to using Blender files in Three.js, a setup with React Three Fiber is needed. In addition to that, the extension glTF Tools is pretty handy in order to easily convert glb files to gltf or vice versa. It also arrives with a viewer for gltf files to check the files how they look before actually implementing them. Besides that, the extension also allows you to modify the corresponding gltf file. For example, since lights can be added and exported within a blender file, these lights could be adjusted in terms of their intensity, for example, with the help of this extension. The picture shows the main procedure for implementing a blender file. There is also the useGLTF hook from @react-three/drei, which could achieve a similar result. It is also important to mention that I adjusted the canvas to an animated canvas via @react-spring/three to make use of the corresponding library. With specific browser settings, the WebGL does not work as needed for making Three.js work on the respective page (probably hardware acceleration in Chrome). A switch to another browser will help.'
	}
];
