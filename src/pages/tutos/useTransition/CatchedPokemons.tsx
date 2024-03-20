import React from 'react';
import { pokemonListFiltered } from '../../../utils';

export default function CatchedPokemons({ pokemons, filter }) {
  const pokemonsFiltered = pokemonListFiltered(filter, pokemons);

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 mx-auto">
      {pokemonsFiltered.map((pokemon, index) => (
        <div key={index} className="flex items-center flex-col">
          <img src={pokemon.image} alt={pokemon.nom} className="h-20 w-20" />
          <span>{pokemon.nom}</span>
        </div>
      ))}
    </div>
  );
}
