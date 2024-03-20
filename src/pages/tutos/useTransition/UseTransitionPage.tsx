import React from 'react';

import { pokemonList } from '../../../utils';
import PokemonListUseTransition from './ExempleUseTransition';

export default function UseTransitionPage() {
  const { sachaPokemons } = pokemonList();

  return <PokemonListUseTransition pokemons={sachaPokemons} />;
}
