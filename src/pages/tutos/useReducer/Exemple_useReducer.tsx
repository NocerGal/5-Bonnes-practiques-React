import React, { useReducer } from 'react';
import { pokemonList, pokemonListFiltered } from '../../../utils';

export default function Exemple_Use_Reducer({ pokemons }) {
  const { sachaPokemons } = pokemonList();
  const [state, dispatch] = useReducer(reducer, {
    pokemons: sachaPokemons,
    filter: 'all',
  });

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_POKEMON': {
        return { ...state, pokemons: [...state.pokemons, action.payload] };
      }
      case 'REMOVE_POKEMON':
        return {
          ...state,
          pokemons: state.pokemons.filter(
            (pokemon) => pokemon.catched.pokemonUniqueId !== action.payload
          ),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  }

  const handlerAddPokemon = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const addPokemonId = form.get('pokemonId');
    const newPokemonsDatas = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${addPokemonId}`
    );
    const response = await newPokemonsDatas.json();
    const newPokemon = {
      catched: {
        isCatched: Math.random() > 0.4,
        pokemonUniqueId: Math.random(),
      },
      id: addPokemonId,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${addPokemonId}.png`,
      nom: response.name,
    };
    dispatch({ type: 'ADD_POKEMON', payload: newPokemon });
  };

  const handlerRemovePokemon = (id) => {
    dispatch({ type: 'REMOVE_POKEMON', payload: id });
  };

  const handlerFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const fileredPokemon = pokemonListFiltered(state.filter, sachaPokemons);

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-28 ">
      <h2>useReducer</h2>
      <div className="flex flex-col gap-2">
        <h3 className="mx-auto">Exemple useReducer</h3>
        <div className="flex gap-4 mx-auto px-2">
          <button
            onClick={(e) => handlerFilter(e.currentTarget.value)}
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              state.filter === 'all' ? 'bg-fuchsia-400' : null
            }`}
            value="all"
          >
            Tous
          </button>
          <button
            onClick={(e) => handlerFilter(e.currentTarget.value)}
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              state.filter === 'catched' ? 'bg-fuchsia-400' : null
            }`}
            value="catched"
          >
            Attrapé(s)
          </button>
          <button
            onClick={(e) => handlerFilter(e.currentTarget.value)}
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              state.filter === 'uncatched' ? 'bg-fuchsia-400' : null
            }`}
            value="uncatched"
          >
            Non attrapé(s)
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <form
            onSubmit={(e) => handlerAddPokemon(e)}
            className="flex flex-col gap-2"
          >
            <label
              id="pokemonId"
              htmlFor="pokemonId"
              className="text-fuchsia-900 text-lg mx-auto mb-2 flex flex-col gap-2 text-center"
            >
              Add pokemon
              <input
                id="pokemonIdInput"
                name="pokemonId"
                type="number"
                max={1000}
              />
            </label>
            <button
              type="submit"
              className="px-3 py-2 w-36 mx-auto bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all"
            >
              Add
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-4 px-4 mx-auto">
            {fileredPokemon.map((pokemon, index) => (
              <div key={index} className="flex items-center flex-col">
                <img
                  src={pokemon.image}
                  alt={pokemon.nom}
                  className="h-20 w-20"
                />
                <span>{pokemon.nom}</span>
                {pokemon.catched.isCatched && (
                  <button
                    onClick={() =>
                      handlerRemovePokemon(pokemon.catched.pokemonUniqueId)
                    }
                    className="px-3 py-1 mx-auto bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all"
                  >
                    Release
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
