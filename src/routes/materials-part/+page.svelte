<script lang="ts">
	import { basicsPartProgressStore } from '../../stores/LocalStorageStores';
	import { MATERIALS_PART_SHADING_DATA } from '../../data/blender/materials-part-data';
	import MaterialsPartShadingSingleComponent from '../../components/materials-part/materials-part-shading-single-component.svelte';
</script>

<div class="page-container mx-auto">
	<!-- <h1>Materials Part {$basicsPartProgressStore.First}</h1>

	<h2>Normal materials</h2>
	<div>
		One way to work with materials is to navigate to the materials properties of an object
		(material-properties)
	</div> -->
	<h2>Shading</h2>
	<div>
		{#each MATERIALS_PART_SHADING_DATA as SINGLE_ENTRY (SINGLE_ENTRY.id)}
			<MaterialsPartShadingSingleComponent
				title={SINGLE_ENTRY.title}
				png={SINGLE_ENTRY.png}
				webp={SINGLE_ENTRY.webp}
				description={SINGLE_ENTRY.description}
				marginTop={SINGLE_ENTRY.id !== 1 ? '100px' : '0px'}
			/>{/each}
	</div>
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
