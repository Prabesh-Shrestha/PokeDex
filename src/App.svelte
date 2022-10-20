<script>
	let Page = "menu";
	import Menu from "./Menu.svelte";
	import Card from "./Card.svelte";
	let thePokemon= "";
</script>

<main>
	<h1 class="Title">PokeDex</h1>
	<hr />
	{#if Page == "menu"}
		<Menu bind:thePokemon bind:Page/>
	{:else}
		<Card bind:thePokemon bind:Page/>
	{/if}
</main>
<style>
	.Title { 
		font-size: 2em;
		font-weight: bold;
		text-align: center;
		font-family: 'Signika', sans-serif;
		text-decoration-line: underline;
                text-decoration-style: solid;
	}
</style>
