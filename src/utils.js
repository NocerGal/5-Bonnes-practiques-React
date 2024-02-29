import pokemons from './mock.pokemon.json';

export const pokemonList = () => {
  const sachaPokemons = [];

  const qtyPokemons = pokemons.pokemons.length;

  for (let i = 0; i < qtyPokemons; i++) {
    const pokemon = pokemons.pokemons[i];

    sachaPokemons.push({
      ...pokemon,
      catched: Math.random() > 0.4,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
    });
  }

  return { sachaPokemons };
};

export const pokemonListFiltered = (filter, pokemons) => {
  return pokemons.filter((pokemon) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'catched') {
      return pokemon.catched;
    } else if (filter === 'uncatched') {
      return !pokemon.catched;
    }
  });
};
