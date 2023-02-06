<script lang="ts">
	import SingleTileAdditionalInformation from './SingleTileAdditionalInformation.svelte';
</script>

<section class="container-section row mt-5 mb-5">
	<h1 class="col-lg-12 text-center mb-5">Additional Information</h1>
	<SingleTileAdditionalInformation
		href="https://styly.cc/tips/maku-blender-normalmap-bake/"
		h3="How to create a Normal Map in Blender"
		text="This video shows how to create a Normal Map within Blender without any external software."
	/>

	<SingleTileAdditionalInformation
		href="https://www.youtube.com/watch?v=zoe4VI9CTuk"
		h3="How to create a Bump & Normal Map"
		text="This video shows how to create Bump Maps as well as Normal Maps with Gimp based on an image
		texture."
	/>

	<SingleTileAdditionalInformation
		href="https://www.youtube.com/watch?v=AioskAgcU2U"
		h3="How to texture Bake Procedural Materials"
		text="This video shows how to texture Bake Procedural Materials, which becomes especially important as soon as one wants to export an object with corresponding materials to a different software such as Three.js."
	/>

	<SingleTileAdditionalInformation
		href="https://3dtextures.me/"
		h3="Free 3D Textures"
		text="This website provides access to freely usable 3D textures for Blender."
	/>

	<SingleTileAdditionalInformation
		href="https://www.youtube.com/watch?v=Wg244y2f9Fw"
		h3="Basics of Material Shading (Part 1)"
		text="This video covers a lot of information about all kinds of nodes within the Shading Editor. It also contains helpful shortcuts as well as a Part 2 that covers PBR textures. If one is getting started with the Shading editor, this is the video to watch."
	/>
</section>

<style lang="scss">
	h1 {
		background-color: transparent;
		font-size: 50px;
	}

	.container {
		&-section {
			width: 100%;
			display: flex;
		}
	}
</style>
