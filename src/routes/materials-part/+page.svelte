<script lang="ts">
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';
	import { materialsPartProgressStore } from '../../stores/LocalStorageStores';
	import { MATERIALS_PART_SHADING_DATA } from '../../data/blender/materials-part-data';
	import MaterialsPartShadingSingleComponent from '../../components/materials-part/materials-part-shading-single-component.svelte';
	import AdditionalInformation from '../../components/materials-part/AdditionalInformation.svelte';
	import Footer from '../../components/footer.svelte';
</script>

<div class="page-container mx-auto">
	<button
		on:click={() => {
			$materialsPartProgressStore = {
				ShadingWorkspaceSelection: false,
				ShadingWorkspace: false,
				BackgroundHDRImage: false,
				BackgroundHDRImageChange: false,
				NodeEditor: false,
				MaterialOutputNode: false,
				DiffuseBSDFAndPrincipledBSDF: false,
				HelpWithConnectingNodes: false,
				NodeTypes: false,
				TextureInputs: false,
				RoughnessMapInput: false,
				NormalMapInput: false
			};
		}}>CLEAR</button
	>

	<div>
		Besides the basic navigation and information on how to create objects which mainly can be used
		for architecture and similar topics, applying appropriate materials is especially important for
		me in Blender.
		<br />
		Therefore this section is specifically dedicated to information on working with materials. While
		there are possibilites to apply general material features to objects, the shading editor can be used
		for advanced material adding processes.
		<br />
		Based on this section one should be able to work with some fundamental shading and general material
		features.
	</div>

	<!-- <h1>Materials Part {$basicsPartProgressStore.First}</h1>

	<h2>Normal materials</h2>
	<div>
		One way to work with materials is to navigate to the materials properties of an object
		(material-properties)
	</div> -->
	<h1>Shading</h1>
	<div>
		{#each MATERIALS_PART_SHADING_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
			<MaterialsPartShadingSingleComponent
				title={SINGLE_ENTRY.title}
				webp={SINGLE_ENTRY.webp}
				description={SINGLE_ENTRY.description}
				marginTop={SINGLE_ENTRY.id !== 1 ? '100px' : '0px'}
			/>{/each}
	</div>

	<AdditionalInformation />
	<Footer />
</div>

<style lang="scss">
	@import '../../styles/colors.scss';

	.page-container {
		margin-top: 100px;
		width: 95%;
	}

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
