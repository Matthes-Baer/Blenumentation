<script lang="ts">
    export let name: string
    name = 'Matthes'
  
    let buttonText = 'Button'
  
    function handleClick() {
      buttonText = 'Button Clicked'
    }
  </script>

<h1>Welcome to SvelteKit, {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
