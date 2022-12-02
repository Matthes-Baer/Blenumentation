<script lang="ts">
</script>

<div class="row main-container mt-5 mb-5 position-relative">
	<div class="col-md-6 " style="height: inherit;">
		<h1>First frontend svelte application with a hotkey documentation for Blender</h1>
		<p>
			In the scope of this first project I focused on fundamental frontend Svelte topics while
			creating some starting help for future Svelte ideas. Furthermore I used the opportunity to
			include a hotkey Blender documentation for future Blender projects.
		</p>
		<div>
			<span>More information on Svelte</span>
			<span>&#8594;</span>
		</div>
	</div>

	<div
		class="col-md-6 position-relative d-flex images-container justify-content-center align-items-center"
	>
		<img
			class="img-class"
			src="https://raw.githubusercontent.com/sveltejs/svelte/29052aba7d0b78316d3a52aef1d7ddd54fe6ca84/site/static/images/svelte-android-chrome-512.png"
			alt="Svelte logo"
		/>
		<img
			class="img-class"
			src="https://javiscomputers.com/wp-content/uploads/2019/04/Blender_logo_no_text.svg_.png"
			alt="Blender logo"
		/>
	</div>
</div>

<style>
	* {
		transition: all 0.25s;
		overflow: hidden;
	}

	.main-container {
		min-height: 500px;
	}
	.img-class {
		position: absolute;
		width: 50%;
		height: auto;
	}

	.img-class:first-of-type {
		top: 25px;
		left: 25px;
	}

	.img-class:last-of-type {
		bottom: 25px;
		right: 25px;
	}

	@media only screen and (max-width: 900px) {
		.img-class {
			position: static;
			width: 50%;
		}
		.images-container {
			margin-top: 50px;
		}
	}
</style>
