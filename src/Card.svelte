<script>
	import { GetData } from "./getData";
	export let thePokemon;
	export let Page;
</script>

<main>
	<button
		on:click={() => {
			Page = "menu";
		}}>Back</button
	>

	<div>
		{#await GetData(thePokemon) then data}
			<div class="Card">
				<img src={data.sprites.front_default} alt={data.name} />
				<h1>{data.name}</h1>
				<h4>height: {data.height}</h4>
				<h4>weight: {data.weight}</h4>
			</div>
			<div>
				<h4>Moves:</h4>
				<ol>
					{#each data.moves as move}
						<li>{move.move.name}</li>
					{/each}
				</ol>
				<h4>Ability:</h4>
				<ol>
					{#each data.abilities as ability}
						<li>{ability.ability.name}</li>
					{/each}
				</ol>
			</div>
		{:catch error}
			{error}
		{/await}
	</div>
</main>

<style>
	.Card {
		align-items: center;
		text-align: center;
		align-content: center;
	}
	ol {
		-moz-column-count: 4;
		-moz-column-gap: 10px;
		-webkit-column-count: 4;
		-webkit-column-gap: 10px;
		column-count: 4;
		column-gap: 10px;
	}
</style>
