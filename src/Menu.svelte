<script>
	import { GetData } from "./getData";
	let url = "https://pokeapi.co/api/v2/pokemon?limit=600";
	export let thePokemon;
	export let Page;
	const HandlePokemon = (url) => {
		thePokemon = url;
		Page = "Card";
	};
	let entry = "";
</script>

<main>
	<div class="search-container">
		Search:
		<input type="text" bind:value={entry} />
	</div>
	<div class="result">
		{#if entry != ""}
			Search result for {entry}
		{/if}
	</div>

	{#await GetData(url) then data}
		<div class="grid-container">
			{#each data.results as pokemon, i}
				<button on:click={() => HandlePokemon(pokemon.url)}>
					<div class="grid-item">
						{pokemon.name}
						<br />
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
								i + 1
							}.png`}
							alt=""
						/>
					</div>
				</button>
			{/each}
		</div>
	{:catch error}
		{error}
	{/await}
</main>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: auto auto auto;
	}
	.grid-item {
		background-color: rgba(214, 214, 214, 0.8);
		padding: 20px;
		font-size: 30px;
		text-align: center;
	}
	.search-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		font-size: 40px;
	}
	.result {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	input {
		width: 100%;
		background-color: #bdbdbd;
		height: 100%;
		border: 1px solid black;
		font-size: 30px;
		text-align: center;
	}
</style>
