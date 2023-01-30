<script lang="ts">
	import { materialsPartProgressStore } from '../../stores/LocalStorageStores';
	import { MATERIALS_PART_SHADING_DATA } from '../../data/blender/materials-part-data';
	import { MATERIALS_PART_MATERIALSPROPERTIES_DATA } from '../../data/blender/materials-part-data';
	import MaterialsPartShadingSingleComponent from '../../components/materials-part/materials-part-shading-single-component.svelte';
	import AdditionalInformation from '../../components/materials-part/AdditionalInformation/AdditionalInformation.svelte';
	import Footer from '../../components/footer.svelte';
	import MaterialsPartMaterialPropertiesSingleComponent from '../../components/materials-part/materials-part-material-properties-single-component.svelte';
</script>

<main class="container-page mx-auto">
	<div class="container-start">
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
		<div class="mb-3">
			Besides the basic navigation and information on how to create objects which mainly can be used
			for architecture and similar themes, the topic of applying appropriate materials is especially
			important for me in Blender.
		</div>

		<div>
			Therefore, this section is specifically dedicated to information on working with materials.
			While there are possibilites to apply general material features to objects, the Shading Editor
			can be used for advanced material adding processes.
		</div>
	</div>

	<section class="container-material-properties">
		<h1>Material Properties</h1>
		{#each MATERIALS_PART_MATERIALSPROPERTIES_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
			<MaterialsPartMaterialPropertiesSingleComponent
				title={SINGLE_ENTRY.title}
				webp={SINGLE_ENTRY.webp}
				description={SINGLE_ENTRY.description}
				marginTop={SINGLE_ENTRY.id !== 13 ? '100px' : '0px'}
			/>{/each}
	</section>

	<section class="container-material-properties">
		<h1>Shading</h1>
		{#each MATERIALS_PART_SHADING_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
			<MaterialsPartShadingSingleComponent
				title={SINGLE_ENTRY.title}
				webp={SINGLE_ENTRY.webp}
				description={SINGLE_ENTRY.description}
				marginTop={SINGLE_ENTRY.id !== 1 ? '100px' : '0px'}
			/>{/each}
	</section>

	<AdditionalInformation />
	<Footer />
</main>

<style lang="scss">
	@import '../../styles/colors.scss';

	h1 {
		font-size: 50px;
		text-align: center;
	}

	.container {
		&-page {
			width: 95%;
			margin-top: 100px;
		}

		&-start {
			font-size: 35px;
			text-align: justify;
			margin-bottom: 100px;
		}

		&-material-properties {
			margin-bottom: 100px;
		}
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
