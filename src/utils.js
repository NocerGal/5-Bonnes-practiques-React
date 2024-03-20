import pokemons from './mock.pokemon.json';

export const pokemonList = () => {
  const sachaPokemons = [];

  const qtyPokemons = pokemons.pokemons.length;

  for (let i = 0; i < qtyPokemons; i++) {
    const pokemon = pokemons.pokemons[i];

    const catched = Math.random() > 0.4;

    if (catched) {
      sachaPokemons.push({
        ...pokemon,
        catched: {
          isCatched: true,
          pokemonUniqueId: Math.random(),
        },
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
      });
    } else {
      sachaPokemons.push({
        ...pokemon,
        catched: {
          isCatched: false,
        },
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
      });
    }
  }

  return { sachaPokemons };
};

export const pokemonListFiltered = (filter, pokemons) => {
  return pokemons.filter((pokemon) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'catched') {
      return pokemon.catched.isCatched;
    } else if (filter === 'uncatched') {
      return !pokemon.catched.isCatched;
    }
  });
};

export const pokemonListDelayed = () => {
  return new Promise((resolve) => {
    const sachaPokemons = [];
    const qtyPokemons = pokemons.pokemons.length;

    for (let i = 0; i < qtyPokemons; i++) {
      const pokemon = pokemons.pokemons[i];
      const catched = Math.random() > 0.4;

      if (catched) {
        sachaPokemons.push({
          ...pokemon,
          catched: {
            isCatched: true,
            pokemonUniqueId: Math.random(),
          },
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        });
      } else {
        sachaPokemons.push({
          ...pokemon,
          catched: {
            isCatched: false,
          },
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        });
      }
    }

    // Simulate a delay, e.g., 2 seconds
    setTimeout(() => resolve({ sachaPokemons }), 2000);
  });
};

export const pokemonListFilteredDelayed = (filter, pokemons) => {
  const filteredPokemons = pokemons.filter((pokemon) => {
    // let startTime = performance.now();
    // while (performance.now() - startTime < 50) {
    //   // Do nothing for 50 ms per item to emulate extremely slow code
    // }

    if (filter === 'all') {
      return true;
    } else if (filter === 'catched') {
      return pokemon.catched.isCatched;
    } else if (filter === 'uncatched') {
      return !pokemon.catched.isCatched;
    }
  });

  return filteredPokemons;
};
