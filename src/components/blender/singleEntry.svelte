<script lang="ts">
	export let name: string;
	export let description: string;
	export let keystroke: string;
</script>

<div class="row">
	<h3 class="col-sm-3" id={name}>{name}:</h3>
	<div class="col-sm-7">{description} + {keystroke}</div>
</div>
