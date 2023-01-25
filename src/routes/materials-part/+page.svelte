<script lang="ts">
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';
</script>

<div>
	<h1>Materials Part {$basicsPartProgressStore.First}</h1>

	<h2>Normal materials</h2>
	<div>
		One way to work with materials is to navigate to the materials properties of an object
		(material-properties)
	</div>
	<h2>Shading</h2>
	<div>
		<div>
			The shading workspace can be found in the workspace selection (shading-view-selection)
		</div>
		<div>
			The shading workspace is the workspace that we have that is designed for creating and building
			materials. The Shading mode consist of a file browser, an image preview, the 3D workspace, a
			node editor and the normal selection space. (shading-workspace)
		</div>
		<div>
			The background is called a HDR image is supposed to give the background lighting and give the
			object something to reflect if they have smooth values. (background-hdr-image) The background
			image can be changed. (background-image-change)
		</div>
		<div>
			The exciting part is about the node editor which gives access to applying a bunch of different
			nodes to the object's material to alter it. The Principled BSDF node (which is a shader node)
			has the same properties as the normal materials properties. (shading-nodes)
		</div>
		<div>
			The material output node is normally necessary for applying the material.
			(shading-material-output)
		</div>
		<div>Adding new nodes can be done by pressing Shift + A</div>
		<div>
			The Diffuse BSDF is a legacy node and got replaced by the Principled BSDF node.
			(shading-principled-and-diffuse)
		</div>
		<div>
			By selecting the in- or outputs of a node, Blender will give examples where to connect the
			corresponding in- or outputs to.
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	:global(*) {
		background-color: var(--main-color);
		color: var(--font-color);
		font-family: 'Courier New', Courier, monospace;
		box-sizing: border-box;
		z-index: 9000;
	}
	:global(body) {
		overflow-x: hidden;
	}
</style>
