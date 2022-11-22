<nav class="nav-container d-flex justify-content-end align-items-center">
	<a href="/" class="nav-link-element">Home</a>
	<a href="/blender" class="nav-link-element">Blender Hotkey Documentation</a>
</nav>

<slot />

<style>
	.nav-container {
		width: 100%;
		height: 75px;
		padding: 10px;
		background-color: #d6ccc2;
		border-bottom: 1px solid #252525;
	}
	.nav-link-element {
		margin-left: 10px;
		margin-right: 10px;
		text-decoration: none;
		color: #252525;
		font-size: 25px;
		transition: all 0.1s;
	}

	.nav-link-element:hover {
		transform: translateY(5px);
	}
</style>
