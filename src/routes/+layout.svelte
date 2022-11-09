<nav class="nav-container d-flex justify-content-end align-items-center">
	<a href="/" class="nav-link-element">Home</a>
	<a href="/about" class="nav-link-element">About</a>
</nav>

<slot />

<style>
	.nav-container {
		width: 100%;
		height: 75px;
		padding: 10px;
		box-shadow: 1px 2px 2px 2px #252525;
		background-color: aliceblue;
	}
	.nav-link-element {
		margin-left: 10px;
		margin-right: 10px;
		text-decoration: none;
		color: #252525;
		font-size: 25px;
	}
</style>
