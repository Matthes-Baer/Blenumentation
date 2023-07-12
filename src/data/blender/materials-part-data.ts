import type { MaterialsPartAndBasicsPartDataInterface } from './../../utils/interfaces';

//? GGF. Am Ende die ids nochmal anpassen (dürfen nicht identisch sein bei beiden Variablen)

export const MATERIALS_PART_MATERIALSPROPERTIES_DATA: MaterialsPartAndBasicsPartDataInterface[] = [
	{
		id: 13,
		title: 'Material Properties View',
		png: '/images/materials/png/material-properties.png',
		webp: '/images/materials/webp/material-properties.webp',
		description:
			'One way to work with materials is to navigate to the material properties of an object. This can be very useful for getting a quick idea of which base colors and other fundamental properties would work on that specific object. However, the material properties only provide the most basic options. In order to create more distinguished results, the Shading Editor should be opened up.'
	},
	{
		id: 14,
		title: 'Principled BSDF',
		png: '/images/materials/png/principled-bsdf.png',
		webp: '/images/materials/webp/principled-bsdf.webp',
		description:
			'The Material Properties view basically consists of the Principled BSDF node, which can also be used in the shading editor. However, there are not any additional nodes attached to it here.'
	}
];

export const MATERIALS_PART_SHADING_DATA: MaterialsPartAndBasicsPartDataInterface[] = [
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
		title: 'Background HDR Image Change',
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
		title: 'Diffuse BSDF And Principled BSDF',
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
	},
	{
		id: 9,
		title: 'Node Types',
		png: '/images/materials/png/node-types.png',
		webp: '/images/materials/webp/node-types.webp',
		description:
			'There are different type of nodes to work with such as color, vector or shader nodes.'
	},
	{
		id: 10,
		title: 'Texture Inputs',
		png: '/images/materials/png/texture-inputs.png',
		webp: '/images/materials/webp/texture-inputs.webp',
		description:
			'Normal pictures can be used as texture inputs for different nodes to work with. This is as easy as dragging a image into the Shading Editor in order to convert this image to an image node within the Shader Editor. '
	},
	{
		id: 11,
		title: 'Roughness Map Input',
		png: '/images/materials/png/roughness-map-input.png',
		webp: '/images/materials/webp/roughness-map-input.webp',
		description:
			'A roughness map image can be connected to the roughness of an object to give specific instructions. It is important that the image is in black an white. The more white, the rougher the texture will be a the specific point, the more black, it will be less rough.'
	},
	{
		id: 12,
		title: 'Normal Map Input',
		png: '/images/materials/png/normal-map-input.png',
		webp: '/images/materials/webp/normal-map-input.webp',
		description:
			'There are also so-called Normal Maps that are responsible for representing the lighting on a texture. Normal maps have blue/purple colors and can be created via Baking directly in Blender (check out the additional information below). \n\nFor automatic generating a normal map based on a given texture, other software can be used, such as Gimp, for example. In order to append Normal Maps one has to use the Image Texture and Normal Map nodes.'
	}
];

export const materialsPartAllData: () => MaterialsPartAndBasicsPartDataInterface[] = () => {
	const combiningArray: MaterialsPartAndBasicsPartDataInterface[] = [];

	for (const k of MATERIALS_PART_MATERIALSPROPERTIES_DATA) {
		combiningArray.push(k);
	}

	for (const k of MATERIALS_PART_SHADING_DATA) {
		combiningArray.push(k);
	}

	return combiningArray;
};
