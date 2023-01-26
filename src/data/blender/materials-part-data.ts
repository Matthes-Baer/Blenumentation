import type { MaterialsPartDataInterface } from './../../utils/interfaces';

export const MATERIALS_PART_MATERIALSPROPERTIES_DATA: MaterialsPartDataInterface[] = [];

export const MATERIALS_PART_SHADING_DATA: MaterialsPartDataInterface[] = [
	{
		id: 1,
		title: 'Shading Workspace Selection',
		png: '/images/materials/png/shading-view-selection.png',
		webp: '/images/materials/webp/shading-view-selection.webp',
		description:
			'The shading workspace can be found in the workspace selection at the top of the screen.'
	},
	{
		id: 2,
		title: 'Shading Workspace',
		png: '/images/materials/png/shading-workspace.png',
		webp: '/images/materials/webp/shading-workspace.webp',
		description:
			'The shading workspace is designed for creating and building materials. The Shading mode consists of a file browser, an image preview, the 3D workspace, a node editor, and the normal selection space.'
	},
	{
		id: 3,
		title: 'Background HDR Image',
		png: '/images/materials/png/background-hdr-image.png',
		webp: '/images/materials/webp/background-hdr-image.webp',
		description:
			'The background, which is called a HDR image, is supposed to give the background lighting and give the object something to reflect if they have smooth values.'
	},
	{
		id: 4,
		title: 'Background HDR Image',
		png: '/images/materials/png/background-image-change.png',
		webp: '/images/materials/webp/background-image-change.webp',
		description:
			'The background HDR image can also be changed to represent different lighting scenarios.'
	},
	{
		id: 5,
		title: 'Node Editor',
		png: '/images/materials/png/shading-nodes.png',
		webp: '/images/materials/webp/shading-nodes.webp',
		description:
			"The exciting part is about the node editor, which gives access to applying a bunch of different nodes to the object's material to alter it. The starting Principled BSDF node (which is a shader node) has the same properties as the normal materials properties. Shift + A is the shortcut for adding new nodes."
	},
	{
		id: 6,
		title: 'Material Output Node',
		png: '/images/materials/png/shading-material-output.png',
		webp: '/images/materials/webp/shading-material-output.webp',
		description: 'The material output node is normally necessary for applying the material.'
	},
	{
		id: 7,
		title: 'Diffuse BSDF / Principled BSDF',
		png: '/images/materials/png/shading-principled-and-diffuse.png',
		webp: '/images/materials/webp/shading-principled-and-diffuse.webp',
		description: 'The Diffuse BSDF is a legacy node that got replaced by the Principled BSDF node.'
	},
	{
		id: 8,
		title: 'Help With Connecting Nodes',
		png: '/images/materials/png/help-with-connecting.png',
		webp: '/images/materials/webp/help-with-connecting.webp',
		description:
			'By selecting the in- and outputs of a node, Blender will give examples of where to connect the corresponding in- and outputs to.'
	}
];
